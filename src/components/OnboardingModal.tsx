import React, { useState } from 'react';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  BookOpen,
  Laptop, 
  Smartphone, 
  Check, 
  Coins, 
  Wifi, 
  Clock 
} from 'lucide-react';
import { 
  PrimaryGoal, 
  SkillLevel, 
  DailyHours, 
  MonthlyBudget, 
  InternetAccess, 
  DeviceAccess, 
  UserProfile, 
  AppLanguage,
  EducationLevel,
  CareerInterest
} from '../types';
import { translations } from '../data/translations';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (profile: UserProfile) => void;
  existingProfile: UserProfile | null;
  language: AppLanguage;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  onComplete,
  existingProfile,
  language,
}) => {
  const [step, setStep] = useState<number>(1);
  const totalSteps = 4;
  const t = translations[language] || translations.en;

  // 1. WHAT DO YOU WANT? (Job / Skill / Internship / Scholarship / Education)
  const [goal, setGoal] = useState<PrimaryGoal>(existingProfile?.goal || 'first_job');
  
  // 2. WHAT IS YOUR LEVEL? (Beginner / Intermediate / Advanced)
  const [skillLevel, setSkillLevel] = useState<SkillLevel>(existingProfile?.skillLevel || 'beginner');

  // 3. WHAT DEVICE DO YOU HAVE? (Phone / Laptop / Both)
  const [deviceAccess, setDeviceAccess] = useState<DeviceAccess>(existingProfile?.deviceAccess || 'basic_smartphone');

  // 4. WHAT ARE YOUR LIMITS? (Budget, Internet, Hours)
  const [monthlyBudget, setMonthlyBudget] = useState<MonthlyBudget>(existingProfile?.monthlyBudget || 'zero');
  const [internetAccess, setInternetAccess] = useState<InternetAccess>(existingProfile?.internetAccess || 'daily_mobile_1_5gb');
  const [dailyHours, setDailyHours] = useState<DailyHours>(existingProfile?.dailyHours || '1_hour');

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Map cleanly to UserProfile
      const mappedEducation: EducationLevel = existingProfile?.educationLevel || '12th_pass';
      let mappedInterest: CareerInterest = 'web_tech';
      if (goal === 'first_job') mappedInterest = 'data_office_skills';
      if (goal === 'freelancing') mappedInterest = 'digital_marketing';
      if (goal === 'continue_education') mappedInterest = 'government_exams';

      const profile: UserProfile = {
        goal,
        educationLevel: mappedEducation,
        careerInterest: mappedInterest,
        skillLevel,
        dailyHours,
        monthlyBudget,
        internetAccess,
        deviceAccess,
        createdAt: new Date().toISOString(),
      };
      onComplete(profile);
      onClose();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#161616]/75 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
    >
      <div className="bg-[#FFFFFF] border border-[#E7E3DA] rounded-sm w-full max-w-lg shadow-xl overflow-hidden my-4 sm:my-6 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-[#E7E3DA] bg-[#FAF8F5] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#173C2C] block">
              {t.findNextStep.toUpperCase()}
            </span>
            <span className="text-xs font-mono font-semibold text-[#57534E]">
              Step {step} of {totalSteps}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xs text-[#78716C] hover:bg-[#F4F1EA] hover:text-[#161616] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#E7E3DA] h-1">
          <div 
            className="bg-[#173C2C] h-1 transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-6 space-y-5 sm:space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* STEP 1: WHAT DO YOU WANT? */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 id="onboarding-title" className="editorial-title text-xl font-bold text-[#161616]">
                  1. What do you want?
                </h2>
                <p className="text-xs text-[#57534E] font-serif">
                  Choose your primary focus area right now.
                </p>
              </div>

              <div className="space-y-2">
                {[
                  { id: 'first_job', label: '💼 Job', desc: 'Find entry-level roles, office work or local jobs' },
                  { id: 'new_skill', label: '🛠️ Skill', desc: 'Learn practical digital, vocational or tech skills' },
                  { id: 'internship', label: '💼 Internship', desc: 'Gain real work experience & stipends' },
                  { id: 'scholarship', label: '🎓 Scholarship', desc: 'Get funding & financial fee support for education' },
                  { id: 'continue_education', label: '📚 Education', desc: 'College admissions, degrees & vocational courses' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id as PrimaryGoal)}
                    className={`w-full p-3 text-left rounded-xs border transition-all flex items-center justify-between cursor-pointer ${
                      goal === item.id 
                        ? 'border-2 border-[#173C2C] bg-[#FAF8F5]' 
                        : 'border-[#E7E3DA] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <div>
                      <span className="text-sm font-semibold text-[#161616] block">{item.label}</span>
                      <span className="text-xs text-[#57534E] font-serif">{item.desc}</span>
                    </div>
                    {goal === item.id && <Check className="w-4 h-4 text-[#173C2C] shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: WHAT IS YOUR LEVEL? */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 id="onboarding-title" className="editorial-title text-xl font-bold text-[#161616]">
                  2. What is your level?
                </h2>
                <p className="text-xs text-[#57534E] font-serif">
                  We'll tailor your recommendation so you never feel lost.
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  { id: 'beginner', label: 'Beginner', desc: 'Starting from scratch. No prior experience.' },
                  { id: 'some_basics', label: 'Intermediate', desc: 'Know some basics. Ready for structured practice.' },
                  { id: 'intermediate', label: 'Advanced', desc: 'Comfortable with concepts. Ready to build proof & apply.' },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setSkillLevel(lvl.id as SkillLevel)}
                    className={`w-full p-3.5 text-left rounded-xs border transition-all flex items-center justify-between cursor-pointer ${
                      skillLevel === lvl.id 
                        ? 'border-2 border-[#173C2C] bg-[#FAF8F5]' 
                        : 'border-[#E7E3DA] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <div>
                      <span className="text-sm font-semibold text-[#161616] block">{lvl.label}</span>
                      <span className="text-xs text-[#57534E] font-serif">{lvl.desc}</span>
                    </div>
                    {skillLevel === lvl.id && <Check className="w-4 h-4 text-[#173C2C] shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: WHAT DEVICE DO YOU HAVE? */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 id="onboarding-title" className="editorial-title text-xl font-bold text-[#161616]">
                  3. What device do you have?
                </h2>
                <p className="text-xs text-[#57534E] font-serif">
                  We ensure every recommendation runs on your actual hardware.
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  { id: 'basic_smartphone', label: '📱 Phone', desc: 'Smartphone with web browser' },
                  { id: 'laptop_pc', label: '💻 Laptop / Computer', desc: 'Personal or shared PC/laptop' },
                  { id: 'shared_family_phone', label: '📱 & 💻 Shared / Both', desc: 'Access to both mobile and shared computer' },
                ].map((dev) => (
                  <button
                    key={dev.id}
                    type="button"
                    onClick={() => setDeviceAccess(dev.id as DeviceAccess)}
                    className={`w-full p-3.5 text-left rounded-xs border transition-all flex items-center justify-between cursor-pointer ${
                      deviceAccess === dev.id 
                        ? 'border-2 border-[#173C2C] bg-[#FAF8F5]' 
                        : 'border-[#E7E3DA] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <div>
                      <span className="text-sm font-semibold text-[#161616] block">{dev.label}</span>
                      <span className="text-xs text-[#57534E] font-serif">{dev.desc}</span>
                    </div>
                    {deviceAccess === dev.id && <Check className="w-4 h-4 text-[#173C2C] shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: WHAT ARE YOUR LIMITS? */}
          {step === 4 && (
            <div className="space-y-5">
              <div className="space-y-1">
                <h2 id="onboarding-title" className="editorial-title text-xl font-bold text-[#161616]">
                  4. What are your limits?
                </h2>
                <p className="text-xs text-[#57534E] font-serif">
                  UDAAN checks your real constraints so you never face hidden costs.
                </p>
              </div>

              {/* Budget */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-[#161616] flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 text-[#173C2C]" />
                  <span>MONEY / BUDGET:</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setMonthlyBudget('zero')}
                    className={`p-2.5 text-xs font-semibold rounded-xs border text-left cursor-pointer ${
                      monthlyBudget === 'zero' ? 'border-2 border-[#173C2C] bg-[#FAF8F5]' : 'border-[#E7E3DA]'
                    }`}
                  >
                    <span className="block font-bold">Free Only (₹0)</span>
                    <span className="text-[10px] text-[#57534E] font-normal font-serif">Zero expense required</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMonthlyBudget('under_500')}
                    className={`p-2.5 text-xs font-semibold rounded-xs border text-left cursor-pointer ${
                      monthlyBudget === 'under_500' ? 'border-2 border-[#173C2C] bg-[#FAF8F5]' : 'border-[#E7E3DA]'
                    }`}
                  >
                    <span className="block font-bold">Low Budget</span>
                    <span className="text-[10px] text-[#57534E] font-normal font-serif">Under ₹500/month</span>
                  </button>
                </div>
              </div>

              {/* Internet */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-[#161616] flex items-center gap-1.5">
                  <Wifi className="w-3.5 h-3.5 text-[#173C2C]" />
                  <span>INTERNET ACCESS:</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setInternetAccess('daily_mobile_1_5gb')}
                    className={`p-2.5 text-xs font-semibold rounded-xs border text-left cursor-pointer ${
                      internetAccess === 'daily_mobile_1_5gb' ? 'border-2 border-[#173C2C] bg-[#FAF8F5]' : 'border-[#E7E3DA]'
                    }`}
                  >
                    <span className="block font-bold">Low Internet</span>
                    <span className="text-[10px] text-[#57534E] font-normal font-serif">Mobile daily data pack</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setInternetAccess('unlimited_wifi')}
                    className={`p-2.5 text-xs font-semibold rounded-xs border text-left cursor-pointer ${
                      internetAccess === 'unlimited_wifi' ? 'border-2 border-[#173C2C] bg-[#FAF8F5]' : 'border-[#E7E3DA]'
                    }`}
                  >
                    <span className="block font-bold">Normal Internet</span>
                    <span className="text-[10px] text-[#57534E] font-normal font-serif">Wi-Fi or abundant data</span>
                  </button>
                </div>
              </div>

              {/* Available Time */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-[#161616] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#173C2C]" />
                  <span>AVAILABLE TIME:</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '1_hour', label: '1 hr/day' },
                    { id: '2_hours', label: '2 hrs/day' },
                    { id: '3_to_4_hours', label: '3-4 hrs/day' },
                  ].map((hrs) => (
                    <button
                      key={hrs.id}
                      type="button"
                      onClick={() => setDailyHours(hrs.id as DailyHours)}
                      className={`p-2 text-xs font-mono text-center rounded-xs border cursor-pointer ${
                        dailyHours === hrs.id ? 'border-2 border-[#173C2C] bg-[#FAF8F5] font-bold text-[#173C2C]' : 'border-[#E7E3DA] text-[#57534E]'
                      }`}
                    >
                      {hrs.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer Navigation */}
        <div className="px-5 sm:px-6 py-4 bg-[#FAF8F5] border-t border-[#E7E3DA] flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs border border-[#DDD7CC] bg-[#FFFFFF] text-xs font-semibold text-[#57534E] hover:bg-[#F4F1EA] cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-2.5 rounded-xs bg-[#173C2C] hover:bg-[#102B1F] text-[#FDFCF8] text-xs font-bold shadow-xs border border-[#0D241A] cursor-pointer"
          >
            <span>{step === totalSteps ? t.findNextStep : 'Next Step'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
