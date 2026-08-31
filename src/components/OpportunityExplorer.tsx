import React, { useState, useMemo } from 'react';
import { 
  Opportunity, 
  OpportunityCategory, 
  UserProfile, 
  AppLanguage 
} from '../types';
import { VERIFIED_OPPORTUNITIES } from '../data/opportunities';
import { translations } from '../data/translations';
import { OpportunityCard } from './OpportunityCard';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  Sparkles, 
  RotateCcw, 
  Info, 
  Layers,
  GraduationCap,
  Briefcase,
  Laptop,
  BookOpen,
  Users,
  Wrench,
  Check,
  ShieldCheck,
  Smartphone,
  WifiOff,
  Coins
} from 'lucide-react';
import { evaluateAffordability } from '../utils/affordabilityChecker';

interface OpportunityExplorerProps {
  profile: UserProfile | null;
  language: AppLanguage;
  bookmarkedIds: string[];
  appliedIds: string[];
  onToggleBookmark: (id: string) => void;
  onToggleApply: (id: string) => void;
  onOpenAffordability: (opp: Opportunity) => void;
  openOnboarding: () => void;
}

export const OpportunityExplorer: React.FC<OpportunityExplorerProps> = ({
  profile,
  language,
  bookmarkedIds,
  appliedIds,
  onToggleBookmark,
  onToggleApply,
  onOpenAffordability,
  openOnboarding,
}) => {
  const t = translations[language] || translations.en;

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [costFilter, setCostFilter] = useState<string>('all');
  const [dataFilter, setDataFilter] = useState<string>('all');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [mobileOnlyFilter, setMobileOnlyFilter] = useState(false);
  const [onlyGoodFit, setOnlyGoodFit] = useState(false);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Categories prioritised: Scholarships, Free Courses, Internships, Jobs, Mentorship
  const categoriesList = [
    { id: 'all', label: t.explorer.allCategories, icon: Layers },
    { id: 'scholarships', label: `🎓 ${t.categories.scholarships}`, icon: GraduationCap },
    { id: 'free_courses', label: `📚 ${t.categories.freeCourses}`, icon: BookOpen },
    { id: 'internships', label: `💼 ${t.categories.internships}`, icon: Laptop },
    { id: 'jobs', label: `💻 ${t.categories.jobs}`, icon: Briefcase },
    { id: 'mentorship', label: `🧑‍🏫 ${t.categories.mentorship}`, icon: Users },
  ];

  // Filter logic
  const filteredOpportunities = useMemo(() => {
    return VERIFIED_OPPORTUNITIES.filter((opp) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = opp.title.toLowerCase().includes(q);
        const matchProvider = opp.provider.toLowerCase().includes(q);
        const matchDesc = opp.description.toLowerCase().includes(q);
        const matchSource = opp.source.toLowerCase().includes(q);
        const matchSkills = opp.skillsTaught.some(s => s.toLowerCase().includes(q));
        if (!matchTitle && !matchProvider && !matchDesc && !matchSource && !matchSkills) {
          return false;
        }
      }

      // 2. Category
      if (selectedCategory !== 'all' && opp.category !== selectedCategory) {
        return false;
      }

      // 3. Cost (Free)
      if (costFilter === 'free' && opp.cost !== 'free') {
        return false;
      } else if (costFilter === 'paid' && opp.cost !== 'paid') {
        return false;
      }

      // 4. Low Data
      if (dataFilter === 'low_data' && opp.dataRequirement !== 'low_data') {
        return false;
      }

      // 5. Level (Beginner)
      if (levelFilter === 'beginner' && opp.level !== 'beginner') {
        return false;
      }

      // 6. Mobile Friendly
      if (mobileOnlyFilter && !opp.mobileFriendly) {
        return false;
      }

      // 7. Only Good Fit
      if (onlyGoodFit) {
        const assessment = evaluateAffordability(opp, profile);
        if (assessment.status !== 'GOOD_MATCH') {
          return false;
        }
      }

      return true;
    });
  }, [
    searchQuery,
    selectedCategory,
    costFilter,
    dataFilter,
    levelFilter,
    mobileOnlyFilter,
    onlyGoodFit,
    profile,
  ]);

  const activeFiltersCount = [
    costFilter !== 'all',
    dataFilter !== 'all',
    levelFilter !== 'all',
    mobileOnlyFilter,
    onlyGoodFit,
  ].filter(Boolean).length;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setCostFilter('all');
    setDataFilter('all');
    setLevelFilter('all');
    setMobileOnlyFilter(false);
    setOnlyGoodFit(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8 animate-in fade-in duration-200" id="main-content">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E7E3DA] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-[#F4F1EA] text-[#173C2C] text-[10px] font-mono font-bold border border-[#DDD7CC] uppercase tracking-widest mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B45309]" />
            <span>{t.explorer.verifiedOfficial}</span>
          </div>
          <h1 className="editorial-title text-2xl sm:text-3xl font-bold text-[#161616] tracking-tight">
            {t.explorer.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#57534E] mt-1 max-w-2xl font-serif">
            {t.explorer.subtitle}
          </p>
        </div>

        {/* Personalized Profile Status Indicator */}
        {profile ? (
          <div className="p-3 bg-[#F4F1EA] rounded-xs border border-[#DDD7CC] text-xs text-[#173C2C] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B45309] shrink-0" aria-hidden="true" />
            <span className="font-mono text-[11px]">
              Matching budget: {profile.monthlyBudget === 'zero' ? '₹0' : profile.monthlyBudget} &bull; {profile.dailyHours.replace('_', ' ')}/day
            </span>
          </div>
        ) : (
          <button
            onClick={openOnboarding}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#B45309] text-[#FDFCF8] text-xs font-semibold shadow-2xs hover:bg-[#92400E] border border-[#9A3412] transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.explorer.setProfileNotice}</span>
          </button>
        )}
      </div>

      {/* Category Pills Bar (Scholarships, Free Courses, Internships, Jobs, Mentorship) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Opportunity Categories">
        {categoriesList.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xs text-xs font-semibold font-mono shrink-0 transition-all border cursor-pointer ${
                isSelected
                  ? 'bg-[#173C2C] text-[#FDFCF8] border-[#173C2C] shadow-2xs'
                  : 'bg-[#FFFFFF] text-[#44403C] border-[#E7E3DA] hover:bg-[#F4F1EA]'
              }`}
              id={`cat-tab-${cat.id}`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Search & Simple Filter Pills Bar */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#78716C]" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-10 py-2.5 rounded-xs border border-[#DDD7CC] bg-[#FFFFFF] text-sm text-[#161616] placeholder-[#A8A29E] focus-visible:ring-2 focus-visible:ring-[#173C2C]"
              aria-label="Search opportunities"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#78716C] hover:text-[#161616] cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick "Only Good Fit" Toggle */}
          <button
            onClick={() => setOnlyGoodFit(!onlyGoodFit)}
            className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xs text-xs font-semibold border transition-all cursor-pointer ${
              onlyGoodFit
                ? 'bg-[#F4F1EA] border-[#173C2C] text-[#173C2C]'
                : 'bg-[#FFFFFF] border-[#DDD7CC] text-[#44403C] hover:bg-[#F4F1EA]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B45309]" aria-hidden="true" />
            <span>{t.goodFit}</span>
            {onlyGoodFit && <span className="text-xs font-bold">✓</span>}
          </button>

        </div>

        {/* 4 Simple Quick Filters: Free, Low Data, Beginner, Mobile Friendly */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-[10px] font-mono uppercase font-bold text-[#78716C] mr-1">
            {t.filter}:
          </span>

          {/* FREE Filter */}
          <button
            type="button"
            onClick={() => setCostFilter(costFilter === 'free' ? 'all' : 'free')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-mono font-semibold border transition-all cursor-pointer ${
              costFilter === 'free'
                ? 'bg-[#173C2C] text-[#FDFCF8] border-[#173C2C]'
                : 'bg-[#FFFFFF] text-[#44403C] border-[#E7E3DA] hover:bg-[#FAF8F5]'
            }`}
          >
            <Coins className="w-3 h-3" />
            <span>{t.freeFirst} (₹0)</span>
            {costFilter === 'free' && <span>✓</span>}
          </button>

          {/* LOW DATA Filter */}
          <button
            type="button"
            onClick={() => setDataFilter(dataFilter === 'low_data' ? 'all' : 'low_data')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-mono font-semibold border transition-all cursor-pointer ${
              dataFilter === 'low_data'
                ? 'bg-[#173C2C] text-[#FDFCF8] border-[#173C2C]'
                : 'bg-[#FFFFFF] text-[#44403C] border-[#E7E3DA] hover:bg-[#FAF8F5]'
            }`}
          >
            <WifiOff className="w-3 h-3" />
            <span>{(t.lowData || '').toUpperCase()}</span>
            {dataFilter === 'low_data' && <span>✓</span>}
          </button>

          {/* BEGINNER Filter */}
          <button
            type="button"
            onClick={() => setLevelFilter(levelFilter === 'beginner' ? 'all' : 'beginner')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-mono font-semibold border transition-all cursor-pointer ${
              levelFilter === 'beginner'
                ? 'bg-[#173C2C] text-[#FDFCF8] border-[#173C2C]'
                : 'bg-[#FFFFFF] text-[#44403C] border-[#E7E3DA] hover:bg-[#FAF8F5]'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>{(t.beginner || '').toUpperCase()}</span>
            {levelFilter === 'beginner' && <span>✓</span>}
          </button>

          {/* MOBILE FRIENDLY Filter */}
          <button
            type="button"
            onClick={() => setMobileOnlyFilter(!mobileOnlyFilter)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-mono font-semibold border transition-all cursor-pointer ${
              mobileOnlyFilter
                ? 'bg-[#173C2C] text-[#FDFCF8] border-[#173C2C]'
                : 'bg-[#FFFFFF] text-[#44403C] border-[#E7E3DA] hover:bg-[#FAF8F5]'
            }`}
          >
            <Smartphone className="w-3 h-3" />
            <span>{(t.mobileFriendly || '').toUpperCase()}</span>
            {mobileOnlyFilter && <span>✓</span>}
          </button>

          {/* Clear Filters */}
          {activeFiltersCount > 0 && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#B45309] hover:underline ml-auto cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.explorer.resetFilters}</span>
            </button>
          )}
        </div>
      </div>

      {/* Showing count indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-[#78716C] font-mono border-b border-[#E7E3DA] pb-2">
        <span>
          {t.explorer.showingCount.replace('{count}', filteredOpportunities.length.toString())}
        </span>
        <span>
          {t.explorer.sourceOfficial}
        </span>
      </div>

      {/* Opportunities Grid */}
      {filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
          {filteredOpportunities.map((opp) => (
            <OpportunityCard
              key={opp.id}
              opportunity={opp}
              profile={profile}
              language={language}
              isBookmarked={bookmarkedIds.includes(opp.id)}
              isApplied={appliedIds.includes(opp.id)}
              onToggleBookmark={onToggleBookmark}
              onToggleApply={onToggleApply}
              onOpenAffordability={onOpenAffordability}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-8 sm:p-12 text-center bg-[#FFFFFF] rounded-xs border border-dashed border-[#DDD7CC] space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#F4F1EA] text-[#78716C] flex items-center justify-center mx-auto">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-serif font-bold text-[#161616]">
              {t.noResultsFound}
            </h3>
            <p className="text-xs text-[#57534E] mt-1 max-w-sm mx-auto font-serif">
              {t.explorer.emptyDesc}
            </p>
          </div>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs bg-[#173C2C] text-[#FDFCF8] text-xs font-semibold shadow-2xs hover:bg-[#102B1F] cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.explorer.resetFilters}</span>
          </button>
        </div>
      )}

      {/* Official Links Transparency Notice */}
      <div className="p-4 rounded-xs bg-[#F4F1EA] border border-[#DDD7CC] flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#173C2C] shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1">
          <p className="text-xs font-mono font-bold text-[#161616] uppercase">
            {t.explorer.guaranteeTitle}
          </p>
          <p className="text-xs text-[#57534E] font-serif">
            {t.explorer.guaranteeDesc}
          </p>
        </div>
      </div>

    </div>
  );
};
