import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { XCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

export const CommonMistakes = ({ mistakes }) => {
  const { t } = useLanguage();

  return (
    <section className="space-y-4" aria-labelledby="mistakes-title">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-800 flex items-center justify-center font-bold text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-700" />
        </div>
        <h2 id="mistakes-title" className="text-xl sm:text-2xl font-bold text-slate-900 text-left">
          {t('commonMistakesTitle')}
        </h2>
      </div>

      <div className="space-y-4">
        {mistakes.map((item, index) => (
          <div 
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-[#E0DBCF] overflow-hidden shadow-sm bg-white"
          >
            {/* Mistake Side */}
            <div className="p-5 bg-rose-50/60 border-b md:border-b-0 md:border-r border-rose-200 text-left flex items-start gap-3">
              <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-1">
                  {t('mistakeLabel')}
                </span>
                <p className="text-sm sm:text-base text-rose-950 font-medium leading-relaxed">
                  {item.mistake}
                </p>
              </div>
            </div>

            {/* Correct Action Side */}
            <div className="p-5 bg-emerald-50/50 text-left flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  {t('correctActionLabel')}
                </span>
                <p className="text-sm sm:text-base text-emerald-950 font-semibold leading-relaxed">
                  {item.correctAction}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
