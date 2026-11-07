import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, UserPlus, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserProfile, Language } from '../types';

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: UserProfile) => void;
  lang: Language;
}

export type GoogleAuthModalProps = AuthModalProps;

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  lang,
}) => {
  const [selectedEmail, setSelectedEmail] = useState<string>('');
  const [customName, setCustomName] = useState<string>('');
  const [customEmail, setCustomEmail] = useState<string>('');
  const [isAddingOther, setIsAddingOther] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#22d3ee', '#38bdf8', '#818cf8', '#fbbf24', '#34d399'],
    });
  };

  const handleSelectPredefined = (name: string, email: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newUser: UserProfile = {
        id: `google-${Date.now()}`,
        name,
        email,
        provider: 'google',
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=0284c7,4f46e5`,
      };
      setIsLoading(false);
      triggerConfetti();
      onSuccess(newUser);
    }, 450);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customEmail.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      const name = customName.trim() || customEmail.split('@')[0];
      const newUser: UserProfile = {
        id: `google-${Date.now()}`,
        name,
        email: customEmail.trim(),
        provider: 'google',
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=0284c7,4f46e5`,
      };
      setIsLoading(false);
      triggerConfetti();
      onSuccess(newUser);
    }, 450);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-md bg-[#FFFDF9] dark:bg-[#16161c] rounded-3xl p-6 sm:p-7 shadow-2xl border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 overflow-hidden"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Google Brand Header */}
          <div className="flex flex-col items-center text-center mb-6">
            <svg className="w-9 h-9 mb-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <h3 className="text-xl font-extrabold tracking-tight text-drop-subtle">
              {lang === 'th' ? 'ลงชื่อเข้าใช้ด้วย Google' : 'Sign in with Google'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 font-medium">
              {lang === 'th' ? 'เลือกบัญชีเพื่อดำเนินการต่อยังระบบคำนวณพลังงาน' : 'Choose an account to continue'}
            </p>
          </div>

          {!isAddingOther ? (
            <div className="space-y-3">
              {/* Option to enter custom account */}
              <button
                type="button"
                onClick={() => setIsAddingOther(true)}
                className="w-full flex items-center gap-3 p-3 rounded-2xl border border-dashed border-stone-300 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800/50 text-stone-600 dark:text-stone-400 text-xs sm:text-sm font-bold transition-colors cursor-pointer justify-center text-drop-subtle"
              >
                <UserPlus className="w-4 h-4" />
                <span>
                  {lang === 'th' ? 'ใช้บัญชี Google อื่น...' : 'Use another Google account...'}
                </span>
              </button>
            </div>
          ) : (
            /* Custom Account Form */
            <form onSubmit={handleCustomSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1 text-drop-subtle">
                  {lang === 'th' ? 'ชื่อที่แสดง' : 'Display Name'}
                </label>
                <input
                  type="text"
                  placeholder="เช่น สมชาย สุขใจ"
                  value={customName}
                  onChange={e => setCustomName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1 text-drop-subtle">
                  Google Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@gmail.com"
                  value={customEmail}
                  onChange={e => setCustomEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddingOther(false)}
                  className="flex-1 py-2.5 rounded-xl btn-tactile-eggshell text-xs font-extrabold text-stone-700 dark:text-stone-300 text-drop-subtle"
                >
                  {lang === 'th' ? 'ย้อนกลับ' : 'Back'}
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-2.5 rounded-xl btn-tactile-sky text-white font-extrabold text-xs text-drop-subtle"
                >
                  {isLoading ? '...' : (lang === 'th' ? 'ดำเนินการต่อ' : 'Continue')}
                </button>
              </div>
            </form>
          )}

          {/* Privacy Footnote */}
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
            <Shield className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>
              {lang === 'th'
                ? 'ระบบจะเข้าถึงเฉพาะชื่อและอีเมลเพื่อบันทึกประวัติค่าไฟของคุณเท่านั้น'
                : 'Power Profiles only accesses your name & email to sync your energy profiles.'}
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// Export backward-compatible alias
export const GoogleAuthModal = AuthModal;
