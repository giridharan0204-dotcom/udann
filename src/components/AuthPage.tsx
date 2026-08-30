import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  EyeOff, 
  Sparkles, 
  Lock, 
  Mail, 
  User as UserIcon, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Compass, 
  Languages, 
  Settings2,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Coins,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { AppLanguage, AuthMode } from '../types';
import { translations } from '../data/translations';
import { UdaanLogo } from './UdaanLogo';

interface AuthPageProps {
  initialMode?: AuthMode;
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  openSettings: () => void;
  onAuthSuccess: (isNewUser: boolean) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({
  initialMode = 'login',
  language,
  setLanguage,
  openSettings,
  onAuthSuccess,
}) => {
  const { login, signUp, loginWithGoogle, loginAsDemo, sendPasswordReset, isLoading, error, clearError } = useAuth();
  
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // UI states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);

  const t = translations[language];

  // Clear local validation on switch
  useEffect(() => {
    setValidationError(null);
    setSuccessNotice(null);
    clearError();
  }, [mode]);

  const handleToggleMode = (newMode: AuthMode) => {
    setMode(newMode);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    setSuccessNotice(null);

    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setValidationError('Please enter your email address.');
      return;
    }
    if (!cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setValidationError('Please enter your password.');
      return;
    }

    try {
      await login(cleanEmail, password);
      onAuthSuccess(false);
    } catch (err: any) {
      setValidationError(err?.message || "That email or password doesn't look right. Please try again.");
    }
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    setSuccessNotice(null);

    const cleanName = name.trim();
    const cleanEmail = email.trim();

    if (!cleanName || cleanName.length < 2) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!password || password.length < 6) {
      setValidationError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setValidationError('Passwords do not match.');
      return;
    }

