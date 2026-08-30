import React from 'react';
import { X, Heart, Feather, ShieldCheck, CheckCircle2, Sparkles, Users } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'about' | 'privacy';
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161616]/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#FAF8F5] border border-[#E7E3DA] rounded-sm w-full max-w-xl shadow-2xl overflow-hidden my-6 transition-all">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#E7E3DA] bg-[#FFFFFF] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-xs bg-[#F4F1EA] text-[#173C2C] border border-[#DDD7CC]">
              {type === 'about' ? <Feather className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#173C2C] block">
                {type === 'about' ? 'INCLUSIVE OPPORTUNITY PROJECT' : 'DATA INTEGRITY & PRIVACY'}
              </span>
              <h2 className="editorial-title text-base sm:text-lg font-bold text-[#161616]">
                {type === 'about' ? 'About UDAAN' : 'Privacy & Low-Data Commitment'}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xs text-[#78716C] hover:bg-[#F4F1EA] hover:text-[#161616] border border-transparent hover:border-[#E7E3DA] focus-visible:ring-2 focus-visible:ring-[#173C2C]"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs sm:text-sm text-[#57534E] leading-relaxed font-serif">
          {type === 'about' ? (
            <>
              <p>
                <strong className="text-[#161616] font-sans font-bold">UDAAN</strong> ("Your next opportunity starts here") was designed for a clear mission: <em>bridging the guidance gap for underprivileged youth</em>.
              </p>
              
              <div className="p-4 bg-[#FFFFFF] rounded-xs border border-[#E7E3DA] space-y-2">
                <h4 className="font-mono font-bold uppercase text-[10px] tracking-wider text-[#173C2C]">
                  Our 4 Core Design Pillars:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#161616]">
                  <li>&bull; <strong>FREE-FIRST:</strong> We prioritize 100% free courses, open-source resources, and verified grants before paid programs.</li>
                  <li>&bull; <strong>LOW-DATA:</strong> Designed to run effortlessly on 2G/3G networks, conserving precious mobile recharge data with text-first learning paths.</li>
                  <li>&bull; <strong>MOBILE-FRIENDLY:</strong> Built around the reality that a smartphone is often a learner's only connected device.</li>
                  <li>&bull; <strong>ACTION-FOCUSED:</strong> We do not overwhelm you with 500 courses. We provide a single, realistic 30-day "Next Step" milestone path.</li>
                </ul>
              </div>

              <p className="text-xs text-[#78716C]">
                Every young person has potential. With transparent constraints and clear directions, ambitious goals become achievable milestones.
              </p>
            </>
          ) : (
            <>
              <p>
                We believe underprivileged and mobile users deserve utmost privacy and lightweight digital dignity.
              </p>

              <div className="p-4 bg-[#FFFFFF] rounded-xs border border-[#E7E3DA] space-y-2">
                <h4 className="font-mono font-bold uppercase text-[10px] tracking-wider text-[#173C2C]">
                  Our Privacy Standards:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#161616]">
                  <li>&bull; <strong>Zero Third-Party Trackers:</strong> We do not run invasive behavioral ad trackers or sell data.</li>
                  <li>&bull; <strong>Local-First Storage:</strong> Your answers, roadmap, and study notes are stored securely on your own device browser (`localStorage`).</li>
                  <li>&bull; <strong>No Paywalls:</strong> All navigational tools and roadmaps are 100% free to access, download, and print.</li>
                </ul>
              </div>

              <p className="text-xs text-[#78716C]">
                You can clear your answers anytime by clicking "Edit My Answers" or clearing browser site data.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#E7E3DA] bg-[#FFFFFF] flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xs bg-[#173C2C] text-[#FDFCF8] text-xs font-semibold hover:bg-[#102B1F] transition-colors border border-[#173C2C]"
          >
            Understood
          </button>
        </div>

      </div>
    </div>
  );
};
