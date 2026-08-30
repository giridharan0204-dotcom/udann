import React, { useState } from 'react';
import { 
  UserRoadmap, 
  UserProfile, 
  AppLanguage, 
  RoadmapTask 
} from '../types';
import { translations } from '../data/translations';
import { 
  CheckCircle2, 
  Clock, 
  Coins, 
  Wifi, 
  Smartphone, 
  Download, 
  ArrowRight, 
  Sparkles, 
  Check, 
  RotateCcw,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  AlertCircle,
  HelpCircle,
  Award,
  Layers
} from 'lucide-react';
import { VERIFIED_OPPORTUNITIES } from '../data/opportunities';

interface RoadmapViewProps {
  roadmap: UserRoadmap;
  profile: UserProfile | null;
  language: AppLanguage;
  completedTaskIds: string[];
  toggleTaskCompletion: (taskId: string) => void;
  openOnboarding: () => void;
  goToJourney: () => void;
  goToExplore: () => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  roadmap,
  profile,
  language,
  completedTaskIds,
  toggleTaskCompletion,
  openOnboarding,
  goToJourney,
  goToExplore,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [realityCheckTooltip, setRealityCheckTooltip] = useState<string | null>(null);

  const t = translations[language] || translations.en;

  // Find the exact immediate NEXT task to spotlight
  let currentNextTask: { task: RoadmapTask; weekNum: number; stageName: string } | null = null;
  for (const week of roadmap.weeks) {
    for (const task of week.tasks) {
      if (!completedTaskIds.includes(task.id)) {
        currentNextTask = { task, weekNum: week.weekNumber, stageName: week.stageName };
        break;
      }
    }
    if (currentNextTask) break;
  }

  // Fallback to first task if all completed
  const activeTask = currentNextTask?.task || roadmap.weeks[0]?.tasks[0];
  const activeStageName = currentNextTask?.stageName || 'Practice';

  // 4-Point REALITY CHECK
  const isBudgetFit = !profile || profile.monthlyBudget === 'zero' || profile.monthlyBudget === 'under_500';
  const isDeviceFit = true; // All UDAAN verified steps work on basic phone
  const isInternetFit = true; // All tasks are low data/offline ready
  const isTimeFit = true; // Scaled to user daily hours

  const allFit = isBudgetFit && isDeviceFit && isInternetFit && isTimeFit;

  // Find matching direct official opportunity URL if any
  const matchedOpp = VERIFIED_OPPORTUNITIES.find(o => 
    o.category === 'free_courses' || o.id === activeTask?.actionUrl
  ) || VERIFIED_OPPORTUNITIES[0];

