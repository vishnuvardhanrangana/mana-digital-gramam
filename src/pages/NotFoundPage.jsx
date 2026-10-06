import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Home, Compass } from 'lucide-react';

export const NotFoundPage = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center container mx-auto px-4 py-16 text-center">
      <div className="max-w-md bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-5">
          <Compass className="w-8 h-8 text-emerald-800" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          404 - {lang === 'te' ? 'పేజీ కనుగొనబడలేదు' : 'Page Not Found'}
        </h1>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          {lang === 'te' 
            ? 'మీరు వెతుకుతున్న పేజీ అందుబాటులో లేదు లేదా తరలించబడింది.' 
            : 'The page you requested could not be found. Please return to the homepage.'}
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold transition-all shadow"
        >
          <Home className="w-4 h-4" />
          <span>{t('backToHome')}</span>
        </Link>
      </div>
    </div>
  );
};
