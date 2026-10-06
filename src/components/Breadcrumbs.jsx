import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Breadcrumbs = ({ items }) => {
  const { t } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-white/70 border-b border-[#E8E4DA] text-xs sm:text-sm">
      <div className="container mx-auto flex items-center flex-wrap gap-1.5 text-slate-500">
        <Link 
          to="/" 
          className="hover:text-emerald-800 flex items-center gap-1 font-medium text-slate-700"
        >
          <Home className="w-3.5 h-3.5" />
          <span>{t('navHome')}</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast ? (
                <span className="font-bold text-emerald-900 truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="hover:text-emerald-800 font-medium text-slate-700">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
