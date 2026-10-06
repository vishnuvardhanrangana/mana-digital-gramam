import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldAlert, 
  KeyRound, 
  Lock, 
  Link2Off, 
  SearchCheck, 
  SmartphoneNfc,
  AlertOctagon,
  ArrowRight,
  PhoneCall
} from 'lucide-react';

export const SafetyBanner = () => {
  const { lang, t } = useLanguage();

  const rules = [
    {
      icon: KeyRound,
      text: t('warnPinOtp'),
      color: 'text-amber-300',
    },
    {
      icon: Lock,
      text: t('warnPasswords'),
      color: 'text-rose-300',
    },
    {
      icon: Link2Off,
      text: t('warnLinks'),
      color: 'text-amber-300',
    },
    {
      icon: SearchCheck,
      text: t('warnVerify'),
      color: 'text-emerald-300',
    },
    {
      icon: SmartphoneNfc,
      text: t('warnRemoteApp'),
      color: 'text-rose-300',
    },
  ];

  return (
    <section 
      id="safety-section"
      className="py-12 md:py-16 bg-[#14452F] text-white relative overflow-hidden border-y border-emerald-900"
      aria-labelledby="safety-banner-title"
    >
      {/* Decorative shield backdrop */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none">
        <ShieldAlert className="w-[500px] h-[500px] text-white" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-200 text-xs sm:text-sm font-bold shadow-sm mb-3">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>{lang === 'te' ? 'రక్షణ హెచ్చరిక' : lang === 'hi' ? 'सुरक्षा चेतावनी' : 'Security Advisory'}</span>
          </div>
          <h2 id="safety-banner-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            {t('safetyBannerTitle')}
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2.5 max-w-2xl mx-auto">
            {t('safetyBannerSubtitle')}
          </p>
        </div>

        {/* 5 Essential Warnings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {rules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div 
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-emerald-950/70 border border-emerald-700/60 shadow-inner hover:bg-emerald-950 transition-colors text-left"
              >
                <div className="p-2 rounded-lg bg-white/10 shrink-0 mt-0.5">
                  <Icon className={`w-5 h-5 ${rule.color}`} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    నియమం {idx + 1}
                  </span>
                  <p className="text-sm font-semibold text-white leading-snug mt-0.5">
                    {rule.text}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Cyber Crime Helpline quick dial */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-rose-950/90 to-amber-950/90 border border-rose-600/50 shadow-inner text-left">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-rose-600 text-white shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-rose-300">
                  {lang === 'te' ? 'సైబర్ క్రైమ్ హెల్ప్‌లైన్' : 'Cyber Crime Helpline'}
                </p>
                <p className="text-xl font-extrabold text-white tracking-wider">
                  1930
                </p>
              </div>
            </div>
            <a 
              href="tel:1930" 
              className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs tracking-wide transition-colors"
            >
              Call 1930
            </a>
          </div>
        </div>

        {/* Golden UPI Callout Box */}
        <div className="max-w-3xl mx-auto bg-amber-500/15 border-2 border-amber-400/60 rounded-2xl p-5 sm:p-6 text-left shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 shrink-0 mt-0.5">
              <AlertOctagon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-amber-300 mb-1">
                {t('upiGoldenRuleHeading')}
              </h3>
              <p className="text-sm sm:text-base text-amber-100 leading-relaxed font-medium">
                {t('upiGoldenRuleBody')}
              </p>
            </div>
          </div>
        </div>

        {/* View full safety guide action */}
        <div className="mt-8 text-center">
          <Link
            to="/safety"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-emerald-950 hover:bg-emerald-100 font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <span>{lang === 'te' ? 'పూర్తి సైబర్ రక్షణ గైడ్ చదవండి' : lang === 'hi' ? 'सम्पूर्ण डिजिटल सुरक्षा गाइड पढ़ें' : 'Read Full Safety & Fraud Prevention Guide'}</span>
            <ArrowRight className="w-4 h-4 text-emerald-950" />
          </Link>
        </div>

      </div>
    </section>
  );
};
