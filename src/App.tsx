/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  UserProfile, 
  UserRoadmap, 
  AccessibilitySettings, 
  JourneyState, 
  AppLanguage, 
  Opportunity 
} from './types';
import { generatePersonalizedRoadmap } from './utils/roadmapGenerator';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DbService } from './services/dbService';
import { AuthPage } from './components/AuthPage';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OnboardingModal } from './components/OnboardingModal';
import { RoadmapView } from './components/RoadmapView';
import { OpportunityExplorer } from './components/OpportunityExplorer';
import { MyJourneyView } from './components/MyJourneyView';
import { AffordabilityModal } from './components/AffordabilityModal';
import { AccessibilitySettingsModal } from './components/AccessibilitySettingsModal';
import { InfoModal } from './components/InfoModal';
import { Footer } from './components/Footer';

// Default initial state for fresh visitors
const DEFAULT_SETTINGS: AccessibilitySettings = {
  textSize: 'normal',
  highContrast: false,
  reducedMotion: false,
  lowDataMode: false,
  language: 'en',
};

const DEFAULT_JOURNEY: JourneyState = {
  currentStageIndex: 0,
  completedTaskIds: [],
  bookmarkedOpportunityIds: ['opp-sch-01', 'opp-crs-01'],
  appliedOpportunityIds: [],
  notes: {},
  lastActiveDate: new Date().toISOString().split('T')[0],
};

