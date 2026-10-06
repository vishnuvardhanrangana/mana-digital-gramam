import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetUrl';
import { Shield, ArrowUp, AlertTriangle, ExternalLink, Phone, Globe } from 'lucide-react';

export const Footer = () => {
  const { lang, setLang, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D3322] text-white border-t-4 border-emerald-600 pt-12 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Top footer row: Brand, Quick Links, Helplines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-emerald-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 text-left space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 p-1.5 border border-emerald-400/40 flex items-center justify-center">
                <img src={getAssetUrl('/favicon.svg')} alt="Mana Digital Gramam Emblem" className="w-full h-full" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">
                  {lang === 'te' ? 'మన డిజిటల్ గ్రామం' : lang === 'hi' ? 'मन डिजिटल ग्राम' : 'Mana Digital Gramam'}
                </h3>
                <p className="text-xs text-emerald-300 font-medium">
                  {t('brandTagline')}
                </p>
              </div>
            </div>
            
            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-md">
              {t('footerAboutText')}
            </p>

            {/* Language Switcher in Footer */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-emerald-300 block mb-2">
                {t('changeLang')}:
              </span>
              <div className="flex items-center gap-2">
                {[
                  { code: 'te', label: 'తెలుగు' },
                  { code: 'en', label: 'English' },
                  { code: 'hi', label: 'हिंदी' },
                ].map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      lang === l.code
                        ? 'bg-emerald-500 text-slate-950 shadow'
                        : 'bg-emerald-950 text-emerald-200 hover:text-white border border-emerald-700/60'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 text-left space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300">
              {t('footerNavTitle')}
            </h4>
            <ul className="space-y-2 text-sm text-emerald-100/90">
              <li>
                <Link to="/" className="hover:text-emerald-300 transition-colors">
                  {t('navHome')}
                </Link>
              </li>
              <li>
                <Link to="/#topics" className="hover:text-emerald-300 transition-colors">
                  {t('navTopics')} (8 {lang === 'te' ? 'అంశాలు' : 'Topics'})
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  {t('navSafety')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-300 transition-colors">
                  {t('navAbout')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency Helplines */}
          <div className="lg:col-span-4 text-left space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300">
              {t('footerSafetyTitle')}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/30 text-rose-100 flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">
                    {lang === 'te' ? 'జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్' : 'National Cyber Crime Helpline'}
                  </p>
                  <p className="text-rose-200 text-xs">
                    డయల్ చేయండి: <strong>1930</strong> (ఉచితం)
                  </p>
                  <a 
                    href="https://cybercrime.gov.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[11px] text-emerald-300 underline inline-flex items-center gap-1 mt-0.5"
                  >
                    cybercrime.gov.in <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-700/50 text-emerald-100 flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">
                    {lang === 'te' ? 'రైతు మిత్ర కిసాన్ కాల్ సెంటర్' : 'Kisan Call Centre'}
                  </p>
                  <p className="text-emerald-200 text-xs">
                    డయల్ చేయండి: <strong>1800-180-1551</strong> (ఉచితం)
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Educational Disclaimer */}
        <div className="my-8 p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 text-left text-xs sm:text-sm text-amber-200/90 leading-relaxed flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-0.5">
              {t('footerDisclaimerTitle')}
            </strong>
            {t('footerDisclaimerText')}
          </div>
        </div>

        {/* Bottom bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/80 pt-2">
          <p>
            © {currentYear} {t('copyrightText')}
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 hover:text-white transition-colors cursor-pointer"
          >
            <span>{t('backToTop')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
