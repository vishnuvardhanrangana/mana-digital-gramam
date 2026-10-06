import React from 'react';
import { Link } from 'react-router-dom';
import { topicsData } from '../data/topicsData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, BookOpen } from 'lucide-react';

export const RelatedTopics = ({ relatedIds }) => {
  const { lang, t } = useLanguage();

  if (!relatedIds || relatedIds.length === 0) return null;

  const relatedList = topicsData.filter((item) => relatedIds.includes(item.id));

  return (
    <section className="space-y-4 pt-4 border-t border-[#E8E4DA]" aria-labelledby="related-topics-title">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
          <BookOpen className="w-5 h-5 text-emerald-800" />
        </div>
        <h2 id="related-topics-title" className="text-xl sm:text-2xl font-bold text-slate-900 text-left">
          {t('relatedTopicsTitle')}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {relatedList.map((item) => {
          const content = item[lang] || item.te;
          return (
            <Link
              key={item.id}
              to={`/topic/${item.id}`}
              className="bg-white rounded-2xl border border-[#E0DBCF] p-4 text-left shadow-sm hover:shadow-md hover:border-emerald-600/50 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block w-fit mb-2">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-1">
                  {content.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {content.shortDesc}
                </p>
              </div>

              <div className="pt-3 mt-2 flex items-center justify-between text-xs font-bold text-emerald-800">
                <span>{t('learnMore')}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
