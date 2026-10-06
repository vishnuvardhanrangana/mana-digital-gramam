import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetUrl';
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const HeroSection = ({ onExploreClick }) => {
  const { lang, t } = useLanguage();

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-b from-[#14452F] via-[#164e35] to-[#14452F] text-white pt-8 pb-14 md:pt-14 md:pb-20 border-b border-emerald-900"
      aria-label="Welcome and Introduction"
    >
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subheading, CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Pill Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-400/30 text-emerald-200 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              <span>{t('brandTagline')}</span>
            </div>

            {/* Bilingual Hero Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
                {t('heroHeading')}
              </h1>
              {lang !== 'en' && (
                <p className="text-emerald-300 font-semibold text-lg sm:text-xl tracking-normal">
                  {t('heroHeadingSub')}
                </p>
              )}
            </div>

            {/* Supporting Description */}
            <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl leading-relaxed">
              {t('heroDescription')}
            </p>

            {/* Micro value-propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-emerald-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% ఉచిత విద్యా మార్గదర్శకాలు (100% Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ప్రభుత్వ ధృవీకరించిన అధికారిక లింకులు</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>{t('heroPrimaryCta')}</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              <Link
                to="/safety"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900 text-emerald-100 hover:text-white font-bold text-base border border-emerald-600/60 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>{t('heroSecondaryCta')}</span>
              </Link>
            </div>

            {/* Trust disclaimer badge */}
            <p className="text-xs text-emerald-300/80 italic pt-1">
              * {t('educationalNote')}
            </p>
          </div>

          {/* Right Column: Authentic photograph with caption */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-600/40 shadow-2xl bg-emerald-950 group">
              <img
                src={getAssetUrl('/images/hero-community.jpg')}
                alt="Rural Indian village family learning to use smartphones together in village courtyard"
                className="w-full h-72 sm:h-80 md:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <div className="text-left bg-emerald-950/90 backdrop-blur-sm p-3 rounded-xl border border-emerald-500/30 w-full">
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {t('heroCaption')}
                  </p>
                  <p className="text-[11px] text-emerald-300 mt-0.5">
                    గ్రామాల్లో అందరికీ సురక్షితమైన మరియు సులభమైన సాంకేతికత
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
