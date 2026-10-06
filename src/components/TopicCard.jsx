import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  CreditCard, 
  Sprout, 
  GraduationCap, 
  Wifi, 
  HeartPulse, 
  Building2, 
  Trash2, 
  Bus, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  CreditCard,
  Sprout,
  GraduationCap,
  Wifi,
  HeartPulse,
  Building2,
  Trash2,
  Bus,
};

export const TopicCard = ({ topic, index }) => {
  const { lang, t } = useLanguage();
  const content = topic[lang] || topic.te;
  const IconComponent = iconMap[topic.iconName] || ShieldCheck;

  // Visual accent color schemes
  const accents = [
    { badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200', iconBg: 'bg-emerald-700 text-white' },
    { badgeBg: 'bg-amber-50 text-amber-900 border-amber-200', iconBg: 'bg-amber-700 text-white' },
    { badgeBg: 'bg-blue-50 text-blue-900 border-blue-200', iconBg: 'bg-blue-700 text-white' },
    { badgeBg: 'bg-teal-50 text-teal-900 border-teal-200', iconBg: 'bg-teal-700 text-white' },
    { badgeBg: 'bg-rose-50 text-rose-900 border-rose-200', iconBg: 'bg-rose-700 text-white' },
    { badgeBg: 'bg-indigo-50 text-indigo-900 border-indigo-200', iconBg: 'bg-indigo-700 text-white' },
    { badgeBg: 'bg-lime-50 text-lime-900 border-lime-200', iconBg: 'bg-lime-700 text-white' },
    { badgeBg: 'bg-cyan-50 text-cyan-900 border-cyan-200', iconBg: 'bg-cyan-700 text-white' },
  ];

  const theme = accents[index % accents.length];

  return (
    <article 
      className="group relative flex flex-col justify-between bg-white rounded-2xl border border-[#E8E4DA] p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300"
      aria-labelledby={`topic-title-${topic.id}`}
    >
      <div>
        {/* Header: Icon & Category pill */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${theme.iconBg} group-hover:scale-105 transition-transform`}>
            <IconComponent className="w-6 h-6" aria-hidden="true" />
          </div>
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${theme.badgeBg}`}>
            {topic.id === 'digital-payments' ? 'NPCI UPI' :
             topic.id === 'digital-farming' ? 'e-NAM' :
             topic.id === 'online-learning' ? 'SWAYAM' :
             topic.id === 'online-healthcare' ? 'eSanjeevani' :
             topic.id === 'connectivity-networks' ? 'TRAI' :
             topic.id === 'banking-atm' ? 'RBI' :
             topic.id === 'civic-complaints' ? 'Swachhata' : 'IRCTC/RTC'}
          </span>
        </div>

        {/* Title */}
        <h3 
          id={`topic-title-${topic.id}`}
          className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug mb-2 text-left"
        >
          {content.title}
        </h3>

        {/* Tagline / Subtitle */}
        <p className="text-xs font-semibold text-emerald-800/80 mb-2.5 text-left">
          {content.tagline}
        </p>

        {/* Short description */}
        <p className="text-slate-600 text-sm leading-relaxed text-left line-clamp-3">
          {content.shortDesc}
        </p>
      </div>

      {/* Footer action link */}
      <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          5 {t('stepCountBadge')}
        </span>
        
        <Link
          to={`/topic/${topic.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-700 rounded p-1"
        >
          <span>{t('learnMore')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
