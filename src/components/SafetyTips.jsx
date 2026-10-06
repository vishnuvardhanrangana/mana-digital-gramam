import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldAlert, AlertCircle } from 'lucide-react';

export const SafetyTips = ({ safetyRules }) => {
  const { t } = useLanguage();

  if (!safetyRules || safetyRules.length === 0) return null;

  return (
    <section 
      className="bg-[#14452F] text-white rounded-2xl p-6 sm:p-7 shadow-md border-2 border-emerald-700/60 text-left relative overflow-hidden"
      aria-labelledby="safety-notes-title"
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div className="p-2 rounded-xl bg-rose-500/30 text-rose-300">
          <ShieldAlert className="w-6 h-6 text-rose-300" />
        </div>
        <h2 id="safety-notes-title" className="text-xl sm:text-2xl font-bold text-white">
          {t('safetyNotesTitle')}
        </h2>
      </div>

      <ul className="space-y-3">
        {safetyRules.map((rule, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-emerald-100">
            <AlertCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <span className="font-medium leading-relaxed">
              {rule}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
