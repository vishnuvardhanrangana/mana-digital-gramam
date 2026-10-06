import React from 'react';
import { Link } from 'react-router-dom';
import { featuredGuides } from '../data/guidesData';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetUrl';
import { ShieldCheck, BookOpen, Stethoscope, ArrowRight, Clock } from 'lucide-react';

const guideIconMap = {
  ShieldCheck,
  BookOpen,
  Stethoscope,
};

export const FeaturedGuides = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-[#F5F2EB] border-y border-[#E8E4DA]" aria-labelledby="featured-guides-heading">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-300">
            {lang === 'te' ? 'ప్రత్యేక మార్గదర్శకాలు' : lang === 'hi' ? 'विशेष गाइड' : 'Featured Guides'}
          </span>
          <h2 id="featured-guides-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5">
            {t('featuredGuidesTitle')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t('featuredGuidesSubtitle')}
          </p>
        </div>

        {/* 3 Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGuides.map((guide) => {
            const content = guide[lang] || guide.te;
            const Icon = guideIconMap[guide.iconName] || BookOpen;

            return (
              <div
                key={guide.id}
                className="bg-white rounded-2xl border border-[#E0DBCF] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Thumbnail Image */}
                  <div className="relative h-44 overflow-hidden bg-emerald-950">
                    <img 
                      src={getAssetUrl(guide.image)} 
                      alt={content.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-800 text-white shadow">
                        {content.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-950/70 text-white backdrop-blur-sm flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-300" />
                        {guide.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-5 sm:p-6 text-left">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-emerald-800" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2 leading-snug">
                      {content.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {content.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-5 sm:px-6 pb-5 pt-2">
                  <Link
                    to={`/topic/${guide.topicId}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-800 text-emerald-900 hover:text-white font-bold text-sm border border-emerald-300 hover:border-emerald-800 transition-all cursor-pointer"
                  >
                    <span>{t('readGuide')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
