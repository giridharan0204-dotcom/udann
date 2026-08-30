import React from 'react';
import { 
  UserProfile, 
  UserRoadmap, 
  AppLanguage, 
  Opportunity 
} from '../types';
import { translations } from '../data/translations';
import { VERIFIED_OPPORTUNITIES } from '../data/opportunities';
import { 
  CheckCircle, 
  Circle, 
  ArrowRight, 
  Bookmark, 
  Sparkles, 
  Compass, 
  ExternalLink,
  RotateCcw,
  Check,
  TrendingUp,
  Award
} from 'lucide-react';

interface MyJourneyViewProps {
  roadmap: UserRoadmap | null;
  profile: UserProfile | null;
  language: AppLanguage;
  completedTaskIds: string[];
  bookmarkedOpportunityIds: string[];
  appliedOpportunityIds: string[];
  notes: Record<string, string>;
  onToggleTask: (taskId: string) => void;
  onToggleBookmark: (id: string) => void;
  onToggleApply: (id: string) => void;
  onUpdateNotes: (key: string, note: string) => void;
  goToExplore: () => void;
  goToRoadmap: () => void;
  openOnboarding: () => void;
}

export const MyJourneyView: React.FC<MyJourneyViewProps> = ({
  roadmap,
  profile,
  language,
  completedTaskIds,
  bookmarkedOpportunityIds,
  appliedOpportunityIds,
  onToggleBookmark,
  goToExplore,
  goToRoadmap,
  openOnboarding,
}) => {
  const t = translations[language] || translations.en;

  // Saved opportunities
  const savedOpportunities = VERIFIED_OPPORTUNITIES.filter((opp) =>
    bookmarkedOpportunityIds.includes(opp.id)
  );

  // 6 Defined Milestones for the UDAAN Signature Journey
  const milestones = [
    { id: 'discover', name: 'DISCOVER', desc: 'Identify interest & goal', status: 'completed' },
    { id: 'learn', name: 'LEARN', desc: 'Build core concepts', status: 'completed' },
    { id: 'practice', name: 'PRACTICE', desc: 'Hands-on free exercises', status: 'current' },
    { id: 'build', name: 'BUILD', desc: 'Mini portfolio projects', status: 'upcoming' },
    { id: 'apply', name: 'APPLY', desc: 'Resume & official portals', status: 'upcoming' },
    { id: 'opportunity', name: 'OPPORTUNITY', desc: 'Jobs, Grants & Internships', status: 'upcoming' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-6 sm:space-y-10 animate-in fade-in duration-200" id="main-content">
      
      {/* Header with high contrast editorial styling */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E7E3DA] pb-6">
        <div>
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#173C2C] block">
            {t.nav.myJourney.toUpperCase()}
          </span>
          <h1 className="editorial-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161616]">
            Where You Stand Today
          </h1>
          <p className="text-xs sm:text-sm text-[#57534E] font-serif mt-1">
            Visual milestone tracker keeping you focused on the immediate next win.
          </p>
        </div>

        <button
          type="button"
          onClick={goToRoadmap}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#173C2C] hover:bg-[#102B1F] text-[#FDFCF8] text-xs sm:text-sm font-bold border border-[#0D241A] shadow-md hover:shadow-lg transition-all cursor-pointer self-start sm:self-auto"
        >
          <span>{t.startStep}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* ================================================== */}
      {/* UNIQUE SIGNATURE "UDAAN JOURNEY" VISUAL            */}
      {/* ================================================== */}
      <div className="relative card-3d bg-[#FFFFFF] border-2 border-[#173C2C] rounded-lg p-5 sm:p-8 space-y-6 sm:space-y-8 shadow-md overflow-hidden">
        
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E3DA] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C] animate-ping" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#173C2C]">
              YOU ARE HERE &bull; STEP 3 OF 6
            </span>
          </div>
          <span className="text-xs font-mono text-[#57534E] bg-[#FAF8F5] px-3 py-1 rounded-sm border border-[#E7E3DA]">
            Active Goal: {profile?.goal ? profile.goal.replace('_', ' ') : 'Skill Development'}
          </span>
        </div>

        {/* Desktop Horizontal Curved Visual Milestone Track */}
        <div className="hidden md:block relative py-6">
          {/* Continuous trajectory path line */}
          <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-[#E7E3DA] -z-0" />
          <div className="absolute top-1/2 left-6 w-[45%] -translate-y-1/2 h-1 bg-gradient-to-r from-[#173C2C] to-[#EA580C] -z-0 transition-all duration-500" />

          <div className="relative z-10 grid grid-cols-6 gap-2">
            {milestones.map((st, idx) => {
              const isCompleted = st.status === 'completed';
              const isCurrent = st.status === 'current';

              return (
                <div key={st.id} className="flex flex-col items-center text-center space-y-2.5 group">
                  {/* Node Circle */}
                  <div 
                    className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isCurrent
                        ? 'bg-[#EA580C] text-[#FDFCF8] border-[#FFFFFF] shadow-lg ring-4 ring-[#EA580C]/20 scale-110'
                        : isCompleted
                        ? 'bg-[#173C2C] text-[#FDFCF8] border-[#173C2C] shadow-xs'
                        : 'bg-[#FAF8F5] text-[#A8A29E] border-[#DDD7CC]'
                    }`}
                  >
                    {isCompleted && <Check className="w-5 h-5 font-bold" />}
                    {isCurrent && <span className="font-mono font-bold text-xs">NOW</span>}
                    {!isCompleted && !isCurrent && <span className="font-mono text-xs text-[#78716C]">{idx + 1}</span>}
                  </div>

                  {/* Node Label */}
                  <div>
                    <span className={`text-xs font-mono font-bold block ${isCurrent ? 'text-[#EA580C]' : isCompleted ? 'text-[#173C2C]' : 'text-[#78716C]'}`}>
                      {st.name}
                    </span>
                    <span className="text-[10px] font-serif text-[#57534E] line-clamp-1 max-w-[110px]">
                      {st.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Milestone Track */}
        <div className="md:hidden space-y-3">
          {milestones.map((st, idx) => {
            const isCompleted = st.status === 'completed';
            const isCurrent = st.status === 'current';

            return (
              <div 
                key={st.id}
                className={`p-3.5 sm:p-4 rounded-md border flex items-center justify-between transition-all ${
                  isCurrent 
                    ? 'bg-[#FAF8F5] border-2 border-[#EA580C] shadow-xs' 
                    : isCompleted 
                    ? 'bg-[#F4F1EA] border-[#DDD7CC] text-[#3D3A37]' 
                    : 'bg-[#FFFFFF] border-[#E7E3DA] text-[#A8A29E]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                    isCurrent 
                      ? 'bg-[#EA580C] text-[#FDFCF8]' 
                      : isCompleted 
                      ? 'bg-[#173C2C] text-[#FDFCF8]' 
                      : 'bg-[#FAF8F5] border border-[#DDD7CC] text-[#78716C]'
                  }`}>
                    {isCompleted ? '✓' : idx + 1}
                  </div>
                  <div>
                    <span className={`text-xs font-mono font-bold block ${isCurrent ? 'text-[#EA580C]' : isCompleted ? 'text-[#173C2C]' : 'text-[#78716C]'}`}>
                      {st.name}
                    </span>
                    <span className="text-xs font-serif text-[#57534E]">
                      {st.desc}
                    </span>
                  </div>
                </div>

                {isCurrent && (
                  <span className="text-[10px] font-mono font-bold uppercase bg-[#EA580C] text-[#FDFCF8] px-2.5 py-0.5 rounded-xs shrink-0 ml-2">
                    ACTIVE NOW
                  </span>
                )}
                {isCompleted && (
                  <span className="text-[10px] font-mono text-[#173C2C] font-bold shrink-0 ml-2">
                    Completed ✓
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Highlighted Next Step CTA */}
        <div className="pt-2">
          <button
            type="button"
            onClick={goToRoadmap}
            className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-sm bg-[#173C2C] hover:bg-[#102B1F] text-[#FDFCF8] text-sm sm:text-base font-bold border border-[#0D241A] shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>{t.startStep}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Saved & Applied Opportunities Box */}
      <div className="bg-[#FFFFFF] border border-[#E7E3DA] rounded-lg p-5 sm:p-8 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E7E3DA] pb-4">
          <div>
            <h2 className="editorial-title text-lg sm:text-xl font-bold text-[#161616]">
              {t.savedOpportunities} ({savedOpportunities.length})
            </h2>
            <p className="text-xs font-serif text-[#57534E]">
              Quick links to verified programs you've bookmarked for your journey.
            </p>
          </div>
          <button
            type="button"
            onClick={goToExplore}
            className="text-xs font-mono font-semibold text-[#173C2C] hover:underline cursor-pointer self-start sm:self-auto"
          >
            {t.exploreOpportunities} →
          </button>
        </div>

        {savedOpportunities.length > 0 ? (
          <div className="space-y-3 pt-2">
            {savedOpportunities.map((opp) => (
              <div 
                key={opp.id}
                className="p-4 rounded-md border border-[#E7E3DA] bg-[#FAF8F5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#C7C2B6] transition-all"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#F4F1EA] text-[#173C2C] border border-[#DDD7CC] rounded-xs uppercase">
                      {opp.category.replace('_', ' ')}
                    </span>
                    <span className="text-[10px] font-mono text-[#78716C]">
                      Source: {opp.source}
                    </span>
                  </div>
                  <h3 className="text-sm font-serif font-bold text-[#161616]">{opp.title}</h3>
                  <span className="text-xs font-mono text-[#57534E] block">
                    {opp.provider} &bull; {opp.cost === 'free' ? 'Free (₹0)' : opp.costLabel} &bull; {opp.timeCommitment}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => onToggleBookmark(opp.id)}
                    className="text-xs font-mono text-[#78716C] hover:text-[#161616] px-2.5 py-1.5 rounded-sm border border-[#E7E3DA] bg-[#FFFFFF] hover:bg-[#F4F1EA] cursor-pointer"
                    title="Remove from saved"
                  >
                    Remove
                  </button>
                  <a
                    href={opp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm text-xs font-mono font-bold bg-[#173C2C] hover:bg-[#102B1F] text-[#FDFCF8] border border-[#0D241A] shadow-xs cursor-pointer"
                  >
                    <span>{t.opportunity.viewOfficial}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 sm:p-8 text-center bg-[#FAF8F5] rounded-md border border-dashed border-[#DDD7CC] space-y-3">
            <p className="text-sm text-[#57534E] font-serif">
              You haven't bookmarked any opportunities yet.
            </p>
            <button
              type="button"
              onClick={goToExplore}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#173C2C] text-[#FDFCF8] text-xs font-semibold hover:bg-[#102B1F] cursor-pointer shadow-xs"
            >
              <Compass className="w-4 h-4" />
              <span>Browse 100% Free Verified Opportunities</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
