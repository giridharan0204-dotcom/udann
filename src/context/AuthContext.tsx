import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { AuthService } from '../services/authService';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, pass: string) => Promise<User>;
  signUp: (name: string, email: string, pass: string) => Promise<User>;
  loginWithGoogle: () => Promise<User>;
  loginAsDemo: () => Promise<User>;
  logout: () => void;
  sendPasswordReset: (email: string) => Promise<void>;
  completeOnboarding: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => AuthService.getCurrentUser());
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Subscribe to Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = AuthService.subscribeToAuth((activeUser) => {
      setUser(activeUser);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const login = async (email: string, pass: string): Promise<User> => {
    setIsLoading(true);
    setError(null);
    try {
      const loggedUser = await AuthService.login(email, pass);
      setUser(loggedUser);
      return loggedUser;
    } catch (err: any) {
      const message = err?.message || "That email or password doesn't look right. Please try again.";
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (name: string, email: string, pass: string): Promise<User> => {
    setIsLoading(true);
    setError(null);
    try {
      const newUser = await AuthService.signUp(name, email, pass);
      setUser(newUser);
      return newUser;
    } catch (err: any) {
      const message = err?.message || 'Unable to create account. Please check your details.';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async (): Promise<User> => {
    setIsLoading(true);
    setError(null);
    try {
      const googleUser = await AuthService.loginWithGoogle();
      setUser(googleUser);
      return googleUser;
    } catch (err: any) {
      const message = err?.message || 'Google authentication could not be completed.';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const loginAsDemo = async (): Promise<User> => {
    setIsLoading(true);
    setError(null);
    try {
      const demoUser = await AuthService.loginAsDemo();
      setUser(demoUser);
      return demoUser;
    } catch (err: any) {
      const message = err?.message || 'Demo login failed.';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
    setError(null);
  };

  const sendPasswordReset = async (email: string): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      await AuthService.sendPasswordResetEmail(email);
    } catch (err: any) {
      const message = err?.message || 'Failed to send reset link.';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const completeOnboarding = async () => {
    if (user) {
      const updated = await AuthService.updateProfile({ hasCompletedOnboarding: true });
      if (updated) {
        setUser(updated);
      }
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        login,
        signUp,
        loginWithGoogle,
        loginAsDemo,
        logout,
        sendPasswordReset,
        completeOnboarding,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
