import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  ShieldAlert, 
  KeyRound, 
  Lock, 
  Smartphone, 
  AlertTriangle, 
  PhoneCall, 
  ExternalLink, 
  CheckCircle, 
  XCircle,
  HelpCircle,
  ArrowLeft
} from 'lucide-react';

export const SafetyPage = () => {
  const { lang, t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const breadcrumbs = [
    { label: t('navSafety'), to: '/safety' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Breadcrumbs items={breadcrumbs} />

      {/* Safety Header */}
      <header className="bg-gradient-to-b from-[#14452F] to-[#0D3322] text-white py-12 border-b border-emerald-900">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950 border border-rose-500/50 text-rose-300 text-xs font-bold mb-4">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>{lang === 'te' ? 'సైబర్ భద్రతా మార్గదర్శకాలు' : lang === 'hi' ? 'साइबर सुरक्षा मार्गदर्शिका' : 'Cyber Security Guidelines'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'te' ? 'గ్రామీణ డిజిటల్ రక్షణ మరియు సైబర్ మోసాల నివారణ' :
             lang === 'hi' ? 'ग्रामीण डिजिटल सुरक्षा और साइबर धोखाधड़ी से बचाव' :
             'Rural Digital Safety & Online Fraud Prevention'}
          </h1>

          <p className="mt-3 text-emerald-100/90 text-sm sm:text-base leading-relaxed">
            {lang === 'te' ? 'ఇంటర్నెట్ మరియు స్మార్ట్‌ఫోన్ ఉపయోగిస్తున్నప్పుడు మీ కష్టార్జితాన్ని మరియు వ్యక్తిగత గోప్యతను కాపాడుకునేందుకు పూర్తి అవగాహన.' :
             lang === 'hi' ? 'इंटरनेट और स्मार्टफोन का उपयोग करते समय अपनी मेहनत की कमाई और व्यक्तिगत जानकारी की सुरक्षा के जरूरी नियम।' :
             'Comprehensive guidance to safeguard your hard-earned money and personal information while using mobile internet.'}
          </p>
        </div>
      </header>

      {/* Safety Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl space-y-10 text-left">
        
        {/* Golden UPI Alert Card */}
        <section className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 sm:p-7 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500 text-slate-950 shrink-0">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-amber-950 mb-2">
                {t('upiGoldenRuleHeading')}
              </h2>
              <p className="text-sm sm:text-base text-amber-900 leading-relaxed font-medium">
                {t('upiGoldenRuleBody')}
              </p>
              <div className="mt-3 inline-block bg-white px-3 py-1.5 rounded-lg border border-amber-300 text-xs font-bold text-amber-800">
                {lang === 'te' ? 'డబ్బు తీసుకోవడానికి PIN అడిగితే = 100% మోసం!' : 'If someone asks for PIN to give you money = 100% SCAM!'}
              </div>
            </div>
          </div>
        </section>

        {/* 5 Common Rural Fraud Tactics */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            {lang === 'te' ? 'గ్రామాల్లో ఎక్కువగా జరిగే 5 రకాల సైబర్ మోసాలు' :
             lang === 'hi' ? 'गांवों में होने वाली 5 आम साइबर धोखाधड़ी' :
             '5 Common Cyber Fraud Scenarios in Rural Areas'}
          </h2>

          <div className="space-y-4">
            
            {/* 1. Fake Bank Calling */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    1. నకిలీ బ్యాంక్ మేనేజర్ లేదా కస్టమర్ కేర్ కాల్స్ (Fake Bank Calls)
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    <strong>మోసం ఎలా జరుగుతుంది:</strong> "మీ ఖాతా బ్లాక్ అవుతుంది, తక్షణమే ఆధార్ ఓటీపీ చెప్పండి లేదా ఏటీఎం కార్డు నంబర్ ఇవ్వండి" అని భయపెడతారు.
                  </p>
                  <p className="text-emerald-800 text-sm font-semibold mt-2">
                    ✓ <strong>మీరు ఏమి చేయాలి:</strong> ఫోన్ వెంటనే కట్ చేయండి. ఏ బ్యాంక్ కూడా ఓటీపీ అడగదు. సందేహం ఉంటే నేరుగా మీ గ్రామ సమీపంలోని బ్యాంక్ బ్రాంచ్‌కు వెళ్లండి.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. AnyDesk / Remote App Scam */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    2. రిమోట్ స్క్రీన్ షేరింగ్ యాప్స్ మోసం (AnyDesk / TeamViewer Scam)
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    <strong>మోసం ఎలా జరుగుతుంది:</strong> "మీ ఫోన్ రీఛార్జ్ కాలేదు లేదా పెండింగ్ బిల్లు పరిష్కరిస్తాం, ముందుగా ఈ చిన్న యాప్ ఇన్‌స్టాల్ చేసుకోండి" అని AnyDesk లేదా QuickSupport యాప్ లింక్ పంపుతారు.
                  </p>
                  <p className="text-emerald-800 text-sm font-semibold mt-2">
                    ✓ <strong>మీరు ఏమి చేయాలి:</strong> అపరిచితులు చెప్పిన ఏ యాప్‌నూ ఇన్‌స్టాల్ చేయవద్దు. ఈ యాప్‌లు మీ ఫోన్ స్క్రీన్ మొత్తాన్ని వేరే వారికి కనిపించేలా చేసి మీ బ్యాంక్ పాస్‌వర్డ్‌లను దొంగిలిస్తాయి.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Lottery / Scheme WhatsApp Messages */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    3. నకిలీ లాటరీ, ల్యాప్‌టాప్, లేదా పథకం మెసేజ్‌లు (Fake Subsidy Links)
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    <strong>మోసం ఎలా జరుగుతుంది:</strong> "మీకు ₹25 లక్షల కేబీసీ లాటరీ తగిలింది లేదా ఉచితంగా ట్రాక్టర్ వచ్చింది, టాక్స్ కోసం ₹5,000 పంపండి" అని ఆశ చూపుతారు.
                  </p>
                  <p className="text-emerald-800 text-sm font-semibold mt-2">
                    ✓ <strong>మీరు ఏమి చేయాలి:</strong> మీరు టికెట్ కొనకుండా లాటరీ ఎలా వస్తుంది? ఏ ప్రభుత్వ పథకానికీ ముందుగా డబ్బులు అడగరు. ఇటువంటి మెసేజ్‌లను డిలీట్ చేయండి.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Wrong payment refund scam */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    4. పొరపాటున మీ ఖాతాలోకి డబ్బులు పంపానని మోసం చేయడం
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    <strong>మోసం ఎలా జరుగుతుంది:</strong> ఒక నకిలీ బ్యాంక్ క్రెడిట్ SMS తయారు చేసి మీకు పంపి, "నేను పొరపాటున మీకు ₹10,000 పంపాను, దయచేసి వెనక్కి పంపండి" అని కాల్ చేస్తారు.
                  </p>
                  <p className="text-emerald-800 text-sm font-semibold mt-2">
                    ✓ <strong>మీరు ఏమి చేయాలి:</strong> కేవలం SMS పై ఆధారపడవద్దు. మీ స్వంత బ్యాంక్ యాప్ లేదా మిస్డ్ కాల్ బ్యాలెన్స్ చూసి నిజంగా మీ ఖాతాలో ఆ మొత్తం జమైందో లేదో సరిచూసుకోండి.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Electricity bill disconnection SMS */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    5. "ఈ రాత్రికి కరెంట్ కట్ అవుతుంది" అనే నకిలీ SMS లు
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    <strong>మోసం ఎలా జరుగుతుంది:</strong> "గత నెల విద్యుత్ బిల్లు అప్‌డేట్ కాలేదు, ఈ రాత్రి 9:30 కి కరెంట్ తీసేస్తారు, వెంటనే ఈ నంబర్‌కు ఫోన్ చేయండి" అని పంపిస్తారు.
                  </p>
                  <p className="text-emerald-800 text-sm font-semibold mt-2">
                    ✓ <strong>మీరు ఏమి చేయాలి:</strong> ఆ నంబర్‌కు అస్సలు కాల్ చేయకండి. మీ విద్యుత్ శాఖ అధికారిక వెబ్‌సైట్ లేదా మీ గ్రామ లైన్‌మ్యాన్ / విద్యుత్ సబ్ స్టేషన్ వద్ద వివరాలు సరిచూసుకోండి.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Emergency Steps if cheated */}
        <section className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-6 sm:p-7">
          <h2 className="text-xl sm:text-2xl font-bold text-rose-950 mb-3 flex items-center gap-2">
            <PhoneCall className="w-6 h-6 text-rose-700" />
            <span>మోసం జరిగినట్లు గుర్తిస్తే వెంటనే చేయవలసిన 3 పనులు</span>
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-rose-950">
            <p>
              1. <strong>వెంటనే మీ బ్యాంకుకు ఫోన్ చేసి కార్డు లేదా నెట్ బ్యాంకింగ్‌ను బ్లాక్ చేయించండి:</strong> తద్వారా ఖాతాలో మిగిలిన సొమ్ము సురక్షితంగా ఉంటుంది.
            </p>
            <p>
              2. <strong>జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్ 1930 కి తక్షణమే కాల్ చేయండి:</strong> మోసం జరిగిన గోల్డెన్ అవర్స్ (మొదటి 2-3 గంటలలో) కాల్ చేస్తే దుండగుల ఖాతాలోని డబ్బును పోలీసులు ఫ్రీజ్ చేసే అవకాశం ఉంటుంది.
            </p>
            <p>
              3. <strong>cybercrime.gov.in పోర్టల్‌లో అధికారిక ఫిర్యాదు నమోదు చేయండి:</strong> లావాదేవీల రసీదులు, మోసగాడి ఫోన్ నంబర్లు, మెసేజ్ స్క్రీన్‌షాట్‌లను భద్రపరుచుకోండి.
            </p>
          </div>
        </section>

        {/* Return Button */}
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
