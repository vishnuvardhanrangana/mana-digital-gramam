import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages, ListOrdered, ShieldCheck } from 'lucide-react';

export const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Languages,
      title: t('benefit1Title'),
      desc: t('benefit1Desc'),
      badge: 'తెలుగు • हिंदी • English',
    },
    {
      icon: ListOrdered,
      title: t('benefit2Title'),
      desc: t('benefit2Desc'),
      badge: '1 - 2 - 3 Steps',
    },
    {
      icon: ShieldCheck,
      title: t('benefit3Title'),
      desc: t('benefit3Desc'),
      badge: '100% Verified',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5]" aria-labelledby="benefits-title">
      <div className="container mx-auto px-4">
        
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 id="benefits-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t('benefitsTitle')}
          </h2>
          <div className="w-16 h-1 bg-emerald-700 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E4DA] p-6 text-left shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200">
                    <Icon className="w-6 h-6 text-emerald-800" />
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {b.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
