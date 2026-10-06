import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection = ({ faqs }) => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="space-y-4" aria-labelledby="faqs-title">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
          <HelpCircle className="w-5 h-5 text-emerald-800" />
        </div>
        <h2 id="faqs-title" className="text-xl sm:text-2xl font-bold text-slate-900 text-left">
          {t('faqsTitle')}
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E0DBCF] overflow-hidden shadow-sm transition-colors text-left"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold text-slate-900 hover:text-emerald-800 transition-colors cursor-pointer"
              >
                <span className="text-base sm:text-lg leading-snug">
                  {faq.q}
                </span>
                <span className="p-1 rounded-full bg-slate-100 text-slate-600 shrink-0">
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${idx}`}
                  className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3"
                >
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
