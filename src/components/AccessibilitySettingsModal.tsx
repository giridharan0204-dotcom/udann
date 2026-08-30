import React from 'react';
import { 
  X, 
  Settings2, 
  Type, 
  Eye, 
  Sparkles, 
  WifiOff, 
  Languages, 
  Keyboard, 
  Check,
  ShieldCheck,
  Feather,
  User as UserIcon,
  LogOut
} from 'lucide-react';
import { AccessibilitySettings, AppLanguage, User } from '../types';
import { translations } from '../data/translations';

interface AccessibilitySettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AccessibilitySettings;
  updateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  user?: User | null;
  onLogout?: () => void;
}

export const AccessibilitySettingsModal: React.FC<AccessibilitySettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  updateSettings,
  language,
  setLanguage,
  user,
  onLogout,
}) => {
  if (!isOpen) return null;

  const t = translations[language] || translations.en;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161616]/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="accessibility-modal-title"
    >
      <div className="bg-[#FAF8F5] border border-[#E7E3DA] rounded-sm w-full max-w-xl shadow-2xl overflow-hidden my-6 transition-all">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#E7E3DA] bg-[#FFFFFF] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-xs bg-[#F4F1EA] text-[#173C2C] border border-[#DDD7CC]">
              <Settings2 className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#173C2C] block">
                SYSTEM PREFERENCES
              </span>
              <h2 id="accessibility-modal-title" className="editorial-title text-base sm:text-lg font-bold text-[#161616]">
                {t.settings.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xs text-[#78716C] hover:bg-[#F4F1EA] hover:text-[#161616] border border-transparent hover:border-[#E7E3DA] focus-visible:ring-2 focus-visible:ring-[#173C2C] cursor-pointer"
            aria-label="Close settings"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* 1. Language Preference */}
          <div className="bg-[#FFFFFF] p-4 rounded-xs border border-[#E7E3DA] space-y-3">
            <div className="flex items-center gap-2 text-[#173C2C]">
              <Languages className="w-3.5 h-3.5" />
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#161616]">
                Language / भाषा / மொழி
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'en', label: 'English', sub: 'English' },
                { id: 'hi', label: 'हिन्दी', sub: 'Hindi' },
                { id: 'ta', label: 'தமிழ்', sub: 'Tamil' },
              ].map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setLanguage(l.id as AppLanguage)}
                  className={`p-2.5 rounded-xs border text-center transition-all cursor-pointer ${
                    language === l.id
                      ? 'border-[#173C2C] bg-[#F4F1EA] text-[#173C2C] font-semibold shadow-2xs'
                      : 'border-[#E7E3DA] bg-[#FFFFFF] text-[#57534E] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span className="block text-xs font-semibold">{l.label}</span>
                  <span className="text-[10px] font-mono text-[#78716C]">{l.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Text Size Preference */}
          <div className="bg-[#FFFFFF] p-4 rounded-xs border border-[#E7E3DA] space-y-3">
            <div className="flex items-center gap-2 text-[#173C2C]">
              <Type className="w-3.5 h-3.5" />
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#161616]">
                {t.settings.textSize}
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'normal', label: 'Default', size: '100%' },
                { id: 'large', label: 'Large (18px)', size: '112%' },
                { id: 'xlarge', label: 'Extra Large (20px)', size: '125%' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => updateSettings({ textSize: s.id as any })}
                  className={`p-2.5 rounded-xs border text-center transition-all cursor-pointer ${
                    settings.textSize === s.id
                      ? 'border-[#173C2C] bg-[#F4F1EA] text-[#173C2C] font-semibold shadow-2xs'
                      : 'border-[#E7E3DA] bg-[#FFFFFF] text-[#57534E] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span className="block text-xs font-semibold">{s.label}</span>
                  <span className="text-[10px] font-mono text-[#78716C]">{s.size}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Contrast & Visual Toggles */}
          <div className="bg-[#FFFFFF] p-4 rounded-xs border border-[#E7E3DA] space-y-3">
            <div className="flex items-center gap-2 text-[#173C2C]">
              <Eye className="w-3.5 h-3.5" />
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#161616]">
                Visual & Motion Modes
              </h3>
            </div>

            <div className="space-y-3">
              {/* High Contrast */}
              <div className="flex items-center justify-between p-2 rounded-xs hover:bg-[#FAF8F5]">
                <div>
                  <span className="text-xs font-semibold text-[#161616] block">{t.settings.highContrast}</span>
                  <span className="text-[11px] text-[#78716C]">Maximizes text contrast and thickens borders for sunlight readability.</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSettings({ highContrast: e.target.checked })}
                  className="w-4 h-4 accent-[#173C2C] rounded-xs border-[#E7E3DA] focus:ring-[#173C2C] cursor-pointer"
                  aria-label="Toggle High Contrast Mode"
                />
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between p-2 rounded-xs hover:bg-[#FAF8F5]">
                <div>
                  <span className="text-xs font-semibold text-[#161616] block">{t.settings.reducedMotion}</span>
                  <span className="text-[11px] text-[#78716C]">Disables smooth transitions and animations.</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
                  className="w-4 h-4 accent-[#173C2C] rounded-xs border-[#E7E3DA] focus:ring-[#173C2C] cursor-pointer"
                  aria-label="Toggle Reduced Motion"
                />
              </div>

              {/* Low Data Mode */}
              <div className="flex items-center justify-between p-2 rounded-xs hover:bg-[#FAF8F5]">
                <div>
                  <span className="text-xs font-semibold text-[#161616] block">{t.settings.lowData}</span>
                  <span className="text-[11px] text-[#78716C]">Prioritizes plain text and offline caching for limited data recharges.</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.lowDataMode}
                  onChange={(e) => updateSettings({ lowDataMode: e.target.checked })}
                  className="w-4 h-4 accent-[#173C2C] rounded-xs border-[#E7E3DA] focus:ring-[#173C2C] cursor-pointer"
                  aria-label="Toggle Ultra Low-Data Saver"
                />
              </div>
            </div>
          </div>

          {/* 4. User Account & Session */}
          {user && (
            <div className="bg-[#FFFFFF] p-4 rounded-xs border border-[#E7E3DA] space-y-3">
              <div className="flex items-center gap-2 text-[#173C2C]">
                <UserIcon className="w-3.5 h-3.5" />
                <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#161616]">
                  Signed In Account
                </h3>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#FAF8F5] border border-[#E7E3DA] rounded-xs">
                <div>
                  <p className="text-xs font-bold text-[#161616]">{user.name}</p>
                  <p className="text-[11px] text-[#78716C] font-mono">{user.email}</p>
                </div>
                {onLogout && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onLogout();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#FEF2F2] hover:bg-[#FEE2E2] text-[#B91C1C] text-xs font-mono font-semibold border border-[#FECACA] transition-colors cursor-pointer"
                    id="settings-modal-signout-btn"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>{t.auth.logout}</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* 5. Keyboard Navigation Guide */}
          <div className="bg-[#F4F1EA] p-4 rounded-xs border border-[#DDD7CC] space-y-2">
            <div className="flex items-center gap-2 text-[#173C2C]">
              <Keyboard className="w-3.5 h-3.5" />
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#161616]">
                Keyboard Shortcuts & Navigation
              </h3>
            </div>
            <ul className="space-y-1 text-xs text-[#57534E] font-mono text-[11px]">
              <li>&bull; <kbd className="px-1.5 py-0.5 bg-[#FFFFFF] rounded-xs border border-[#DDD7CC] text-[10px]">Tab</kbd> / <kbd className="px-1.5 py-0.5 bg-[#FFFFFF] rounded-xs border border-[#DDD7CC] text-[10px]">Shift+Tab</kbd> navigate between interactive buttons</li>
              <li>&bull; <kbd className="px-1.5 py-0.5 bg-[#FFFFFF] rounded-xs border border-[#DDD7CC] text-[10px]">Enter</kbd> / <kbd className="px-1.5 py-0.5 bg-[#FFFFFF] rounded-xs border border-[#DDD7CC] text-[10px]">Space</kbd> activate buttons and checkboxes</li>
              <li>&bull; <kbd className="px-1.5 py-0.5 bg-[#FFFFFF] rounded-xs border border-[#DDD7CC] text-[10px]">Esc</kbd> closes open dialogs and drawers</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#E7E3DA] bg-[#FFFFFF] flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xs bg-[#173C2C] text-[#FDFCF8] text-xs font-semibold hover:bg-[#102B1F] transition-colors border border-[#173C2C] cursor-pointer"
          >
            {t.settings.save}
          </button>
        </div>

      </div>
    </div>
  );
};
