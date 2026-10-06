import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

export const GuideSteps = ({ steps }) => {
  const { t } = useLanguage();

  return (
    <section className="space-y-4" aria-labelledby="guide-steps-title">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
          ✓
        </div>
        <h2 id="guide-steps-title" className="text-xl sm:text-2xl font-bold text-slate-900 text-left">
          {t('stepGuideTitle')}
        </h2>
      </div>

      <div className="space-y-4">
        {steps.map((item) => (
          <div 
            key={item.step}
            className="bg-white rounded-2xl border border-[#E2DDD2] p-5 sm:p-6 shadow-sm hover:border-emerald-600/40 transition-colors text-left"
          >
            <div className="flex items-start gap-4">
              {/* Step Number Badge */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#14452F] text-white flex items-center justify-center font-extrabold text-base sm:text-lg shrink-0 shadow">
                {item.step}
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>

                {/* Practical Tip */}
                {item.tip && (
                  <div className="mt-3 p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-2.5 text-xs sm:text-sm text-amber-950">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-amber-900">ముఖ్య సూచన (Helpful Tip):</strong> {item.tip}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
