import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetUrl';
import { Menu, X, Shield, BookOpen, Home, Info, Globe, Type } from 'lucide-react';

export const Navbar = () => {
  const { lang, setLang, t, textScale, toggleTextScale } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', labelKey: 'navHome', icon: Home },
    { to: '/#topics', labelKey: 'navTopics', icon: BookOpen },
    { to: '/safety', labelKey: 'navSafety', icon: Shield },
    { to: '/about', labelKey: 'navAbout', icon: Info },
  ];

  const languages = [
    { code: 'te', label: 'తెలుగు', short: 'తె' },
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'hi', label: 'हिंदी', short: 'हि' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#14452F] text-white shadow-md border-b border-[#0D3322]">
      {/* Top utility alert bar for accessibility & emergency disclaimer */}
      <div className="bg-[#0D3322] text-xs text-emerald-200 px-4 py-1.5 flex justify-between items-center text-center sm:text-left">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {t('heroBadge')}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTextScale}
              className="hover:text-white transition-colors flex items-center gap-1 text-xs px-2 py-0.5 rounded border border-emerald-700/60 bg-emerald-950/40 cursor-pointer"
              title="Toggle larger readable text size"
              aria-label="Toggle text size"
            >
              <Type className="w-3.5 h-3.5" />
              <span>{textScale === 'large' ? 'A (Normal)' : 'A+ (Large)'}</span>
            </button>
            <span className="hidden md:inline text-emerald-400/70">|</span>
            <span className="hidden md:inline text-emerald-300">
              Cyber Crime: <strong className="text-white">1930</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <nav className="container mx-auto px-4 py-3 sm:py-3.5 flex items-center justify-between" aria-label="Main Navigation">
        {/* Brand logo & titles */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-emerald-300 rounded-lg p-1"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 p-1.5 border border-emerald-400/30 flex items-center justify-center shadow-inner group-hover:bg-white/15 transition-all">
            <img 
              src={getAssetUrl('/favicon.svg')} 
              alt="Mana Digital Gramam Emblem" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-lg sm:text-xl tracking-tight leading-none text-white group-hover:text-emerald-300 transition-colors">
              {lang === 'te' ? 'మన డిజిటల్ గ్రామం' : lang === 'hi' ? 'मन डिजिटल ग्राम' : 'Mana Digital Gramam'}
            </span>
            <span className="text-[11px] sm:text-xs text-emerald-200/90 font-medium tracking-wide mt-0.5">
              {lang === 'te' ? 'Mana Digital Gramam' : 'మన డిజిటల్ గ్రామం'}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  active
                    ? 'bg-emerald-800/90 text-white shadow-sm ring-1 ring-emerald-600'
                    : 'text-emerald-100 hover:text-white hover:bg-emerald-800/50'
                }`}
              >
                <Icon className="w-4 h-4 opacity-80" />
                <span>{t(link.labelKey)}</span>
              </Link>
            );
          })}
        </div>

        {/* Language selector and mobile menu button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language selector segmented control */}
          <div 
            className="flex items-center bg-[#0D3322] p-1 rounded-xl border border-emerald-700/60 shadow-inner"
            role="group"
            aria-label={t('changeLang')}
          >
            <Globe className="w-3.5 h-3.5 text-emerald-300 ml-1.5 mr-1 hidden sm:inline" />
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  lang === l.code
                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                    : 'text-emerald-200 hover:text-white hover:bg-emerald-800/50'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-emerald-800/60 hover:bg-emerald-800 text-emerald-100 hover:text-white border border-emerald-700/50 transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t('mobileMenuClose') : t('mobileMenuOpen')}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden bg-[#0F3825] border-t border-emerald-800/70 px-4 pt-3 pb-6 shadow-2xl transition-all"
          id="mobile-menu"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    active
                      ? 'bg-emerald-700 text-white shadow-sm ring-1 ring-emerald-500'
                      : 'text-emerald-100 hover:bg-emerald-800/70 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 text-emerald-300" />
                  <span>{t(link.labelKey)}</span>
                </Link>
              );
            })}
          </div>

          {/* Quick text scale toggle in mobile menu */}
          <div className="mt-4 pt-4 border-t border-emerald-800/60 flex items-center justify-between px-2">
            <span className="text-xs text-emerald-300 font-medium">
              {t('largerText')}:
            </span>
            <button
              onClick={toggleTextScale}
              className="text-xs font-semibold px-3 py-1.5 bg-emerald-800/90 text-white rounded-lg border border-emerald-600 cursor-pointer flex items-center gap-1.5"
            >
              <Type className="w-3.5 h-3.5 text-emerald-300" />
              {textScale === 'large' ? 'సాధారణ అక్షరాలు (Normal)' : 'పెద్ద అక్షరాలు (Larger Text)'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