function MainApplication() {
  const { user, isAuthenticated, isLoading: authLoading, logout } = useAuth();

  // Navigation State (Home, Explore, Roadmap, Journey)
  const [activeView, setActiveView] = useState<'home' | 'explore' | 'roadmap' | 'journey'>('home');

  // User Profile & Roadmap State (Stored in localStorage & Synced with Firebase)
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('udaan_profile');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [roadmap, setRoadmap] = useState<UserRoadmap | null>(() => {
    try {
      const saved = localStorage.getItem('udaan_roadmap');
      if (saved) return JSON.parse(saved);
      const savedProfile = localStorage.getItem('udaan_profile');
      if (savedProfile) {
        return generatePersonalizedRoadmap(JSON.parse(savedProfile));
      }
      return null;
    } catch {
      return null;
    }
  });

  // Journey Tracking State
  const [journeyState, setJourneyState] = useState<JourneyState>(() => {
    try {
      const saved = localStorage.getItem('udaan_journey');
      return saved ? JSON.parse(saved) : DEFAULT_JOURNEY;
    } catch {
      return DEFAULT_JOURNEY;
    }
  });

  // Accessibility & Language Settings
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem('udaan_settings');
      return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  // Modals Open State
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [affordabilityTarget, setAffordabilityTarget] = useState<Opportunity | null>(null);
  const [infoModalType, setInfoModalType] = useState<'about' | 'privacy' | null>(null);

  // Sync Accessibility Attributes to DOM
  useEffect(() => {
    try {
      const root = document.documentElement;
      root.setAttribute('data-text-size', settings.textSize);
      root.setAttribute('data-high-contrast', String(settings.highContrast));
      root.lang = settings.language;
      localStorage.setItem('udaan_settings', JSON.stringify(settings));
    } catch (e) {
      console.warn('Could not sync settings to localStorage', e);
    }
  }, [settings]);

  // Load User Data from Firebase on Authentication
  useEffect(() => {
    if (!user) return;

    let isMounted = true;

    const loadFirebaseUserData = async () => {
      try {
        // Fetch Profile from Firebase
        const cloudProfile = await DbService.getUserProfile(user.id);
        if (cloudProfile && isMounted) {
          setProfile(cloudProfile);
          localStorage.setItem('udaan_profile', JSON.stringify(cloudProfile));
        }

        // Fetch Roadmap from Firebase
        const cloudRoadmap = await DbService.getUserRoadmap(user.id);
        if (cloudRoadmap && isMounted) {
          setRoadmap(cloudRoadmap);
          localStorage.setItem('udaan_roadmap', JSON.stringify(cloudRoadmap));
        } else if (cloudProfile && isMounted) {
          const generated = generatePersonalizedRoadmap(cloudProfile);
          setRoadmap(generated);
          localStorage.setItem('udaan_roadmap', JSON.stringify(generated));
          DbService.saveUserRoadmap(user.id, generated);
        }

        // Fetch Journey State from Firebase
        const cloudJourney = await DbService.getJourneyState(user.id);
        if (cloudJourney && isMounted) {
          setJourneyState(cloudJourney);
          localStorage.setItem('udaan_journey', JSON.stringify(cloudJourney));
        }
      } catch (err) {
        console.warn('Could not fetch cloud data from Firebase:', err);
      }
    };

    loadFirebaseUserData();

    return () => {
      isMounted = false;
    };
  }, [user?.id]);

  // Sync Profile to localStorage
  useEffect(() => {
    if (profile) {
      try {
        localStorage.setItem('udaan_profile', JSON.stringify(profile));
      } catch (e) {
        console.warn('Error saving profile', e);
      }
    }
  }, [profile]);

  // Sync Roadmap to localStorage
  useEffect(() => {
    if (roadmap) {
      try {
        localStorage.setItem('udaan_roadmap', JSON.stringify(roadmap));
      } catch (e) {
        console.warn('Error saving roadmap', e);
      }
    }
  }, [roadmap]);

  // Sync Journey to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('udaan_journey', JSON.stringify(journeyState));
    } catch (e) {
      console.warn('Error saving journey', e);
    }
  }, [journeyState]);

  // Handle Authentication Success (login or signup)
  const handleAuthSuccess = (isNewUser: boolean) => {
    if (isNewUser || !profile) {
      // Direct new user to complete personalized onboarding
      setActiveView('home');
      setOnboardingOpen(true);
    } else {
      setActiveView('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler for completing Onboarding
  const handleOnboardingComplete = (newProfile: UserProfile) => {
    setProfile(newProfile);
    const newRoadmap = generatePersonalizedRoadmap(newProfile);
    setRoadmap(newRoadmap);

    // Save directly to Firebase for authenticated user
    if (user?.id) {
      DbService.saveUserProfile(user.id, newProfile);
      DbService.saveUserRoadmap(user.id, newRoadmap);
    }

    setActiveView('roadmap');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler to toggle task completed state
  const handleToggleTask = (taskId: string) => {
    setJourneyState((prev) => {
      const exists = prev.completedTaskIds.includes(taskId);
      const updated = exists
        ? prev.completedTaskIds.filter((id) => id !== taskId)
        : [...prev.completedTaskIds, taskId];
      
      const newJourney = { ...prev, completedTaskIds: updated };
      if (user?.id) {
        DbService.saveJourneyState(user.id, newJourney);
      }
      return newJourney;
    });
  };

  // Handler to toggle opportunity bookmark
  const handleToggleBookmark = (oppId: string) => {
    setJourneyState((prev) => {
      const exists = prev.bookmarkedOpportunityIds.includes(oppId);
      const updated = exists
        ? prev.bookmarkedOpportunityIds.filter((id) => id !== oppId)
        : [...prev.bookmarkedOpportunityIds, oppId];
      
      const newJourney = { ...prev, bookmarkedOpportunityIds: updated };
      if (user?.id) {
        DbService.saveJourneyState(user.id, newJourney);
      }
      return newJourney;
    });
  };

  // Handler to toggle opportunity applied status
  const handleToggleApply = (oppId: string) => {
    setJourneyState((prev) => {
      const exists = prev.appliedOpportunityIds.includes(oppId);
      const updated = exists
        ? prev.appliedOpportunityIds.filter((id) => id !== oppId)
        : [...prev.appliedOpportunityIds, oppId];
      
      const newJourney = { ...prev, appliedOpportunityIds: updated };
      if (user?.id) {
        DbService.saveJourneyState(user.id, newJourney);
      }
      return newJourney;
    });
  };

  // Handler to save notes
  const handleSaveNote = (noteKey: string, content: string) => {
    setJourneyState((prev) => {
      const newJourney = {
        ...prev,
        notes: { ...prev.notes, [noteKey]: content },
      };
      if (user?.id) {
        DbService.saveJourneyState(user.id, newJourney);
      }
      return newJourney;
    });
  };

  // Calculate Progress Percent for Navbar
  const totalTasks = roadmap ? roadmap.weeks.reduce((acc, w) => acc + w.tasks.length, 0) : 0;
  const progressPercent = totalTasks > 0 ? Math.round((journeyState.completedTaskIds.length / totalTasks) * 100) : 0;

  // 1. Initial Auth Loading State
  if (authLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFCF8] text-[#161616] p-4">
        <div className="w-12 h-12 rounded-sm bg-[#173C2C] text-[#FDFCF8] flex items-center justify-center font-serif font-bold text-2xl shadow-xs border border-[#0D241A] mb-4 animate-pulse">
          <span>उ</span>
        </div>
        <p className="font-mono text-xs text-[#57534E] tracking-widest uppercase">
          Initializing UDAAN...
        </p>
      </div>
    );
  }

  // 2. Unauthenticated: Show Login / Sign Up as the FIRST screen
  if (!isAuthenticated) {
    return (
      <>
        <AuthPage
          language={settings.language}
          setLanguage={(lang) => setSettings((s) => ({ ...s, language: lang }))}
          openSettings={() => setSettingsOpen(true)}
          onAuthSuccess={handleAuthSuccess}
        />

        <AccessibilitySettingsModal
          isOpen={settingsOpen}
          onClose={() => setSettingsOpen(false)}
          settings={settings}
          updateSettings={(newSet) => setSettings((s) => ({ ...s, ...newSet }))}
          language={settings.language}
          setLanguage={(lang) => setSettings((s) => ({ ...s, language: lang }))}
          user={null}
          onLogout={logout}
        />
      </>
    );
  }

  // 3. Authenticated: Render protected UDAAN platform
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF8] text-[#161616] transition-colors selection:bg-[#E7E3DA] selection:text-[#173C2C]">
      
      {/* Navigation Header */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        openOnboarding={() => setOnboardingOpen(true)}
        openSettings={() => setSettingsOpen(true)}
        language={settings.language}
        setLanguage={(lang) => setSettings((s) => ({ ...s, language: lang }))}
        hasRoadmap={!!roadmap}
        roadmap={roadmap}
        journeyProgressPercent={progressPercent}
        user={user}
        onLogout={logout}
      />

      {/* Main View Container */}
      <main className="flex-1" id="main-content">
        {activeView === 'home' && (
          <HeroSection
            language={settings.language}
            openOnboarding={() => setOnboardingOpen(true)}
            exploreOpportunities={() => {
              setActiveView('explore');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            hasRoadmap={!!roadmap}
            viewRoadmap={() => {
              setActiveView('roadmap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeView === 'explore' && (
          <OpportunityExplorer
            profile={profile}
            language={settings.language}
            bookmarkedIds={journeyState.bookmarkedOpportunityIds}
            appliedIds={journeyState.appliedOpportunityIds}
            onToggleBookmark={handleToggleBookmark}
            onToggleApply={handleToggleApply}
            onOpenAffordability={(opp) => setAffordabilityTarget(opp)}
            openOnboarding={() => setOnboardingOpen(true)}
          />
        )}

        {activeView === 'roadmap' && (
          roadmap ? (
            <RoadmapView
              roadmap={roadmap}
              profile={profile}
              language={settings.language}
              completedTaskIds={journeyState.completedTaskIds}
              toggleTaskCompletion={handleToggleTask}
              openOnboarding={() => setOnboardingOpen(true)}
              goToJourney={() => {
                setActiveView('journey');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              goToExplore={() => {
                setActiveView('explore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          ) : (
            <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B45309] block">
                NO ACTIVE PLAN
              </span>
              <h2 className="editorial-title text-xl font-bold text-[#161616]">No Active Action Plan Yet</h2>
              <p className="text-xs sm:text-sm font-serif text-[#57534E]">
                Complete our quick diagnostic navigator to find your personalized, constraint-aware next step.
              </p>
              <button
                onClick={() => setOnboardingOpen(true)}
                className="px-6 py-2.5 rounded-xs bg-[#173C2C] hover:bg-[#102B1F] text-[#FDFCF8] font-bold text-xs border border-[#0D241A] shadow-2xs transition-all"
              >
                Find My Next Step
              </button>
            </div>
          )
        )}

        {activeView === 'journey' && (
          <MyJourneyView
            roadmap={roadmap}
            profile={profile}
            language={settings.language}
            completedTaskIds={journeyState.completedTaskIds}
            bookmarkedOpportunityIds={journeyState.bookmarkedOpportunityIds}
            appliedOpportunityIds={journeyState.appliedOpportunityIds}
            notes={journeyState.notes}
            onToggleTask={handleToggleTask}
            onToggleBookmark={handleToggleBookmark}
            onToggleApply={handleToggleApply}
            onUpdateNotes={handleSaveNote}
            goToRoadmap={() => {
              setActiveView('roadmap');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            goToExplore={() => {
              setActiveView('explore');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            openOnboarding={() => setOnboardingOpen(true)}
          />
        )}
      </main>

      {/* Footer with Logout & Legal Links */}
      <Footer
        language={settings.language}
        openSettings={() => setSettingsOpen(true)}
        openAbout={() => setInfoModalType('about')}
        openPrivacy={() => setInfoModalType('privacy')}
        setActiveView={setActiveView}
        hasRoadmap={!!roadmap}
      />

      {/* Modals & Dialogs */}
      <OnboardingModal
        isOpen={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        onComplete={handleOnboardingComplete}
        existingProfile={profile}
        language={settings.language}
      />

      <AffordabilityModal
        opportunity={affordabilityTarget}
        profile={profile}
        isOpen={!!affordabilityTarget}
        onClose={() => setAffordabilityTarget(null)}
      />

      <AccessibilitySettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        settings={settings}
        updateSettings={(newSet) => setSettings((s) => ({ ...s, ...newSet }))}
        language={settings.language}
        setLanguage={(lang) => setSettings((s) => ({ ...s, language: lang }))}
        user={user}
        onLogout={logout}
      />

      <InfoModal
        isOpen={!!infoModalType}
        onClose={() => setInfoModalType(null)}
        type={infoModalType || 'about'}
      />

    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApplication />
    </AuthProvider>
  );
}
