import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Languages, 
  Sparkles, 
  Compass, 
  Route, 
  CheckCircle2, 
  LogOut, 
  User as UserIcon,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { AppLanguage, UserRoadmap, User } from '../types';
import { UdaanLogo } from './UdaanLogo';

interface NavbarProps {
  activeView: 'home' | 'roadmap' | 'explore' | 'journey';
  setActiveView: (view: 'home' | 'roadmap' | 'explore' | 'journey') => void;
  openOnboarding: () => void;
  openSettings: () => void;
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  hasRoadmap: boolean;
  roadmap: UserRoadmap | null;
  journeyProgressPercent: number;
  user: User | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  openOnboarding,
  openSettings,
  language,
  setLanguage,
  hasRoadmap,
  user,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleNav = (view: 'home' | 'roadmap' | 'explore' | 'journey') => {
    setActiveView(view);
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoutClick = () => {
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
    onLogout();
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'roadmap', label: 'My Next Step' },
    { id: 'explore', label: 'Explore' },
    { id: 'journey', label: 'My Journey' },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-[#FDFCF8]/95 backdrop-blur-md border-b border-[#E7E3DA] shadow-xs">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#173C2C] focus:text-[#FDFCF8] focus:rounded-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center group text-left focus-visible:ring-2 focus-visible:ring-[#173C2C] p-1 rounded-sm cursor-pointer"
            aria-label="UDAAN Home"
            id="brand-logo-btn"
          >
            <UdaanLogo size="sm" showText={true} />
          </button>

          {/* Desktop Navigation Links (ONLY 4 MAIN PAGES) */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`relative px-4 py-2 rounded-sm text-sm font-semibold tracking-tight transition-all duration-200 ${
                  activeView === item.id
                    ? 'bg-[#173C2C] text-[#FDFCF8] shadow-xs'
                    : 'text-[#3D3A37] hover:text-[#161616] hover:bg-[#F4F1EA]'
                }`}
                id={`nav-${item.id}-btn`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls Right */}
          <div className="flex items-center gap-2.5">
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="px-2.5 py-1.5 rounded-sm border border-[#DDD7CC] bg-[#FFFFFF] hover:bg-[#F4F1EA] text-xs font-mono font-medium text-[#44403C] flex items-center gap-1.5 shadow-2xs"
                aria-label="Language selection"
              >
                <Languages className="w-3.5 h-3.5 text-[#173C2C]" />
                <span className="uppercase">{language}</span>
                <ChevronDown className="w-3 h-3 text-[#78716C]" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-1.5 w-36 bg-[#FFFFFF] border border-[#DDD7CC] rounded-sm shadow-md py-1 z-50 animate-in fade-in duration-100 divide-y divide-[#F4F1EA]">
                  <button
                    onClick={() => { setLanguage('en'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs font-serif flex items-center justify-between ${language === 'en' ? 'bg-[#F4F1EA] font-bold text-[#173C2C]' : 'hover:bg-[#FAF8F5]'}`}
                  >
                    <span>English</span>
                    {language === 'en' && <span>✓</span>}
                  </button>
                  <button
                    onClick={() => { setLanguage('hi'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs font-serif flex items-center justify-between ${language === 'hi' ? 'bg-[#F4F1EA] font-bold text-[#173C2C]' : 'hover:bg-[#FAF8F5]'}`}
                  >
                    <span>हिन्दी (Hindi)</span>
                    {language === 'hi' && <span>✓</span>}
                  </button>
                  <button
                    onClick={() => { setLanguage('ta'); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs font-serif flex items-center justify-between ${language === 'ta' ? 'bg-[#F4F1EA] font-bold text-[#173C2C]' : 'hover:bg-[#FAF8F5]'}`}
                  >
                    <span>தமிழ் (Tamil)</span>
                    {language === 'ta' && <span>✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Profile / Account Menu */}
            {user ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#DDD7CC] bg-[#FFFFFF] hover:bg-[#FAF8F5] text-xs font-semibold text-[#161616] shadow-2xs"
                  aria-label="User profile menu"
                >
                  <div className="w-5 h-5 rounded-full bg-[#173C2C] text-[#FDFCF8] flex items-center justify-center text-[10px] font-bold">
                    {user.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                  <span className="hidden sm:inline-block max-w-[90px] truncate">{user.name || 'Account'}</span>
                  <ChevronDown className="w-3 h-3 text-[#78716C]" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-1.5 w-48 bg-[#FFFFFF] border border-[#DDD7CC] rounded-sm shadow-md py-1 z-50 animate-in fade-in duration-100">
                    <div className="px-3.5 py-2 border-b border-[#E7E3DA] text-[11px] font-mono text-[#78716C] truncate">
                      {user.email}
                    </div>
                    <button
                      onClick={() => { setUserMenuOpen(false); openSettings(); }}
                      className="w-full text-left px-3.5 py-2 text-xs font-serif hover:bg-[#FAF8F5] flex items-center gap-2 text-[#44403C]"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5 text-[#57534E]" />
                      <span>Settings & Text Size</span>
                    </button>
                    <button
                      onClick={handleLogoutClick}
                      className="w-full text-left px-3.5 py-2 text-xs font-serif hover:bg-[#FAF8F5] text-[#B91C1C] flex items-center gap-2 border-t border-[#E7E3DA]"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : null}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-sm border border-[#DDD7CC] text-[#44403C] hover:bg-[#F4F1EA]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-[#E7E3DA] space-y-1 animate-in fade-in duration-150">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full text-left px-4 py-3 rounded-sm text-sm font-semibold transition-all ${
                  activeView === item.id 
                    ? 'bg-[#173C2C] text-[#FDFCF8]' 
                    : 'text-[#3D3A37] hover:bg-[#F4F1EA]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

      </div>
    </header>
  );
};
