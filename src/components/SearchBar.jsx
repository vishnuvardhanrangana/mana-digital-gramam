import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, X } from 'lucide-react';

export const SearchBar = ({ searchQuery, setSearchQuery, resultCount, totalCount }) => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <label htmlFor="topic-search-input" className="sr-only">
          {t('searchAriaLabel')}
        </label>
        
        {/* Search Icon */}
        <div className="absolute left-4 pointer-events-none text-emerald-800">
          <Search className="w-5 h-5 text-emerald-800" />
        </div>

        {/* Input Field */}
        <input
          id="topic-search-input"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t('searchPlaceholder')}
          aria-label={t('searchAriaLabel')}
          className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-2xl bg-white border-2 border-emerald-800/30 text-slate-900 placeholder:text-slate-600 text-base sm:text-lg font-medium shadow-md focus:border-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-700/20 transition-all"
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-4 p-1 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={t('searchClear')}
            title={t('searchClear')}
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Result feedback */}
      {searchQuery.trim().length > 0 && (
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 mt-2.5 px-2">
          <span>
            <strong>"{searchQuery}"</strong> కోసం {resultCount} {t('topicsCountFound')} ({totalCount} లో)
          </span>
          <button
            onClick={() => setSearchQuery('')}
            className="text-emerald-700 font-semibold hover:underline cursor-pointer"
          >
            {t('showAllTopics')}
          </button>
        </div>
      )}
    </div>
  );
};
