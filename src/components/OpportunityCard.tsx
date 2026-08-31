import React, { useState } from 'react';
import { 
  Opportunity, 
  UserProfile, 
  AppLanguage 
} from '../types';
import { translations } from '../data/translations';
import { 
  CheckCircle, 
  Coins, 
  Wifi, 
  Clock, 
  Smartphone, 
  Calendar, 
  MapPin, 
  Sparkles, 
  HelpCircle, 
  Bookmark, 
  ExternalLink,
  Info,
  ChevronDown,
  ChevronUp,
  Tag,
  Check,
  AlertCircle,
  Laptop,
  ArrowRight,
  ShieldCheck,
  Layers
} from 'lucide-react';
import { evaluateAffordability } from '../utils/affordabilityChecker';

interface OpportunityCardProps {
  opportunity: Opportunity;
  profile: UserProfile | null;
  language: AppLanguage;
  isBookmarked: boolean;
  isApplied: boolean;
  onToggleBookmark: (id: string) => void;
  onToggleApply: (id: string) => void;
  onOpenAffordability: (opp: Opportunity) => void;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opportunity,
  profile,
  language,
  isBookmarked,
  isApplied,
  onToggleBookmark,
  onToggleApply,
  onOpenAffordability,
}) => {
  const [expanded, setExpanded] = useState(false);
  const t = translations[language] || translations.en;
  const assessment = evaluateAffordability(opportunity, profile);
  const isGoodFit = assessment.status === 'GOOD_MATCH';

  return (
    <article 
      className={`bg-[#FFFFFF] rounded-sm border transition-all p-4 sm:p-6 space-y-4 relative flex flex-col justify-between max-w-full ${
        isGoodFit 
          ? 'border-2 border-[#173C2C] shadow-xs' 
          : 'border border-[#E7E3DA] hover:border-[#C7C2B6]'
      }`}
      aria-labelledby={`opp-title-${opportunity.id}`}
    >
      <div className="space-y-3.5">
        
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Category Tag */}
            <span className="px-2.5 py-0.5 rounded-xs bg-[#F4F1EA] text-[#44403C] text-[10px] font-mono font-bold border border-[#DDD7CC] uppercase tracking-wider">
              {opportunity.category === 'scholarships' && `🎓 ${t.categories.scholarships}`}
              {opportunity.category === 'free_courses' && `📚 ${t.categories.freeCourses}`}
              {opportunity.category === 'internships' && `💼 ${t.categories.internships}`}
              {opportunity.category === 'jobs' && `💻 ${t.categories.jobs}`}
              {opportunity.category === 'mentorship' && `🧑‍🏫 ${t.categories.mentorship}`}
              {opportunity.category === 'skill_programs' && `🛠️ ${t.categories.skillPrograms}`}
            </span>

            {/* Level Tag */}
            <span className="px-2 py-0.5 rounded-xs bg-[#FAF8F5] text-[#57534E] text-[10px] font-mono font-medium border border-[#E7E3DA] capitalize">
              {opportunity.level === 'beginner' ? (t.beginner || 'Beginner') : opportunity.level}
            </span>

            {/* "GOOD FIT FOR YOU ✓" */}
            {isGoodFit && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-xs bg-[#173C2C] text-[#FDFCF8] text-[10px] font-mono font-bold">
                <Sparkles className="w-3 h-3 text-[#FDFCF8]" aria-hidden="true" />
                <span>{(t.goodFit || t.card?.goodFit || 'GOOD FIT FOR YOU').toUpperCase()} ✓</span>
              </span>
            )}
          </div>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={() => onToggleBookmark(opportunity.id)}
            className={`p-1.5 rounded-xs border transition-colors focus-visible:ring-2 focus-visible:ring-[#173C2C] cursor-pointer ${
              isBookmarked 
                ? 'bg-[#173C2C] text-[#FDFCF8] border-[#173C2C]' 
                : 'text-[#78716C] border-[#E7E3DA] hover:bg-[#F4F1EA] hover:text-[#161616]'
            }`}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark opportunity'}
            title={isBookmarked ? 'Bookmarked' : 'Save for later'}
          >
            <Bookmark className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* Title & Provider */}
        <div>
          <h3 id={`opp-title-${opportunity.id}`} className="text-base sm:text-lg font-serif font-bold text-[#161616] leading-snug">
            {opportunity.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-xs font-semibold text-[#173C2C] font-mono">
              {opportunity.provider}
            </span>
            <span className="text-[10px] text-[#78716C] font-mono bg-[#FAF8F5] px-2 py-0.5 rounded-xs border border-[#E7E3DA]">
              {t.source}: {opportunity.source || 'Official Website'}
            </span>
          </div>
        </div>

        {/* 4-Point Quick Diagnostics Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          
          {/* Cost */}
          <div className="flex items-center gap-1.5 p-2 rounded-xs bg-[#FAF8F5] border border-[#E7E3DA]">
            <Coins className="w-3.5 h-3.5 text-[#173C2C] shrink-0" aria-hidden="true" />
            <div className="min-w-0">
              <span className="text-[9px] font-mono text-[#78716C] uppercase block">{t.cost}</span>
              <span className="font-semibold text-[#161616] truncate font-mono text-[11px] block">
                {opportunity.cost === 'free' ? `${t.freeFirst} (₹0)` : opportunity.costLabel}
              </span>
            </div>
          </div>

          {/* Level */}
          <div className="flex items-center gap-1.5 p-2 rounded-xs bg-[#FAF8F5] border border-[#E7E3DA]">
            <Layers className="w-3.5 h-3.5 text-[#173C2C] shrink-0" aria-hidden="true" />
            <div className="min-w-0">
              <span className="text-[9px] font-mono text-[#78716C] uppercase block">{t.level}</span>
              <span className="font-medium text-[#161616] truncate font-mono text-[11px] capitalize block">
                {opportunity.level === 'beginner' ? t.beginner : opportunity.level}
              </span>
            </div>
          </div>

          {/* Time Required */}
          <div className="flex items-center gap-1.5 p-2 rounded-xs bg-[#FAF8F5] border border-[#E7E3DA]">
            <Clock className="w-3.5 h-3.5 text-[#173C2C] shrink-0" aria-hidden="true" />
            <div className="min-w-0">
              <span className="text-[9px] font-mono text-[#78716C] uppercase block">{t.timeCommitment}</span>
              <span className="font-medium text-[#57534E] truncate font-mono text-[11px] block">
                {opportunity.timeCommitment}
              </span>
            </div>
          </div>

          {/* Data Requirement */}
          <div className="flex items-center gap-1.5 p-2 rounded-xs bg-[#FAF8F5] border border-[#E7E3DA]">
            <Wifi className="w-3.5 h-3.5 text-[#173C2C] shrink-0" aria-hidden="true" />
            <div className="min-w-0">
              <span className="text-[9px] font-mono text-[#78716C] uppercase block">{t.dataRequirement}</span>
              <span className="font-medium text-[#57534E] truncate font-mono text-[11px] block">
                {opportunity.dataRequirement === 'low_data' ? t.lowData : 'Standard Data'}
              </span>
            </div>
          </div>

        </div>

        {/* Why it may fit the user */}
        {opportunity.whyItFits && (
          <div className="p-2.5 rounded-xs bg-[#F4F1EA] border border-[#DDD7CC] flex items-start gap-2 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <span className="font-mono font-bold text-[10px] uppercase text-[#B45309] block">
                Why this matches you:
              </span>
              <p className="font-serif text-[#44403C] text-xs mt-0.5 leading-snug">
                {opportunity.whyItFits}
              </p>
            </div>
          </div>
        )}

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#57534E] font-serif leading-relaxed line-clamp-2">
          {opportunity.description}
        </p>

        {/* Free Alternative for Paid Listings */}
        {opportunity.cost === 'paid' && opportunity.freeAlternative && (
          <div className="p-3 bg-[#F0FDF4] rounded-xs border border-[#86EFAC] text-xs space-y-1">
            <span className="font-mono font-bold text-[#166534] text-[10px] uppercase block">
              💡 Free Alternative Available:
            </span>
            <p className="font-semibold text-[#15803D]">{opportunity.freeAlternative.title} ({opportunity.freeAlternative.provider})</p>
            <p className="text-[#166534] font-serif">{opportunity.freeAlternative.description}</p>
          </div>
        )}

        {/* Location & Accuracy Disclaimer */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-[#78716C]">
          <span className="flex items-center gap-1 font-mono text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-[#173C2C]" aria-hidden="true" />
            <span>{opportunity.locationLabel}</span>
          </span>

          <span className="text-[10px] font-mono text-[#78716C] italic">
            Check official website for current eligibility & deadlines.
          </span>
        </div>

        {/* Expandable Full Requirements */}
        {expanded && (
          <div className="pt-3 border-t border-[#E7E3DA] space-y-3 animate-in fade-in duration-150">
            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#78716C] mb-1">
                {t.eligibility} & {t.prerequisites}:
              </h4>
              <ul className="space-y-1 text-xs text-[#44403C] font-serif">
                {opportunity.eligibility.map((el, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#173C2C] font-bold">•</span>
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#78716C] mb-1">
                {t.skillsCovered}:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {opportunity.skillsTaught.map((skill, i) => (
                  <span key={i} className="px-2 py-0.5 bg-[#F4F1EA] text-[#44403C] rounded-xs text-[11px] font-mono font-medium border border-[#E7E3DA]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 bg-[#FAF8F5] rounded-xs border border-[#E7E3DA] text-xs text-[#57534E]">
              <span className="font-semibold text-[#161616] block mb-0.5 font-mono text-[11px] uppercase">{t.howToApply}:</span>
              <span className="font-serif">{opportunity.howToApply}</span>
            </div>
          </div>
        )}

      </div>

      {/* Card Action Controls */}
      <div className="pt-4 border-t border-[#E7E3DA] flex flex-wrap items-center justify-between gap-2 mt-2">
        
        {/* Fit Check (Can I afford this?) */}
        <button
          type="button"
          onClick={() => onOpenAffordability(opportunity)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-mono font-semibold text-[#173C2C] bg-[#F4F1EA] hover:bg-[#EAE5D9] border border-[#DDD7CC] transition-colors cursor-pointer"
          id={`afford-btn-${opportunity.id}`}
        >
          <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{t.canIAffordThis}</span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          {/* Details toggle */}
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xs text-xs font-mono font-semibold text-[#57534E] hover:bg-[#F4F1EA] border border-transparent hover:border-[#E7E3DA] transition-colors cursor-pointer"
          >
            <span>{expanded ? 'Less' : 'Details'}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {/* Mark Applied Checkbox Button */}
          <button
            type="button"
            onClick={() => onToggleApply(opportunity.id)}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xs text-xs font-semibold font-mono transition-all border cursor-pointer ${
              isApplied
                ? 'bg-[#F4F1EA] text-[#173C2C] border-[#DDD7CC]'
                : 'bg-[#FFFFFF] hover:bg-[#FAF8F5] text-[#57534E] border-[#E7E3DA]'
            }`}
            title={isApplied ? 'Applied' : 'Mark as applied in My Journey'}
          >
            {isApplied ? `✓ ${t.applied}` : t.apply}
          </button>

          {/* PRIMARY DIRECT LINK BUTTON: "View Opportunity →" */}
          <a
            href={opportunity.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xs text-xs font-bold bg-[#173C2C] hover:bg-[#102B1F] text-[#FDFCF8] border border-[#0D241A] shadow-2xs transition-all active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[#173C2C]"
            id={`view-opp-${opportunity.id}`}
            aria-label={`View official opportunity website for ${opportunity.title} (opens in a new tab)`}
          >
            <span>{t.viewOpportunity}</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

      </div>
    </article>
  );
};
