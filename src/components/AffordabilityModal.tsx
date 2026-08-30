import React from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Coins, 
  Wifi, 
  Clock, 
  Smartphone, 
  Languages, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Opportunity, UserProfile, AffordabilityAssessment } from '../types';
import { evaluateAffordability } from '../utils/affordabilityChecker';

interface AffordabilityModalProps {
  opportunity: Opportunity | null;
  profile: UserProfile | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectAlternative?: (altTitle: string) => void;
}

export const AffordabilityModal: React.FC<AffordabilityModalProps> = ({
  opportunity,
  profile,
  isOpen,
  onClose,
  onSelectAlternative,
}) => {
  if (!isOpen || !opportunity) return null;

  const assessment: AffordabilityAssessment = evaluateAffordability(opportunity, profile);

  const isGood = assessment.status === 'GOOD_MATCH';
  const isPotential = assessment.status === 'POTENTIAL_FIT';
  const isNotFit = assessment.status === 'MAY_NOT_FIT';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161616]/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="affordability-modal-title"
    >
      <div className="bg-[#FAF8F5] border border-[#E7E3DA] rounded-sm w-full max-w-xl shadow-2xl overflow-hidden my-6 transition-all">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#E7E3DA] bg-[#FFFFFF] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#173C2C] block">
              DIAGNOSTIC ASSESSMENT
            </span>
            <h2 id="affordability-modal-title" className="editorial-title text-base sm:text-lg font-bold text-[#161616]">
              Can I Afford This?
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xs text-[#78716C] hover:bg-[#F4F1EA] hover:text-[#161616] border border-transparent hover:border-[#E7E3DA] focus-visible:ring-2 focus-visible:ring-[#173C2C]"
            aria-label="Close diagnostic"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Opportunity Title Pill */}
          <div className="bg-[#FFFFFF] p-3.5 rounded-xs border border-[#E7E3DA] space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#78716C]">
              Evaluating Opportunity:
            </span>
            <h3 className="editorial-title text-sm font-bold text-[#161616]">
              {opportunity.title}
            </h3>
            <p className="text-xs font-mono text-[#57534E]">
              Offered by {opportunity.provider}
            </p>
          </div>

          {/* Diagnostic Status Card */}
          <div className={`p-4 rounded-xs border flex items-start gap-3.5 ${
            isGood
              ? 'bg-[#F4F1EA] border-[#173C2C] text-[#173C2C]'
              : isPotential
              ? 'bg-[#FEF3C7] border-[#D97706] text-[#92400E]'
              : 'bg-[#FEE2E2] border-[#DC2626] text-[#991B1B]'
          }`}>
            <div className="mt-0.5">
              {isGood ? (
                <CheckCircle2 className="w-5 h-5 text-[#173C2C]" aria-hidden="true" />
              ) : isPotential ? (
                <Zap className="w-5 h-5 text-[#B45309]" aria-hidden="true" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-[#DC2626]" aria-hidden="true" />
              )}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                  Result:
                </span>
                <span className="text-xs font-mono font-bold">
                  {isGood ? 'GOOD MATCH' : isPotential ? 'POTENTIAL FIT' : 'MAY NOT FIT'}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-serif leading-relaxed">
                {assessment.empowermentNote}
              </p>
            </div>
          </div>

          {/* Detailed Criteria Checklist */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#78716C]">
              Resource Breakdown
            </h4>

            <div className="grid grid-cols-1 gap-2">
              
              {/* Cost Check */}
              <div className="p-3 bg-[#FFFFFF] rounded-xs border border-[#E7E3DA] flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <Coins className="w-4 h-4 text-[#173C2C] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold text-[#161616] block">Cost: {assessment.criteria.cost.label}</span>
                    <span className="text-[11px] text-[#57534E]">{assessment.criteria.cost.detail}</span>
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs ${
                  assessment.criteria.cost.status === 'pass'
                    ? 'bg-[#F4F1EA] text-[#173C2C] border border-[#DDD7CC]'
                    : assessment.criteria.cost.status === 'warn'
                    ? 'bg-amber-100 text-amber-900 border border-amber-200'
                    : 'bg-red-100 text-red-900 border border-red-200'
                }`}>
                  {assessment.criteria.cost.status === 'pass' ? '✓ Fits' : assessment.criteria.cost.status === 'warn' ? '⚠ Check' : '✕ Fee required'}
                </span>
              </div>

              {/* Data Check */}
              <div className="p-3 bg-[#FFFFFF] rounded-xs border border-[#E7E3DA] flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <Wifi className="w-4 h-4 text-[#173C2C] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold text-[#161616] block">Internet Data: {assessment.criteria.data.label}</span>
                    <span className="text-[11px] text-[#57534E]">{assessment.criteria.data.detail}</span>
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs ${
                  assessment.criteria.data.status === 'pass' 
                    ? 'bg-[#F4F1EA] text-[#173C2C] border border-[#DDD7CC]' 
                    : 'bg-amber-100 text-amber-900 border border-amber-200'
                }`}>
                  {assessment.criteria.data.status === 'pass' ? '✓ Low Data' : '⚠ Needs Data'}
                </span>
              </div>

              {/* Device Check */}
              <div className="p-3 bg-[#FFFFFF] rounded-xs border border-[#E7E3DA] flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <Smartphone className="w-4 h-4 text-[#173C2C] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold text-[#161616] block">Device: {assessment.criteria.device.label}</span>
                    <span className="text-[11px] text-[#57534E]">{assessment.criteria.device.detail}</span>
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs ${
                  assessment.criteria.device.status === 'pass' 
                    ? 'bg-[#F4F1EA] text-[#173C2C] border border-[#DDD7CC]' 
                    : 'bg-amber-100 text-amber-900 border border-amber-200'
                }`}>
                  {assessment.criteria.device.status === 'pass' ? '✓ Mobile Ready' : '⚠ Laptop Best'}
                </span>
              </div>

              {/* Time Check */}
              <div className="p-3 bg-[#FFFFFF] rounded-xs border border-[#E7E3DA] flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#173C2C] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold text-[#161616] block">Time Commitment: {assessment.criteria.time.label}</span>
                    <span className="text-[11px] text-[#57534E]">{assessment.criteria.time.detail}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs bg-[#F4F1EA] text-[#173C2C] border border-[#DDD7CC]">
                  ✓ Realistic
                </span>
              </div>

              {/* Language Check */}
              <div className="p-3 bg-[#FFFFFF] rounded-xs border border-[#E7E3DA] flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <Languages className="w-4 h-4 text-[#173C2C] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold text-[#161616] block">Language: {assessment.criteria.language.label}</span>
                    <span className="text-[11px] text-[#57534E]">{assessment.criteria.language.detail}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs bg-[#F4F1EA] text-[#173C2C] border border-[#DDD7CC]">
                  ✓ Accessible
                </span>
              </div>

            </div>
          </div>

          {/* Free-First Alternative Feature */}
          {opportunity.freeAlternative && (
            <div className="p-4 rounded-xs bg-[#FFFFFF] border border-[#B45309] shadow-2xs space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B45309] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Looking for a free option?</span>
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs bg-[#F4F1EA] text-[#173C2C] border border-[#DDD7CC]">
                  100% FREE
                </span>
              </div>

              <h5 className="editorial-title text-sm font-bold text-[#161616]">
                {opportunity.freeAlternative.title}
              </h5>

              <p className="text-xs font-serif text-[#57534E] leading-relaxed">
                {opportunity.freeAlternative.description}
              </p>

              <div className="flex items-center gap-2 pt-1 text-[10px] font-mono text-[#78716C]">
                <span>Provider: {opportunity.freeAlternative.provider}</span>
                <span>&bull;</span>
                <span className="text-[#173C2C] font-semibold">Data: {opportunity.freeAlternative.dataRequirement}</span>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#E7E3DA] bg-[#FFFFFF] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xs text-xs font-mono font-semibold text-[#57534E] hover:bg-[#FAF8F5] border border-[#DDD7CC] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
