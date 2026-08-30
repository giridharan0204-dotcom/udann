import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Coins, 
  WifiOff, 
  SlidersHorizontal, 
  Compass, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Award, 
  ShieldCheck, 
  TrendingUp, 
  ChevronRight, 
  Play, 
  Pause, 
  Video, 
  VideoOff, 
  VolumeX,
  Smartphone
} from 'lucide-react';
import { AppLanguage } from '../types';
import { translations } from '../data/translations';
import heroIllustration from '../assets/images/udaan_journey_hero_1788070390823.jpg';

interface HeroSectionProps {
  language: AppLanguage;
  openOnboarding: () => void;
  exploreOpportunities: () => void;
  hasRoadmap: boolean;
  viewRoadmap: () => void;
}

// Curated high-performance royalty-free background videos on youth education & career growth
const BACKGROUND_VIDEOS = [
  {
    id: 'students-study',
    title: 'Youth Learning & Collaboration',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-students-studying-in-a-library-41005-large.mp4',
  },
  {
    id: 'tech-career',
    title: 'Digital Skills & Practice',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-student-studying-with-a-laptop-and-writing-notes-41009-large.mp4',
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  openOnboarding,
  exploreOpportunities,
  hasRoadmap,
  viewRoadmap,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const t = translations[language] || translations.en;
  const currentVideo = BACKGROUND_VIDEOS[activeVideoIndex];

  // Toggle Play / Pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // Toggle Video Visibility on/off (great for low data users)
  const toggleVideoEnabled = () => {
    setIsVideoEnabled(!isVideoEnabled);
  };

  return (
    <div className="relative overflow-hidden pt-6 pb-12 sm:py-16 lg:py-20 animate-in fade-in duration-300 w-full max-w-full" id="main-content">
      
      {/* ================================================== */}
      {/* BACKGROUND VIDEO LAYER & SOPHISTICATED OVERLAYS    */}
      {/* ================================================== */}
      {isVideoEnabled && (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            ref={videoRef}
            key={currentVideo.url}
            autoPlay
            loop
            muted
            playsInline
            poster={heroIllustration}
            onLoadedData={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-30 sm:opacity-40 scale-105 filter saturate-75 brightness-95' : 'opacity-0'
            }`}
          >
            <source src={currentVideo.url} type="video/mp4" />
          </video>
          
          {/* Editorial Double Layer Overlay: Parchment tone + Radial vignette to preserve contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF8]/95 via-[#FDFCF8]/85 to-[#FDFCF8]/70 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8]/40 via-transparent to-[#FDFCF8]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(#173C2C_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        </div>
      )}

      {/* Subtle Fallback Radial Ambient Glow */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-b from-[#EAE6DC]/60 via-[#FDFCF8]/20 to-transparent blur-3xl -z-10" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Main 2-Column Hero Grid: Narrative Left, 3D Journey Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            
            {/* Signature Journey Stage Tracker */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#DDD7CC] text-[10px] sm:text-[11px] font-mono font-medium text-[#57534E] shadow-2xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse shrink-0" />
              <span className="text-[#173C2C] font-bold">{t.youAreHere}</span>
              <span className="text-[#A8A29E]">→</span>
              <span className="font-semibold text-[#173C2C]">{t.discover.toUpperCase()}</span>
              <span className="text-[#A8A29E]">→</span>
              <span className="font-semibold text-[#173C2C]">{t.learn.toUpperCase()}</span>
              <span className="text-[#A8A29E]">→</span>
              <span className="text-[#EA580C] font-bold">{t.nextOpportunity.toUpperCase()}</span>
            </div>

            {/* Editorial Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="editorial-title text-3xl sm:text-5xl lg:text-6xl font-bold text-[#161616] tracking-tight leading-[1.1]">
                {t.heroHeadline}
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg font-serif text-[#3D3A37] leading-relaxed max-w-xl font-normal">
                {t.heroSubtitle}
              </p>
            </div>

            {/* Primary Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                type="button"
                onClick={hasRoadmap ? viewRoadmap : openOnboarding}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm bg-[#173C2C] hover:bg-[#102B1F] text-[#FDFCF8] text-sm sm:text-base font-bold shadow-md border border-[#0D241A] cursor-pointer hover:shadow-lg transition-all duration-200"
                id="hero-find-step-btn"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#FBBF24] transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
                <span>{hasRoadmap ? t.hero.viewRoadmapBtn : t.hero.findStepBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={exploreOpportunities}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-sm bg-[#FFFFFF]/95 hover:bg-[#F4F1EA] text-[#3D3A37] hover:text-[#161616] text-xs sm:text-sm font-semibold border border-[#DDD7CC] shadow-2xs transition-all duration-200 cursor-pointer backdrop-blur-xs"
                id="hero-explore-btn"
              >
                <Compass className="w-4 h-4 text-[#173C2C]" aria-hidden="true" />
                <span>{t.hero.exploreBtn}</span>
              </button>
            </div>

            {/* Trust Micro-Badges & Interactive Ambient Video Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[#57534E]">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#173C2C] shrink-0" />
                  <span>{t.freeFirst}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#173C2C] shrink-0" />
                  <span>{t.lowData}</span>
                </span>
              </div>

              {/* Background Video Control Floating Pill */}
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#DDD7CC] text-[10px] font-mono text-[#57534E] shadow-2xs">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="p-1 hover:text-[#173C2C] cursor-pointer"
                  title={isPlaying ? t.hero.pauseVideo : t.hero.playVideo}
                  aria-label={isPlaying ? t.hero.pauseVideo : t.hero.playVideo}
                >
                  {isPlaying ? <Pause className="w-3 h-3 text-[#173C2C]" /> : <Play className="w-3 h-3 text-[#EA580C]" />}
                </button>
                <span className="text-[#DDD7CC]">|</span>
                <button
                  type="button"
                  onClick={toggleVideoEnabled}
                  className="px-1 hover:text-[#173C2C] cursor-pointer flex items-center gap-1"
                  title={isVideoEnabled ? t.hero.hideVideo : t.hero.showVideo}
                >
                  {isVideoEnabled ? (
                    <>
                      <Video className="w-3 h-3 text-[#173C2C]" />
                      <span>{t.hero.hideVideo}</span>
                    </>
                  ) : (
                    <>
                      <VideoOff className="w-3 h-3 text-[#78716C]" />
                      <span>{t.hero.showVideo}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Visual Journey Composition with Floating Cards */}
          <div className="lg:col-span-6 relative perspective-1000 w-full">
            
            {/* The Main Journey Visual Card with Layered Depth */}
            <div className="relative rounded-lg overflow-hidden border border-[#E7E3DA] bg-[#FFFFFF]/95 backdrop-blur-md shadow-xl p-3 sm:p-4 group">
              
              {/* Bespoke Editorial Journey Art */}
              <div className="relative h-56 sm:h-80 md:h-96 w-full rounded-md overflow-hidden bg-[#FAF8F5]">
                <img
                  src={heroIllustration}
                  alt="A young student moving along an upward luminous trajectory toward education, skill building, and career opportunities"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C2C]/80 via-transparent to-transparent" />
                
                {/* Milestone Overlay Marker */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-[#FDFCF8]">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FBBF24] block">
                      {t.appName}
                    </span>
                    <span className="editorial-title text-sm sm:text-base lg:text-lg font-bold">
                      {t.hero.cardHighlight}
                    </span>
                  </div>
                  <span className="px-2 sm:px-2.5 py-1 rounded-xs bg-[#173C2C]/90 backdrop-blur-xs border border-[#FDFCF8]/20 text-[10px] font-mono font-semibold">
                    {t.stepOf.replace('{current}', '1').replace('{total}', '4')}
                  </span>
                </div>
              </div>

              {/* Floating 3D Opportunity Card #1 (Top Right) */}
              <div className="hidden sm:flex absolute -top-3 -right-3 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E7E3DA] p-2.5 sm:p-3 rounded-md shadow-lg items-center gap-2.5 animate-float-subtle">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-sm bg-[#173C2C] text-[#FDFCF8] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase font-bold text-[#EA580C] block">{t.categories.scholarships}</span>
                  <span className="text-xs font-serif font-bold text-[#161616] block">100% Free Support</span>
                </div>
              </div>

              {/* Floating 3D Opportunity Card #2 (Bottom Left) */}
              <div className="hidden sm:flex absolute -bottom-3 -left-3 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E7E3DA] p-2.5 sm:p-3 rounded-md shadow-lg items-center gap-2.5 animate-float-delayed">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-sm bg-[#EA580C] text-[#FDFCF8] flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase font-bold text-[#173C2C] block">{t.categories.freeCourses}</span>
                  <span className="text-xs font-serif font-bold text-[#161616] block">{t.mobileFriendly}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 3 Core Product Pillars with 3D Card Depth */}
        <div className="space-y-6 pt-6 border-t border-[#E7E3DA]">
          <div className="text-left max-w-xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#173C2C] block">
              {t.builtAroundConstraints.toUpperCase()}
            </span>
            <h2 className="editorial-title text-xl sm:text-2xl font-bold text-[#161616]">
              {t.hero.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 text-left">
            
            {/* 1. FREE-FIRST */}
            <div className="card-3d p-5 sm:p-6 rounded-md bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E7E3DA] space-y-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#FAF8F5] border border-[#E7E3DA] flex items-center justify-center text-[#173C2C]">
                <Coins className="w-5 h-5 text-[#173C2C]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#161616]">
                  1. {t.freeFirst}
                </h3>
                <p className="editorial-title text-base sm:text-lg font-bold text-[#173C2C] mt-0.5">
                  {t.hero.freeFirstTitle}
                </p>
              </div>
              <p className="text-xs font-serif text-[#57534E] leading-relaxed">
                {t.hero.freeFirstDesc}
              </p>
            </div>

            {/* 2. LOW-DATA */}
            <div className="card-3d p-5 sm:p-6 rounded-md bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E7E3DA] space-y-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#FAF8F5] border border-[#E7E3DA] flex items-center justify-center text-[#173C2C]">
                <WifiOff className="w-5 h-5 text-[#173C2C]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#161616]">
                  2. {t.lowData}
                </h3>
                <p className="editorial-title text-base sm:text-lg font-bold text-[#173C2C] mt-0.5">
                  {t.hero.lowDataTitle}
                </p>
              </div>
              <p className="text-xs font-serif text-[#57534E] leading-relaxed">
                {t.hero.lowDataDesc}
              </p>
            </div>

            {/* 3. PERSONALIZED */}
            <div className="card-3d p-5 sm:p-6 rounded-md bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E7E3DA] space-y-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#FAF8F5] border border-[#E7E3DA] flex items-center justify-center text-[#EA580C]">
                <Smartphone className="w-5 h-5 text-[#EA580C]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#161616]">
                  3. {t.mobileFriendly}
                </h3>
                <p className="editorial-title text-base sm:text-lg font-bold text-[#EA580C] mt-0.5">
                  {t.hero.mobileTitle}
                </p>
              </div>
              <p className="text-xs font-serif text-[#57534E] leading-relaxed">
                {t.hero.mobileDesc}
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
