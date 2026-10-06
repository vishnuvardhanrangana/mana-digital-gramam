import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { topicsData } from '../data/topicsData';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GuideSteps } from '../components/GuideSteps';
import { CommonMistakes } from '../components/CommonMistakes';
import { SafetyTips } from '../components/SafetyTips';
import { FAQSection } from '../components/FAQSection';
import { VerifiedResources } from '../components/VerifiedResources';
import { RelatedTopics } from '../components/RelatedTopics';
import { 
  CreditCard, 
  Sprout, 
  GraduationCap, 
  Wifi, 
  HeartPulse, 
  Building2, 
  Trash2, 
  Bus, 
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Info
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

export const TopicDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const topic = topicsData.find((t) => t.id === id || t.slug === id);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          అంశం కనుగొనబడలేదు (Topic Not Found)
        </h2>
        <p className="text-slate-600 mb-6">
          క్షమించండి, మీరు వెతుకుతున్న సమాచారం అందుబాటులో లేదు.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 text-white font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('backToHome')}</span>
        </Link>
      </div>
    );
  }

  const content = topic[lang] || topic.te;
  const Icon = iconMap[topic.iconName] || CreditCard;

  const breadcrumbItems = [
    { label: t('navTopics'), to: '/#topics' },
    { label: content.title, to: `/topic/${topic.id}` },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Accessible Breadcrumb */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Topic Hero Banner Header */}
      <header className="bg-gradient-to-b from-[#14452F] to-[#164e35] text-white py-10 sm:py-14 border-b border-emerald-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-left">
            
            {/* Back link */}
            <Link
              to="/#topics"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-emerald-200 hover:text-white mb-4 transition-colors p-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('allTopicsNav')}</span>
            </Link>

            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border border-emerald-400/40 p-3 flex items-center justify-center shrink-0 shadow-lg">
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-300" />
              </div>
              
              <div className="space-y-1.5">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  {topic.category.toUpperCase()}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  {content.title}
                </h1>
                <p className="text-emerald-200 text-sm sm:text-base font-semibold">
                  {content.tagline}
                </p>
              </div>
            </div>

            {/* Intro description */}
            <p className="mt-5 text-emerald-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
              {content.shortDesc}
            </p>

            {/* Last reviewed metadata */}
            <div className="mt-4 pt-4 border-t border-emerald-800/60 flex items-center gap-2 text-xs text-emerald-300">
              <Calendar className="w-3.5 h-3.5" />
              <span>{t('lastReviewedLabel')} <strong>{topic.lastReviewed}</strong></span>
              <span className="mx-2">•</span>
              <span>{topic.verifiedSource}</span>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="container mx-auto px-4 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section 1: Why This Topic Matters in Village Life */}
          <section className="bg-white rounded-2xl border border-[#E0DBCF] p-6 sm:p-8 text-left shadow-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                <Info className="w-5 h-5 text-emerald-800" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {t('whyItMatters')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
              {content.whyMatters.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF8F5] border border-slate-200/80 text-sm text-slate-800 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Step-by-Step Beginner Guide */}
          <GuideSteps steps={content.stepGuide} />

          {/* Section 3: Common Mistakes (Do's and Don'ts) */}
          <CommonMistakes mistakes={content.commonMistakes} />

          {/* Section 4: Safety Tips where relevant */}
          <SafetyTips safetyRules={content.safetyRules} />

          {/* Section 5: Frequently Asked Questions (Accordion) */}
          <FAQSection faqs={content.faqs} />

          {/* Section 6: Verified Official Resources */}
          <VerifiedResources resources={content.officialResources} />

          {/* Section 7: Related Topics */}
          <RelatedTopics relatedIds={content.related} />

          {/* Bottom Back Action */}
          <div className="pt-6 text-center">
            <Link
              to="/#topics"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('backToHome')}</span>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
};