    try {
      await signUp(cleanName, cleanEmail, password);
      onAuthSuccess(true);
    } catch (err: any) {
      setValidationError(err?.message || 'Unable to create account. Please check your information.');
    }
  };

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const cleanEmail = email.trim();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setValidationError('Please enter your registered email address.');
      return;
    }

    try {
      await sendPasswordReset(cleanEmail);
      setSuccessNotice('Password reset instructions have been sent to your email.');
    } catch (err: any) {
      setValidationError(err?.message || 'Unable to process password reset.');
    }
  };

  const handleGoogleSignIn = async () => {
    setValidationError(null);
    try {
      const user = await loginWithGoogle();
      onAuthSuccess(!user.hasCompletedOnboarding);
    } catch (err: any) {
      setValidationError(err?.message || 'Google sign-in could not be completed.');
    }
  };

  const handleDemoSignIn = async () => {
    setValidationError(null);
    try {
      await loginAsDemo();
      onAuthSuccess(false);
    } catch (err: any) {
      setValidationError(err?.message || 'Demo sign-in failed.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF8] text-[#161616] selection:bg-[#E7E3DA] selection:text-[#173C2C]">
      
      {/* Top Header Bar with New Logo */}
      <header className="border-b border-[#E7E3DA] bg-[#FAF8F5] py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <UdaanLogo size="sm" showText={true} />
          </div>

          {/* Header Controls (Language & Accessibility) */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="px-2.5 py-1.5 rounded-sm text-[#3D3A37] hover:bg-[#F4F1EA] border border-[#E7E3DA] focus-visible:ring-2 focus-visible:ring-[#173C2C] flex items-center gap-1.5 text-xs font-semibold shadow-2xs cursor-pointer"
                aria-label="Change Language"
                aria-expanded={langMenuOpen}
                id="auth-lang-switcher-btn"
              >
                <Languages className="w-3.5 h-3.5 text-[#173C2C]" aria-hidden="true" />
                <span className="uppercase font-mono">{language}</span>
                <ChevronDown className="w-3 h-3 text-[#78716C]" />
              </button>

              {langMenuOpen && (
                <div 
                  className="absolute right-0 mt-1.5 w-36 bg-[#FFFFFF] rounded-sm shadow-md border border-[#E7E3DA] py-1 z-50 divide-y divide-[#F4F1EA]"
                  role="menu"
                >
                  <button
                    onClick={() => { setLanguage('en'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-semibold flex items-center justify-between hover:bg-[#FAF8F5] ${
                      language === 'en' ? 'text-[#173C2C] bg-[#FAF8F5] font-bold' : 'text-[#3D3A37]'
                    }`}
                    role="menuitem"
                  >
                    <span>English</span>
                    {language === 'en' && <span>✓</span>}
                  </button>
                  <button
                    onClick={() => { setLanguage('hi'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-semibold flex items-center justify-between hover:bg-[#FAF8F5] ${
                      language === 'hi' ? 'text-[#173C2C] bg-[#FAF8F5] font-bold' : 'text-[#3D3A37]'
                    }`}
                    role="menuitem"
                  >
                    <span>हिन्दी</span>
                    {language === 'hi' && <span>✓</span>}
                  </button>
                  <button
                    onClick={() => { setLanguage('ta'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-semibold flex items-center justify-between hover:bg-[#FAF8F5] ${
                      language === 'ta' ? 'text-[#173C2C] bg-[#FAF8F5] font-bold' : 'text-[#3D3A37]'
                    }`}
                    role="menuitem"
                  >
                    <span>தமிழ்</span>
                    {language === 'ta' && <span>✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Accessibility Settings */}
            <button
              onClick={openSettings}
              className="p-1.5 rounded-sm text-[#3D3A37] hover:bg-[#F4F1EA] hover:text-[#161616] border border-[#E7E3DA] focus-visible:ring-2 focus-visible:ring-[#173C2C] cursor-pointer shadow-2xs"
              aria-label="Open Accessibility Settings"
              title="Accessibility Settings"
              id="auth-accessibility-btn"
            >
              <Settings2 className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Authentication Section with 3D Depth Backdrop */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-16 flex items-center justify-center relative overflow-hidden">
        
        {/* Soft Radial Ambient Glow */}
        <div 
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#173C2C]/5 via-[#EA580C]/5 to-transparent blur-3xl -z-10" 
          aria-hidden="true" 
        />

        <div className="w-full max-w-md mx-auto space-y-6">
          
          {/* Centered Brand Emblem Header */}
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <UdaanLogo size="lg" showText={false} />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#EA580C] block">
                THE BEGINNING OF YOUR JOURNEY
              </span>
              <h1 className="editorial-title text-2xl sm:text-3xl font-bold text-[#161616] tracking-tight mt-1">
                Your next opportunity starts here.
              </h1>
              <p className="text-xs sm:text-sm text-[#57534E] font-serif mt-1 max-w-sm mx-auto">
                Sign in to resume your step-by-step career pathway and saved free opportunities.
              </p>
            </div>
          </div>

          {/* Auth Card Container with 3D elevation */}
          <div className="card-3d bg-[#FFFFFF] border border-[#E7E3DA] rounded-lg p-6 sm:p-8 shadow-md">
            
            {/* Form Mode Header / Tabs */}
            <div className="flex items-center border-b border-[#E7E3DA] pb-4 mb-6">
              <div className="flex items-center gap-4 flex-1">
                <button
                  type="button"
                  onClick={() => handleToggleMode('login')}
                  className={`pb-2 text-sm font-bold uppercase font-mono tracking-wider transition-all border-b-2 cursor-pointer ${
                    mode === 'login'
                      ? 'border-[#173C2C] text-[#173C2C]'
                      : 'border-transparent text-[#78716C] hover:text-[#161616]'
                  }`}
                  id="tab-sign-in"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={() => handleToggleMode('signup')}
                  className={`pb-2 text-sm font-bold uppercase font-mono tracking-wider transition-all border-b-2 cursor-pointer ${
                    mode === 'signup'
                      ? 'border-[#173C2C] text-[#173C2C]'
                      : 'border-transparent text-[#78716C] hover:text-[#161616]'
                  }`}
                  id="tab-create-account"
                >
                  Create Account
                </button>
              </div>

              {mode === 'forgot_password' && (
                <span className="text-xs font-mono font-semibold text-[#EA580C]">
                  RESET PASSWORD
                </span>
              )}
            </div>

            {/* Title inside card */}
            <div className="mb-5">
              <h2 className="editorial-title text-lg sm:text-xl font-bold text-[#161616]">
                {mode === 'login' && 'Welcome back to UDAAN'}
                {mode === 'signup' && 'Create your free account'}
                {mode === 'forgot_password' && 'Reset your password'}
              </h2>
              <p className="text-xs text-[#57534E] font-serif mt-0.5">
                {mode === 'login' && 'Sign in to access your saved roadmaps, bookmarks, and progress.'}
                {mode === 'signup' && 'Sign up in seconds to start building your personalized career plan.'}
                {mode === 'forgot_password' && 'Enter your email address to receive password recovery instructions.'}
              </p>
            </div>

            {/* Dynamic Error & Validation Notice */}
            {(validationError || error) && (
              <div 
                className="mb-5 p-3.5 rounded-xs bg-[#FEF2F2] border border-[#F87171] text-[#991B1B] text-xs font-medium flex items-start gap-2.5 animate-in fade-in duration-150"
                role="alert"
                aria-live="polite"
              >
                <AlertCircle className="w-4 h-4 shrink-0 text-[#DC2626] mt-0.5" aria-hidden="true" />
                <span>{validationError || error}</span>
              </div>
            )}

            {/* Success Notice */}
            {successNotice && (
              <div 
                className="mb-5 p-3.5 rounded-xs bg-[#F0FDF4] border border-[#86EFAC] text-[#166534] text-xs font-medium flex items-start gap-2.5 animate-in fade-in duration-150"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#16A34A] mt-0.5" aria-hidden="true" />
                <span>{successNotice}</span>
              </div>
            )}

            {/* 1. SIGN IN FORM */}
            {mode === 'login' && (
              <form onSubmit={handleLoginSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="login-email" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#161616] mb-1.5">
                    Email Address <span className="text-[#EA580C]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#78716C]">
                      <Mail className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <input
                      id="login-email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-sm border border-[#DDD7CC] bg-[#FAF8F5] text-xs sm:text-sm text-[#161616] placeholder:text-[#A8A29E] focus-visible:bg-[#FFFFFF] focus-visible:border-[#173C2C] focus-visible:ring-2 focus-visible:ring-[#173C2C] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="login-password" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#161616]">
                      Password <span className="text-[#EA580C]">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setMode('forgot_password')}
                      className="text-[11px] font-mono text-[#173C2C] hover:underline focus-visible:ring-1 focus-visible:ring-[#173C2C] rounded-xs cursor-pointer"
                      id="forgot-password-link"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#78716C]">
                      <Lock className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-10 py-2.5 rounded-sm border border-[#DDD7CC] bg-[#FAF8F5] text-xs sm:text-sm text-[#161616] placeholder:text-[#A8A29E] focus-visible:bg-[#FFFFFF] focus-visible:border-[#173C2C] focus-visible:ring-2 focus-visible:ring-[#173C2C] outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#78716C] hover:text-[#161616] focus-visible:ring-2 focus-visible:ring-[#173C2C] rounded-xs cursor-pointer"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <Eye className="w-4 h-4" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 flex items-center justify-center gap-2 bg-[#173C2C] hover:bg-[#102B1F] text-[#FDFCF8] py-3 rounded-sm font-semibold text-xs sm:text-sm shadow-md border border-[#0D241A] transition-all disabled:opacity-60 cursor-pointer"
                  id="submit-sign-in"
                >
                  {isLoading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-[#FDFCF8] border-t-transparent rounded-full animate-spin" />
                      <span>Signing In...</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <span>Sign In & Continue Journey</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  )}
                </button>
              </form>
            )}

            {/* 2. SIGN UP FORM */}
            {mode === 'signup' && (
              <form onSubmit={handleSignUpSubmit} className="space-y-3.5" noValidate>
                <div>
                  <label htmlFor="signup-name" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#161616] mb-1">
                    Full Name <span className="text-[#EA580C]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#78716C]">
                      <UserIcon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <input
                      id="signup-name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-sm border border-[#DDD7CC] bg-[#FAF8F5] text-xs sm:text-sm text-[#161616] placeholder:text-[#A8A29E] focus-visible:bg-[#FFFFFF] focus-visible:border-[#173C2C] focus-visible:ring-2 focus-visible:ring-[#173C2C] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="signup-email" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#161616] mb-1">
                    Email Address <span className="text-[#EA580C]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#78716C]">
                      <Mail className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <input
                      id="signup-email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-sm border border-[#DDD7CC] bg-[#FAF8F5] text-xs sm:text-sm text-[#161616] placeholder:text-[#A8A29E] focus-visible:bg-[#FFFFFF] focus-visible:border-[#173C2C] focus-visible:ring-2 focus-visible:ring-[#173C2C] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="signup-password" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#161616] mb-1">
                    Password (min. 6 chars) <span className="text-[#EA580C]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#78716C]">
                      <Lock className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <input
                      id="signup-password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 6 characters"
                      className="w-full pl-9 pr-10 py-2.5 rounded-sm border border-[#DDD7CC] bg-[#FAF8F5] text-xs sm:text-sm text-[#161616] placeholder:text-[#A8A29E] focus-visible:bg-[#FFFFFF] focus-visible:border-[#173C2C] focus-visible:ring-2 focus-visible:ring-[#173C2C] outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#78716C] hover:text-[#161616] focus-visible:ring-2 focus-visible:ring-[#173C2C] rounded-xs cursor-pointer"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <Eye className="w-4 h-4" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="signup-confirm-password" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#161616] mb-1">
                    Confirm Password <span className="text-[#EA580C]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#78716C]">
                      <Lock className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <input
                      id="signup-confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter password"
                      className="w-full pl-9 pr-10 py-2.5 rounded-sm border border-[#DDD7CC] bg-[#FAF8F5] text-xs sm:text-sm text-[#161616] placeholder:text-[#A8A29E] focus-visible:bg-[#FFFFFF] focus-visible:border-[#173C2C] focus-visible:ring-2 focus-visible:ring-[#173C2C] outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#78716C] hover:text-[#161616] focus-visible:ring-2 focus-visible:ring-[#173C2C] rounded-xs cursor-pointer"
                      aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <Eye className="w-4 h-4" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-3 flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-[#FDFCF8] py-3 rounded-sm font-semibold text-xs sm:text-sm shadow-md border border-[#9A3412] transition-all disabled:opacity-60 cursor-pointer"
                  id="submit-create-account"
                >
                  {isLoading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-[#FDFCF8] border-t-transparent rounded-full animate-spin" />
                      <span>Creating Account...</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <Sparkles className="w-4 h-4" aria-hidden="true" />
                      <span>Create Account & Start Navigator</span>
                    </span>
                  )}
                </button>
              </form>
            )}

            {/* 3. FORGOT PASSWORD FORM */}
            {mode === 'forgot_password' && (
              <form onSubmit={handleForgotPasswordSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="reset-email" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#161616] mb-1.5">
                    Enter your registered email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#78716C]">
                      <Mail className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <input
                      id="reset-email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-sm border border-[#DDD7CC] bg-[#FAF8F5] text-xs sm:text-sm text-[#161616] placeholder:text-[#A8A29E] focus-visible:bg-[#FFFFFF] focus-visible:border-[#173C2C] focus-visible:ring-2 focus-visible:ring-[#173C2C] outline-none transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 bg-[#173C2C] hover:bg-[#102B1F] text-[#FDFCF8] py-3 rounded-sm font-semibold text-xs sm:text-sm shadow-md border border-[#0D241A] transition-all disabled:opacity-60 cursor-pointer"
                  id="submit-forgot-password"
                >
                  {isLoading ? 'Sending Link...' : 'Send Recovery Instructions'}
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => handleToggleMode('login')}
                    className="text-xs font-mono text-[#173C2C] hover:underline cursor-pointer"
                  >
                    ← Back to Sign In
                  </button>
                </div>
              </form>
            )}

            {/* Social / Alternative Sign In */}
            {mode !== 'forgot_password' && (
              <div className="mt-5 space-y-4">
                <div className="relative flex items-center justify-center">
                  <div className="border-t border-[#E7E3DA] w-full" />
                  <span className="bg-[#FFFFFF] px-3 text-[10px] font-mono uppercase text-[#78716C] tracking-wider absolute">
                    OR
                  </span>
                </div>

                {/* Continue with Google */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-sm border border-[#DDD7CC] bg-[#FFFFFF] hover:bg-[#FAF8F5] text-[#161616] text-xs sm:text-sm font-semibold shadow-2xs transition-all cursor-pointer"
                  id="btn-google-sign-in"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>

                {/* Instant Demo Access */}
                <div className="pt-2 border-t border-[#F4F1EA] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#78716C]">
                    Preview instantly without signup:
                  </span>
                  <button
                    type="button"
                    onClick={handleDemoSignIn}
                    className="text-[11px] font-mono font-bold text-[#173C2C] hover:underline px-2.5 py-1 bg-[#F4F1EA] rounded-xs border border-[#DDD7CC] cursor-pointer"
                    id="btn-demo-quick-login"
                  >
                    ⚡ Quick Demo Login
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Switcher */}
            <div className="mt-6 pt-4 border-t border-[#E7E3DA] text-center text-xs text-[#57534E] font-serif">
              {mode === 'login' ? (
                <p>
                  Don't have an account yet?{' '}
                  <button
                    type="button"
                    onClick={() => handleToggleMode('signup')}
                    className="font-sans font-bold text-[#173C2C] hover:underline cursor-pointer"
                    id="switch-to-signup"
                  >
                    Create Account
                  </button>
                </p>
              ) : mode === 'signup' ? (
                <p>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => handleToggleMode('login')}
                    className="font-sans font-bold text-[#173C2C] hover:underline cursor-pointer"
                    id="switch-to-login"
                  >
                    Sign In
                  </button>
                </p>
              ) : null}
            </div>

          </div>
        </div>

      </main>

      {/* Auth Screen Footer with Trust Markers */}
      <footer className="border-t border-[#E7E3DA] bg-[#FAF8F5] py-4 px-4 text-center text-[11px] font-mono text-[#78716C]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 UDAAN Project. Built for inclusive opportunity and digital dignity.</span>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-[#173C2C]">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Zero-Tracker &bull; Local-First Secure</span>
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
};
