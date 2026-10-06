import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';

export const VerifiedResources = ({ resources }) => {
  const { t } = useLanguage();

  if (!resources || resources.length === 0) return null;

  return (
    <section className="space-y-4" aria-labelledby="verified-resources-title">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
          <ShieldCheck className="w-5 h-5 text-white" />
        </div>
        <h2 id="verified-resources-title" className="text-xl sm:text-2xl font-bold text-slate-900 text-left">
          {t('verifiedResourcesTitle')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((res, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-emerald-300 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left group"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {t('verifiedBadge')}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-1.5">
                {res.name}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                {res.desc}
              </p>
            </div>

            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-800 text-emerald-900 hover:text-white font-bold text-xs sm:text-sm border border-emerald-300 hover:border-emerald-800 transition-all cursor-pointer"
            >
              <span className="truncate max-w-[220px]">{res.url}</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          </div>
        ))}
      </div>

      <p className="text-xs text-slate-500 italic text-left pt-1 flex items-center gap-1.5">
        <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
        <span>బాహ్య అధికారిక వెబ్‌సైట్లకు వాటి స్వంత నిబంధనలు మరియు గోప్యతా విధానాలు ఉంటాయి.</span>
      </p>
    </section>
  );
};
