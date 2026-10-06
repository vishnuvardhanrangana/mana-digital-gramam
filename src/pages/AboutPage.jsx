import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  HeartHandshake, 
  Target, 
  Users, 
  ShieldCheck, 
  AlertTriangle, 
  BookOpen, 
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

export const AboutPage = () => {
  const { lang, t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const breadcrumbs = [
    { label: t('navAbout'), to: '/about' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Breadcrumbs items={breadcrumbs} />

      {/* About Header */}
      <header className="bg-gradient-to-b from-[#14452F] to-[#0D3322] text-white py-12 border-b border-emerald-900">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-4">
            <HeartHandshake className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'te' ? 'మా లక్ష్యం మరియు నిబద్ధత' : 'Our Mission & Commitment'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'te' ? 'మన డిజిటల్ గ్రామం గురించి' :
             lang === 'hi' ? 'मन डिजिटल ग्राम के बारे में' :
             'About Mana Digital Gramam'}
          </h1>

          <p className="mt-3 text-emerald-100/90 text-sm sm:text-base leading-relaxed">
            {t('brandTagline')} — {t('brandTaglineEn')}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl space-y-10 text-left">
        
        {/* Purpose Card */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
              <Target className="w-6 h-6 text-emerald-800" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {lang === 'te' ? 'ఈ వేదిక యొక్క ముఖ్య ఉద్దేశ్యం' : 'Core Purpose & Philosophy'}
            </h2>
          </div>
          
          <p className="text-slate-700 text-base leading-relaxed">
            {lang === 'te' 
              ? 'భారతీయ గ్రామాలలో నివసించే కుటుంబాలు, రైతులు, విద్యార్థులు, మరియు వృద్ధులు ఇంటర్నెట్ ఆధారిత సేవలను సులభంగా అర్థం చేసుకుని, రోజువారీ జీవితంలో సురక్షితంగా ఉపయోగించుకునేందుకు రూపొందించబడిన ప్రజా అవగాహన వేదిక ఇది. సాంకేతికతను అందరికీ అర్థమయ్యే సరళమైన భాషలో చేరవేయడమే మా ప్రధాన సూత్రం.'
              : 'Mana Digital Gramam is a public educational awareness initiative created to help people in Indian villages understand and use everyday internet-based services safely and with confidence. Our guiding principle is simple: Make digital services understandable to everyone.'}
          </p>
        </section>

        {/* Target Audience */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
              <Users className="w-6 h-6 text-emerald-800" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {lang === 'te' ? 'మా లక్ష్య సమూహం (Target Audience)' : 'Who We Serve'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: lang === 'te' ? 'గ్రామీణ కుటుంబాలు & మొదటిసారి స్మార్ట్‌ఫోన్ వినియోగదారులు' : 'Rural Families & First-time Smartphone Users',
                desc: lang === 'te' ? 'స్మార్ట్‌ఫోన్ సెట్టింగ్స్, మొబైల్ డేటా మరియు మెసేజింగ్ సులభంగా నేర్చుకోవడానికి.' : 'Demystifying mobile data, apps, and phone settings.'
              },
              {
                title: lang === 'te' ? 'రైతులు (Farmers)' : 'Farmers & Agricultural Workers',
                desc: lang === 'te' ? 'వాతావరణ సూచనలు, తెగుళ్ల నివారణ సలహాలు మరియు eNAM మార్కెట్ ధరలు.' : 'Accessing weather advisories, pest control, and mandi price discovery.'
              },
              {
                title: lang === 'te' ? 'గ్రామీణ విద్యార్థులు (Students)' : 'Village Students & Youth',
                desc: lang === 'te' ? 'SWAYAM, DIKSHA ద్వారా ఉచిత పాఠాలు మరియు కంప్యూటర్ నైపుణ్యాలు.' : 'Free academic resources, QR textbooks, and digital skill building.'
              },
              {
                title: lang === 'te' ? 'వృద్ధులు & పరిమిత అక్షరాస్యత కలిగినవారు' : 'Senior Citizens & Low-Literacy Citizens',
                desc: lang === 'te' ? 'పెద్ద అక్షరాలు, మోసాల బారిన పడకుండా జాగ్రత్తలు మరియు సరళమైన సూచనలు.' : 'High-contrast text, patient step-by-step guides, and fraud prevention.'
              }
            ].map((audience, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{audience.title}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {audience.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ethical Standards & Trust Rules */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
              <ShieldCheck className="w-6 h-6 text-emerald-800" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {lang === 'te' ? 'మా విశ్వసనీయత మరియు నైతిక నియమాలు' : 'Content Quality & Ethical Principles'}
            </h2>
          </div>

          <ul className="space-y-3 text-sm sm:text-base text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-700">1.</span>
              <span><strong>నకిలీ సమాచారం లేదు:</strong> మేము ఎటువంటి నకిలీ ప్రభుత్వ పథకాలను, అవాస్తవ హెల్ప్‌లైన్ నంబర్లను సృష్టించము.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-700">2.</span>
              <span><strong>ధృవీకరించబడిన అధికారిక వనరులు:</strong> NPCI, eNAM, eSanjeevani, SWAYAM వంటి భారత ప్రభుత్వ మరియు అధికారిక సంస్థల పోర్టల్స్ మాత్రమే సూచించబడ్డాయి.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-700">3.</span>
              <span><strong>సున్నా డేటా సేకరణ (Zero Data Collection):</strong> మేము ఎటువంటి యూజర్ పాస్‌వర్డ్‌లు, బ్యాంక్ వివరాలు, ఆధార్ లేదా క్రెడెన్షియల్స్ సేకరించము.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-700">4.</span>
              <span><strong>వాణిజ్య ప్రయోజనాలు లేవు:</strong> ప్రకటనలు లేదా చెల్లింపు ప్రమోషన్లు లేకుండా పూర్తిగా ఉచిత విద్యా సేవగా అందించబడుతోంది.</span>
            </li>
          </ul>
        </section>

        {/* Official Non-Governmental Disclaimer */}
        <section className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 sm:p-7 text-amber-950">
          <div className="flex items-start gap-3.5">
            <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-bold mb-1.5">
                {t('footerDisclaimerTitle')}
              </h2>
              <p className="text-sm leading-relaxed">
                {t('footerDisclaimerText')}
              </p>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="text-center pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-800 text-white font-bold hover:bg-emerald-900 transition-colors shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('backToHome')}</span>
          </Link>
        </div>

      </main>
    </div>
  );
};