  // Save Plain Text Summary
  const handleSaveOffline = () => {
    const textContent = `
==================================================
UDAAN — MY NEXT STEP & EXPEDITION
==================================================
Personalized for: ${roadmap.profileSummary.interestName}
Goal: ${roadmap.profileSummary.goalName}
Available Time: ${roadmap.profileSummary.hoursPerDay}
Budget: ${roadmap.profileSummary.budgetType}
Device: ${roadmap.profileSummary.deviceType}
Generated: ${new Date().toLocaleDateString()}

--------------------------------------------------
YOUR IMMEDIATE NEXT STEP:
"${activeTask?.title}"
Why it fits: Free, Low Data, Mobile-friendly, Fits your daily schedule.
--------------------------------------------------

FULL 4-STAGE ACTION SEQUENCE:
${roadmap.weeks.map(w => `
[${w.stageName.toUpperCase()}] Week ${w.weekNumber}: ${w.title}
Key Milestone: ${w.keyOutcome}
Tasks:
${w.tasks.map((t, idx) => `  ${completedTaskIds.includes(t.id) ? '[✓]' : '[ ]'} ${idx + 1}. ${t.title} (${t.estimatedMinutes}m, Cost: ${t.cost}, Data: ${t.dataRequirement})`).join('\n')}
`).join('\n')}
==================================================
`;
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Udaan_My_Next_Step.txt`;
    link.click();
    URL.revokeObjectURL(url);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-6 sm:space-y-8 animate-in fade-in duration-200" id="main-content">
      
      {/* Visual Journey Path Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E7E3DA] pb-4">
        <div className="inline-flex items-center flex-wrap gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F1EA] border border-[#DDD7CC] text-[11px] font-mono font-medium text-[#57534E] shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#173C2C]" />
          <span className="text-[#173C2C] font-bold">YOU ARE HERE</span>
          <span className="text-[#A8A29E]">→</span>
          <span className="text-[#173C2C] font-semibold">DISCOVER</span>
          <span className="text-[#A8A29E]">→</span>
          <span className="text-[#173C2C] font-semibold">LEARN</span>
          <span className="text-[#A8A29E]">→</span>
          <span className="text-[#EA580C] font-bold bg-[#FAF8F5] px-2 py-0.5 rounded-full border border-[#EA580C]/30 animate-pulse">
            PRACTICE NOW
          </span>
          <span className="text-[#A8A29E]">→</span>
          <span>BUILD</span>
          <span className="text-[#A8A29E]">→</span>
          <span>APPLY</span>
        </div>

        <button
          onClick={openOnboarding}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#173C2C] hover:underline cursor-pointer self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.updateAnswers}</span>
        </button>
      </div>

      {/* ================================================== */}
      {/* FEATURE #1: "MY NEXT STEP" (PREMIUM 3D FOCUS)      */}
      {/* ================================================== */}
      <div className="relative card-3d bg-[#FFFFFF] border-2 border-[#173C2C] rounded-lg p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-md overflow-hidden">
        
        {/* Soft Decorative Ambient Corner Gradient */}
        <div 
          className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-[#173C2C]/10 via-[#EA580C]/5 to-transparent rounded-full blur-2xl" 
          aria-hidden="true" 
        />

        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E3DA] pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#173C2C] text-[#FDFCF8] text-[11px] font-mono font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
            <span>{t.nav.myNextStep.toUpperCase()}</span>
          </div>
          <span className="text-xs font-mono text-[#57534E] bg-[#FAF8F5] px-3 py-1 rounded-sm border border-[#E7E3DA]">
            Stage: <strong className="text-[#161616]">{activeStageName}</strong> &bull; Week {currentNextTask?.weekNum || 1}
          </span>
        </div>

        {/* Action Title & Clear Directive */}
        <div className="space-y-2">
          <h1 className="editorial-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161616] leading-tight">
            "{activeTask?.title}"
          </h1>
          <p className="text-sm sm:text-base font-serif text-[#44403C] leading-relaxed">
            {activeTask?.actionGuide || 'Complete this foundational exercise to advance your career path without paying any fees or needing high-end equipment.'}
          </p>
        </div>

        {/* WHY THIS FITS YOU */}
        <div className="p-4 sm:p-5 rounded-md bg-[#FAF8F5] border border-[#E7E3DA] space-y-3">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#173C2C] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#173C2C]" />
            <span>{t.whyThisFitsYou}:</span>
          </span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-serif text-[#3D3A37]">
            <div className="flex items-center gap-2 bg-[#FFFFFF] p-2 rounded-xs border border-[#E7E3DA]">
              <Check className="w-4 h-4 text-[#173C2C] shrink-0 font-bold" />
              <span><strong>{t.freeFirst}</strong> (100% Zero Cost)</span>
            </div>
            <div className="flex items-center gap-2 bg-[#FFFFFF] p-2 rounded-xs border border-[#E7E3DA]">
              <Check className="w-4 h-4 text-[#173C2C] shrink-0 font-bold" />
              <span><strong>{t.beginner}</strong> (Step-by-step guidance)</span>
            </div>
            <div className="flex items-center gap-2 bg-[#FFFFFF] p-2 rounded-xs border border-[#E7E3DA]">
              <Check className="w-4 h-4 text-[#173C2C] shrink-0 font-bold" />
              <span><strong>Mobile friendly</strong> (Works on basic phone)</span>
            </div>
            <div className="flex items-center gap-2 bg-[#FFFFFF] p-2 rounded-xs border border-[#E7E3DA]">
              <Check className="w-4 h-4 text-[#173C2C] shrink-0 font-bold" />
              <span><strong>Fits your time</strong> ({roadmap.profileSummary.hoursPerDay})</span>
            </div>
          </div>
        </div>

        {/* 4 Essential Quick Parameters: COST, TIME, DATA, LEVEL */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center border-y border-[#E7E3DA] py-3 sm:py-4 text-xs font-mono">
          <div className="p-2 rounded-xs bg-[#FAF8F5] border border-[#E7E3DA]">
            <span className="text-[10px] text-[#78716C] uppercase block font-semibold">{t.cost}</span>
            <span className="font-bold text-[#173C2C] text-xs sm:text-sm">{t.freeFirst} (₹0)</span>
          </div>
          <div className="p-2 rounded-xs bg-[#FAF8F5] border border-[#E7E3DA]">
            <span className="text-[10px] text-[#78716C] uppercase block font-semibold">{t.timeCommitment}</span>
            <span className="font-bold text-[#161616] text-xs sm:text-sm">{activeTask?.estimatedMinutes || 45} mins</span>
          </div>
          <div className="p-2 rounded-xs bg-[#FAF8F5] border border-[#E7E3DA]">
            <span className="text-[10px] text-[#78716C] uppercase block font-semibold">{t.dataRequirement}</span>
            <span className="font-bold text-[#173C2C] text-xs sm:text-sm">{t.lowData}</span>
          </div>
          <div className="p-2 rounded-xs bg-[#FAF8F5] border border-[#E7E3DA]">
            <span className="text-[10px] text-[#78716C] uppercase block font-semibold">{t.level}</span>
            <span className="font-bold text-[#161616] text-xs sm:text-sm capitalize">{t.beginner}</span>
          </div>
        </div>

        {/* ================================================== */}
        {/* FEATURE #2: REALITY CHECK (VISUAL INTERACTION)     */}
        {/* ================================================== */}
        <div className="p-4 sm:p-5 rounded-md bg-[#F4F1EA] border border-[#DDD7CC] space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#161616] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#173C2C]" />
              <span>{t.realityCheck}</span>
            </span>
            <span className="text-xs font-mono text-[#173C2C] font-bold px-2 py-0.5 bg-[#FFFFFF] rounded-xs border border-[#DDD7CC] shadow-2xs">
              {allFit ? `${t.goodFit.toUpperCase()} ✓` : 'VERIFIED MATCH'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 text-xs font-mono">
            <button 
              type="button"
              onClick={() => setRealityCheckTooltip('Cost is ₹0. No hidden registration fees.')}
              className="p-2.5 bg-[#FFFFFF] rounded-sm border border-[#E7E3DA] flex items-center justify-between hover:border-[#173C2C] transition-all cursor-pointer text-left"
            >
              <span className="flex items-center gap-1.5 font-medium text-[#161616]">💰 MONEY</span>
              <span className="text-[#173C2C] font-bold">✓</span>
            </button>

            <button 
              type="button"
              onClick={() => setRealityCheckTooltip('Runs seamlessly on any smartphone web browser.')}
              className="p-2.5 bg-[#FFFFFF] rounded-sm border border-[#E7E3DA] flex items-center justify-between hover:border-[#173C2C] transition-all cursor-pointer text-left"
            >
              <span className="flex items-center gap-1.5 font-medium text-[#161616]">📱 DEVICE</span>
              <span className="text-[#173C2C] font-bold">✓</span>
            </button>

            <button 
              type="button"
              onClick={() => setRealityCheckTooltip('Lightweight pages with minimal data consumption.')}
              className="p-2.5 bg-[#FFFFFF] rounded-sm border border-[#E7E3DA] flex items-center justify-between hover:border-[#173C2C] transition-all cursor-pointer text-left"
            >
              <span className="flex items-center gap-1.5 font-medium text-[#161616]">📶 INTERNET</span>
              <span className="text-[#173C2C] font-bold">✓</span>
            </button>

            <button 
              type="button"
              onClick={() => setRealityCheckTooltip('Can be completed in self-paced short daily sessions.')}
              className="p-2.5 bg-[#FFFFFF] rounded-sm border border-[#E7E3DA] flex items-center justify-between hover:border-[#173C2C] transition-all cursor-pointer text-left"
            >
              <span className="flex items-center gap-1.5 font-medium text-[#161616]">⏰ TIME</span>
              <span className="text-[#173C2C] font-bold">✓</span>
            </button>
          </div>

          {realityCheckTooltip && (
            <p className="text-xs font-mono text-[#57534E] bg-[#FAF8F5] p-2 rounded-xs border border-[#E7E3DA] animate-in fade-in duration-100">
              ℹ️ {realityCheckTooltip}
            </p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
            <p className="text-xs sm:text-sm font-serif text-[#173C2C] font-semibold">
              {allFit 
                ? 'Result: "Great! This opportunity fits your situation."' 
                : 'Result: "This may be difficult with your current situation."'}
            </p>

            {!allFit && (
              <button
                onClick={goToExplore}
                className="text-xs font-mono font-bold text-[#EA580C] hover:underline cursor-pointer"
              >
                LET'S FIND A BETTER OPTION →
              </button>
            )}
          </div>
        </div>

        {/* Direct Primary Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          
          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            {/* Mark Completed Checkbox Button */}
            <button
              type="button"
              onClick={() => activeTask && toggleTaskCompletion(activeTask.id)}
              className={`px-4 py-3.5 rounded-sm text-xs font-mono font-bold transition-all border w-full sm:w-auto cursor-pointer ${
                activeTask && completedTaskIds.includes(activeTask.id)
                  ? 'bg-[#173C2C] text-[#FDFCF8] border-[#173C2C]'
                  : 'bg-[#FFFFFF] hover:bg-[#FAF8F5] text-[#173C2C] border-[#173C2C]'
              }`}
            >
              {activeTask && completedTaskIds.includes(activeTask.id) 
                ? `✓ ${t.applied}` 
                : t.startStep}
            </button>

            {/* Primary CTA: Start This Step -> */}
            <a
              href={matchedOpp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-sm bg-[#173C2C] hover:bg-[#102B1F] text-[#FDFCF8] text-xs sm:text-sm font-bold border border-[#0D241A] shadow-md hover:shadow-lg transition-all w-full sm:w-auto cursor-pointer"
            >
              <span>{t.startStep}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Secondary Button: Try Another Opportunity */}
          <button
            type="button"
            onClick={goToExplore}
            className="px-5 py-3.5 rounded-sm bg-[#FFFFFF] hover:bg-[#F4F1EA] text-[#44403C] hover:text-[#161616] text-xs font-semibold font-mono border border-[#DDD7CC] transition-colors w-full sm:w-auto text-center cursor-pointer shadow-2xs"
          >
            {t.exploreOpportunities}
          </button>

        </div>

      </div>

      {/* 4-Week Milestone Sequence with 3D elevation */}
      <div className="bg-[#FFFFFF] border border-[#E7E3DA] rounded-lg p-5 sm:p-8 space-y-4 shadow-sm">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E7E3DA] pb-4">
          <div>
            <h2 className="editorial-title text-xl font-bold text-[#161616]">
              Your Step-by-Step Pathway
            </h2>
            <p className="text-xs sm:text-sm font-serif text-[#57534E]">
              Complete one step at a time at your own pace without pressure.
            </p>
          </div>

          <button
            type="button"
            onClick={handleSaveOffline}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm text-xs font-mono font-semibold bg-[#F4F1EA] text-[#173C2C] border border-[#DDD7CC] hover:bg-[#EAE5D9] transition-all shadow-2xs self-start sm:self-auto cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{downloadSuccess ? 'Saved to Device!' : t.saveOffline}</span>
          </button>
        </div>

        <div className="space-y-3.5 pt-2">
          {roadmap.weeks.map((week) => {
            const isWeekComplete = week.tasks.every(t => completedTaskIds.includes(t.id));
            return (
              <div 
                key={week.weekNumber} 
                className={`p-4 sm:p-5 rounded-md border transition-all ${
                  isWeekComplete 
                    ? 'bg-[#FAF8F5] border-[#DDD7CC] opacity-90' 
                    : 'bg-[#FFFFFF] border-[#E7E3DA] hover:border-[#C7C2B6]'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs bg-[#F4F1EA] text-[#173C2C] border border-[#DDD7CC] uppercase">
                      Stage: {week.stageName}
                    </span>
                    <span className="text-xs sm:text-sm font-bold font-serif text-[#161616]">
                      Week {week.weekNumber}: {week.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#78716C]">
                    {week.tasks.filter(t => completedTaskIds.includes(t.id)).length} / {week.tasks.length} Done
                  </span>
                </div>

                <div className="space-y-2">
                  {week.tasks.map((task) => {
                    const isDone = completedTaskIds.includes(task.id);
                    return (
                      <div
                        key={task.id}
                        onClick={() => toggleTaskCompletion(task.id)}
                        className={`p-3 rounded-sm border text-xs sm:text-sm flex items-center justify-between cursor-pointer transition-colors ${
                          isDone 
                            ? 'bg-[#F4F1EA] border-[#DDD7CC] text-[#78716C] line-through' 
                            : 'bg-[#FAF8F5] border-[#E7E3DA] text-[#161616] hover:border-[#173C2C]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <input 
                            type="checkbox" 
                            checked={isDone} 
                            onChange={() => {}} 
                            className="rounded-xs text-[#173C2C] focus:ring-0 cursor-pointer w-4 h-4"
                          />
                          <span className="font-serif">{task.title}</span>
                        </div>
                        <span className="text-[11px] font-mono text-[#78716C] shrink-0 ml-2">{task.estimatedMinutes} mins</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
