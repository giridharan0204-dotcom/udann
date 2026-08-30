import React from 'react';
import { AppLanguage } from '../types';
import { translations } from '../data/translations';
import { Heart, ShieldCheck, Accessibility, Sparkles, Feather } from 'lucide-react';
import { UdaanLogo } from './UdaanLogo';

interface FooterProps {
  language: AppLanguage;
  openSettings: () => void;
  openAbout: () => void;
  openPrivacy: () => void;
  setActiveView: (view: 'home' | 'explore' | 'roadmap' | 'journey') => void;
  hasRoadmap: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  openSettings,
  openAbout,
  openPrivacy,
  setActiveView,
  hasRoadmap,
}) => {
  const t = translations[language];

  return (
    <footer className="bg-[#161616] text-[#FDFCF8] border-t border-[#292929] mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <UdaanLogo size="sm" showText={true} />
            </div>
            <p className="text-sm font-serif italic text-[#D6D3D1] max-w-md leading-relaxed">
              "{t.tagline}"
            </p>
            <p className="text-xs text-[#A8A29E] leading-relaxed max-w-md font-serif">
              A free-first, low-bandwidth, and constraint-aware career navigator designed specifically for ambitious youth with limited financial resources and internet access.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#242424] text-[#E7E3DA] text-[10px] font-mono font-semibold border border-[#383838]">
              <Feather className="w-3.5 h-3.5 text-[#A7F3D0]" aria-hidden="true" />
              <span>BUILT FOR INCLUSIVE OPPORTUNITY & DIGNITY</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#A8A29E] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#D6D3D1]">
              <li>
                <button 
                  onClick={() => { setActiveView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FDFCF8] transition-colors text-left"
                  id="footer-nav-home"
                >
                  {t.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('explore'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FDFCF8] transition-colors text-left"
                  id="footer-nav-explore"
                >
                  {t.exploreOpportunities}
                </button>
              </li>
              {hasRoadmap && (
                <li>
                  <button 
                    onClick={() => { setActiveView('roadmap'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-[#FDFCF8] transition-colors text-left"
                    id="footer-nav-roadmap"
                  >
                    {t.myNextStep}
                  </button>
                </li>
              )}
              <li>
                <button 
                  onClick={() => { setActiveView('journey'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FDFCF8] transition-colors text-left"
                  id="footer-nav-journey"
                >
                  {t.myJourney}
                </button>
              </li>
            </ul>
          </div>

          {/* Standards & Transparency */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#A8A29E] font-bold">
              Trust & Accessibility
            </h4>
            <ul className="space-y-2 text-xs text-[#D6D3D1]">
              <li>
                <button 
                  onClick={openSettings}
                  className="hover:text-[#FDFCF8] transition-colors flex items-center gap-1.5 text-left font-mono"
                  id="footer-accessibility-btn"
                >
                  <Accessibility className="w-3.5 h-3.5 text-[#A7F3D0]" aria-hidden="true" />
                  <span>Accessibility Preferences</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={openAbout}
                  className="hover:text-[#FDFCF8] transition-colors text-left font-mono"
                  id="footer-about-btn"
                >
                  About the Project
                </button>
              </li>
              <li>
                <button 
                  onClick={openPrivacy}
                  className="hover:text-[#FDFCF8] transition-colors flex items-center gap-1.5 text-left font-mono"
                  id="footer-privacy-btn"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A7F3D0]" aria-hidden="true" />
                  <span>Privacy & Zero-Tracking</span>
                </button>
              </li>
              <li>
                <span className="text-[10px] font-mono text-[#78716C] block pt-1">
                  Offline Ready &bull; No cookies &bull; Low Data
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & demo disclaimer */}
        <div className="mt-12 pt-8 border-t border-[#292929] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#78716C]">
          <p>© 2026 UDAAN Project. Built for inclusive career advancement.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <span>Optimized for 2G/3G & Mobile Browsers</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
