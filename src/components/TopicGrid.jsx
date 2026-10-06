import React from 'react';
import { TopicCard } from './TopicCard';
import { useLanguage } from '../context/LanguageContext';
import { AlertCircle, RotateCcw } from 'lucide-react';

export const TopicGrid = ({ topics, onResetSearch, isFiltered }) => {
  const { t } = useLanguage();

  if (topics.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-amber-200 p-8 sm:p-12 text-center max-w-xl mx-auto shadow-sm my-6">
        <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {t('noResultsTitle')}
        </h3>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          {t('noResultsDesc')}
        </p>
        <button
          onClick={onResetSearch}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 text-white font-semibold text-sm hover:bg-emerald-900 transition-colors shadow cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{t('showAllTopics')}</span>
        </button>
      </div>
    );
  }

  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
      role="list"
      aria-label="Available digital education topics"
    >
      {topics.map((topic, index) => (
        <TopicCard key={topic.id} topic={topic} index={index} />
      ))}
    </div>
  );
};
