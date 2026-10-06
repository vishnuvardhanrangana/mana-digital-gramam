import React, { useState, useMemo, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { topicsData } from '../data/topicsData';
import { HeroSection } from '../components/HeroSection';
import { SearchBar } from '../components/SearchBar';
import { TopicGrid } from '../components/TopicGrid';
import { FeaturedGuides } from '../components/FeaturedGuides';
import { SafetyBanner } from '../components/SafetyBanner';
import { BenefitsSection } from '../components/BenefitsSection';
import { Sparkles, Compass } from 'lucide-react';

export const HomePage = () => {
  const { lang, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const topicsSectionRef = useRef(null);

  // Filter topics across title, shortDesc, whyMatters in the currently selected language
  const filteredTopics = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return topicsData;

    return topicsData.filter((topic) => {
      const content = topic[lang] || topic.te;
      const titleMatch = content.title.toLowerCase().includes(q);
      const descMatch = content.shortDesc.toLowerCase().includes(q);
      const taglineMatch = content.tagline.toLowerCase().includes(q);
      const categoryMatch = topic.category.toLowerCase().includes(q);
      const stepMatch = content.stepGuide?.some(
        (s) => s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)
      );

      return titleMatch || descMatch || taglineMatch || categoryMatch || stepMatch;
    });
  }, [searchQuery, lang]);

  const scrollToTopics = () => {
    if (topicsSectionRef.current) {
      topicsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="main-content" className="flex-1">
      {/* 1. Hero Section */}
      <HeroSection onExploreClick={scrollToTopics} />

      {/* 2. Search & Explore Topics Section */}
      <section 
        id="topics" 
        ref={topicsSectionRef}
        className="py-12 md:py-16 container mx-auto px-4"
        aria-labelledby="explore-topics-title"
      >
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 mb-2">
            <Compass className="w-3.5 h-3.5 text-emerald-800" />
            <span>8 {lang === 'te' ? 'అత్యవసర గ్రామీణ విభాగాలు' : lang === 'hi' ? 'प्रमुख ग्रामीण विषय' : 'Essential Rural Topics'}</span>
          </div>

          <h2 id="explore-topics-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            {t('exploreTitle')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            {t('exploreSubtitle')}
          </p>

          {/* Search Input Container */}
          <div className="mt-8">
            <SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              resultCount={filteredTopics.length}
              totalCount={topicsData.length}
            />
          </div>
        </div>

        {/* 8 Topic Cards Grid */}
        <TopicGrid 
          topics={filteredTopics} 
          onResetSearch={() => setSearchQuery('')}
          isFiltered={searchQuery.trim().length > 0}
        />
      </section>

      {/* 3. Featured Beginner Guides */}
      <FeaturedGuides />

      {/* 4. Digital Safety Banner */}
      <SafetyBanner />

      {/* 5. How This Website Helps */}
      <BenefitsSection />
    </main>
  );
};
