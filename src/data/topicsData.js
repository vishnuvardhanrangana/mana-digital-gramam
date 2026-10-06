// Complete, authentic educational content for the 8 Digital Awareness Topics
// Formatted for Telugu (te), English (en), and Hindi (hi)

export const topicsData = [
  {
    id: 'digital-payments',
    slug: 'digital-payments',
    iconName: 'CreditCard',
    image: '/images/upi-village-store.jpg',
    category: 'finance',
    verifiedUrl: 'https://www.npci.org.in/what-we-do/upi/faqs',
    verifiedSource: 'NPCI (National Payments Corporation of India)',
    lastReviewed: '2026-03-15',
    te: {
      title: 'డిజిటల్ చెల్లింపులు',
      tagline: 'యూపీఐ (UPI) మరియు క్యూఆర్ కోడ్ (QR Code) సురక్షిత వినియోగం',
      shortDesc: 'స్మార్ట్‌ఫోన్ ద్వారా కిరాణా షాపుల్లో డబ్బులు చెల్లించడం, స్నేహితులకు పంపడం మరియు భద్రతా నియమాలు తెలుసుకోండి.',
      whyMatters: [
        'చిల్లర సమస్య లేకుండా సరిగ్గా సరిపోయేంత మొత్తాన్ని నేరుగా వ్యాపారి బ్యాంక్ ఖాతాకు పంపవచ్చు.',
        'బ్యాంకు లేదా ఏటీఎంకి వెళ్లకుండానే ఇంట్లోనే కూర్చుని కరెంట్ బిల్లులు, ఫోన్ రీఛార్జ్‌లు సులభంగా చేయవచ్చు.',
        'ప్రతి పైసా ఖర్చు డిజిటల్ రికార్డుగా భద్రంగా ఉంటుంది, కాబట్టి లావాదేవీల రసీదులు ఎప్పటికీ పోవు.',
        'డబ్బు చేతిలో మోసుకెళ్లే భయం ఉండదు మరియు నకిలీ నోట్ల ప్రమాదం సున్నా అవుతుంది.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'నమ్మకమైన అధికారిక UPI యాప్‌ను మాత్రమే ఎంచుకోండి',
          desc: 'గూగుల్ ప్లే స్టోర్ లేదా యాపిల్ యాప్ స్టోర్ నుండి మాత్రమే BHIM, PhonePe, Google Pay, Paytm లేదా మీ సంబంధిత బ్యాంక్ అధికారిక యాప్‌ను డౌన్‌లోడ్ చేసుకోండి. తెలియని వ్యక్తులు లింక్ ద్వారా పంపే యాప్‌లను ఎప్పుడూ ఇన్‌స్టాల్ చేయవద్దు.',
          tip: 'యాప్ పేరు క్రింద డెవలపర్ పేరు మరియు డౌన్‌లోడ్ల సంఖ్యను ఎల్లప్పుడూ సరిచూసుకోండి.'
        },
        {
          step: 2,
          title: 'వ్యాపారి దుకాణంలోని QR కోడ్‌ను స్కాన్ చేయండి',
          desc: 'మీ UPI యాప్‌లోని "Scan QR" బటన్‌పై నొక్కండి. దుకాణంలో ఏర్పాటు చేసిన క్యూఆర్ కోడ్‌పై కెమెరాను స్థిరంగా ఉంచండి. స్కానర్ స్వయంచాలకంగా దుకాణదారుని వివరాలను తీసుకుంటుంది.',
          tip: 'QR కోడ్‌పై మరొక కాగితం అతికించి ఉంటే దుకాణదారుడిని అడిగి నిర్ధారించుకోండి.'
        },
        {
          step: 3,
          title: 'దుకాణదారుని పేరు మరియు మొత్తం ధృవీకరించండి',
          desc: 'స్క్రీన్‌పై కనిపించే పేరు ఆ దుకాణదారునిదేనా అని అడిగి ధృవీకరించండి. మీరు చెల్లించాల్సిన సరైన మొత్తాన్ని (ఉదాహరణకు ₹150) స్వయంగా టైప్ చేయండి.',
          tip: 'డబ్బు పంపే ముందు నంబర్ మరియు పేరును ఒకటికి రెండుసార్లు చూసుకోవడం మంచి అలవాటు.'
        },
        {
          step: 4,
          title: 'మీ రహస్య UPI PIN ని గోప్యంగా ఎంటర్ చేయండి',
          desc: 'చెల్లింపును పూర్తి చేయడానికి మీ 4 లేదా 6 అంకెల రహస్య UPI పిన్ నమోదు చేయండి. పిన్ నమోదు చేసేటప్పుడు చుట్టుపక్కల ఎవరూ చూడకుండా జాగ్రత్త వహించండి. పిన్ ఎంటర్‌ను దుకాణదారునికి కూడా చెప్పవద్దు.',
          tip: 'గుర్తుంచుకోండి: UPI PIN అంటే మీ బ్యాంక్ లాకర్ తాళం లాంటిది. దాన్ని ఎవరికీ ఇవ్వకూడదు.'
        },
        {
          step: 5,
          title: 'లావాదేవీ విజయం (Success) స్క్రీన్‌ను ధృవీకరించండి',
          desc: 'స్క్రీన్‌పై ఆకుపచ్చ రంగు టిక్ మార్క్ మరియు "Payment Successful" మెసేజ్ వచ్చే వరకు ఆగండి. అలాగే మీ బ్యాంక్ నుండి వచ్చిన SMS లేదా UPI యాప్ హిస్టరీలో డెబిట్ అయినట్లు చూసుకోండి.',
          tip: 'స్క్రీన్‌షాట్‌లను రుజువుగా నమ్మవద్దు; మీ స్వంత యాప్‌లోని ట్రాన్సాక్షన్ హిస్టరీలో మాత్రమే చెక్ చేసుకోండి.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'ఎవరైనా మీకు డబ్బు పంపుతామంటే UPI PIN ఎంటర్ చేయడం.',
          correctAction: 'డబ్బు స్వీకరించడానికి UPI PIN ఎట్టి పరిస్థితుల్లోనూ అవసరం లేదు. PIN అడిగితే అది ఖచ్చితంగా మోసమే!'
        },
        {
          mistake: 'ఫోన్‌లో గుర్తుతెలియని కాల్ లేదా కస్టమర్ కేర్ ప్రతినిధికి OTP చెప్పడం.',
          correctAction: 'బ్యాంక్ లేదా పేమెంట్ యాప్ ఉద్యోగులు ఎప్పుడూ మీ OTP లేదా UPI PIN అడగరు. ఎవరికీ చెప్పవద్దు.'
        },
        {
          mistake: 'ట్రాన్సాక్షన్ పెండింగ్‌లో ఉన్నప్పుడు కంగారుపడి మళ్లీ వెంటనే డబ్బు పంపడం.',
          correctAction: 'కొద్దిసేపు వేచి ఉండండి. UPI సర్వర్‌లో సమస్య ఉంటే 24 గంటల్లోగా డబ్బు మీ ఖాతాకు తిరిగి వస్తుంది లేదా దుకాణదారునికి చేరుతుంది.'
        }
      ],
      safetyRules: [
        'డబ్బు స్వీకరించేందుకు (Receive) ఎప్పుడూ UPI పిన్ ఎంటర్ చేయకూడదు.',
        'మీ UPI పిన్ మరియు బ్యాంక్ OTP ఎవరితోనూ (స్నేహితులతో కూడా) పంచుకోవద్దు.',
        'ఏదైనా దుకాణదారుడు పేమెంట్ రాలేదని చెబితే మీ యాప్ హిస్టరీ మరియు బ్యాంక్ SMS చూపించండి, రెండోసారి ఆలోచించకుండా చెల్లించకండి.',
        'మోసం జరిగినట్లు అనిపిస్తే వెంటనే జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్ 1930 కి కాల్ చేయండి లేదా మీ బ్యాంకును సంప్రదించండి.'
      ],
      faqs: [
        {
          q: 'UPI లావాదేవీ విఫలమైతే (Failed) కట్ అయిన డబ్బు ఎప్పుడు వెనక్కి వస్తుంది?',
          a: 'సాధారణంగా బ్యాంక్ సర్వర్ రీకన్సిలియేషన్ తర్వాత 24 నుండి 48 గంటల్లోగా మొత్తం మీ ఖాతాకు తిరిగి జమ అవుతుంది. రాకపోతే మీ UPI యాప్‌లోని "Raise Dispute" లేదా సంబంధిత బ్యాంక్ టోల్‌ఫ్రీ నంబర్‌ను సంప్రదించండి.'
        },
        {
          q: 'ఇంటర్నెట్ నెమ్మదిగా ఉన్నప్పుడు పేమెంట్ చేయవచ్చా?',
          a: 'నెట్‌వర్క్ బలహీనంగా ఉన్నప్పుడు పేమెంట్ ఆలస్యం కావచ్చు. సిగ్నల్ బాగా వచ్చే ప్రదేశంలో నిలబడి మాత్రమే లావాదేవీని ప్రారంభించండి. లేదా మీ మొబైల్ బ్యాంకింగ్ USSD కోడ్ (*99#) ద్వారా ఆఫ్‌లైన్ చెల్లింపుల విధానాన్ని పరిశీలించవచ్చు.'
        },
        {
          q: 'QR కోడ్ స్కాన్ చేస్తే నా ఫోన్ హ్యాక్ అవుతుందా?',
          a: 'సరైన UPI యాప్ ద్వారా ప్రామాణిక పేమెంట్ QR కోడ్‌ను స్కాన్ చేస్తే హ్యాక్ కాదు. అయితే, వాట్సాప్ లేదా బ్రౌజర్ ద్వారా అపరిచితులు పంపిన లింక్ QR లను అనుమానాస్పద వెబ్‌సైట్లలో స్కాన్ చేయవద్దు.'
        }
      ],
      officialResources: [
        {
          name: 'NPCI అధికారిక UPI తరచుగా అడిగే ప్రశ్నలు (FAQs)',
          url: 'https://www.npci.org.in/what-we-do/upi/faqs',
          desc: 'భారత జాతీయ చెల్లింపుల సంస్థ (NPCI) యొక్క అధికారిక మార్గదర్శకాలు మరియు సమాచారం.'
        },
        {
          name: 'RBI డిజిటల్ భద్రతా అవగాహన పోర్టల్',
          url: 'https://cms.rbi.org.in/',
          desc: 'రిజర్వ్ బ్యాంక్ ఆఫ్ ఇండియా వినియోగదారుల ఫిర్యాదు పరిష్కార వేదిక.'
        }
      ],
      related: ['banking-atm', 'connectivity-networks', 'civic-complaints']
    },
    en: {
      title: 'Digital Payments',
      tagline: 'Safe usage of UPI and QR codes in everyday village life',
      shortDesc: 'Learn how to pay at local shops, transfer money to relatives, and protect your hard-earned savings using UPI.',
      whyMatters: [
        'Pay the exact change directly from your bank account without searching for small rupee notes or coins.',
        'Pay electricity bills, water bills, and mobile recharges from home without visiting distant taluka offices.',
        'Permanent digital payment history protects both customers and shopkeepers with undisputed proof of transactions.',
        'Eliminates the risk of carrying cash or receiving counterfeit notes at weekly village markets.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'Select a verified UPI application only',
          desc: 'Download authentic apps such as BHIM, PhonePe, Google Pay, Paytm, or your bank\'s official mobile app directly from the Google Play Store or Apple App Store. Never install APK files or payment apps sent over messaging links.',
          tip: 'Always check the developer name and official badge on the app store before tapping Install.'
        },
        {
          step: 2,
          title: 'Scan the merchant QR code with steady focus',
          desc: 'Open your UPI app and tap "Scan QR". Hold the camera steady over the printed merchant QR display stand. The app will automatically decode the merchant\'s registered VPA and name.',
          tip: 'If a paper sticker looks pasted over the original QR board, double-check with the shopkeeper first.'
        },
        {
          step: 3,
          title: 'Verify recipient name and type the exact amount',
          desc: 'Confirm the merchant name displayed on your screen matches the shop name. Type the exact amount you want to pay (e.g., ₹120). Never let anyone else operate your phone during this step.',
          tip: 'Always re-check the number of zeroes entered before proceeding.'
        },
        {
          step: 4,
          title: 'Enter your confidential UPI PIN securely',
          desc: 'Enter your personal 4-digit or 6-digit UPI PIN on the secure black/white system keypad. Shield your screen so nobody nearby can observe your numbers. Never speak your PIN aloud.',
          tip: 'Remember: Your UPI PIN is your bank locker key. Keep it completely secret.'
        },
        {
          step: 5,
          title: 'Confirm the green Success notification',
          desc: 'Wait until the green checkmark appears indicating "Payment Successful". Check your official transaction reference number and the SMS alert from your bank.',
          tip: 'Never rely solely on a photo or screenshot shown by someone else; verify in your own app transaction history.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'Entering your UPI PIN when someone claims they are sending you prize money or a refund.',
          correctAction: 'You NEVER need to enter a UPI PIN to receive money. If a screen asks for a PIN, money will LEAVE your account!'
        },
        {
          mistake: 'Sharing your OTP with someone calling and claiming to be a bank officer or tech support.',
          correctAction: 'Genuine bank officials never ask for your OTP, PIN, or passwords. Disconnect immediately.'
        },
        {
          mistake: 'Rushing to make an immediate duplicate payment when a transaction is marked "Pending".',
          correctAction: 'Wait 5 to 10 minutes. If the banking network was busy, the money either reaches the vendor or is auto-reversed to your account.'
        }
      ],
      safetyRules: [
        'A UPI PIN is required ONLY to debit money from your account, never to receive money.',
        'Never write down your UPI PIN on your phone case, notebook, or near your bank passbook.',
        'Verify the recipient\'s name before confirming payment at every roadside stall.',
        'In case of fraudulent debits, call 1930 immediately or file an incident at cybercrime.gov.in.'
      ],
      faqs: [
        {
          q: 'What should I do if a payment fails but money was deducted from my account?',
          a: 'In UPI, failed transactions with auto-debit are usually resolved within 24 to 48 business hours by NPCI and your bank. You can also tap "Raise Dispute" in your UPI app history to track the ticket.'
        },
        {
          q: 'Can I use UPI on a basic phone or when internet signal is weak?',
          a: 'Yes, NPCI provides the *99# USSD service for non-smartphones or offline scenarios. For standard smartphone apps, ensure you have stable 2G/4G connectivity before initiating payment.'
        },
        {
          q: 'Is there any extra fee charged for paying at grocery stores via UPI?',
          a: 'No, standard person-to-merchant (P2M) payments using normal bank accounts are completely free for ordinary consumers.'
        }
      ],
      officialResources: [
        {
          name: 'NPCI Official UPI Frequently Asked Questions',
          url: 'https://www.npci.org.in/what-we-do/upi/faqs',
          desc: 'Primary regulatory FAQs and official operating principles from the National Payments Corporation of India.'
        },
        {
          name: 'Reserve Bank of India Consumer Education & Redressal',
          url: 'https://cms.rbi.org.in/',
          desc: 'RBI Ombudsman complaint management portal for banking and payment disputes.'
        }
      ],
      related: ['banking-atm', 'connectivity-networks', 'civic-complaints']
    },
    hi: {
      title: 'डिजिटल भुगतान',
      tagline: 'यूपीआई (UPI) और क्यूआर कोड (QR Code) का सुरक्षित उपयोग',
      shortDesc: 'स्मार्टफोन से गांव की दुकानों पर सुरक्षित भुगतान करना, पैसे भेजना और बैंक सुरक्षा के मुख्य नियम सीखें।',
      whyMatters: [
        'छुट्टे पैसों की चिंता के बिना बिल्कुल सही राशि सीधे दुकानदार के खाते में भेज सकते हैं।',
        'बिजली बिल, पानी बिल और मोबाइल रिचार्ज घर बैठे बिना लंबी कतारों के पूरे किए जा सकते हैं।',
        'प्रत्येक लेन-देन का स्थायी डिजिटल रिकॉर्ड रहता है, जिससे कभी भी रसीद खोने का डर नहीं होता।',
        'नकदी साथ रखने का जोखिम और जाली नोटों का खतरा पूरी तरह समाप्त हो जाता है।'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'केवल आधिकारिक और प्रमाणित UPI ऐप का चयन करें',
          desc: 'गूगल प्ले स्टोर या ऐपल ऐप स्टोर से ही BHIM, PhonePe, Google Pay, Paytm या अपने बैंक का आधिकारिक ऐप डाउनलोड करें। किसी अनजान व्यक्ति द्वारा व्हाट्सएप या SMS पर भेजे गए ऐप लिंक को कभी न खोलें।',
          tip: 'इंस्टॉल करने से पहले डेवलपर का नाम और डाउनलोड संख्या जरूर जांचें।'
        },
        {
          step: 2,
          title: 'दुकानदार का QR कोड सावधानी से स्कैन करें',
          desc: 'ऐप में "Scan QR" बटन दबाएं और फोन का कैमरा क्यूआर कोड के सामने सीधा रखें। ऐप तुरंत दुकानदार का पंजीकृत नाम और VPA दिखा देगा।',
          tip: 'यदि क्यूआर कोड पर कोई दूसरा स्टिकर चिपका हुआ दिखे, तो दुकानदार से पूछकर पुष्टि करें।'
        },
        {
          step: 3,
          title: 'दुकानदार का नाम और सही राशि सत्यापित करें',
          desc: 'स्क्रीन पर दिख रहा नाम दुकानदार के नाम से मेल खाता है या नहीं, इसकी पुष्टि करें। इसके बाद सही राशि (जैसे ₹100) स्वयं दर्ज करें।',
          tip: 'रुपये दर्ज करते समय शून्य की संख्या पर विशेष ध्यान दें।'
        },
        {
          step: 4,
          title: 'अपना गोपनीय UPI PIN सुरक्षित रूप से दर्ज करें',
          desc: 'लेन-देन पूरा करने के लिए अपना 4 या 6 अंकों का गुप्त UPI PIN दर्ज करें। पिन डालते समय स्क्रीन को थोड़ा छुपा लें ताकि कोई दूसरा देख न सके।',
          tip: 'याद रखें: आपका UPI PIN आपके बैंक लॉकर की चाबी जैसा है। इसे कभी किसी को न बताएं।'
        },
        {
          step: 5,
          title: 'सफल भुगतान (Payment Successful) स्क्रीन देखें',
          desc: 'स्क्रीन पर हरे रंग का सही का निशान और सफल भुगतान का संदेश आने तक प्रतीक्षा करें। अपने बैंक के SMS में भी पुष्टि देखें।',
          tip: 'केवल किसी अन्य व्यक्ति द्वारा दिखाए गए स्क्रीनशॉट पर भरोसा न करें; अपने स्वयं के ऐप इतिहास में जांचें।'
        }
      ],
      commonMistakes: [
        {
          mistake: 'किसी अनजान व्यक्ति द्वारा पैसे भेजने का झांसा देने पर UPI PIN डालना।',
          correctAction: 'पैसे प्राप्त (Receive) करने के लिए कभी UPI PIN की आवश्यकता नहीं होती। अगर PIN मांगा जा रहा है, तो आपके खाते से पैसे कटेंगे!'
        },
        {
          mistake: 'बैंक कर्मचारी का दावा करने वाले कॉलर को फोन पर OTP बताना।',
          correctAction: 'असली बैंक कर्मचारी कभी भी आपका OTP या पासवर्ड नहीं मांगते। तुरंत कॉल काट दें।'
        },
        {
          mistake: 'लेन-देन लंबित (Pending) होने पर तुरंत दोबारा भुगतान कर देना।',
          correctAction: '5 से 10 मिनट प्रतीक्षा करें। बैंक सर्वर सामान्य होते ही पैसा या तो दुकानदार को मिलेगा या आपके खाते में वापस आ जाएगा।'
        }
      ],
      safetyRules: [
        'UPI PIN केवल आपके खाते से पैसे भेजने के लिए होता है, पैसे लेने के लिए नहीं।',
        'अपना UPI PIN या OTP कभी किसी के साथ साझा न करें।',
        'भुगतान करने से पहले प्राप्तकर्ता का नाम हमेशा ध्यानपूर्वक पढ़ें।',
        'धोखाधड़ी होने पर तुरंत राष्ट्रीय साइबर हेल्पलाइन 1930 पर कॉल करें।'
      ],
      faqs: [
        {
          q: 'यदि लेन-देन विफल हो जाए और पैसे कट जाएं तो क्या करें?',
          a: 'UPI प्रणाली में कटे हुए पैसे आमतौर पर 24 से 48 घंटे के भीतर बैंक द्वारा अपने आप आपके खाते में लौटा दिए जाते हैं। आप ऐप में "Raise Dispute" विकल्प से शिकायत दर्ज कर सकते हैं।'
        },
        {
          q: 'क्या कमजोर इंटरनेट में भी UPI काम करता है?',
          a: 'धीमे इंटरनेट में भुगतान में समय लग सकता है। स्थिर नेटवर्क में जाकर ही भुगतान करें या बेसिक फोन पर *99# सेवा का उपयोग करें।'
        },
        {
          q: 'क्या दुकानों पर UPI से भुगतान करने पर कोई अतिरिक्त शुल्क लगता है?',
          a: 'नहीं, सामान्य बैंक खाते से दुकानों पर UPI द्वारा भुगतान करना पूरी तरह निःशुल्क है।'
        }
      ],
      officialResources: [
        {
          name: 'NPCI आधिकारिक UPI अक्सर पूछे जाने वाले प्रश्न',
          url: 'https://www.npci.org.in/what-we-do/upi/faqs',
          desc: 'भारतीय राष्ट्रीय भुगतान निगम की आधिकारिक मार्गदर्शिका और नियम।'
        },
        {
          name: 'भारतीय रिज़र्व बैंक (RBI) शिकायत समाधान पोर्टल',
          url: 'https://cms.rbi.org.in/',
          desc: 'बैंकिंग और डिजिटल भुगतान विवादों के लिए आधिकारिक लोकपाल पोर्टल।'
        }
      ],
      related: ['banking-atm', 'connectivity-networks', 'civic-complaints']
    }
  },

  {
    id: 'digital-farming',
    slug: 'digital-farming',
    iconName: 'Sprout',
    image: '/images/farming-advisory.jpg',
    category: 'agriculture',
    verifiedUrl: 'https://enam.gov.in/',
    verifiedSource: 'eNAM (National Agriculture Market - Ministry of Agriculture)',
    lastReviewed: '2026-03-12',
    te: {
      title: 'డిజిటల్ వ్యవసాయం',
      tagline: 'వాతావరణం, పంట సంరక్షణ మరియు వ్యవసాయ మార్కెట్ ధరల సమాచారం',
      shortDesc: 'మొబైల్ ఫోన్ ద్వారా వర్ష సూచనలు, తెగుళ్ల నివారణ సలహాలు, ఇ-నామ్ (e-NAM) మార్కెట్ ధరలు మరియు పథకాలు తెలుసుకోండి.',
      whyMatters: [
        'ముందస్తు వర్ష సూచనల ద్వారా ఎరువులు వేయడం, పురుగుమందులు పిచికారీ చేయడం, మరియు పంట కోతలను సకాలంలో ప్లాన్ చేసుకోవచ్చు.',
        'పంటకు సోకిన తెగుళ్ల ఫొటోను వ్యవసాయ విశ్వవిద్యాలయాల యాప్‌లలో పెట్టి శాస్త్రీయ పరిష్కారాలు పొందవచ్చు.',
        'మధ్యవర్తుల మోసం లేకుండా సమీప మార్కెట్ యార్డుల్లోని కనీస మద్దతు ధరలు (MSP) మరియు తాజా ధరలను పోల్చుకోవచ్చు.',
        'పీఎం కిసాన్ (PM-KISAN), పంట బీమా (PMFBY), సబ్సిడీ విత్తనాలు మరియు యంత్రాల పథకాల అర్హత వివరాలు తెలుసుకోవచ్చు.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'అధికారిక వాతావరణ మరియు వ్యవసాయ సలహా యాప్‌లను ఇన్‌స్టాల్ చేసుకోండి',
          desc: 'కేంద్ర వాతావరణ శాఖ (IMD) యొక్క మేఘదూత్ (Meghdoot), దామిని (Damini - పిడుగుల హెచ్చరిక), లేదా రాష్ట్ర వ్యవసాయ శాఖ యాప్‌లను డౌన్‌లోడ్ చేసుకోండి. మీ మండలం లేదా గ్రామాన్ని ఎంచుకోండి.',
          tip: 'పిడుగుపాటు హెచ్చరికల కోసం దామిని యాప్ రైతులకు ప్రాణరక్షణ కల్పిస్తుంది.'
        },
        {
          step: 2,
          title: 'పంట తెగులు లేదా వ్యాధి నివారణకు శాస్త్రీయ సలహా పొందండి',
          desc: 'పంట ఆకులు లేదా కాయలకు సోకిన తెగులు ఫొటోను స్పష్టంగా తీసి వ్యవసాయ విజ్ఞాన కేంద్రం (KVK) లేదా కిసాన్ సువిధ యాప్ ద్వారా అప్‌లోడ్ చేయండి. లేదా 1800-180-1551 కిసాన్ కాల్ సెంటర్‌కు ఉచితంగా ఫోన్ చేసి నిపుణులను అడగండి.',
          tip: 'మందుల దుకాణదారుల మాటలు మాత్రమే కాకుండా శాస్త్రీయ వ్యవసాయ అధికారుల సలహాను పరిగణించండి.'
        },
        {
          step: 3,
          title: 'eNAM పోర్టల్ ద్వారా వ్యవసాయ మార్కెట్ ధరలను తనిఖీ చేయండి',
          desc: 'enam.gov.in వెబ్‌సైట్ లేదా eNAM మొబైల్ యాప్‌ను తెరవండి. మీ రాష్ట్రం, జిల్లా మార్కెట్ యార్డు (APMC), మరియు మీ పంట (ఉదా: పత్తి, వరి, మిర్చి) ఎంచుకుని తాజా బిడ్డింగ్ ధరలను పరిశీలించండి.',
          tip: 'మార్కెట్ ధరలు రోజూ మారుతుంటాయి. మార్కెట్‌కు సరుకు తీసుకెళ్లే ముందు రోజు ధరలు చూడండి.'
        },
        {
          step: 4,
          title: 'నీటి యాజమాన్యం మరియు సూక్ష్మ సేద్యం మార్గదర్శకాలు తెలుసుకోండి',
          desc: 'భూమిలో తేమ శాతాన్ని బట్టి డ్రిప్ లేదా స్ప్రింక్లర్ ద్వారా ఎంత నీరు అందించాలో సమాచారం తెలుసుకోండి. దీనివల్ల విద్యుత్, నీరు రెండూ ఆదా అవుతాయి.',
          tip: 'ఎండ ఎక్కువగా ఉండే సమయాల్లో కాకుండా తెల్లవారుజామున లేదా సాయంత్రం నీరు పెట్టడం మంచిది.'
        },
        {
          step: 5,
          title: 'వ్యవసాయ రాయితీలు మరియు పథకాల సమాచారాన్ని ధృవీకరించండి',
          desc: 'పీఎం కిసాన్ పోర్టల్ (pmkisan.gov.in) లేదా రాష్ట్ర రైతు భరోసా కేంద్రాల ద్వారా మీ దరఖాస్తు స్థితి, ఆధార్ లింకింగ్, ఈ-కేవైసీ (eKYC) సరిచూసుకోండి.',
          tip: 'పథకాల కోసం ఏ అపరిచితుడికి దళారీ రుసుము చెల్లించవలసిన అవసరం లేదు.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'సోషల్ మీడియా లేదా యూట్యూబ్‌లో కనిపించే అద్భుత రసాయనాలు, మందుల వీడియోలను గుడ్డిగా నమ్మి కొనుగోలు చేయడం.',
          correctAction: 'ఎల్లప్పుడూ మండల వ్యవసాయ అధికారి (AO) లేదా రైతు భరోసా కేంద్రం వ్యవసాయ సహాయకుడిని సంప్రదించి మాత్రమే నిర్ణయం తీసుకోండి.'
        },
        {
          mistake: 'వాట్సాప్‌లో వచ్చే నకిలీ సబ్సిడీ ట్రాక్టర్ లేదా సోలార్ పంపు లింక్‌లపై క్లిక్ చేసి వ్యక్తిగత సమాచారం ఇవ్వడం.',
          correctAction: 'ప్రభుత్వ పథకాలు ఎప్పుడూ అధికారిక .gov.in లేదా .nic.in పోర్టళ్ల ద్వారా మాత్రమే ఉంటాయి. వాట్సాప్ లింక్‌లను నమ్మవద్దు.'
        },
        {
          mistake: 'పాత మార్కెట్ ధరల రికార్డును చూసి వెంటనే సరుకును తక్కువ ధరకు మధ్యవర్తులకు అమ్మేయడం.',
          correctAction: 'eNAM లో ఒకే రోజున సమీపంలోని 3 వేర్వేరు మార్కెట్ యార్డుల ధరలను సరిచూసి లాభదాయకమైన మార్కెట్‌ను ఎంచుకోండి.'
        }
      ],
      safetyRules: [
        'మార్కెట్ ధరలు మరియు వాతావరణ నివేదికలు విద్యా మార్గదర్శకత్వానికి మాత్రమే; క్షేత్రస్థాయిలో ధృవీకరించుకోండి.',
        'పీఎం కిసాన్ రిజిస్ట్రేషన్ పేరుతో వచ్చే నకిలీ కాల్స్‌కు ఆధార్ OTP లేదా బ్యాంక్ వివరాలు ఇవ్వవద్దు.',
        'ఏ ప్రభుత్వ వ్యవసాయ రాయితీకి కూడా ముందుగా ఆన్‌లైన్‌లో కమీషన్ చెల్లించవలసిన నిబంధన ఉండదు.'
      ],
      faqs: [
        {
          q: 'కిసాన్ కాల్ సెంటర్ (Kisan Call Centre) లో తెలుగులో మాట్లాడవచ్చా?',
          a: 'అవును! టోల్‌ఫ్రీ నంబర్ 1800-180-1551 కి డయల్ చేసినప్పుడు మీ ప్రాంతీయ భాష తెలుగును ఎంచుకోవచ్చు. వ్యవసాయ శాస్త్రవేత్తలు ఉచితంగా సమాధానం ఇస్తారు.'
        },
        {
          q: 'ఈ వెబ్‌సైట్ ప్రత్యక్షంగా నా పొలంలో వాతావరణం లేదా లైవ్ ధరలను చూపిస్తుందా?',
          a: 'లేదు. మన డిజిటల్ గ్రామం మీకు ఏయే అధికారిక యాప్‌లు మరియు వెబ్‌సైట్లలో కచ్చితమైన సమాచారం లభిస్తుందో నేర్పించే అవగాహన వేదిక.'
        },
        {
          q: 'eNAM ద్వారా రైతులు ఇతర రాష్ట్రాల వ్యాపారులకు కూడా పంటను అమ్ముకోవచ్చా?',
          a: 'అవును, eNAM అనేది భారతదేశం మొత్తానికి ఉద్దేశించిన ఒకే జాతీయ ఆన్‌లైన్ మార్కెట్. నాణ్యత పరీక్ష (Assaying) ఆధారంగా దేశవ్యాప్త బిడ్డర్లు ధరను వేస్తారు.'
        }
      ],
      officialResources: [
        {
          name: 'eNAM (జాతీయ వ్యవసాయ మార్కెట్ అధికారిక పోర్టల్)',
          url: 'https://enam.gov.in/',
          desc: 'భారత ప్రభుత్వ వ్యవసాయ మరియు రైతు సంక్షేమ మంత్రిత్వ శాఖ యొక్క అధికారిక ఆన్‌లైన్ మార్కెట్ వేదిక.'
        },
        {
          name: 'PM-KISAN సమ్మాన్ నిధి అధికారిక పోర్టల్',
          url: 'https://pmkisan.gov.in/',
          desc: 'రైతు ఖాతా స్టేటస్, e-KYC మరియు లబ్ధిదారుల జాబితా తనిఖీ కోసం అధికారిక పోర్టల్.'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'civic-complaints']
    },
    en: {
      title: 'Digital Farming',
      tagline: 'Weather forecasts, pest advisories, and agricultural market prices',
      shortDesc: 'Discover how smartphones help farmers track rainfall alerts, manage crop pests scientifically, verify eNAM market prices, and check government subsidies.',
      whyMatters: [
        'Accurate advance weather forecasts prevent wasted expenditure on fertilizers, pesticides, and harvest timing.',
        'Early identification of plant diseases through agricultural university apps prevents devastating crop loss.',
        'Check transparent daily mandi prices across nearby market yards on eNAM to negotiate fairly with buyers.',
        'Direct access to official portals for PM-KISAN, crop insurance (PMFBY), and subsidized farm machinery.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'Install official agri-weather applications',
          desc: 'Download authentic government tools such as Meghdoot (agro-meteorological advisories from IMD/ICAR) or Damini (lightning safety alerts). Select your village district and block.',
          tip: 'Damini provides critical early alerts for thunderstorm and lightning safety in open fields.'
        },
        {
          step: 2,
          title: 'Seek certified scientific pest guidance',
          desc: 'Take a clear, well-lit photo of infected leaves or stems. Submit it through official university portals or call the Kisan Call Centre free at 1800-180-1551 to speak with an agronomist.',
          tip: 'Never rely solely on fertilizer salesmen; cross-check chemical recommendations with official agricultural officers.'
        },
        {
          step: 3,
          title: 'Monitor live mandi prices on eNAM (enam.gov.in)',
          desc: 'Open enam.gov.in or the official eNAM mobile app. Filter by your state, regulated APMC market yard, and commodity (paddy, cotton, chilli, turmeric) to see real auction minimum and modal rates.',
          tip: 'Commodity rates fluctuate daily; always check modal rates before loading produce onto transport.'
        },
        {
          step: 4,
          title: 'Follow water management and micro-irrigation advice',
          desc: 'Learn optimum drip and sprinkler runtime schedules based on local soil moisture conditions to conserve water and electricity while boosting yield.',
          tip: 'Irrigate during cool morning or evening hours to reduce evaporation loss.'
        },
        {
          step: 5,
          title: 'Verify government welfare schemes and eKYC status',
          desc: 'Visit pmkisan.gov.in to review installment disbursements, land seeding verification, and Aadhaar-based eKYC compliance.',
          tip: 'Official scheme registration is free; never pay middlemen or unauthorized service agents.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'Blindly buying unverified "miracle" chemicals promoted in sensational social media videos.',
          correctAction: 'Consult your local Agricultural Extension Officer (AEO) or Rythu Bharosa Kendram staff before spraying.'
        },
        {
          mistake: 'Clicking fraudulent WhatsApp links offering free tractors, solar pumps, or cash prizes.',
          correctAction: 'Government agricultural schemes only operate on official .gov.in or .nic.in websites. Never share personal credentials.'
        },
        {
          mistake: 'Selling produce below market rates because of rumors without checking nearby APMC rates.',
          correctAction: 'Use eNAM to compare prices across three neighboring mandis before finalizing your sale.'
        }
      ],
      safetyRules: [
        'Educational guidance does not replace physical crop inspection by certified agronomists.',
        'Never disclose OTPs or bank passwords under the pretext of PM-KISAN verification calls.',
        'Legitimate government subsidy programs never require upfront fees through private payment links.'
      ],
      faqs: [
        {
          q: 'Can I speak in Telugu or Hindi on the Kisan Call Centre helpline?',
          a: 'Yes, dialing 1800-180-1551 (toll-free) connects you with agricultural graduates fluent in your state\'s regional language between 6:00 AM and 10:00 PM.'
        },
        {
          q: 'Does Mana Digital Gramam show real-time weather and commodity prices directly?',
          a: 'No. This website is an awareness portal teaching you how to use authentic official apps and portals like eNAM, Meghdoot, and PM-KISAN safely.'
        },
        {
          q: 'What is eNAM and how does it help a small farmer?',
          a: 'eNAM is the National Agriculture Market, a pan-India electronic trading portal networking existing APMC mandis to create a unified national market for agricultural commodities.'
        }
      ],
      officialResources: [
        {
          name: 'eNAM (National Agriculture Market Official Portal)',
          url: 'https://enam.gov.in/',
          desc: 'Official electronic trading platform of the Ministry of Agriculture and Farmers Welfare.'
        },
        {
          name: 'PM-KISAN Samman Nidhi Portal',
          url: 'https://pmkisan.gov.in/',
          desc: 'Direct benefit transfer portal for farmer status checks, eKYC, and beneficiary verification.'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'civic-complaints']
    },
    hi: {
      title: 'डिजिटल खेती',
      tagline: 'मौसम पूर्वानुमान, फसल सुरक्षा और कृषि मंडी भाव की जानकारी',
      shortDesc: 'स्मार्टफोन से बारिश के अलर्ट, कीट प्रबंधन सलाह, ई-नाम (e-NAM) मंडी भाव और सरकारी कृषि योजनाओं को समझना सीखें।',
      whyMatters: [
        'सटीक मौसम पूर्वानुमान से खाद, कीटनाशक और फसल कटाई की योजना सही समय पर बनाई जा सकती है।',
        'फसल में लगी बीमारी की तस्वीर कृषि विशेषज्ञों को भेजकर वैज्ञानिक और किफायती समाधान प्राप्त किए जा सकते हैं।',
        'बिचौलियों के दबाव के बिना नजदीकी मंडियों के न्यूनतम समर्थन मूल्य (MSP) और वर्तमान भाव की तुलना की जा सकती है।',
        'पीएम किसान, फसल बीमा और कृषि यंत्र सब्सिडी की आधिकारिक स्थिति घर बैठे जांची जा सकती है।'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'सत्यापित कृषि मौसम ऐप का उपयोग करें',
          desc: 'मौसम विभाग का मेघदूत (Meghdoot) ऐप और आकाशीय बिजली की चेतावनी के लिए दामिनी (Damini) ऐप इंस्टॉल करें। अपना जिला और ब्लॉक चुनें।',
          tip: 'दामिनी ऐप खेतों में काम करते समय बिजली गिरने के खतरे से जीवन रक्षा में बहुत मददगार है।'
        },
        {
          step: 2,
          title: 'फसल की बीमारी का वैज्ञानिक निदान प्राप्त करें',
          desc: 'रोगग्रस्त पत्ती या पौधे की स्पष्ट फोटो लें और कृषि विश्वविद्यालय के ऐप या किसान सुविधा ऐप पर भेजें। या टोल-फ्री 1800-180-1551 पर कॉल करें।',
          tip: 'केवल कीटनाशक विक्रेता की सलाह पर निर्भर न रहें; सरकारी कृषि अधिकारियों से पुष्टि करें।'
        },
        {
          step: 3,
          title: 'eNAM पोर्टल पर मंडी भाव की जांच करें',
          desc: 'enam.gov.in या eNAM मोबाइल ऐप खोलें। अपना राज्य, मंडी और फसल (जैसे धान, गेहूं, कपास) चुनकर ताजा नीलामी भाव देखें।',
          tip: 'मंडी भाव रोजाना बदलते हैं; फसल मंडी ले जाने से पहले भाव अवश्य देखें।'
        },
        {
          step: 4,
          title: 'जल प्रबंधन और ड्रिप सिंचाई तकनीक अपनाएं',
          desc: 'मिट्टी की नमी के अनुसार ड्रिप या फव्वारा सिंचाई का सही समय जानें, जिससे पानी और बिजली की बचत हो सके।',
          tip: 'तेज धूप की बजाय सुबह या शाम के समय सिंचाई करना अधिक लाभकारी होता है।'
        },
        {
          step: 5,
          title: 'सरकारी योजनाओं और eKYC की पुष्टि करें',
          desc: 'pmkisan.gov.in पर जाकर अपनी किस्त की स्थिति, आधार लिंकिंग और ई-केवाईसी जांचें।',
          tip: 'सरकारी योजनाओं में आवेदन के लिए किसी दलाल को पैसा न दें।'
        }
      ],
      commonMistakes: [
        {
          mistake: 'सोशल मीडिया पर दिखाए गए अनपेक्षित कीटनाशकों या बीजों के विज्ञापनों पर आंख मूंदकर भरोसा करना।',
          correctAction: 'हमेशा अपने ब्लॉक कृषि अधिकारी या कृषि विज्ञान केंद्र (KVK) के वैज्ञानिकों से सलाह लें।'
        },
        {
          mistake: 'फ्री ट्रैक्टर या सोलर पंप के नाम पर व्हाट्सएप पर आने वाले संदिग्ध लिंक पर क्लिक करना।',
          correctAction: 'सरकारी योजनाएं केवल आधिकारिक .gov.in या .nic.in वेबसाइट पर ही संचालित होती हैं।'
        },
        {
          mistake: 'बिना मंडी भाव जाने अपनी उपज स्थानीय व्यापारियों को कम दाम पर बेच देना।',
          correctAction: 'eNAM पर आसपास की तीन मंडियों के भाव की तुलना करें और फिर निर्णय लें।'
        }
      ],
      safetyRules: [
        'यह पोर्टल सामान्य शैक्षिक मार्गदर्शन देता है; वास्तविक निर्णय विशेषज्ञ की सलाह से लें।',
        'पीएम किसान वेरिफिकेशन के नाम पर किसी को अपना आधार OTP या बैंक विवरण न दें।',
        'किसी भी सरकारी कृषि योजना के लिए कोई अग्रिम ऑनलाइन कमीशन नहीं लिया जाता।'
      ],
      faqs: [
        {
          q: 'क्या किसान कॉल सेंटर पर हिंदी में बात कर सकते हैं?',
          a: 'हाँ! 1800-180-1551 (टोल-फ्री) पर कॉल करके आप अपनी भाषा हिंदी में कृषि वैज्ञानिकों से निःशुल्क सलाह ले सकते हैं।'
        },
        {
          q: 'क्या मन डिजिटल ग्राम सीधे मौसम और मंडी भाव दिखाता है?',
          a: 'नहीं, यह पोर्टल आपको यह सिखाता है कि आप eNAM और मौसम विभाग के आधिकारिक पोर्टलों से सही जानकारी कैसे प्राप्त करें।'
        },
        {
          q: 'eNAM क्या है और इससे किसान को क्या लाभ है?',
          a: 'eNAM एक राष्ट्रीय इलेक्ट्रॉनिक कृषि बाजार है जो देश भर की मंडियों को ऑनलाइन जोड़ता है ताकि किसान को अपनी उपज का बेहतर मूल्य मिल सके।'
        }
      ],
      officialResources: [
        {
          name: 'eNAM (राष्ट्रीय कृषि बाजार आधिकारिक पोर्टल)',
          url: 'https://enam.gov.in/',
          desc: 'कृषि एवं किसान कल्याण मंत्रालय का अखिल भारतीय ऑनलाइन ट्रेडिंग प्लेटफॉर्म।'
        },
        {
          name: 'पीएम-किसान सम्मान निधि आधिकारिक पोर्टल',
          url: 'https://pmkisan.gov.in/',
          desc: 'किसान लाभार्थी स्थिति, eKYC और किस्त सत्यापन के लिए आधिकारिक पोर्टल।'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'civic-complaints']
    }
  },

  {
    id: 'online-learning',
    slug: 'online-learning',
    iconName: 'GraduationCap',
    image: '/images/education-tablet.jpg',
    category: 'education',
    verifiedUrl: 'https://swayam.gov.in/',
    verifiedSource: 'SWAYAM (Ministry of Education, Govt. of India)',
    lastReviewed: '2026-03-10',
    te: {
      title: 'ఆన్లైన్ విద్య',
      tagline: 'గ్రామీణ విద్యార్థులు మరియు యువత కోసం ఉచిత డిజిటల్ విద్యా వనరులు',
      shortDesc: 'ఉచిత ఆన్‌లైన్ కోర్సులు, పాఠ్యపుస్తకాలు, యూట్యూబ్ పాఠాలు, కంప్యూటర్ నైపుణ్యాలు మరియు ఇంగ్లీష్ నేర్చుకునే మార్గాలు.',
      whyMatters: [
        'పెద్ద నగరాలకు లేదా ఖరీదైన కోచింగ్ సెంటర్లకు వెళ్లాల్సిన అవసరం లేకుండా గ్రామంలోనే ఉండి ఉత్తమ ఉపాధ్యాయుల పాఠాలు వినవచ్చు.',
        '1వ తరగతి నుండి డిగ్రీ వరకు అధికారిక పాఠ్యపుస్తకాలు మరియు వీడియో పాఠాలను ఉచితంగా డౌన్‌లోడ్ చేసుకోవచ్చు.',
        'మొబైల్ ఫోన్ ద్వారా కంప్యూటర్ బేసిక్స్, టైపింగ్, స్పోకెన్ ఇంగ్లీష్, మరియు ఉద్యోగ నైపుణ్యాలు నేర్చుకోవచ్చు.',
        'ప్రభుత్వ గుర్తింపు పొందిన సర్టిఫికేట్లతో పోటీ పరీక్షలకు (TSRTC, APPSC, గ్రూప్స్, బ్యాంకింగ్) సిద్ధం కావచ్చు.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'ప్రభుత్వ ఉచిత విద్యా పోర్టళ్లను తెలుసుకోండి',
          desc: 'కేంద్ర విద్యా మంత్రిత్వ శాఖ వారి స్వయం (SWAYAM), దీక్ష (DIKSHA), మరియు ఈ-పాఠశాల (ePathshala) యాప్‌లను ఉపయోగించండి. వీటిలో పాఠాలు మరియు పుస్తకాలు పూర్తిగా ఉచితం.',
          tip: 'దీక్ష (DIKSHA) యాప్‌లో మీ పాఠ్యపుస్తకంలో ఉన్న QR కోడ్‌ను స్కాన్ చేస్తే నేరుగా ఆ పాఠం వీడియో వస్తుంది.'
        },
        {
          step: 2,
          title: 'నమ్మకమైన విద్యా ఛానెళ్లను మాత్రమే ఎంచుకోండి',
          desc: 'యూట్యూబ్‌లో చదువుకునేటప్పుడు విశ్వసనీయ విద్యా సంస్థలు, దూరదర్శన్ యాదగిరి / సప్తగిరి ఛానెల్స్ లేదా గుర్తింపు పొందిన అధ్యాపకుల వీడియోలను వీక్షించండి.',
          tip: 'చదువుకునే సమయంలో పరధ్యానం కలిగించే వినోద వీడియోల రికమండేషన్లకు దూరంగా ఉండండి.'
        },
        {
          step: 3,
          title: 'కంప్యూటర్ బేసిక్స్ మరియు ఇంగ్లీష్ నేర్చుకోండి',
          desc: 'స్మార్ట్‌ఫోన్ ద్వారా గూగుల్ రీడ్ ఎలాంగ్ (Bolo), డ్యుయోలింగో వంటి ఉచిత యాప్‌లతో పిల్లలు సరదాగా ఇంగ్లీష్ చదవడం నేర్చుకోవచ్చు. పెద్దలు డిజిటల్ సాక్షరతా అభియాన్ పాఠాలను అనుసరించవచ్చు.',
          tip: 'ప్రతిరోజూ 20 నిమిషాలు క్రమం తప్పకుండా ప్రాక్టీస్ చేయడం వల్ల మంచి ఫలితం ఉంటుంది.'
        },
        {
          step: 4,
          title: 'ఆఫ్‌లైన్‌లో చదువుకోవడానికి మెటీరియల్ డౌన్‌లోడ్ చేసుకోండి',
          desc: 'ఇంటర్నెట్ సిగ్నల్ ఉన్నప్పుడు లేదా వై-ఫై అందుబాటులో ఉన్నప్పుడు PDF పాఠ్యపుస్తకాలు మరియు ముఖ్యమైన వీడియోలను డౌన్‌లోడ్ చేసి పెట్టుకోండి. సిగ్నల్ లేనప్పుడు కూడా చదువుకోవచ్చు.',
          tip: 'ఫోన్ మెమరీ నిండిపోకుండా అవసరమైన చాప్టర్లను మాత్రమే భద్రపరుచుకోండి.'
        },
        {
          step: 5,
          title: 'కోర్సు లేదా సర్టిఫికేట్ అసలైనదో కాదో సరిచూసుకోండి',
          desc: 'ఆన్‌లైన్ కోర్సులలో చేరే ముందు అది UGC, AICTE, లేదా NPTEL ద్వారా ఆమోదించబడిందా అని చూడండి. ఉచితమని చెప్పి చివర్లో భారీ సర్టిఫికేట్ రుసుము వసూలు చేసే నకిలీ వెబ్‌సైట్లను నమ్మవద్దు.',
          tip: 'ప్రభుత్వ పోర్టల్ SWAYAM లో కోర్సు పూర్తిగా ఉచితం; కేవలం ఐచ్ఛిక పరీక్షకు మాత్రమే స్వల్ప రుసుము ఉంటుంది.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'వాట్సాప్ లేదా టెలిగ్రామ్‌లో వచ్చే "ఉచిత ప్రభుత్వ ల్యాప్‌టాప్ పథకం" లింక్‌లపై క్లిక్ చేసి వ్యక్తిగత వివరాలు ఇవ్వడం.',
          correctAction: 'ప్రభుత్వం ఎప్పుడూ మెసేజింగ్ లింక్‌ల ద్వారా ల్యాప్‌టాప్‌లు పంచదు. ఇవి విద్యార్థుల సమాచారాన్ని దొంగిలించే నకిలీ లింకులు.'
        },
        {
          mistake: 'అన్ని ఆన్‌లైన్ కోర్సులు నూటికి నూరు శాతం ఉచితం అనుకోవడం.',
          correctAction: 'చేరే ముందే నిబంధనలు చదవండి. ఏవైనా ఫీజులు ఉంటే మీ తల్లిదండ్రులు లేదా ఉపాధ్యాయులతో చర్చించి మాత్రమే నిర్ణయం తీసుకోండి.'
        },
        {
          mistake: 'పిల్లలకు చదువు కోసం ఫోన్ ఇచ్చినప్పుడు పర్యవేక్షణ లేకుండా వదిలేయడం.',
          correctAction: 'యూట్యూబ్‌లో కిడ్స్ మోడ్ లేదా గూగుల్ ఫ్యామిలీ లింక్ వంటి రక్షణ సెట్టింగ్‌లను ఆన్ చేసి ఉంచండి.'
        }
      ],
      safetyRules: [
        'గుర్తింపు లేని వెబ్‌సైట్ల నుండి సాఫ్ట్‌వేర్ లేదా పైరేటెడ్ బుక్స్ డౌన్‌లోడ్ చేయవద్దు.',
        'ఆన్‌లైన్ పరీక్ష రిజిస్ట్రేషన్ పేరుతో మీ ఆధార్ కార్డ్ లేదా ఫోటోలను అనుమానాస్పద వాట్సాప్ గ్రూపులలో పంపవద్దు.',
        'మంచి వెలుతురు ఉన్న గదిలో కూర్చుని, కళ్లకు కనీసం ఒక అడుగు దూరం ఉంచి చదువుకోండి.'
      ],
      faqs: [
        {
          q: 'దీక్ష (DIKSHA) యాప్ ఎలా పనిచేస్తుంది?',
          a: 'ఆంధ్రప్రదేశ్ మరియు తెలంగాణ పాఠశాల పుస్తకాలలోని ప్రతి పాఠం పక్కన ఒక క్యూఆర్ కోడ్ ఉంటుంది. దీక్ష యాప్‌తో ఆ కోడ్‌ను స్కాన్ చేస్తే ఆ పాఠం తాలూకు వివరణాత్మక వీడియోలు మరియు ప్రశ్నలు తెలుగులో కనిపిస్తాయి.'
        },
        {
          q: 'SWAYAM లో గ్రామీణ విద్యార్థులు డిగ్రీ కోర్సులు నేర్చుకోవచ్చా?',
          a: 'అవును! భారతదేశంలోని అగ్రగామి ఐఐటీలు (IITs), ఐఐఎంలు (IIMs) మరియు విశ్వవిద్యాలయాల ప్రొఫెసర్లు స్వయం పోర్టల్ ద్వారా ఇంజనీరింగ్, కామర్స్, ఆర్ట్స్ మరియు సైన్స్ పాఠాలను ఆన్‌లైన్‌లో బోధిస్తారు.'
        },
        {
          q: 'ఆన్‌లైన్ చదువులకు ఎంత డేటా అవసరమవుతుంది?',
          a: 'వీడియో క్వాలిటీని 360p లేదా 480p లో సెట్ చేసుకుంటే తక్కువ డేటా ఖర్చవుతుంది. 1 గంట వీడియోకు సుమారు 200MB నుండి 300MB డేటా సరిపోతుంది.'
        }
      ],
      officialResources: [
        {
          name: 'SWAYAM (కేంద్ర విద్యా మంత్రిత్వ శాఖ ఉచిత కోర్సులు)',
          url: 'https://swayam.gov.in/',
          desc: 'పాఠశాల స్థాయి నుండి పోస్ట్ గ్రాడ్యుయేట్ స్థాయి వరకు వేలాది ఉచిత ఆన్‌లైన్ కోర్సులు.'
        },
        {
          name: 'DIKSHA (డిజిటల్ ఇన్‌ఫ్రాస్ట్రక్చర్ ఫర్ నాలెడ్జ్ షేరింగ్)',
          url: 'https://diksha.gov.in/',
          desc: 'రాష్ట్ర సిలబస్ పాఠ్యపుస్తకాలు, క్యూఆర్ కోడ్ ఆధారిత వీడియో పాఠాలు మరియు ఉపాధ్యాయుల మెటీరియల్.'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'online-healthcare']
    },
    en: {
      title: 'Online Learning',
      tagline: 'Free and authentic educational resources for rural students and youth',
      shortDesc: 'Access free high-quality school courses, digital skills training, spoken English tutorials, and authenticated government study materials.',
      whyMatters: [
        'Rural students can learn from top professors and school teachers without expensive city coaching fees.',
        'Textbooks from Class 1 through post-graduation available free of cost in regional languages.',
        'Learn computer fundamentals, typing, English fluency, and competitive exam preparation right from home.',
        'Earn accredited certificates recognized across academic boards and industry employers.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'Explore trusted national learning platforms',
          desc: 'Download DIKSHA (school syllabus and QR textbooks) or register on SWAYAM (higher education courses). These portals are launched by the Ministry of Education and are 100% free.',
          tip: 'Scanning the QR code printed in government school textbooks opens chapter-specific video lessons directly.'
        },
        {
          step: 2,
          title: 'Curate credible video tutorial channels',
          desc: 'When using video platforms, subscribe to public broadcast channels like Doordarshan Educational, state board portals, and established nonprofit educational foundations.',
          tip: 'Avoid clicking distracting clickbait videos by saving study playlists in advance.'
        },
        {
          step: 3,
          title: 'Practice language and foundational digital skills',
          desc: 'Use free tools like Google Read Along (Bolo) to build reading confidence in children, and Duolingo for spoken English. For basic computer literacy, follow PMGDISHA modules.',
          tip: 'Dedicate 20 to 30 minutes daily to active practice rather than passive watching.'
        },
        {
          step: 4,
          title: 'Download study materials for offline revision',
          desc: 'Save textbook chapters in PDF format during periods of strong Wi-Fi or data connectivity. You can read downloaded files anytime without consuming ongoing data.',
          tip: 'Keep downloaded documents organized in an "Education" folder on your phone.'
        },
        {
          step: 5,
          title: 'Verify course credibility before enrollment',
          desc: 'Check if certifications are backed by UGC, AICTE, NPTEL, or state boards. Beware of commercial websites demanding thousands of rupees for unauthorized "guaranteed job" diplomas.',
          tip: 'SWAYAM courses are completely free to study; only an optional physical exam carries a nominal fee.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'Clicking viral social media links promising "Free Laptops for all students from Government".',
          correctAction: 'Government schemes are never distributed via random WhatsApp forms. These are phishing scams to steal data.'
        },
        {
          mistake: 'Assuming every course found on internet search is completely free.',
          correctAction: 'Read the course fee structure clearly. Avoid websites requiring credit card details upfront.'
        },
        {
          mistake: 'Leaving young children unsupervised with smartphones during study time.',
          correctAction: 'Enable Google Family Link or YouTube Kids safety filters to ensure age-appropriate educational browsing.'
        }
      ],
      safetyRules: [
        'Never download pirated textbook PDFs from unverified torrent or file-sharing websites.',
        'Do not upload personal Aadhaar details or student IDs to random study groups or unofficial websites.',
        'Maintain good posture and keep the device at least 30 cm from your eyes with adequate ambient lighting.'
      ],
      faqs: [
        {
          q: 'How does the DIKSHA QR code scanner work?',
          a: 'Open the DIKSHA app, select your state and class, tap the QR scanner icon, and point your camera at the QR code next to any textbook chapter to view multimedia lessons in Telugu or English.'
        },
        {
          q: 'Are SWAYAM certificates valid for university credits?',
          a: 'Yes, UGC regulations allow students in recognized Indian colleges to transfer up to 40% of their semester credits from approved SWAYAM online courses.'
        },
        {
          q: 'How can I save mobile data while studying online?',
          a: 'Adjust video streaming quality to 360p or 480p in YouTube settings. This reduces data consumption by over 60% compared to HD video while remaining fully legible.'
        }
      ],
      officialResources: [
        {
          name: 'SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds)',
          url: 'https://swayam.gov.in/',
          desc: 'Official platform by the Ministry of Education offering free online courses from Class 9 to Post-Graduation.'
        },
        {
          name: 'DIKSHA Portal (Digital Infrastructure for Knowledge Sharing)',
          url: 'https://diksha.gov.in/',
          desc: 'National platform for school education providing textbooks, lesson plans, and QR worksheets in regional languages.'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'online-healthcare']
    },
    hi: {
      title: 'ऑनलाइन शिक्षा',
      tagline: 'ग्रामीण विद्यार्थियों और युवाओं के लिए निःशुल्क डिजिटल शिक्षण संसाधन',
      shortDesc: 'निःशुल्क ऑनलाइन कोर्स, पाठ्यपुस्तकें, यूट्यूब कक्षाएं, कंप्यूटर कौशल और अंग्रेजी सीखने के आसान उपाय।',
      whyMatters: [
        'बड़े शहरों या महंगी कोचिंग जाए बिना गांव में ही देश के सर्वश्रेष्ठ शिक्षकों से पढ़ाई कर सकते हैं।',
        'कक्षा 1 से लेकर कॉलेज स्तर तक की सरकारी पाठ्यपुस्तकें और वीडियो पाठ पूरी तरह मुफ्त उपलब्ध हैं।',
        'मोबाइल से कंप्यूटर की बुनियादी बातें, टाइपिंग, अंग्रेजी बोलना और प्रतियोगी परीक्षाओं की तैयारी कर सकते हैं।',
        'मान्यता प्राप्त प्रमाणपत्रों के साथ अपने रोजगार के अवसरों को मजबूत बना सकते हैं।'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'सरकारी निःशुल्क शिक्षा पोर्टलों का उपयोग करें',
          desc: 'शिक्षा मंत्रालय के दीक्षा (DIKSHA), स्वयं (SWAYAM), और ई-पाठशाला (ePathshala) ऐप का उपयोग करें। इनमें सभी सामग्री बिल्कुल मुफ्त है।',
          tip: 'दीक्षा ऐप में अपनी सरकारी किताब का QR कोड स्कैन करके सीधे उस पाठ का वीडियो देख सकते हैं।'
        },
        {
          step: 2,
          title: 'विश्वसनीय यूट्यूब चैनल और अध्ययन सामग्री चुनें',
          desc: 'यूट्यूब पर पढ़ाई करते समय दूरदर्शन, राज्य शिक्षा बोर्ड या मान्यता प्राप्त शैक्षणिक संस्थानों के वीडियो ही देखें।',
          tip: 'पढ़ाई के दौरान ध्यान भटकाने वाले मनोरंजक वीडियो से बचें।'
        },
        {
          step: 3,
          title: 'कंप्यूटर और अंग्रेजी के बुनियादी कौशल सीखें',
          desc: 'बच्चों के लिए Google Read Along और अंग्रेजी बोलने के लिए Duolingo जैसे ऐप्स का उपयोग करें। बुनियादी कंप्यूटर ज्ञान के लिए PMGDISHA की सामग्री देखें।',
          tip: 'रोजाना 20-30 मिनट नियमित अभ्यास करने से जल्दी सुधार होता है।'
        },
        {
          step: 4,
          title: 'ऑफलाइन पढ़ने के लिए किताबें और नोट्स डाउनलोड करें',
          desc: 'जब अच्छा इंटरनेट उपलब्ध हो, तब पाठ्यपुस्तक के जरूरी अध्याय PDF में डाउनलोड कर लें ताकि बिना इंटरनेट भी पढ़ाई हो सके।',
          tip: 'फोन में एक अलग "Study" फोल्डर बनाकर फाइलें व्यवस्थित रखें।'
        },
        {
          step: 5,
          title: 'कोर्स और सर्टिफिकेट की प्रामाणिकता जांचें',
          desc: 'ऑनलाइन कोर्स शुरू करने से पहले जांचें कि वह UGC, AICTE या NPTEL से मान्यता प्राप्त है या नहीं। फर्जी नौकरी के दावों से सावधान रहें।',
          tip: 'SWAYAM पर पढ़ाई पूरी तरह मुफ्त है, केवल परीक्षा के लिए न्यूनतम शुल्क होता है।'
        }
      ],
      commonMistakes: [
        {
          mistake: 'व्हाट्सएप पर "छात्रों को फ्री लैपटॉप" वाले फर्जी लिंक पर क्लिक करके व्यक्तिगत जानकारी भरना।',
          correctAction: 'सरकार कभी व्हाट्सएप लिंक से लैपटॉप नहीं बांटती। यह डेटा चुराने वाले साइबर ठगों की चाल है।'
        },
        {
          mistake: 'यह मान लेना कि इंटरनेट पर मौजूद हर कोर्स बिल्कुल मुफ्त है।',
          correctAction: 'शुरुआत करने से पहले नियम और शर्तें पढ़ें और किसी अनजान साइट पर कार्ड विवरण न डालें।'
        },
        {
          mistake: 'पढ़ाई के नाम पर छोटे बच्चों को बिना किसी निगरानी के स्मार्टफोन दे देना।',
          correctAction: 'YouTube Kids या Google Family Link के जरिए सुरक्षित वातावरण बनाएं।'
        }
      ],
      safetyRules: [
        'अज्ञात साइटों से पायरेटेड किताबें या सॉफ्टवेयर डाउनलोड न करें।',
        'ऑनलाइन परीक्षा के नाम पर संदिग्ध व्हाट्सएप ग्रुपों में आधार कार्ड या फोटो न भेजें।',
        'अच्छी रोशनी में बैठकर फोन को आंखों से कम से कम 1 फुट की दूरी पर रखकर पढ़ें।'
      ],
      faqs: [
        {
          q: 'दीक्षा (DIKSHA) ऐप कैसे काम करता है?',
          a: 'दीक्षा ऐप खोलें, अपनी कक्षा चुनें और अपनी किताब के किसी भी पाठ के पास छपे QR कोड को स्कैन करें। आपको उस विषय के आसान वीडियो मिल जाएंगे।'
        },
        {
          q: 'क्या SWAYAM के सर्टिफिकेट कॉलेज में मान्य होते हैं?',
          a: 'हाँ, यूजीसी (UGC) के नियमों के तहत छात्र SWAYAM कोर्स से अपने कॉलेज के 40% क्रेडिट पूरे कर सकते हैं।'
        },
        {
          q: 'ऑनलाइन पढ़ाई में मोबाइल डेटा कैसे बचाएं?',
          a: 'वीडियो देखते समय यूट्यूब सेटिंग में जाकर क्वालिटी 360p या 480p पर सेट करें। इससे डेटा बहुत कम खर्च होता है।'
        }
      ],
      officialResources: [
        {
          name: 'SWAYAM (शिक्षा मंत्रालय का ऑनलाइन अध्ययन पोर्टल)',
          url: 'https://swayam.gov.in/',
          desc: 'कक्षा 9 से लेकर स्नातकोत्तर तक के हजारों निःशुल्क प्रमाणित ऑनलाइन पाठ्यक्रम।'
        },
        {
          name: 'DIKSHA पोर्टल (स्कूल शिक्षा के लिए राष्ट्रीय मंच)',
          url: 'https://diksha.gov.in/',
          desc: 'सभी राज्यों के पाठ्यक्रम की पाठ्यपुस्तकें और QR कोड आधारित वीडियो पाठ।'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'online-healthcare']
    }
  },

  {
    id: 'connectivity-networks',
    slug: 'connectivity-networks',
    iconName: 'Wifi',
    image: '/images/hero-community.jpg',
    category: 'infrastructure',
    verifiedUrl: 'https://trai.gov.in/',
    verifiedSource: 'TRAI (Telecom Regulatory Authority of India)',
    lastReviewed: '2026-03-08',
    te: {
      title: 'నెట్వర్క్ మరియు ఇంటర్నెట్',
      tagline: 'మొబైల్ డేటా, వై-ఫై, సిగ్నల్ సమస్యల పరిష్కారం మరియు డేటా పొదుపు',
      shortDesc: 'మొబైల్ డేటా vs వై-ఫై తేడాలు, 4G మరియు 5G అర్థం చేసుకోవడం, బలహీన సిగ్నల్ ఉన్నప్పుడు చేయవలసిన సాధారణ చిట్కాలు.',
      whyMatters: [
        'మీ డేటా ప్లాన్ ఎందుకు త్వరగా అయిపోతుందో తెలుసుకుని డబ్బు ఆదా చేసుకోవచ్చు.',
        'గ్రామంలో సిగ్నల్ రానప్పుడు లేదా నెట్ స్లో అయినప్పుడు స్వయంగా ట్రబుల్షూట్ చేసుకోవచ్చు.',
        'టవర్ దూరంగా ఉన్నా లేదా ఇళ్ల లోపల ఉన్నప్పుడు సరైన సెట్టింగ్స్ ద్వారా కాల్ డ్రాప్స్ తగ్గించుకోవచ్చు.',
        'టెలికాం ఆపరేటర్ల అధికారిక యాప్ ద్వారా రీఛార్జ్ చెల్లుబాటు మరియు బ్యాలెన్స్ సరిచూసుకోవచ్చు.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'మొబైల్ డేటా మరియు వై-ఫై మధ్య తేడాను అర్థం చేసుకోండి',
          desc: 'మొబైల్ డేటా అనేది మీ సిమ్ కార్డు (SIM) ద్వారా టెలికాం టవర్ నుండి వస్తుంది. వై-ఫై (Wi-Fi) అనేది గ్రామ పంచాయతీ భారత్‌నెట్ లేదా ఇంట్లోని బ్రాడ్‌బ్యాండ్ రౌటర్ నుండి తీగ లేదా రేడియో తరంగాల ద్వారా వస్తుంది.',
          tip: 'వై-ఫై కనెక్ట్ అయినప్పుడు మొబైల్ డేటాను ఆఫ్ చేస్తే బ్యాటరీ మరియు ఫోన్ డేటా ఆదా అవుతాయి.'
        },
        {
          step: 2,
          title: '4G మరియు 5G అంటే ఏమిటో సులభంగా తెలుసుకోండి',
          desc: '4G అనేది సాధారణ వీడియోలు చూడటానికి, యూపీఐ పేమెంట్లకు, వాట్సాప్ కాల్స్‌కు సరిపోతుంది. 5G అనేది అత్యంత వేగవంతమైన ఆధునిక నెట్‌వర్క్. అయితే 5G కోసం 5G ఫోన్ మరియు మీ ప్రాంతంలో 5G కవరేజ్ ఉండాలి.',
          tip: '5G సిగ్నల్ తక్కువగా ఉన్నప్పుడు ఫోన్ వేడెక్కి బ్యాటరీ త్వరగా అయిపోవచ్చు; అలాంటి సమయాల్లో 4G/LTE మోడ్‌కు మార్చుకోవడం ఉత్తమం.'
        },
        {
          step: 3,
          title: 'మొబైల్ డేటా ఆన్/ఆఫ్ తనిఖీ చేయడం',
          desc: 'ఫోన్ స్క్రీన్‌ను పైనుండి క్రిందికి లాగండి (Quick Settings). "Mobile Data" ఐకాన్ వెలుగుతోందో లేదో చూడండి. సిమ్ 1 లేదా సిమ్ 2 లో సరైన డేటా సిమ్ ఎంపిక చేసుకున్నారా అని చెక్ చేయండి.',
          tip: 'రెండు సిమ్‌లు ఉన్నప్పుడు రీఛార్జ్ ఉన్న సిమ్‌కే డేటా కేటాయించబడిందో లేదో చూడండి.'
        },
        {
          step: 4,
          title: 'సిగ్నల్ బలహీనంగా ఉన్నప్పుడు ప్రాథమిక ట్రబుల్షూటింగ్',
          desc: 'నెట్ పనిచేయనప్పుడు మీ ఫోన్‌ను 10 సెకన్ల పాటు "Flight Mode / Airplane Mode" లో పెట్టి మళ్లీ ఆఫ్ చేయండి. ఇది మీ ఫోన్‌ను సమీప టవర్‌తో తాజాగా రీ-కనెక్ట్ చేస్తుంది. లేదా ఫోన్‌ను రీస్టార్ట్ చేయండి.',
          tip: 'కాంక్రీట్ గోడలు లేదా ఇనుప రేకుల ఇళ్ల లోపల సిగ్నల్ బలహీనంగా ఉంటుంది; కిటికీ లేదా వరండా వద్దకు రావడం ద్వారా మెరుగైన సిగ్నల్ లభిస్తుంది.'
        },
        {
          step: 5,
          title: 'అధికారిక ఆపరేటర్ యాప్‌తో డేటా బ్యాలెన్స్ తనిఖీ చేయండి',
          desc: 'మీ సర్వీస్ ప్రొవైడర్ అధికారిక యాప్ (Airtel Thanks, MyJio, Vi యాప్, లేదా BSNL SelfCare) ద్వారా మాత్రమే మీ రోజువారీ డేటా పరిమితి మరియు ప్లాన్ చెల్లుబాటును తనిఖీ చేయండి.',
          tip: 'అనవసరమైన థర్డ్ పార్టీ "డేటా బూస్టర్" యాప్‌లను ఎప్పుడూ నమ్మవద్దు.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'గ్రామంలో టవర్ కనిపిస్తోంది కదా, ఇంట్లో కూడా ఫుల్ సిగ్నల్ ఎందుకు రావడం లేదని ఆశ్చర్యపోవడం.',
          correctAction: 'టవర్ కనిపించినంత మాత్రాన ఇండోర్ కవరేజ్ బాగుండాలని లేదు. గోడల మందం, చెట్లు, మరియు టవర్ యాంటెన్నా దిశ సిగ్నల్ నాణ్యతను ప్రభావితం చేస్తాయి.'
        },
        {
          mistake: 'ప్లే స్టోర్‌లో లభించే "ఇంటర్నెట్ స్పీడ్ 10x పెంచే యాప్స్" ని ఇన్‌స్టాల్ చేయడం.',
          correctAction: 'ఇలాంటి యాప్‌లు నిజానికి మీ ఫోన్‌ను స్లో చేస్తాయి మరియు ప్రకటనలతో నింపేస్తాయి. టెలికాం వేగాన్ని ఏ యాప్ పెంచలేదు.'
        },
        {
          mistake: 'బ్యాక్‌గ్రౌండ్‌లో వీడియో యాప్‌లు ఆటో-ప్లే అవుతున్నా గమనించకపోవడం.',
          correctAction: 'యూట్యూబ్, ఇన్‌స్టాగ్రామ్, ఫేస్‌బుక్‌లలో "Auto-play over Wi-Fi only" లేదా "Data Saver Mode" ఆన్ చేసుకోండి.'
        }
      ],
      safetyRules: [
        'రైల్వే స్టేషన్లు లేదా బహిరంగ ప్రదేశాలలో ఉండే ఓపెన్ వై-ఫైలలో బ్యాంకింగ్ లేదా యూపీఐ లావాదేవీలు చేయవద్దు.',
        'నెట్‌వర్క్ అప్‌గ్రేడ్ లేదా 5G సిమ్ వెరిఫికేషన్ పేరుతో వచ్చే కాల్స్‌కు ఆధార్ లేదా సిమ్ నంబర్ చెప్పవద్దు.',
        'కాల్ డ్రాప్స్ లేదా నెట్‌వర్క్ అంతరాయాలు ఉన్నప్పుడు మీ ఆపరేటర్ కస్టమర్ కేర్ (198) కు ఫిర్యాదు చేసి రిఫరెన్స్ నంబర్ తీసుకోండి.'
      ],
      faqs: [
        {
          q: 'రోజూ నా 1.5GB డేటా మధ్యాహ్నానికే ఎందుకు అయిపోతోంది?',
          a: 'షార్ట్స్ లేదా రీల్స్ వంటి వీడియోలు అధిక నాణ్యతతో స్వయంచాలకంగా ప్లే కావడం, లేదా సిస్టమ్ యాప్స్ బ్యాక్‌గ్రౌండ్‌లో అప్‌డేట్ కావడం వల్ల డేటా ఖర్చవుతుంది. సెట్టింగ్స్‌లో "Data Saver" ఆన్ చేయండి.'
        },
        {
          q: 'వై-ఫై కాలింగ్ (Wi-Fi Calling / VoWiFi) అంటే ఏమిటి?',
          a: 'మీ ఇంట్లో మొబైల్ సిగ్నల్ తక్కువగా ఉండి, వై-ఫై అందుబాటులో ఉంటే, ఫోన్ సెట్టింగ్స్‌లో VoWiFi ఆన్ చేసుకోవడం ద్వారా ఎటువంటి అదనపు ఖర్చు లేకుండా స్పష్టమైన కాల్స్ మాట్లాడవచ్చు.'
        },
        {
          q: 'నెట్‌వర్క్ పూర్తిగా పోయినప్పుడు ఏమి చేయాలి?',
          a: 'మొదట మీ సిమ్ కార్డును ఒకసారి తీసి శుభ్రంగా తుడిచి మళ్లీ పెట్టండి. మీ ఇంట్లోని ఇతర ఫోన్లలో కూడా అదే నెట్‌వర్క్ పనిచేయకపోతే సమీప టవర్‌లో విద్యుత్ లేదా సాంకేతిక సమస్య ఉండవచ్చు.'
        }
      ],
      officialResources: [
        {
          name: 'TRAI (భారత టెలికాం నియంత్రణ ప్రాధికార సంస్థ)',
          url: 'https://trai.gov.in/',
          desc: 'వినియోగదారుల హక్కులు, మొబైల్ నంబర్ పోర్టబిలిటీ (MNP) మరియు టెలికాం నిబంధనలు.'
        },
        {
          name: 'డిపార్ట్‌మెంట్ ఆఫ్ టెలికమ్యూనికేషన్స్ (DoT) సంచార్ సాథీ',
          url: 'https://sancharsaathi.gov.in/',
          desc: 'పోయిన ఫోన్లను బ్లాక్ చేయడానికి మరియు మీ పేరుపై ఎన్ని సిమ్ కార్డులు ఉన్నాయో తెలుసుకోవడానికి అధికారిక పోర్టల్.'
        }
      ],
      related: ['digital-payments', 'digital-farming', 'online-healthcare']
    },
    en: {
      title: 'Network & Internet Connectivity',
      tagline: 'Mobile data, Wi-Fi, signal troubleshooting, and data saving',
      shortDesc: 'Understand mobile data vs Wi-Fi, 4G vs 5G basics, fix weak signal issues with simple steps, and monitor your data balance safely.',
      whyMatters: [
        'Prevent unexpected data exhaustion and save monthly mobile recharge expenses.',
        'Diagnose why calls drop or messages fail to send during weak coverage in village areas.',
        'Understand why seeing a mobile tower nearby does not automatically guarantee strong indoor signal.',
        'Use official telecom self-care tools to recharge and monitor validity without relying on unauthorized middlemen.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'Understand the difference: Mobile Data vs Wi-Fi',
          desc: 'Mobile data uses radio signals sent from cellular towers to your SIM card. Wi-Fi connects your device over short-range radio signals to a local router or Gram Panchayat BharatNet hotspot.',
          tip: 'When connected to Wi-Fi, turn off mobile data to save battery and conserve cellular data limits.'
        },
        {
          step: 2,
          title: 'What 4G and 5G mean for everyday use',
          desc: '4G LTE is more than adequate for digital payments, WhatsApp messaging, and watching standard videos. 5G offers higher speeds but requires a 5G-capable handset and local 5G cell coverage.',
          tip: 'If 5G reception is unstable in your village, locking your network mode to 4G saves battery.'
        },
        {
          step: 3,
          title: 'Verify if Mobile Data is toggled active',
          desc: 'Swipe down the notification shade from the top of your screen. Ensure the "Mobile Data" toggle is green or highlighted. If you have dual SIMs, confirm the data-enabled SIM is selected.',
          tip: 'Confirm your daily plan quota has not already reset or exhausted.'
        },
        {
          step: 4,
          title: 'Quick signal reset troubleshooting',
          desc: 'If internet stops responding, turn on "Airplane Mode" for 10 seconds, then turn it off. This forces your device to reconnect to the strongest nearby cellular channel. Alternatively, restart your phone.',
          tip: 'Thick brick walls and tin roofing obstruct radio signals; stepping near a window or veranda often restores signal.'
        },
        {
          step: 5,
          title: 'Monitor data balance using authorized operator apps',
          desc: 'Check remaining daily MBs only through certified provider applications like Airtel Thanks, MyJio, Vi, or BSNL SelfCare.',
          tip: 'Never trust third-party APKs claiming to provide "unlimited free data booster" hacks.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'Assuming a nearby cell tower guarantees perfect indoor phone reception.',
          correctAction: 'Tower antennas point in specific directional sectors. Dense tree canopies and building walls significantly attenuate signals indoors.'
        },
        {
          mistake: 'Installing dubious "RAM cleaner" or "Signal Booster 4G" apps from unknown websites.',
          correctAction: 'No software app can physically amplify cellular signal strength. Such apps often drain battery with intrusive advertisements.'
        },
        {
          mistake: 'Leaving auto-play videos on in social media apps over mobile data.',
          correctAction: 'Enable Data Saver mode in YouTube, Facebook, and Instagram to prevent background video streaming.'
        }
      ],
      safetyRules: [
        'Never conduct bank transfers or UPI payments over unsecured, open public Wi-Fi networks.',
        'Never share your SIM card number or OTP with callers claiming to "upgrade your SIM to 5G".',
        'Report persistent network outages to your operator\'s official toll-free helpline (198).'
      ],
      faqs: [
        {
          q: 'Why does my daily 1.5 GB plan exhaust before evening?',
          a: 'High-definition video playback, automated app updates, and background cloud photo backups quickly consume data. Set streaming quality to 360p or 480p and disable background app updates.'
        },
        {
          q: 'What is Wi-Fi Calling (VoWiFi)?',
          a: 'If cellular signal is weak inside your home but you have a broadband or Wi-Fi connection, VoWiFi allows you to make and receive crystal-clear phone calls without extra charges.'
        },
        {
          q: 'What should I do if my phone shows "No Service" completely?',
          a: 'Turn Airplane Mode on and off. If unresolved, power off, clean the SIM card metal contacts gently with a dry microfiber cloth, re-insert, and restart.'
        }
      ],
      officialResources: [
        {
          name: 'TRAI (Telecom Regulatory Authority of India)',
          url: 'https://trai.gov.in/',
          desc: 'Consumer rights, tariffs, and regulatory guidelines for telecommunications in India.'
        },
        {
          name: 'DoT Sanchar Saathi Portal',
          url: 'https://sancharsaathi.gov.in/',
          desc: 'Department of Telecommunications portal to trace/block lost phones and verify SIMs registered in your name.'
        }
      ],
      related: ['digital-payments', 'digital-farming', 'online-healthcare']
    },
    hi: {
      title: 'नेटवर्क और इंटरनेट कनेक्टिविटी',
      tagline: 'मोबाइल डेटा, वाई-फाई, सिग्नल सुधार और डेटा बचत',
      shortDesc: 'मोबाइल डेटा और वाई-फाई में अंतर, 4G और 5G की सरल समझ, कमजोर सिग्नल को ठीक करने के उपाय और डेटा बैलेंस की जांच।',
      whyMatters: [
        'डेटा जल्दी खत्म होने के कारणों को समझकर महीने के रिचार्ज का पैसा बचा सकते हैं।',
        'गांव में कॉल ड्रॉप या धीमे इंटरनेट की समस्या को खुद आसान तरीकों से सुधार सकते हैं।',
        'यह समझ सकते हैं कि केवल टावर दिखना ही घर के अंदर मजबूत सिग्नल की गारंटी क्यों नहीं है।',
        'टेलीकॉम कंपनियों के आधिकारिक ऐप से वैधता और बैलेंस की सही जानकारी प्राप्त कर सकते हैं।'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'मोबाइल डेटा और वाई-फाई में अंतर समझें',
          desc: 'मोबाइल डेटा आपके सिम कार्ड के माध्यम से पास के मोबाइल टावर से मिलता है। वाई-फाई आपके घर या पंचायत भवन के राउटर से स्थानीय रूप से जुड़ता है।',
          tip: 'वाई-फाई से जुड़ने पर मोबाइल डेटा बंद करने से फोन की बैटरी और डेटा दोनों बचते हैं।'
        },
        {
          step: 2,
          title: '4G और 5G का सामान्य अर्थ',
          desc: '4G रोजमर्रा के डिजिटल भुगतान, व्हाट्सएप और सामान्य वीडियो के लिए पूरी तरह पर्याप्त है। 5G बहुत तेज गति देता है, लेकिन इसके लिए 5G फोन और क्षेत्र में 5G नेटवर्क होना जरूरी है।',
          tip: 'यदि गांव में 5G सिग्नल कमजोर है, तो नेटवर्क को 4G पर रखने से बैटरी अधिक चलती है।'
        },
        {
          step: 3,
          title: 'मोबाइल डेटा चालू है या नहीं जांचें',
          desc: 'फोन स्क्रीन को ऊपर से नीचे खींचें। "Mobile Data" का आइकन नीला या हरा होना चाहिए। यदि दो सिम हैं, तो सही सिम पर डेटा सेट होना चाहिए।',
          tip: 'सुनिश्चित करें कि आपके दैनिक डेटा की सीमा समाप्त न हो गई हो।'
        },
        {
          step: 4,
          title: 'कमजोर सिग्नल को ठीक करने के त्वरित उपाय',
          desc: 'यदि इंटरनेट काम न करे, तो 10 सेकंड के लिए "Airplane Mode" ऑन करके फिर ऑफ करें। इससे फोन नजदीकी टावर से दोबारा सही से कनेक्ट हो जाता है।',
          tip: 'कंक्रीट की मोटी दीवारें सिग्नल रोकती हैं; खिड़की या आंगन के पास जाने से बेहतर स्पीड मिलती है।'
        },
        {
          step: 5,
          title: 'आधिकारिक ऐप से डेटा बैलेंस चेक करें',
          desc: 'केवल अपनी कंपनी के ऐप (Airtel Thanks, MyJio, Vi, BSNL SelfCare) से ही अपना डेटा और प्लान चेक करें।',
          tip: 'इंटरनेट स्पीड बढ़ाने का दावा करने वाले किसी फर्जी ऐप को कभी डाउनलोड न करें।'
        }
      ],
      commonMistakes: [
        {
          mistake: 'यह सोचना कि पास में टावर दिखने पर घर के कमरे में भी तेज सिग्नल जरूर मिलेगा।',
          correctAction: 'दीवारें और टीन की छतें सिग्नल कमजोर कर देती हैं। खुले स्थान या खिड़की के पास बेहतर नेटवर्क मिलता है।'
        },
        {
          mistake: 'प्ले स्टोर से "इंटरनेट स्पीड 10 गुना बढ़ाने वाले" फर्जी ऐप इंस्टॉल करना।',
          correctAction: 'कोई भी ऐप कंपनी के नेटवर्क की गति नहीं बढ़ा सकता। ऐसे ऐप फोन में वायरस ला सकते हैं।'
        },
        {
          mistake: 'सोशल मीडिया ऐप्स में ऑटो-प्ले वीडियो चालू रखना।',
          correctAction: 'YouTube, Facebook में "Data Saver" चालू रखें ताकि बिना वजह डेटा खर्च न हो।'
        }
      ],
      safetyRules: [
        'सार्वजनिक और असुरक्षित खुले वाई-फाई पर बैंक या यूपीआई का लेनदेन न करें।',
        '5G सिम अपग्रेड के नाम पर आने वाली फर्जी कॉल्स पर अपना ओटीपी या आधार नंबर न दें।',
        'नेटवर्क की लगातार समस्या होने पर कंपनी के आधिकारिक हेल्पलाइन नंबर 198 पर शिकायत दर्ज कराएं।'
      ],
      faqs: [
        {
          q: 'मेरा 1.5GB डेटा शाम से पहले ही क्यों खत्म हो जाता है?',
          a: 'हाई क्वालिटी वीडियो देखने, इंस्टाग्राम रील्स और बैकग्राउंड में ऐप्स अपडेट होने से डेटा खर्च होता है। यूट्यूब में वीडियो क्वालिटी 360p या 480p पर रखें।'
        },
        {
          q: 'वाई-फाई कॉलिंग (VoWiFi) क्या है?',
          a: 'यदि आपके घर में मोबाइल सिग्नल कमजोर है लेकिन वाई-फाई है, तो VoWiFi चालू करके आप साफ आवाज में बिना किसी अतिरिक्त शुल्क के कॉल कर सकते हैं।'
        },
        {
          q: 'फोन में "No Service" आने पर क्या करें?',
          a: 'एरोप्लेन मोड ऑन-ऑफ करें। यदि फिर भी न आए, तो फोन बंद करके सिम को सूखे कपड़े से साफ करके दोबारा लगाएं।'
        }
      ],
      officialResources: [
        {
          name: 'TRAI (भारतीय दूरसंचार विनियामक प्राधिकरण)',
          url: 'https://trai.gov.in/',
          desc: 'उपभोक्ता अधिकार, टैरिफ और मोबाइल नंबर पोर्टेबिलिटी (MNP) की आधिकारिक नियमावली।'
        },
        {
          name: 'दूरसंचार विभाग (DoT) संचार साथी पोर्टल',
          url: 'https://sancharsaathi.gov.in/',
          desc: 'खोए हुए मोबाइल को ब्लॉक करने और अपने नाम पर जारी सिम कार्ड चेक करने का आधिकारिक मंच।'
        }
      ],
      related: ['digital-payments', 'digital-farming', 'online-healthcare']
    }
  },

  {
    id: 'online-healthcare',
    slug: 'online-healthcare',
    iconName: 'HeartPulse',
    image: '/images/hero-community.jpg',
    category: 'healthcare',
    verifiedUrl: 'https://esanjeevani.mohfw.gov.in/',
    verifiedSource: 'eSanjeevani (Ministry of Health and Family Welfare, Govt. of India)',
    lastReviewed: '2026-03-05',
    te: {
      title: 'ఆన్లైన్ ఆరోగ్యం',
      tagline: 'టెలిమెడిసిన్, ఇ-సంజీవని మరియు ఆన్‌లైన్ వైద్య సంప్రదింపులు',
      shortDesc: 'ఇంటి వద్ద నుండే ప్రభుత్వ వైద్యులతో ఉచిత వీడియో సంప్రదింపులు, ప్రిస్క్రిప్షన్ పొందడం మరియు అత్యవసర జాగ్రత్తలు.',
      whyMatters: [
        'చిన్నపాటి ఆరోగ్య సమస్యల కోసం సుదూర పట్టణాల ఆసుపత్రులకు ప్రయాణించే శ్రమ, రవాణా ఖర్చులు తప్పుతాయి.',
        'భారత ప్రభుత్వ అధికారిక ఇ-సంజీవని (eSanjeevani) ద్వారా అర్హత కలిగిన ప్రభుత్వ డాక్టర్లతో ఉచితంగా మాట్లాడవచ్చు.',
        'గతంలో డాక్టర్ ఇచ్చిన మందుల చీటీలు, రక్త పరీక్షల నివేదికలను మొబైల్‌లో భద్రపరుచుకోవచ్చు.',
        'సాధారణ జలుబు, చర్మ సమస్యలు, దీర్ఘకాలిక బిపి, షుగర్ మందుల సమీక్ష కోసం నేరుగా సలహా పొందవచ్చు.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'టెలిమెడిసిన్ (Telemedicine) అంటే ఏమిటో తెలుసుకోండి',
          desc: 'టెలిమెడిసిన్ అంటే రోగి మరియు డాక్టర్ ఇద్దరూ వేర్వేరు ప్రదేశాల్లో ఉన్నప్పుడు ఫోన్ కాల్ లేదా వీడియో కాల్ ద్వారా ఆరోగ్య సమస్యను చర్చించి సలహా పొందే విధానం.',
          tip: 'గమనిక: ఆన్‌లైన్ సంప్రదింపులు సాధారణ సమస్యలకు మాత్రమే. గుండెపోటు, తీవ్ర గాయాలు, స్పృహ కోల్పోవడం వంటి అత్యవసర సమయాల్లో నేరుగా సమీప ఆసుపత్రికి వెళ్లాలి (108 డయల్ చేయండి).'
        },
        {
          step: 2,
          title: 'అధికారిక ఇ-సంజీవని (eSanjeevani) పోర్టల్‌ను ఉపయోగించండి',
          desc: 'కేంద్ర ఆరోగ్య మంత్రిత్వ శాఖ వారి esanjeevani.mohfw.gov.in పోర్టల్ లేదా eSanjeevani యాప్‌ను తెరవండి. మీ మొబైల్ నంబర్‌తో లాగిన్ అవ్వండి.',
          tip: 'ఈ సేవ భారతదేశంలోని పౌరులందరికీ పూర్తిగా ఉచితం.'
        },
        {
          step: 3,
          title: 'డాక్టర్‌తో మాట్లాడేందుకు సిద్ధం అవ్వండి',
          desc: 'మీ సమస్య ఎప్పటి నుండి ఉంది? ప్రస్తుతం ఏ మందులు వాడుతున్నారు? మీ దగ్గర ఉన్న పాత ప్రిస్క్రిప్షన్ లేదా ల్యాబ్ రిపోర్టుల ఫొటోలు సిద్ధంగా ఉంచుకోండి.',
          tip: 'డాక్టర్‌తో మాట్లాడే ముందు మీ లక్షణాలను ఒక కాగితంపై రాసి పెట్టుకుంటే ఏ విషయమూ మర్చిపోరు.'
        },
        {
          step: 4,
          title: 'వీడియో కాల్‌లో డాక్టర్‌తో స్పష్టంగా మాట్లాడండి',
          desc: 'కాల్ కనెక్ట్ అయినప్పుడు మీ సమస్యను నిదానంగా వివరించండి. డాక్టర్ అడిగే ప్రశ్నలకు నిజాయితీగా సమాధానం చెప్పండి. డాక్టర్ మీ స్క్రీన్‌పై డిజిటల్ ప్రిస్క్రిప్షన్ (మందుల చీటీ) పంపుతారు.',
          tip: 'కాల్ మాట్లాడేటప్పుడు ప్రశాంతమైన, తగినంత వెలుతురు ఉన్న గదిలో కూర్చోండి.'
        },
        {
          step: 5,
          title: 'డిజిటల్ ప్రిస్క్రిప్షన్ డౌన్‌లోడ్ చేసుకుని మందుల షాపుకు వెళ్లండి',
          desc: 'డాక్టర్ సంతకం చేసిన అధికారిక PDF ప్రిస్క్రిప్షన్‌ను డౌన్‌లోడ్ చేయండి. మీ సమీపంలోని జన ఔషధి కేంద్రం లేదా మెడికల్ షాపులో చూపించి సరైన మందులు పొందండి.',
          tip: 'డాక్టర్ సూచించిన మోతాదు ప్రకారం మాత్రమే మందులు వాడండి.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'గుండెలో తీవ్రమైన నొప్పి, ఊపిరాడకపోవడం లేదా పాముకాటు వంటి అత్యవసరాల్లో ఆన్‌లైన్ డాక్టర్ కోసం వేచి చూడడం.',
          correctAction: 'అత్యవసర సమయాల్లో సెకను కూడా ఆలస్యం చేయకుండా 108 కి కాల్ చేసి రోగిని తక్షణమే ప్రభుత్వ లేదా ప్రైవేట్ ఆసుపత్రి ఎమర్జెన్సీ వార్డుకు తరలించండి.'
        },
        {
          mistake: 'ఇంటర్నెట్ లేదా యూట్యూబ్ చూసి సొంతంగా యాంటీబయాటిక్స్ లేదా తీవ్రమైన మందులు కొనుక్కోవడం (Self-medication).',
          correctAction: 'డాక్టర్ రాసిన ప్రిస్క్రిప్షన్ లేకుండా మందులు వాడటం ప్రాణాలకే ప్రమాదకరం. డాక్టర్ సలహా లేకుండా మందులు మార్చవద్దు.'
        },
        {
          mistake: 'ఆరోగ్య వివరాలు మరియు ఆధార్ కార్డును తెలియని మెడికల్ యాప్స్‌లో అప్‌లోడ్ చేయడం.',
          correctAction: 'కేంద్ర ప్రభుత్వ eSanjeevani లేదా ABHA (ఆయుష్మాన్ భారత్ హెల్త్ అకౌంట్) వంటి అధికారిక పోర్టళ్లలో మాత్రమే నమోదు చేసుకోండి.'
        }
      ],
      safetyRules: [
        'ఆన్‌లైన్ సంప్రదింపులు ప్రత్యక్ష శారీరక పరీక్షకు ప్రత్యామ్నాయం కావు. అవసరమైతే డాక్టర్ ప్రత్యక్షంగా రమ్మని సూచిస్తారు.',
        'ఎట్టి పరిస్థితుల్లోనూ ఆన్‌లైన్ వీడియోల ఆధారంగా ఇంజెక్షన్లు లేదా సీరియస్ చికిత్సలు ఇంట్లోనే చేసుకోకండి.',
        'మందుల చీటీపై డాక్టర్ రిజిస్ట్రేషన్ నంబర్ మరియు సంతకం ఉన్నాయో లేదో నిర్ధారించుకోండి.'
      ],
      faqs: [
        {
          q: 'ఇ-సంజీవని (eSanjeevani) లో సంప్రదించడానికి ఫీజు ఎంత?',
          a: 'ఇది భారత ప్రభుత్వ జాతీయ టెలికన్సల్టేషన్ సేవ. ఇది పూర్తిగా ఉచితం. రోగుల నుండి ఎటువంటి రుసుము వసూలు చేయరు.'
        },
        {
          q: 'నాకు స్థానిక భాష తెలుగులో మాట్లాడే డాక్టర్ దొరుకుతారా?',
          a: 'అవును, eSanjeevani పోర్టల్‌లో మీరు మీ రాష్ట్రాన్ని ఎంచుకున్నప్పుడు మీ రాష్ట్ర ప్రభుత్వ వైద్యులు లేదా తెలుగు మాట్లాడే వైద్యులతో కాల్ కనెక్ట్ అవుతుంది.'
        },
        {
          q: 'ఆన్‌లైన్ ప్రిస్క్రిప్షన్‌తో గ్రామంలోని మందుల షాపులో మందులు ఇస్తారా?',
          a: 'అవును. మెడికల్ కౌన్సిల్ ఆఫ్ ఇండియా నిబంధనల ప్రకారం, నమోదిత వైద్యుడు జారీ చేసిన చెల్లుబాటు అయ్యే డిజిటల్ ప్రిస్క్రిప్షన్‌ను అన్ని గుర్తింపు పొందిన మందుల దుకాణాలు అంగీకరిస్తాయి.'
        }
      ],
      officialResources: [
        {
          name: 'eSanjeevani జాతీయ టెలిమెడిసిన్ పోర్టల్',
          url: 'https://esanjeevani.mohfw.gov.in/',
          desc: 'కేంద్ర ఆరోగ్య మరియు కుటుంబ సంక్షేమ మంత్రిత్వ శాఖ యొక్క అధికారిక ఉచిత డాక్టర్ కన్సల్టేషన్ వేదిక.'
        },
        {
          name: 'ఆయుష్మాన్ భారత్ డిజిటల్ మిషన్ (ABHA)',
          url: 'https://abdm.gov.in/',
          desc: 'డిజిటల్ హెల్త్ రికార్డులను భద్రపరుచుకోవడానికి భారత ప్రభుత్వ జాతీయ హెల్త్ ఐడీ వేదిక.'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'banking-atm']
    },
    en: {
      title: 'Online Healthcare',
      tagline: 'Telemedicine, eSanjeevani, and safe digital medical consultations',
      shortDesc: 'Consult qualified government doctors over video call from home for free, receive digital prescriptions, and learn vital emergency boundaries.',
      whyMatters: [
        'Save travel time and transit expenses to distant urban hospitals for non-emergency medical follow-ups.',
        'Free consultations with certified government doctors via the official eSanjeevani portal.',
        'Keep digital records of past prescriptions, blood test results, and medical notes securely on your phone.',
        'Safe guidance for seasonal flu, skin allergies, hypertension monitoring, and routine dietary advice.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'Understand what telemedicine can and cannot do',
          desc: 'Telemedicine allows a patient and a registered doctor to discuss symptoms over phone or video. It is designed for non-emergency conditions, follow-ups, and general health queries.',
          tip: 'CRITICAL: Severe chest pain, breathing difficulty, acute trauma, or poisoning require immediate emergency hospital care (Call 108).'
        },
        {
          step: 2,
          title: 'Open the verified eSanjeevani portal',
          desc: 'Go to esanjeevani.mohfw.gov.in or install the official eSanjeevani mobile app from the Ministry of Health. Register using your mobile phone number.',
          tip: 'eSanjeevani is a 100% free national public healthcare service.'
        },
        {
          step: 3,
          title: 'Prepare your medical summary before the call',
          desc: 'Note down how many days you have had symptoms, write down existing medications you take, and have previous lab reports or old prescription photos ready on your phone.',
          tip: 'Writing your symptoms on paper ensures you don\'t forget key details during the consultation.'
        },
        {
          step: 4,
          title: 'Conduct the video consultation in a quiet spot',
          desc: 'Speak clearly with the physician. Answer their questions about allergies and past illnesses truthfully. The doctor will explain treatment and generate a digital prescription.',
          tip: 'Ensure proper lighting on your face so the doctor can observe clinical signs clearly.'
        },
        {
          step: 5,
          title: 'Download and take your signed digital prescription to the pharmacy',
          desc: 'Save the official digitally signed PDF prescription. Present it at your nearest Jan Aushadhi Kendra or licensed pharmacy to collect prescribed medications.',
          tip: 'Take only the exact dosage prescribed; never exceed recommended course durations.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'Waiting for an online doctor appointment during severe emergencies like heart attack or stroke symptoms.',
          correctAction: 'Call 108 immediately or rush the patient to the nearest hospital casualty ward without delay.'
        },
        {
          mistake: 'Self-medicating with antibiotics or strong painkillers based on random social media videos.',
          correctAction: 'Self-medication can cause severe kidney and liver damage. Always insist on a qualified doctor\'s prescription.'
        },
        {
          mistake: 'Entering health history or Aadhaar details into unverified commercial tele-health apps.',
          correctAction: 'Stick to official portals like eSanjeevani or government ABHA accounts.'
        }
      ],
      safetyRules: [
        'An online consultation cannot replace physical clinical examinations such as listening to lungs or palpating an abdomen.',
        'Never purchase schedule-H prescription drugs without a valid doctor\'s prescription.',
        'Keep medical records private; never share diagnosis reports in public WhatsApp groups.'
      ],
      faqs: [
        {
          q: 'Is eSanjeevani really free for village citizens?',
          a: 'Yes, eSanjeevani is completely funded by the Ministry of Health and Family Welfare, Government of India. Citizens pay zero consultation fees.'
        },
        {
          q: 'Will village pharmacists accept a digital prescription on my phone?',
          a: 'Yes. Under the Telemedicine Practice Guidelines of India, valid digital prescriptions generated by registered medical practitioners are legally recognized at all licensed pharmacies.'
        },
        {
          q: 'What should I do if a family member faints or suffers acute pain?',
          a: 'Do not use online portals. Dial 108 immediately for government ambulance service or transport them directly to the nearest community health center (CHC) or hospital.'
        }
      ],
      officialResources: [
        {
          name: 'eSanjeevani National Teleconsultation Service',
          url: 'https://esanjeevani.mohfw.gov.in/',
          desc: 'Official platform by the Ministry of Health and Family Welfare connecting citizens with government medical officers.'
        },
        {
          name: 'Ayushman Bharat Digital Mission (ABDM)',
          url: 'https://abdm.gov.in/',
          desc: 'National digital health ecosystem for creating your Ayushman Bharat Health Account (ABHA).'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'banking-atm']
    },
    hi: {
      title: 'ऑनलाइन स्वास्थ्य सेवा',
      tagline: 'टेलीमेडिसिन, ई-संजीवनी और सुरक्षित डिजिटल डॉक्टर परामर्श',
      shortDesc: 'घर बैठे सरकारी डॉक्टरों से निःशुल्क वीडियो परामर्श, डिजिटल पर्ची प्राप्त करना और आपातकालीन स्वास्थ्य सावधानियां।',
      whyMatters: [
        'सामान्य बीमारियों के लिए दूर के शहर जाने के सफर और आने-जाने के खर्च की बचत होती है।',
        'भारत सरकार के आधिकारिक ई-संजीवनी (eSanjeevani) पोर्टल के माध्यम से योग्य डॉक्टरों से मुफ्त सलाह।',
        'पुरानी दवाओं की पर्चियां और रक्त जांच रिपोर्ट फोन में सुरक्षित रूप से रखी जा सकती हैं।',
        'मौसमी सर्दी, त्वचा की समस्या, बीपी और शुगर की नियमित समीक्षा आसानी से हो जाती है।'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'टेलीमेडिसिन के कार्य और सीमाएं समझें',
          desc: 'टेलीमेडिसिन का अर्थ है डॉक्टर और मरीज का फोन या वीडियो कॉल के माध्यम से स्वास्थ्य परामर्श लेना। यह सामान्य बीमारियों और नियमित जांच के लिए है।',
          tip: 'महत्वपूर्ण: सीने में तेज दर्द, सांस लेने में तकलीफ या गंभीर चोट जैसी आपात स्थितियों में तुरंत 108 डायल करें या अस्पताल जाएं।'
        },
        {
          step: 2,
          title: 'सत्यापित ई-संजीवनी पोर्टल का उपयोग करें',
          desc: 'स्वास्थ्य मंत्रालय के esanjeevani.mohfw.gov.in पोर्टल या eSanjeevani ऐप पर जाएं और अपने मोबाइल नंबर से लॉगिन करें।',
          tip: 'यह सेवा भारत के सभी नागरिकों के लिए पूरी तरह निःशुल्क है।'
        },
        {
          step: 3,
          title: 'परामर्श से पहले जरूरी तैयारी करें',
          desc: 'अपनी बीमारी के लक्षण, कितने दिनों से समस्या है, और पुरानी दवाओं की पर्ची या जांच रिपोर्ट पास में तैयार रखें।',
          tip: 'कागज पर लक्षण लिख लेने से डॉक्टर से बात करते समय कोई जरूरी बात छूटती नहीं है।'
        },
        {
          step: 4,
          title: 'शांत कमरे में डॉक्टर से वीडियो कॉल पर बात करें',
          desc: 'डॉक्टर को अपनी समस्या विस्तार से बताएं और उनके निर्देशों को ध्यान से सुनें। बातचीत पूरी होने पर डॉक्टर डिजिटल पर्ची जारी करेंगे।',
          tip: 'कमरे में अच्छी रोशनी रखें ताकि डॉक्टर जरूरत पड़ने पर स्थिति देख सकें।'
        },
        {
          step: 5,
          title: 'डिजिटल पर्ची डाउनलोड करके दवा लें',
          desc: 'डॉक्टर द्वारा हस्ताक्षरित आधिकारिक PDF पर्ची डाउनलोड करें और नजदीकी जन औषधि केंद्र या मेडिकल स्टोर से दवा प्राप्त करें।',
          tip: 'केवल डॉक्टर द्वारा लिखी गई खुराक के अनुसार ही दवा का सेवन करें।'
        }
      ],
      commonMistakes: [
        {
          mistake: 'हार्ट अटैक या सांस की गंभीर बीमारी जैसी आपात स्थिति में ऑनलाइन डॉक्टर का इंतजार करना।',
          correctAction: 'आपात स्थिति में बिना एक सेकंड गंवाए तुरंत 108 पर कॉल करें और नजदीकी अस्पताल पहुंचे।'
        },
        {
          mistake: 'यूट्यूब या इंटरनेट देखकर बिना डॉक्टर के पूछे खुद से एंटीबायोटिक दवाएं खाना।',
          correctAction: 'बिना डॉक्टरी सलाह के दवा लेना लिवर और किडनी के लिए बेहद खतरनाक हो सकता है।'
        },
        {
          mistake: 'अज्ञात निजी मेडिकल ऐप्स पर अपना आधार और व्यक्तिगत मेडिकल डेटा अपलोड करना।',
          correctAction: 'केवल सरकारी ई-संजीवनी या ABHA पोर्टल का ही उपयोग करें।'
        }
      ],
      safetyRules: [
        'ऑनलाइन परामर्श हर बीमारी में शारीरिक जांच का विकल्प नहीं हो सकता।',
        'इंटरनेट वीडियो देखकर खुद से इंजेक्शन या गंभीर इलाज का प्रयास कभी न करें।',
        'दवा की पर्ची पर डॉक्टर का पंजीकरण नंबर अवश्य देखें।'
      ],
      faqs: [
        {
          q: 'क्या ई-संजीवनी पर परामर्श के लिए कोई फीस लगती है?',
          a: 'नहीं, यह स्वास्थ्य और परिवार कल्याण मंत्रालय की एक निःशुल्क राष्ट्रीय जन-स्वास्थ्य सेवा है।'
        },
        {
          q: 'क्या गांव के मेडिकल स्टोर पर फोन में दिखाई गई डिजिटल पर्ची मान्य है?',
          a: 'हाँ, भारत सरकार के टेलीमेडिसिन नियमों के अनुसार पंजीकृत डॉक्टर की डिजिटल पर्ची सभी मेडिकल दुकानों पर कानूनी रूप से मान्य है।'
        },
        {
          q: 'अचानक बेहोशी या गंभीर आपात स्थिति में क्या करें?',
          a: 'ऑनलाइन पोर्टल न खोलें। तुरंत 108 डायल करें और मरीज को नजदीकी स्वास्थ्य केंद्र ले जाएं।'
        }
      ],
      officialResources: [
        {
          name: 'eSanjeevani राष्ट्रीय टेलीमेडिसिन पोर्टल',
          url: 'https://esanjeevani.mohfw.gov.in/',
          desc: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय का आधिकारिक निःशुल्क डॉक्टर परामर्श मंच।'
        },
        {
          name: 'आयुष्मान भारत डिजिटल मिशन (ABDM)',
          url: 'https://abdm.gov.in/',
          desc: 'डिजिटल स्वास्थ्य रिकॉर्ड सुरक्षित रखने के लिए राष्ट्रीय स्वास्थ्य पहचान पत्र (ABHA) पोर्टल।'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'banking-atm']
    }
  },

  {
    id: 'banking-atm',
    slug: 'banking-atm',
    iconName: 'Building2',
    image: '/images/hero-community.jpg',
    category: 'banking',
    verifiedUrl: 'https://cms.rbi.org.in/',
    verifiedSource: 'Reserve Bank of India (RBI Banking Ombudsman)',
    lastReviewed: '2026-03-01',
    te: {
      title: 'ఇంటర్నెట్ బ్యాంకింగ్ మరియు ATM సేవలు',
      tagline: 'బ్యాంక్ బ్యాలెన్స్, ఏటీఎం జాగ్రత్తలు మరియు మోసాల నుండి రక్షణ',
      shortDesc: 'అధికారిక బ్యాంక్ యాప్‌ల వినియోగం, ఏటీఎం కార్డుల భద్రత, ఖాతా స్టేట్‌మెంట్లు మరియు ఫేక్ కాల్స్ గుర్తింపు.',
      whyMatters: [
        'బ్యాంకు వద్ద పాస్‌బుక్ ప్రింట్ కోసం గంటల తరబడి లైన్లలో నిలబడే శ్రమ లేకుండా ఫోన్‌లోనే బ్యాలెన్స్ చూసుకోవచ్చు.',
        'ఏటీఎంలో డబ్బులు తీసేటప్పుడు మోసగాళ్లు కార్డు మార్చడం లేదా పిన్ చూడకుండా ఉండే జాగ్రత్తలు తెలుస్తాయి.',
        'ఏటీఎం కార్డు పోయినా లేదా అనుమానాస్పద లావాదేవీ జరిగినా సెకన్లలో కార్డును బ్లాక్ చేసే మార్గాలు తెలుస్తాయి.',
        'రైతు సంక్షేమ నిధులు, పింఛన్లు మరియు ప్రభుత్వ సబ్సిడీలు ఖాతాలో పడ్డాయో లేదో ఇంట్లోనే తెలుసుకోవచ్చు.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'మీ బ్యాంక్ అధికారిక యాప్ లేదా పోర్టల్‌ను మాత్రమే గుర్తించండి',
          desc: 'మీ బ్యాంక్ యొక్క అధికారిక మొబైల్ యాప్ (ఉదా: SBI YONO, Bank of Baroda bob World, Union Bank Vyom, Canara ai1) ను గూగుల్ ప్లే స్టోర్ నుండి మాత్రమే ఇన్‌స్టాల్ చేయండి. బ్యాంకు వెబ్‌సైట్ అడ్రస్‌లో https:// మరియు తాళం గుర్తు ఉన్నాయో లేదో గమనించండి.',
          tip: 'గూగుల్ సెర్చ్‌లో వచ్చే ప్రకటన లింకులు లేదా ఫోన్ నంబర్లను ఎప్పుడూ నమ్మవద్దు.'
        },
        {
          step: 2,
          title: 'మిస్డ్ కాల్ లేదా SMS ద్వారా సులభంగా బ్యాలెన్స్ చెక్ చేసుకోండి',
          desc: 'మీ బ్యాంక్ ఖాతాకు లింక్ అయిన మొబైల్ నంబర్ నుండి మీ బ్యాంక్ యొక్క అధికారిక మిస్డ్ కాల్ నంబర్‌కు రింగ్ ఇవ్వడం ద్వారా ఉచితంగా మీ బ్యాలెన్స్ SMS రూపంలో వస్తుంది (ఉదా: SBI కోసం 09223766666).',
          tip: 'స్మార్ట్‌ఫోన్ లేదా ఇంటర్నెట్ లేకపోయినా బేసిక్ ఫోన్ ద్వారా కూడా ఇది పనిచేస్తుంది.'
        },
        {
          step: 3,
          title: 'ఏటీఎం (ATM) వద్ద తీసుకోవలసిన ముఖ్యమైన జాగ్రత్తలు',
          desc: 'ఏటీఎం గదిలోకి వెళ్ళినప్పుడు మీతో పాటు అపరిచితులు ఎవరూ లోపలికి రాకుండా చూసుకోండి. కార్డు స్వైప్ చేసే స్లాట్ వద్ద ఏదైనా అదనపు పరికరం అతికించి ఉందా అని గమనించండి. పిన్ నమోదు చేసేటప్పుడు కీప్యాడ్‌పై ఒక చేతిని అడ్డంగా ఉంచండి.',
          tip: 'ఏటీఎంలో మీకు డబ్బు రాకపోతే అక్కడ నిలబడిన తెలియని వ్యక్తుల సహాయం తీసుకోకండి; నేరుగా బ్యాంక్ గార్డును లేదా బ్రాంచ్‌ను సంప్రదించండి.'
        },
        {
          step: 4,
          title: 'నకిలీ బ్యాంకింగ్ కాల్స్ మరియు SMS లను గుర్తించండి',
          desc: '"మీ ఏటీఎం కార్డు బ్లాక్ అయింది, ఆధార్ లింక్ చేయకపోతే ఖాతా రద్దు అవుతుంది, వెంటనే ఈ నంబర్‌కు ఫోన్ చేయండి" అని వచ్చే మెసేజ్‌లు నూటికి నూరు శాతం సైబర్ మోసగాళ్లవే.',
          tip: 'బ్యాంకులు ఎప్పుడూ కార్డు బ్లాక్ లేదా కేవైసీ పేరుతో ఫోన్ చేసి ఓటీపీ అడగవు.'
        },
        {
          step: 5,
          title: 'కార్డు పోయినప్పుడు లేదా అనుమానం వచ్చినప్పుడు వెంటనే ఏమి చేయాలి?',
          desc: 'మీ బ్యాంక్ పాస్‌బుక్ వెనుక ముద్రించి ఉన్న టోల్‌ఫ్రీ నంబర్‌కు వెంటనే కాల్ చేసి కార్డును బ్లాక్ చేయించండి. లేదా మీ మొబైల్ బ్యాంకింగ్ యాప్‌లో "Block Card" ఆప్షన్ ఎంచుకోండి.',
          tip: 'మోసం జరిగిన 24 గంటల్లోగా ఫిర్యాదు చేస్తే నష్టాన్ని నివారించే అవకాశం ఎక్కువ.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'ఏటీఎం కార్డు వెనుక భాగంలోనే మార్కర్‌తో లేదా పెన్సిల్‌తో 4 అంకెల ఏటీఎం పిన్ రాసి పెట్టుకోవడం.',
          correctAction: 'కార్డు పోయినప్పుడు ఎవరైనా వెంటనే డబ్బు డ్రా చేసేస్తారు! పిన్‌ను ఎక్కడా రాయకండి, మెదడులోనే గుర్తుంచుకోండి.'
        },
        {
          mistake: 'ఏటీఎంలో డబ్బులు రాకపోతే కంగారుపడి పక్కన ఉన్న తెలియని వ్యక్తి చేతికి కార్డు ఇచ్చి పిన్ చెప్పడం.',
          correctAction: 'మోసగాళ్లు మీ కార్డును మార్చి నకిలీ కార్డు మీ చేతిలో పెడతారు. మీ కార్డు మరియు పిన్ ఎవరి చేతికీ ఇవ్వకండి.'
        },
        {
          mistake: 'ఈ వెబ్‌సైట్ లేదా ఏ ఇతర థర్డ్ పార్టీ వెబ్‌సైట్‌లో మీ బ్యాంక్ ఖాతా నంబర్ లేదా పాస్‌వర్డ్ ఎంటర్ చేయడం.',
          correctAction: 'మన డిజిటల్ గ్రామం ఎప్పుడూ మీ బ్యాంక్ వివరాలు అడగదు. మీ బ్యాంకింగ్ వివరాలు కేవలం మీ అధికారిక బ్యాంక్ యాప్‌లో మాత్రమే వాడాలి.'
        }
      ],
      safetyRules: [
        'మీ బ్యాంకింగ్ యూజర్‌నేమ్, లాగిన్ పాస్‌వర్డ్, ట్రాన్సాక్షన్ పాస్‌వర్డ్ మరియు OTP లను ఎవరితోనూ పంచుకోవద్దు.',
        'ఏటీఎం లావాదేవీ పూర్తయిన తర్వాత కీప్యాడ్‌పై "Cancel" బటన్ నొక్కి స్క్రీన్ సాధారణ స్థితికి వచ్చే వరకు వేచి చూడండి.',
        'బ్యాంక్ ఖాతా నుండి అనధికారికంగా డబ్బు కట్ అయితే వెంటనే 1930 కి ఫిర్యాదు చేయండి మరియు మీ బ్యాంకును సంప్రదించండి.'
      ],
      faqs: [
        {
          q: 'ఏటీఎంలో డబ్బులు రాకుండానే నా అకౌంట్ నుండి డబ్బులు కట్ అయితే ఏమి చేయాలి?',
          a: 'ఏటీఎం స్క్రీన్‌పై వచ్చిన రసీదును భద్రపరుచుకోండి (లేదా సమయం, ఏటీఎం ఐడీ రాసుకోండి). సాధారణంగా 24 నుండి 48 గంటల్లో డబ్బు ఖాతాకు తిరిగి వస్తుంది. రాకపోతే మీ బ్యాంకులో రాతపూర్వక ఫిర్యాదు చేయండి.'
        },
        {
          q: 'గూగుల్ సెర్చ్‌లో దొరికిన బ్యాంక్ కస్టమర్ కేర్ నంబర్‌కు ఫోన్ చేయవచ్చా?',
          a: 'వద్దు! గూగుల్ సెర్చ్‌లో సైబర్ నేరగాళ్లు నకిలీ కస్టమర్ కేర్ నంబర్లు పెడుతున్నారు. ఎల్లప్పుడూ మీ బ్యాంక్ పాస్‌బుక్ లేదా ఏటీఎం కార్డు వెనుక ఉన్న అధికారిక నంబర్‌ను మాత్రమే చూడండి.'
        },
        {
          q: 'ఇంటర్నెట్ బ్యాంకింగ్ కోసం కంప్యూటర్ సెంటర్ (నెట్ కేఫ్) కు వెళ్లవచ్చా?',
          a: 'పబ్లిక్ కంప్యూటర్లలో నెట్ బ్యాంకింగ్ చేయడం చాలా ప్రమాదకరం. అక్కడ పాస్‌వర్డ్‌లు సేవ్ అయ్యే ప్రమాదం ఉంది. మీ స్వంత మొబైల్ ఫోన్ ద్వారా మాత్రమే లాగిన్ అవ్వండి.'
        }
      ],
      officialResources: [
        {
          name: 'RBI బ్యాంకింగ్ అంబుడ్స్‌మన్ (Banking Ombudsman)',
          url: 'https://cms.rbi.org.in/',
          desc: 'బ్యాంకింగ్ సేవల లోపాలు మరియు పరిష్కారం కాని వివాదాల కోసం రిజర్వ్ బ్యాంక్ ఆఫ్ ఇండియా అధికారిక పోర్టల్.'
        },
        {
          name: 'జాతీయ సైబర్ క్రైమ్ రిపోర్టింగ్ పోర్టల్',
          url: 'https://cybercrime.gov.in/',
          desc: 'ఆర్థిక మరియు డిజిటల్ మోసాలపై అధికారికంగా పోలీసు ఫిర్యాదు నమోదు చేసే కేంద్ర ప్రభుత్వ పోర్టల్.'
        }
      ],
      related: ['digital-payments', 'connectivity-networks', 'civic-complaints']
    },
    en: {
      title: 'Internet Banking and ATM Services',
      tagline: 'Balance checks, ATM safety, fraud warnings, and emergency card blocking',
      shortDesc: 'Navigate official net-banking securely, practice ATM machine vigilance, identify fake banking calls, and protect your accounts.',
      whyMatters: [
        'Check account balances and transaction history directly from your phone without standing in bank queues.',
        'Learn critical ATM safety protocols to prevent card skimming and PIN theft at roadside cash counters.',
        'Instantly block your debit card from your phone if it is misplaced or suspicious debits appear.',
        'Verify government pension credits, Rythu Bharosa, or DBT welfare subsidies from the comfort of home.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'Verify your bank\'s certified mobile banking application',
          desc: 'Download solely from official stores (e.g., SBI YONO, BoB World, Union Bank Vyom, Canara ai1). Always verify the publisher is the registered bank entity and check the secure https:// padlock on websites.',
          tip: 'Never click sponsored advertisement links in search engine results for banking inquiries.'
        },
        {
          step: 2,
          title: 'Check your balance via official missed call banking',
          desc: 'Dial the registered missed-call banking number from your linked mobile SIM. Your bank will respond within seconds via SMS showing current balance and last 5 transactions without consuming data.',
          tip: 'This feature works on both basic keypad feature phones and smartphones without internet.'
        },
        {
          step: 3,
          title: 'Exercise strict vigilance inside ATM kiosks',
          desc: 'Ensure no bystander stands inside the cabin with you. Look closely at the card slot for unusual loose attachments or fake overlays. Cover the keypad with your spare hand while keying in your 4-digit ATM PIN.',
          tip: 'If cash gets stuck or does not dispense, never accept help from strangers waiting outside the ATM booth.'
        },
        {
          step: 4,
          title: 'Recognize deceptive banking phishing calls & messages',
          desc: 'Messages stating "Your card is deactivated, update KYC immediately by calling this number" are malicious scams. Real bank employees will NEVER ask you for your PIN, CVV, or OTP.',
          tip: 'Never share codes over the phone, even if the caller uses your full name and branch location.'
        },
        {
          step: 5,
          title: 'Emergency steps for lost cards or unapproved debits',
          desc: 'Call the toll-free lost card helpline printed on your bank passbook immediately to freeze your card, or use your mobile banking app\'s "Debit Card Management" toggle.',
          tip: 'Reporting unauthorized debits within 3 days ensures maximum zero-liability protection under RBI guidelines.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'Writing down your 4-digit ATM PIN directly onto your debit card or keeping it on a paper slip in your wallet.',
          correctAction: 'If your purse or card is stolen, thieves instantly empty your savings. Memorize your PIN; never write it down.'
        },
        {
          mistake: 'Handing your ATM card and whispering your PIN to an unknown stranger to help withdraw cash.',
          correctAction: 'Fraudsters switch cards with lightning speed and hand you back an inactive counterfeit card. Always bring a trusted family member.'
        },
        {
          mistake: 'Entering bank account passwords or OTPs on any third-party awareness website like this one.',
          correctAction: 'Mana Digital Gramam NEVER asks for banking credentials. Only enter credentials inside your official bank app.'
        }
      ],
      safetyRules: [
        'Never disclose your net-banking password, transaction MPIN, or SMS OTP to anyone.',
        'Always press the "Cancel" button on the ATM keypad twice and wait for the idle greeting screen before walking away.',
        'In the event of fraudulent withdrawal, immediately call the National Cyber Crime Helpline at 1930.'
      ],
      faqs: [
        {
          q: 'What should I do if an ATM debited my account but did not dispense cash?',
          a: 'Save the ATM transaction slip or note the ATM ID and exact timestamp. RBI rules require banks to resolve failed ATM transactions within 5 calendar days, failing which the bank must compensate you ₹100 per day of delay.'
        },
        {
          q: 'Can I trust phone numbers for bank branches found on Google Maps or web searches?',
          a: 'No! Cyber fraudsters frequently edit phone numbers on search listings. Rely exclusively on the official customer care numbers printed on your bank passbook or physical debit card.'
        },
        {
          q: 'Is it safe to access internet banking from a village internet cafe computer?',
          a: 'Never use public or shared computers for banking. Keyloggers can silently record your passwords. Only use your own personal mobile phone.'
        }
      ],
      officialResources: [
        {
          name: 'RBI CMS (Banking Ombudsman Portal)',
          url: 'https://cms.rbi.org.in/',
          desc: 'Official complaint management system of the Reserve Bank of India for unresolved banking grievances.'
        },
        {
          name: 'National Cyber Crime Reporting Portal',
          url: 'https://cybercrime.gov.in/',
          desc: 'Central government portal for lodging official complaints regarding online financial frauds.'
        }
      ],
      related: ['digital-payments', 'connectivity-networks', 'civic-complaints']
    },
    hi: {
      title: 'इंटरनेट बैंकिंग और ATM सेवाएं',
      tagline: 'बैंक बैलेंस, एटीएम सुरक्षा, फर्जी कॉल से बचाव और कार्ड ब्लॉकिंग',
      shortDesc: 'आधिकारिक बैंक ऐप का सुरक्षित उपयोग, एटीएम मशीन पर सावधानियां, खाता विवरण और फर्जी कॉलों की पहचान।',
      whyMatters: [
        'बैंक में पासबुक प्रिंट कराने के लिए लंबी कतारों में लगे बिना फोन पर बैलेंस और लेनदेन जान सकते हैं।',
        'एटीएम से पैसे निकालते समय कार्ड बदलने या पिन चोरी होने जैसी धोखाधड़ी से बच सकते हैं।',
        'एटीएम कार्ड खो जाने या संदिग्ध लेनदेन होने पर कुछ ही पलों में कार्ड ब्लॉक करने का तरीका समझ सकते हैं।',
        'सरकारी पेंशन, किसान सम्मान निधि और अन्य सरकारी लाभ खाते में आने की पुष्टि घर बैठे कर सकते हैं।'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'केवल आधिकारिक बैंक ऐप का उपयोग करें',
          desc: 'गूगल प्ले स्टोर से केवल अपने बैंक का प्रमाणित ऐप (जैसे SBI YONO, BoB World, Union Bank Vyom, Canara ai1) डाउनलोड करें। वेबसाइट पर https:// और ताला चिन्ह अवश्य देखें।',
          tip: 'गूगल सर्च में दिखने वाले विज्ञापनों या अनजान लिंक पर कभी क्लिक न करें।'
        },
        {
          step: 2,
          title: 'मिस्ड कॉल या SMS से बैलेंस जांचें',
          desc: 'अपने बैंक में पंजीकृत मोबाइल नंबर से बैंक के आधिकारिक मिस्ड कॉल नंबर पर कॉल करें। कुछ ही सेकंड में बिना इंटरनेट के SMS द्वारा बैलेंस मिल जाएगा।',
          tip: 'यह सुविधा साधारण कीपैड वाले फोन पर भी बिना इंटरनेट काम करती है।'
        },
        {
          step: 3,
          title: 'एटीएम मशीन पर पूरी सतर्कता बरतें',
          desc: 'एटीएम केबिन में किसी अनजान व्यक्ति को न आने दें। कार्ड स्लॉट को ध्यान से देखें कि कहीं कोई अतिरिक्त चिपकाने वाला उपकरण तो नहीं है। पिन डालते समय कीपैड को दूसरे हाथ से ढकें।',
          tip: 'यदि पैसे न निकलें तो बाहर खड़े किसी अजनबी की मदद न लें; केवल बैंक सुरक्षा गार्ड या शाखा से संपर्क करें।'
        },
        {
          step: 4,
          title: 'फर्जी बैंक कॉल और मैसेज पहचानें',
          desc: '"आपका कार्ड ब्लॉक हो गया है, तुरंत केवाईसी के लिए इस नंबर पर बात करें" वाले मैसेज पूरी तरह फर्जी होते हैं। असली बैंक कर्मचारी कभी आपसे फोन पर पिन या ओटीपी नहीं मांगते।',
          tip: 'फोन पर किसी को भी ओटीपी न बताएं, भले ही वह आपका नाम और बैंक शाखा जानता हो।'
        },
        {
          step: 5,
          title: 'कार्ड खो जाने पर तुरंत उठाए जाने वाले कदम',
          desc: 'पासबुक पर दिए गए टोल-फ्री नंबर पर कॉल करके तुरंत कार्ड ब्लॉक कराएं, या मोबाइल ऐप में "Block Card" विकल्प चुनें।',
          tip: 'आरबीआई नियमों के अनुसार जितनी जल्दी सूचना देंगे, नुकसान से सुरक्षा उतनी अधिक होगी।'
        }
      ],
      commonMistakes: [
        {
          mistake: 'एटीएम कार्ड के पीछे पेन से अपना 4 अंकों का गुप्त पिन लिख देना।',
          correctAction: 'कार्ड खोने पर कोई भी व्यक्ति आपके खाते से सारे पैसे निकाल लेगा! पिन हमेशा याद रखें, कहीं न लिखें।'
        },
        {
          mistake: 'एटीएम में किसी अनजान व्यक्ति को अपना कार्ड देकर पिन बता देना।',
          correctAction: 'धोखेबाज पलक झपकते कार्ड बदल लेते हैं। किसी अजनबी को अपना कार्ड और पिन कभी न दें।'
        },
        {
          mistake: 'इस जागरूकता वेबसाइट या किसी अन्य अनजान पोर्टल पर अपना बैंक पासवर्ड डालना।',
          correctAction: 'मन डिजिटल ग्राम कभी भी आपके बैंक विवरण नहीं मांगता। अपनी जानकारी केवल अपने बैंक ऐप में ही डालें।'
        }
      ],
      safetyRules: [
        'अपना बैंकिंग पासवर्ड, यूपीआई पिन और एसएमएस ओटीपी किसी के साथ साझा न करें।',
        'एटीएम लेनदेन पूरा होने के बाद "Cancel" बटन दबाएं और मुख्य स्क्रीन आने तक रुकें।',
        'धोखाधड़ी होने पर तुरंत राष्ट्रीय साइबर हेल्पलाइन 1930 पर कॉल करें।'
      ],
      faqs: [
        {
          q: 'यदि एटीएम से पैसे न निकलें लेकिन खाते से कट जाएं तो क्या करें?',
          a: 'एटीएम की पर्ची संभाल कर रखें या समय और एटीएम नंबर नोट करें। आरबीआई के अनुसार 5 दिनों में पैसा वापस न आने पर बैंक को प्रतिदिन ₹100 का हर्जाना देना होता है।'
        },
        {
          q: 'क्या गूगल पर मिलने वाले बैंक कस्टमर केयर नंबर सुरक्षित हैं?',
          a: 'नहीं! साइबर अपराधी गूगल मैप्स पर फर्जी नंबर डाल देते हैं। केवल अपनी बैंक पासबुक या एटीएम कार्ड पर लिखे नंबर पर ही कॉल करें।'
        },
        {
          q: 'क्या इंटरनेट कैफे के कंप्यूटर से नेट बैंकिंग कर सकते हैं?',
          a: 'सार्वजनिक कंप्यूटर पर बैंकिंग करना बहुत असुरक्षित है क्योंकि वहां पासवर्ड चोरी हो सकते हैं। केवल अपने निजी फोन का उपयोग करें।'
        }
      ],
      officialResources: [
        {
          name: 'RBI बैंकिंग लोकपाल (Banking Ombudsman Portal)',
          url: 'https://cms.rbi.org.in/',
          desc: 'बैंकिंग सेवाओं में शिकायतों और विवादों के समाधान के लिए भारतीय रिज़र्व बैंक का आधिकारिक पोर्टल।'
        },
        {
          name: 'राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल',
          url: 'https://cybercrime.gov.in/',
          desc: 'ऑनलाइन वित्तीय धोखाधड़ी की आधिकारिक पुलिस शिकायत दर्ज कराने का केंद्रीय पोर्टल।'
        }
      ],
      related: ['digital-payments', 'connectivity-networks', 'civic-complaints']
    }
  },

  {
    id: 'civic-complaints',
    slug: 'civic-complaints',
    iconName: 'Trash2',
    image: '/images/hero-community.jpg',
    category: 'governance',
    verifiedUrl: 'https://swachhata.co.in/',
    verifiedSource: 'Swachhata App (Ministry of Housing and Urban Affairs)',
    lastReviewed: '2026-03-01',
    te: {
      title: 'డిజిటల్ వ్యర్థాల సేకరణ మరియు ఫిర్యాదులు',
      tagline: 'గ్రామ పారిశుద్ధ్యం, చెత్త సేకరణ ఫిర్యాదులు మరియు పంచాయతీ సేవలు',
      shortDesc: 'చెత్త పేరుకుపోవడం, వీధి దీపాల సమస్యలు, మరియు గ్రామ పంచాయతీ / మున్సిపాలిటీకి ఆన్‌లైన్‌లో బాధ్యతాయుతంగా ఫిర్యాదు చేసే విధానం.',
      whyMatters: [
        'గ్రామంలో పేరుకుపోయిన చెత్త, మురుగు కాలువల సమస్యలను నేరుగా అధికారుల దృష్టికి తీసుకెళ్లవచ్చు.',
        'ఫిర్యాదు చేసిన తర్వాత వచ్చే ట్రాకింగ్ నంబర్ (Grievance ID) ద్వారా సమస్య పరిష్కారం అయ్యిందో లేదో చూడవచ్చు.',
        'కార్యాలయాల చుట్టూ తిరగాల్సిన అవసరం లేకుండా ఫోన్ ద్వారానే స్పష్టమైన ఫొటోలతో ఫిర్యాదు నమోదు చేయవచ్చు.',
        'పారిశుద్ధ్య లోపాలను సకాలంలో పరిష్కరించడం ద్వారా గ్రామంలో డెంగ్యూ, మలేరియా వంటి రోగాల వ్యాప్తిని అరికట్టవచ్చు.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'మీ స్థానిక గ్రామ పంచాయతీ లేదా మున్సిపాలిటీ చానెల్‌ను గుర్తించండి',
          desc: 'గ్రామీణ ప్రాంతాలలో మీ గ్రామ పంచాయతీ కార్యదర్శి, సర్పంచ్ లేదా వార్డు వాలంటీర్ ద్వారా ఫిర్యాదు విధానాన్ని తెలుసుకోండి. పట్టణ / మున్సిపల్ ప్రాంతాలలో అధికారిక "స్వచ్ఛత (Swachhata)" యాప్ లేదా రాష్ట్ర స్పందన / ప్రజావాణి పోర్టల్ ఉపయోగించండి.',
          tip: 'గ్రామ సమస్యలకు మండల పరిషత్ లేదా గ్రామ పంచాయతీ అధికారిక నోటీసు బోర్డులో ఫిర్యాదు నంబర్లు ఉంటాయి.'
        },
        {
          step: 2,
          title: 'సమస్య యొక్క స్పష్టమైన ఫొటో మరియు లొకేషన్ సిద్ధం చేసుకోండి',
          desc: 'చెత్త పేరుకుపోయిన ప్రదేశం లేదా పనిచేయని వీధి దీపం ఫొటోను స్పష్టంగా తీయండి. ల్యాండ్‌మార్క్ (ఉదాహరణకు: ప్రాథమిక పాఠశాల వెనుక, లేదా రామాలయం వీధి) వివరాలు రాసుకోండి.',
          tip: 'ఫొటోలో స్థానిక ల్యాండ్‌మార్క్ కనిపించేలా తీస్తే సిబ్బంది ఆ ప్రదేశాన్ని సులభంగా గుర్తిస్తారు.'
        },
        {
          step: 3,
          title: 'ఫిర్యాదును సరైన వివరాలతో సమర్పించండి',
          desc: 'మీ పోర్టల్ లేదా యాప్‌లో సమస్య కేటగిరీ (ఉదా: చెత్త తొలగింపు, వీధి దీపాలు, తాగునీరు) ఎంచుకోండి. సంక్షిప్తంగా వివరణ ఇచ్చి ఫొటోను జత చేయండి.',
          tip: 'ఫిర్యాదులో ఎవరిపై వ్యక్తిగత నిందలు వేయకుండా కేవలం సమస్యను మాత్రమే ప్రస్తావించండి.'
        },
        {
          step: 4,
          title: 'కంప్లైంట్ రిఫరెన్స్ నంబర్‌ను భద్రపరుచుకోండి',
          desc: 'ఫిర్యాదు సమర్పించిన వెంటనే మీకు SMS ద్వారా ఒక ప్రత్యేక ఫిర్యాదు సంఖ్య (Grievance Number / Token ID) వస్తుంది. దీనిని డైరీలో లేదా మొబైల్ నోట్స్‌లో రాసి పెట్టుకోండి.',
          tip: 'ఈ నంబర్ ఆధారంగానే అధికారులు సమస్యను పరిశీలించారా లేదా అని ట్రాక్ చేయవచ్చు.'
        },
        {
          step: 5,
          title: 'వ్యక్తిగత గోప్యతను కాపాడుకోండి',
          desc: 'సోషల్ మీడియా లేదా పబ్లిక్ గ్రూపులలో ఫిర్యాదు చేసేటప్పుడు మీ ఆధార్ నంబర్, పూర్తి ఇంటి చిరునామా, లేదా వ్యక్తిగత ఫోన్ నంబర్ అందరికీ కనిపించేలా పోస్ట్ చేయవద్దు.',
          tip: 'అధికారిక ప్రభుత్వం పోర్టల్ ద్వారా చేసే ఫిర్యాదుల్లో మీ గోప్యత సురక్షితంగా ఉంటుంది.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'సోషల్ మీడియాలో విమర్శిస్తూ పోస్టులు పెట్టడం కానీ అధికారికంగా పంచాయతీలో ఫిర్యాదు చేయకపోవడం.',
          correctAction: 'అధికారిక చానెళ్లలో నమోదైన ఫిర్యాదులకు మాత్రమే ప్రభుత్వ రికార్డులలో జవాబుదారీతనం ఉంటుంది.'
        },
        {
          mistake: 'ఫిర్యాదు సంఖ్య (Token ID) ను రాసుకోకపోవడం.',
          correctAction: 'రిఫరెన్స్ నంబర్ లేకపోతే సమస్య పురోగతిని తెలుసుకోవడం లేదా పై అధికారులకు గుర్తుచేయడం కష్టమవుతుంది.'
        },
        {
          mistake: 'ప్రైవేట్ లేదా తెలియని వెబ్‌సైట్లలో కంప్లైంట్ ఇవ్వడం.',
          correctAction: 'స్థానిక గ్రామ పంచాయతీ లేదా అధికారిక రాష్ట్ర ప్రభుత్వ గ్రీవెన్స్ పోర్టల్‌ను మాత్రమే నమ్మండి.'
        }
      ],
      safetyRules: [
        'ఈ వెబ్‌సైట్ ఎటువంటి నకిలీ హెల్ప్‌లైన్ నంబర్లను లేదా తప్పుడు సబ్మిషన్ స్టేటస్‌లను సృష్టించదు.',
        'ఫిర్యాదులలో తప్పుడు సమాచారం లేదా కక్షపూరిత ఆరోపణలు చేయవద్దు; వాస్తవాలను మాత్రమే నివేదించండి.',
        'మీ పంచాయతీ కార్యదర్శి లేదా అధికారిక ప్రభుత్వ సేవా కేంద్రాన్ని వ్యక్తిగతంగా సంప్రదించి సమాచారాన్ని ధృవీకరించుకోండి.'
      ],
      faqs: [
        {
          q: 'నా గ్రామంలో ఆన్‌లైన్ కంప్లైంట్ పోర్టల్ లేకపోతే ఏమి చేయాలి?',
          a: 'మీ గ్రామ పంచాయతీ కార్యాలయంలోని ఫిర్యాదుల రిజిస్టర్‌లో రాతపూర్వకంగా ఫిర్యాదు చేసి, కార్యదర్శి సంతకంతో కూడిన రసీదు కాపీని పొందవచ్చు. లేదా మండల ప్రజావాణిలో అర్జీ ఇవ్వవచ్చు.'
        },
        {
          q: 'స్వచ్ఛత (Swachhata) యాప్ గ్రామీణ ప్రాంతాలకు వర్తిస్తుందా?',
          a: 'స్వచ్ఛత యాప్ ప్రధానంగా మున్సిపాలిటీలు మరియు నగరాలకు విస్తృతంగా పనిచేస్తుంది. గ్రామీణ ప్రాంతాల కోసం స్వచ్ఛ భారత్ మిషన్ (గ్రామీణ్) కింద స్థానిక పంచాయతీలు బాధ్యత వహిస్తాయి.'
        },
        {
          q: 'ఫిర్యాదు పరిష్కారం కాకపోతే పై అధికారులను ఎలా సంప్రదించాలి?',
          a: 'మీ కంప్లైంట్ నంబర్‌తో మండల అభివృద్ధి అధికారి (MPDO) లేదా జిల్లా ప్రజా ఫిర్యాదుల పరిష్కార విభాగం (స్పందన / ప్రజావాణి) లో రీ-ఓపెన్ చేయవచ్చు.'
        }
      ],
      officialResources: [
        {
          name: 'స్వచ్ఛ భారత్ మిషన్ (గ్రామీణ్) అధికారిక పోర్టల్',
          url: 'https://swachhbharatmission.ddws.gov.in/',
          desc: 'గ్రామీణ పారిశుద్ధ్యం, ఘన మరియు ద్రవ వ్యర్థాల నిర్వహణ కోసం కేంద్ర జలశక్తి మంత్రిత్వ శాఖ పోర్టల్.'
        },
        {
          name: 'కేంద్ర ప్రజా ఫిర్యాదుల పోర్టల్ (CPGRAMS)',
          url: 'https://pgportal.gov.in/',
          desc: 'భారత ప్రభుత్వ పౌర సేవల ఫిర్యాదుల పరిష్కార అధికారిక జాతీయ వేదిక.'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'digital-farming']
    },
    en: {
      title: 'Digital Waste Collection & Complaint Services',
      tagline: 'Civic sanitation, waste management reporting, and Gram Panchayat grievances',
      shortDesc: 'Learn how digital civic reporting works, how to file sanitation complaints with Gram Panchayats, track ticket numbers, and protect personal privacy.',
      whyMatters: [
        'Brings uncollected garbage and blocked drainage issues directly to the attention of sanitation inspectors.',
        'Generates an official tracking ID to hold civic authorities accountable for timely resolution.',
        'File reports accompanied by clear photographic evidence without traveling repeatedly to taluka offices.',
        'Early sanitation resolution prevents mosquito breeding grounds and vector-borne diseases like malaria and dengue in villages.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'Identify your local Gram Panchayat or municipal complaint channel',
          desc: 'For villages, find the grievance desk at your Gram Panchayat office or local government citizen assistance desk. For town limits, use the official Swachhata app or state grievance portals (e.g., Spandana, Prajavani).',
          tip: 'Check your Panchayat office notice board for official telephone contacts.'
        },
        {
          step: 2,
          title: 'Capture clear photographic evidence and nearby landmarks',
          desc: 'Take a clear, well-lit photograph showing the accumulated waste or open drain. Note down prominent landmarks such as "Behind the primary school" or "Near the community water tank".',
          tip: 'Capturing recognizable landmarks helps sanitary staff locate the site swiftly.'
        },
        {
          step: 3,
          title: 'Submit the report with factual details',
          desc: 'Select the exact issue category (e.g., Garbage clearance, street lighting, open manhole). Provide a calm, objective description and attach the photo.',
          tip: 'Focus strictly on the civic issue without making personal accusations against individuals.'
        },
        {
          step: 4,
          title: 'Record and preserve your grievance tracking number',
          desc: 'Upon submission, an SMS will provide a unique Grievance Reference ID (e.g., GR-2026-8941). Write this down in your notebook or save it on your phone.',
          tip: 'This reference number is essential for following up on resolution status.'
        },
        {
          step: 5,
          title: 'Protect your personal information from public exposure',
          desc: 'Do not post your Aadhaar number, phone number, or full residential address publicly on open social media feeds when raising civic queries.',
          tip: 'Official government grievance portals store citizen contact details confidentially.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'Venting frustration on informal social media groups instead of lodging an official grievance.',
          correctAction: 'Only grievances registered in official channels create a legal paper trail and binding service-level deadlines for officers.'
        },
        {
          mistake: 'Failing to note down the grievance ticket reference number.',
          correctAction: 'Without the ticket ID, tracking the assigned sanitary supervisor or escalating overdue issues is impossible.'
        },
        {
          mistake: 'Submitting civic complaints to unverified private third-party apps.',
          correctAction: 'Rely solely on verified Gram Panchayat desks or official government grievance platforms.'
        }
      ],
      safetyRules: [
        'This portal does not invent fake helpline numbers or fabricated grievance submission statuses.',
        'Factual, polite reporting leads to faster resolution than hostile or fabricated complaints.',
        'If a digital portal is not yet active in your village, submit a written letter at the Panchayat office and collect an acknowledgment receipt.'
      ],
      faqs: [
        {
          q: 'What if my Gram Panchayat does not have a dedicated mobile app?',
          a: 'You can submit a physical grievance letter at the Gram Panchayat office to the Panchayat Secretary. By law, they maintain a Citizen Grievance Register and will issue an acknowledgment slip.'
        },
        {
          q: 'How long does a sanitation complaint typically take to resolve?',
          a: 'Under standard citizen charters, basic solid waste clearance complaints are targeted for resolution within 24 to 48 hours in notified zones.'
        },
        {
          q: 'How can I escalate if no action is taken on my complaint?',
          a: 'Quote your ticket reference number to the Mandal Parishad Development Officer (MPDO) or submit an appeal on the district grievance redressal portal (CPGRAMS / State Portal).'
        }
      ],
      officialResources: [
        {
          name: 'Swachh Bharat Mission (Grameen) Official Portal',
          url: 'https://swachhbharatmission.ddws.gov.in/',
          desc: 'Ministry of Jal Shakti portal for rural sanitation, ODF sustainability, and solid/liquid waste management.'
        },
        {
          name: 'CPGRAMS (Centralized Public Grievance Redress and Monitoring System)',
          url: 'https://pgportal.gov.in/',
          desc: 'Government of India central portal for citizen grievances across government departments.'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'digital-farming']
    },
    hi: {
      title: 'डिजिटल कचरा संग्रह और शिकायत सेवाएं',
      tagline: 'ग्रामीण स्वच्छता, कचरा प्रबंधन शिकायतें और ग्राम पंचायत सेवाएं',
      shortDesc: 'कचरा जमा होने, टूटी नालियों और स्ट्रीट लाइट की समस्या की ऑनलाइन रिपोर्टिंग, ट्रैकिंग नंबर और निजता की सुरक्षा।',
      whyMatters: [
        'गांव में जमा कचरे और गंदगी की समस्या सीधे जिम्मेदार अधिकारियों के संज्ञान में लाई जा सकती है।',
        'शिकायत दर्ज होने के बाद मिले ट्रैकिंग नंबर से प्रगति की जांच की जा सकती है।',
        'दफ्तरों के चक्कर काटे बिना घर बैठे फोटो के साथ साफ सुथरी शिकायत की जा सकती है।',
        'समय पर सफाई होने से गांव में मलेरिया, डेंगू और अन्य संक्रामक बीमारियों के फैलाव को रोका जा सकता है।'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'अपनी ग्राम पंचायत या नगर निकाय का माध्यम जानें',
          desc: 'ग्रामीण क्षेत्र में ग्राम पंचायत सचिव या पंचायत भवन में शिकायत दर्ज करने की व्यवस्था समझें। कस्बों या नगरों में आधिकारिक "स्वच्छता ऐप" या राज्य शिकायत पोर्टल का उपयोग करें।',
          tip: 'पंचायत भवन के सूचना पट्ट पर लिखे हेल्पलाइन नंबरों को नोट करें।'
        },
        {
          step: 2,
          title: 'समस्या की स्पष्ट फोटो और स्थान की पहचान तैयार रखें',
          desc: 'कचरे के ढेर या जलभराव की साफ फोटो लें। पास के किसी प्रमुख स्थान (जैसे प्राथमिक विद्यालय के पीछे या पानी की टंकी के पास) का उल्लेख करें।',
          tip: 'लैंडमार्क स्पष्ट होने से सफाई कर्मियों को स्थान खोजने में आसानी होती है।'
        },
        {
          step: 3,
          title: 'सही श्रेणी चुनकर शिकायत दर्ज करें',
          desc: 'पोर्टल में सही श्रेणी (कचरा उठाव, नाली सफाई, स्ट्रीट लाइट) चुनें। अपनी बात संक्षिप्त और स्पष्ट शब्दों में लिखें और फोटो संलग्न करें।',
          tip: 'शिकायत में किसी व्यक्ति पर व्यक्तिगत आरोप न लगाएं; केवल समस्या पर ध्यान दें।'
        },
        {
          step: 4,
          title: 'शिकायत ट्रैकिंग नंबर संभाल कर रखें',
          desc: 'शिकायत सबमिट होते ही SMS द्वारा एक टोकन नंबर (Grievance ID) प्राप्त होगा। इसे डायरी या फोन में नोट कर लें।',
          tip: 'इस नंबर के बिना आगे की स्थिति जानना संभव नहीं होता।'
        },
        {
          step: 5,
          title: 'अपनी व्यक्तिगत गोपनीयता सुरक्षित रखें',
          desc: 'सोशल मीडिया पर शिकायत डालते समय अपना आधार नंबर या पूरा आवासीय पता सार्वजनिक रूप से न लिखें।',
          tip: 'सरकारी आधिकारिक पोर्टलों में आपकी संपर्क जानकारी सुरक्षित रहती है।'
        }
      ],
      commonMistakes: [
        {
          mistake: 'सोशल मीडिया पर गुस्सा जाहिर करना लेकिन आधिकारिक रूप से पंचायत में शिकायत न करना।',
          correctAction: 'केवल आधिकारिक प्रणाली में दर्ज शिकायत की ही कानूनी जवाबदेही और समय सीमा होती है।'
        },
        {
          mistake: 'शिकायत का संदर्भ नंबर (Token ID) न लिखना।',
          correctAction: 'बिना नंबर के यह पता लगाना कठिन हो जाता है कि किस कर्मचारी को काम सौंपा गया है।'
        },
        {
          mistake: 'अनजान गैर-सरकारी वेबसाइटों पर शिकायत दर्ज कराना।',
          correctAction: 'केवल अपनी ग्राम पंचायत या अधिकृत सरकारी पोर्टल पर ही भरोसा करें।'
        }
      ],
      safetyRules: [
        'यह पोर्टल कोई फर्जी हेल्पलाइन या झूठी शिकायत स्थिति नहीं बनाता।',
        'तथ्यात्मक और विनम्र भाषा में शिकायत करने पर त्वरित समाधान मिलता है।',
        'यदि ऑनलाइन सुविधा उपलब्ध न हो, तो पंचायत कार्यालय में लिखित पत्र देकर रसीद लें।'
      ],
      faqs: [
        {
          q: 'यदि मेरी ग्राम पंचायत का कोई मोबाइल ऐप न हो तो क्या करें?',
          a: 'आप ग्राम पंचायत कार्यालय में सचिव को लिखित आवेदन दे सकते हैं और नागरिक शिकायत रजिस्टर में दर्ज कराकर पावती ले सकते हैं।'
        },
        {
          q: 'सफाई की शिकायत का समाधान सामान्यतः कितने समय में होता है?',
          a: 'नागरिक अधिकार पत्र के अनुसार सामान्यतः कचरा सफाई की शिकायतों का निपटारा 24 से 48 घंटे के भीतर किया जाना चाहिए।'
        },
        {
          q: 'कार्रवाई न होने पर आगे क्या करें?',
          a: 'अपने शिकायत नंबर के साथ ब्लॉक विकास अधिकारी (BDO) या जिला शिकायत निवारण पोर्टल (CPGRAMS / राज्य जनसुनवाई) पर अपील करें।'
        }
      ],
      officialResources: [
        {
          name: 'स्वच्छ भारत मिशन (ग्रामीण) आधिकारिक पोर्टल',
          url: 'https://swachhbharatmission.ddws.gov.in/',
          desc: 'ग्रामीण स्वच्छता और ठोस व तरल अपशिष्ट प्रबंधन के लिए जल शक्ति मंत्रालय का आधिकारिक मंच।'
        },
        {
          name: 'CPGRAMS (केंद्रीय लोक शिकायत निवारण पोर्टल)',
          url: 'https://pgportal.gov.in/',
          desc: 'भारत सरकार के सभी विभागों से जुड़ी शिकायतों के निवारण का आधिकारिक राष्ट्रीय मंच।'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'digital-farming']
    }
  },

  {
    id: 'public-transport',
    slug: 'public-transport',
    iconName: 'Bus',
    image: '/images/hero-community.jpg',
    category: 'transport',
    verifiedUrl: 'https://www.irctc.co.in/',
    verifiedSource: 'IRCTC (Indian Railway Catering and Tourism Corporation)',
    lastReviewed: '2026-03-01',
    te: {
      title: 'డిజిటల్ ప్రజా రవాణా',
      tagline: 'బస్సు మరియు రైలు రూట్లు, టైమ్‌టేబుల్స్ మరియు అధికారిక టికెట్ బుకింగ్',
      shortDesc: 'RTC బస్సులు, రైలు వేళలు, లైవ్ స్టేటస్, అధికారిక బుకింగ్ యాప్‌లు మరియు నకిలీ ట్రావెల్ ఏజెంట్ల మోసాల నివారణ.',
      whyMatters: [
        'బస్టాండు లేదా రైల్వే స్టేషన్ వద్ద అనవసరంగా గంటల తరబడి నిరీక్షించకుండా సరైన సమయానికి ప్రయాణం ప్రారంభించవచ్చు.',
        'పల్లె వెలుగు, ఎక్స్‌ప్రెస్ బస్సుల మరియు ప్యాసింజర్ రైళ్ల అధికారిక వేళలను మీ చేతిలోని ఫోన్‌లోనే చూడవచ్చు.',
        'దళారులకు ఎక్కువ కమీషన్ ఇవ్వకుండా నేరుగా అధికారిక చార్జీలతో టికెట్లు రిజర్వ్ చేసుకోవచ్చు.',
        'ట్రైన్ ఎక్కడికి వచ్చిందో (Live Train Running Status) తెలుసుకుని సురక్షితంగా స్టేషన్‌కు చేరుకోవచ్చు.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'అధికారిక బస్సు మరియు రైలు పోర్టళ్లను మాత్రమే ఉపయోగించండి',
          desc: 'రైలు ప్రయాణాల కోసం అధికారిక IRCTC Rail Connect యాప్ లేదా irctc.co.in ఉపయోగించండి. బస్సు ప్రయాణాల కోసం APSRTC (apsrtconline.in), TSRTC (tsrtconline.in) లేదా సంబంధిత రాష్ట్ర రోడ్డు రవాణా సంస్థ అధికారిక వెబ్‌సైట్లను మాత్రమే చూడండి.',
          tip: 'నకిలీ టికెట్ బుకింగ్ లింకులు మరియు అదనపు రుసుము వసూలు చేసే అనధికారిక ఏజెంట్లను నమ్మవద్దు.'
        },
        {
          step: 2,
          title: 'ప్రయాణ మార్గం, తేదీ మరియు సమయాలు శోధించండి',
          desc: 'మీరు బయలుదేరే స్టేషన్ (ఉదా: విజయవాడ / వరంగల్) మరియు గమ్యస్థానాన్ని నమోదు చేయండి. ప్రయాణ తేదీని జాగ్రత్తగా ఎంపిక చేయండి.',
          tip: 'రైలు సమయాలలో 24 గంటల క్లాక్ ఫార్మాట్ (ఉదా: 20:30 అంటే రాత్రి 8:30) ఉపయోగిస్తారని గుర్తుంచుకోండి.'
        },
        {
          step: 3,
          title: 'సీట్ల లభ్యత మరియు టికెట్ చార్జీలను పరిశీలించండి',
          desc: 'స్లీపర్, జనరల్ లేదా సీటింగ్ క్లాస్ లభ్యతను తనిఖీ చేయండి. ప్రయాణీకుల వివరాలు (పేరు, వయస్సు, లింగం) ఆధార్ కార్డులో ఉన్న విధంగా సరిగ్గా నమోదు చేయండి.',
          tip: 'సీనియర్ సిటిజన్లకు లేదా దివ్యాంగులకు వర్తించే రాయితీ వివరాలను సరిచూసుకోండి.'
        },
        {
          step: 4,
          title: 'లైవ్ ట్రైన్ రన్నింగ్ స్టేటస్ చూడటం నేర్చుకోండి',
          desc: 'NTES (National Train Enquiry System) లేదా NTES అధికారిక యాప్ ద్వారా మీ రైలు నంబర్‌ను ఎంటర్ చేసి, రైలు ప్రస్తుతం ఏ స్టేషన్ దాటింది, ఎంత సమయం ఆలస్యంగా నడుస్తోందో లైవ్‌గా చూడవచ్చు.',
          tip: 'లైవ్ లొకేషన్ నెట్‌వర్క్ అప్‌డేట్లపై ఆధారపడి ఉంటుంది, కాబట్టి స్టేషన్‌కు కొద్దిగా ముందుగానే చేరుకోవడం శ్రేయస్కరం.'
        },
        {
          step: 5,
          title: 'నకిలీ టికెట్ లింకులు మరియు మెసేజ్‌ల పట్ల అప్రమత్తంగా ఉండండి',
          desc: 'ధృవీకరించబడిన టికెట్‌పై ఎల్లప్పుడూ 10 అంకెల PNR నంబర్, QR కోడ్ మరియు మీ ప్రయాణ వివరాలు ఉంటాయి. సోషల్ మీడియాలో వచ్చే నకిలీ టికెట్ స్క్రీన్‌షాట్‌లను నమ్మవద్దు.',
          tip: 'రైలు టికెట్ రద్దు చేసినప్పుడు రీఫండ్ డబ్బు మీరు చెల్లించిన అదే బ్యాంక్ ఖాతాకు నేరుగా వస్తుంది.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'గూగుల్ సెర్చ్‌లో మొదట కనిపించిన అనుమానాస్పద ట్రావెల్ వెబ్‌సైట్లకు బ్యాంక్ వివరాలు ఇచ్చి బుక్ చేయడం.',
          correctAction: 'ఎల్లప్పుడూ IRCTC లేదా రాష్ట్ర RTC అధికారిక పోర్టల్ మాత్రమే వాడండి. నకిలీ సైట్లు టికెట్ ఇవ్వకుండా డబ్బు కాజేస్తాయి.'
        },
        {
          mistake: 'బస్సు లేదా రైలు సమయాలను తప్పుగా లెక్కించడం (AM మరియు PM గందరగోళం).',
          correctAction: 'రైల్వే మరియు బస్సు సమయాలను నిర్ధారించుకునేటప్పుడు ఉదయం లేదా రాత్రి అనే విషయాన్ని ఒకటికి రెండుసార్లు చదవండి.'
        },
        {
          mistake: 'టికెట్ కన్ఫర్మ్ కాని ప్రైవేట్ ఏజెంట్ ప్రింట్‌ను నమ్మి ప్రయాణం మొదలుపెట్టడం.',
          correctAction: 'మీ ఫోన్‌కు అధికారికంగా వచ్చిన IRCTC / RTC SMS లేదా అధికారిక పోర్టల్‌లో PNR స్టేటస్ కన్ఫర్మ్ అయిందో లేదో సరిచూసుకోండి.'
        }
      ],
      safetyRules: [
        'ఈ వెబ్‌సైట్ ప్రత్యక్ష బస్సు లొకేషన్లు లేదా టికెట్ లభ్యతను స్వయంగా సృష్టించదు; అధికారిక పోర్టళ్ల వాడకాన్ని మాత్రమే నేర్పుతుంది.',
        'టికెట్ క్యాన్సిలేషన్ లేదా రీఫండ్ కోసం ఎవరైనా OTP అడిగితే చెప్పవద్దు; IRCTC ఎప్పుడూ OTP అడగదు.',
        'రాత్రి సమయ ప్రయాణాల్లో కుటుంబ సభ్యులతో మీ బస్సు/రైలు వివరాలు మరియు లైవ్ లొకేషన్‌ను పంచుకోండి.'
      ],
      faqs: [
        {
          q: 'రైల్వే టికెట్ బుక్ చేసుకోవడానికి IRCTC యూజర్ ఐడీ తప్పనిసరిగా ఉండాలా?',
          a: 'అవును. భారతీయ రైల్వే నిబంధనల ప్రకారం వ్యక్తిగత టికెట్ బుకింగ్ కోసం IRCTC లో ఉచితంగా యూజర్ ఐడీ నమోదు చేసుకోవాలి. దీనికి మీ మొబైల్ నంబర్ మరియు ఈమెయిల్ అవసరం.'
        },
        {
          q: 'APSRTC మరియు TSRTC బస్సు టికెట్లు ఫోన్‌లో బుక్ చేసుకోవచ్చా?',
          a: 'అవును. అధికారిక APSRTC (apsrtconline.in) మరియు TSRTC (tsrtconline.in) పోర్టల్స్ లేదా వాటి అధికారిక మొబైల్ యాప్‌ల ద్వారా సీటు ఎంచుకుని సురక్షితంగా యూపీఐ ద్వారా బుక్ చేసుకోవచ్చు.'
        },
        {
          q: 'PNR స్టేటస్ అంటే ఏమిటి?',
          a: 'PNR (Passenger Name Record) అనేది మీ రైలు టికెట్‌పై ఉండే 10 అంకెల విశిష్ట సంఖ్య. ఈ సంఖ్యతో మీ సీటు కన్ఫర్మ్ అయిందా, వెయిటింగ్ లిస్ట్‌లో ఉందా అని క్షణాల్లో తెలుసుకోవచ్చు.'
        }
      ],
      officialResources: [
        {
          name: 'IRCTC అధికారిక రైల్వే టికెట్ బుకింగ్ పోర్టల్',
          url: 'https://www.irctc.co.in/',
          desc: 'భారతీయ రైల్వే క్యాటరింగ్ మరియు టూరిజం కార్పొరేషన్ యొక్క అధికారిక ఆన్‌లైన్ టికెట్ వేదిక.'
        },
        {
          name: 'NTES (జాతీయ రైలు విచారణ వ్యవస్థ)',
          url: 'https://enquiry.indianrail.gov.in/',
          desc: 'రైళ్ల సమయాలు, లైవ్ రన్నింగ్ స్టేటస్ మరియు ప్లాట్‌ఫారమ్ సమాచారం కోసం అధికారిక వెబ్‌సైట్.'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'banking-atm']
    },
    en: {
      title: 'Digital Public Transport',
      tagline: 'Bus and train routes, timetables, and authentic ticket booking',
      shortDesc: 'Find official RTC bus routes, train timings, live tracking tools, verified ticket portals, and avoid travel agent scams.',
      whyMatters: [
        'Avoid prolonged waiting times at village bus stops and railway junctions by tracking published timetables.',
        'Check rural state road transport (RTC) bus schedules and passenger train timings on your phone.',
        'Reserve tickets at regulated government fares without paying exorbitant commissions to travel touts.',
        'Track live train arrival updates (NTES) so family members reach stations at the right time.'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'Use certified transport portals only',
          desc: 'For train journeys, use only the official IRCTC Rail Connect app or irctc.co.in. For state transport buses, access official state road transport corporations like APSRTC (apsrtconline.in) or TSRTC (tsrtconline.in).',
          tip: 'Avoid third-party cloned websites that charge hidden convenience fees.'
        },
        {
          step: 2,
          title: 'Search route, origin station, destination, and travel date',
          desc: 'Type your boarding station and drop-off station accurately. Check your travel date carefully, particularly around midnight journeys.',
          tip: 'Remember that railway timetables use a 24-hour clock (e.g., 21:15 corresponds to 9:15 PM).'
        },
        {
          step: 3,
          title: 'Check seat quota, passenger details, and fare breakdown',
          desc: 'Review available accommodation in General, Sleeper, or Chair Car classes. Enter passenger names and ages strictly matching their government photo IDs (Aadhaar/Voter Card).',
          tip: 'Check concessions available for senior citizens or differently abled passengers where applicable.'
        },
        {
          step: 4,
          title: 'Track live train running updates with NTES',
          desc: 'Open the official National Train Enquiry System (enquiry.indianrail.gov.in). Enter your train number to check if it is running on time or delayed.',
          tip: 'Live running status depends on cellular sensor pings; plan to reach the platform with adequate buffer time.'
        },
        {
          step: 5,
          title: 'Inspect your confirmed digital ticket and PNR',
          desc: 'A legitimate train ticket will always feature a 10-digit PNR (Passenger Name Record) and a verifiable QR code. Genuine refunds for cancelled tickets are credited automatically to your source bank account.',
          tip: 'Never share OTPs with callers claiming they are helping process your ticket refund.'
        }
      ],
      commonMistakes: [
        {
          mistake: 'Typing card credentials into lookalike search ad websites claiming "instant confirmed tatkal tickets".',
          correctAction: 'Tatkal tickets can only be booked through official IRCTC portals. Third-party sites promising guaranteed tickets are fraudulent.'
        },
        {
          mistake: 'Confusing AM and PM when reviewing late-night bus or train departures.',
          correctAction: 'Carefully cross-check the departure time format before heading out to the highway bus shelter or railway station.'
        },
        {
          mistake: 'Traveling on an unconfirmed Waitlist ticket without checking current PNR status.',
          correctAction: 'Verify your 10-digit PNR status on the official portal before boarding reserved compartments.'
        }
      ],
      safetyRules: [
        'This website does not fabricate live bus locations, seat availability, or departure fares.',
        'Never disclose your IRCTC password, bank PIN, or SMS OTP for ticket cancellations or modifications.',
        'During late-night journeys, share your live travel details with trusted family members.'
      ],
      faqs: [
        {
          q: 'Do I need a personal IRCTC account to book railway tickets?',
          a: 'Yes, Indian Railways mandates a personal IRCTC user registration using your verified mobile number and email ID for online reservations.'
        },
        {
          q: 'Can I book rural state transport bus tickets online?',
          a: 'Yes, corporations like APSRTC and TSRTC offer online seat selection and UPI payments on their official portals (apsrtconline.in / tsrtconline.in).'
        },
        {
          q: 'What is a PNR number and where do I find it?',
          a: 'A PNR is a 10-digit unique Passenger Name Record printed at the top-left of your train reservation ticket. You can query its live confirmation status at any time on official railway enquiry portals.'
        }
      ],
      officialResources: [
        {
          name: 'IRCTC Official Railway Ticket Booking Portal',
          url: 'https://www.irctc.co.in/',
          desc: 'Official electronic ticketing portal of Indian Railway Catering and Tourism Corporation.'
        },
        {
          name: 'NTES (National Train Enquiry System)',
          url: 'https://enquiry.indianrail.gov.in/',
          desc: 'Official Indian Railways portal for live train tracking, schedule lookups, and platform announcements.'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'banking-atm']
    },
    hi: {
      title: 'डिजिटल सार्वजनिक परिवहन',
      tagline: 'बस और ट्रेन रूट, समय सारिणी और आधिकारिक टिकट बुकिंग',
      shortDesc: 'रोडवेज बसें, ट्रेन का समय, लाइव ट्रेन स्थिति, आधिकारिक बुकिंग ऐप और दलालों के धोखे से बचाव।',
      whyMatters: [
        'गांव के बस स्टैंड या रेलवे स्टेशन पर घंटों बेवजह इंतजार करने से बचा जा सकता है।',
        'सरकारी रोडवेज बसों और पैसेंजर ट्रेनों की सही समय सारिणी फोन पर ही देख सकते हैं।',
        'दलालों को अतिरिक्त कमीशन दिए बिना सरकारी तय किराए पर सीधे टिकट बुक कर सकते हैं।',
        'ट्रेन की लाइव लोकेशन (Live Running Status) देखकर सही समय पर स्टेशन पहुंचा जा सकता है।'
      ],
      stepGuide: [
        {
          step: 1,
          title: 'केवल आधिकारिक परिवहन पोर्टलों का उपयोग करें',
          desc: 'ट्रेन यात्रा के लिए केवल आधिकारिक IRCTC Rail Connect ऐप या irctc.co.in का उपयोग करें। बस यात्रा के लिए राज्य सड़क परिवहन निगम (RTC) की आधिकारिक वेबसाइट ही देखें।',
          tip: 'फर्जी टिकट बुकिंग लिंक और भारी कमीशन वसूलने वाले अनधिकृत एजेंटों से बचें।'
        },
        {
          step: 2,
          title: 'यात्रा मार्ग, तारीख और समय की खोज करें',
          desc: 'प्रस्थान स्टेशन और गंतव्य स्टेशन दर्ज करें। यात्रा की तारीख ध्यानपूर्वक चुनें।',
          tip: 'याद रखें कि रेलवे में 24 घंटे का समय (जैसे 22:15 यानी रात 10:15) दर्शाया जाता है।'
        },
        {
          step: 3,
          title: 'सीटों की उपलब्धता और किराया जांचें',
          desc: 'जनरल, स्लीपर या चेयर कार में उपलब्ध सीटों की जांच करें। यात्रियों के नाम और उम्र आधार कार्ड के अनुसार बिल्कुल सही भरें।',
          tip: 'वरिष्ठ नागरिकों और दिव्यांगों के लिए लागू नियमों की जांच करें।'
        },
        {
          step: 4,
          title: 'NTES से ट्रेन की लाइव स्थिति देखें',
          desc: 'राष्ट्रीय ट्रेन पूछताछ प्रणाली (enquiry.indianrail.gov.in) पर अपनी ट्रेन संख्या दर्ज करके देखें कि ट्रेन समय पर है या कितनी देरी से चल रही है।',
          tip: 'लाइव स्थिति नेटवर्क पर निर्भर होती है; स्टेशन पर पर्याप्त समय पहले पहुंचे।'
        },
        {
          step: 5,
          title: 'सत्यापित ई-टिकट और 10 अंकों का PNR सुरक्षित रखें',
          desc: 'असली ट्रेन टिकट पर हमेशा 10 अंकों का PNR नंबर और QR कोड होता है। टिकट रद्द होने पर रिफंड का पैसा सीधे आपके उसी बैंक खाते में वापस आता है।',
          tip: 'टिकट रिफंड के नाम पर कॉल करने वालों को कभी भी अपना बैंक ओटीपी न बताएं।'
        }
      ],
      commonMistakes: [
        {
          mistake: 'गूगल सर्च में दिखने वाली फर्जी वेबसाइटों पर तत्काल टिकट के नाम पर बैंक कार्ड विवरण भर देना।',
          correctAction: 'तत्काल टिकट केवल आधिकारिक IRCTC पोर्टल से ही बनते हैं। अन्य दावों से सावधान रहें।'
        },
        {
          mistake: 'ट्रेन या बस के समय में सुबह (AM) और रात (PM) में भ्रमित हो जाना।',
          correctAction: 'स्टेशन जाने से पहले प्रस्थान समय की अच्छी तरह जांच कर लें।'
        },
        {
          mistake: 'वेटिंग टिकट कन्फर्म हुआ या नहीं, यह जाने बिना यात्रा शुरू कर देना।',
          correctAction: 'यात्रा से पहले आधिकारिक पोर्टल पर अपना 10 अंकों का PNR स्टेटस अवश्य जांचें।'
        }
      ],
      safetyRules: [
        'यह वेबसाइट लाइव बस लोकेशन या टिकट उपलब्धता का निर्माण नहीं करती; केवल सही उपयोग सिखाती है।',
        'टिकट कैंसिलेशन या रिफंड के लिए किसी को भी अपना आईआरसीटीसी पासवर्ड या ओटीपी न बताएं।',
        'देर रात की यात्रा में अपने परिजनों के साथ ट्रेन/बस विवरण और लाइव लोकेशन साझा करें।'
      ],
      faqs: [
        {
          q: 'क्या ट्रेन टिकट बुक करने के लिए IRCTC आईडी जरूरी है?',
          a: 'हाँ, भारतीय रेलवे के नियमानुसार ऑनलाइन टिकट बुक करने के लिए IRCTC पर निःशुल्क आईडी बनाना अनिवार्य है।'
        },
        {
          q: 'क्या फोन से राज्य रोडवेज बस का टिकट बुक हो सकता है?',
          a: 'हाँ, अधिकांश राज्य परिवहन निगमों की आधिकारिक वेबसाइटों से यूपीआई द्वारा सुरक्षित बस टिकट बुक किए जा सकते हैं।'
        },
        {
          q: 'PNR नंबर क्या होता है और यह कहां मिलता है?',
          a: 'PNR (यात्री नाम रिकॉर्ड) आपके ट्रेन टिकट के ऊपर बाएं कोने पर लिखा 10 अंकों का विशिष्ट नंबर होता है, जिससे टिकट की पुष्टि स्थिति जांची जाती है।'
        }
      ],
      officialResources: [
        {
          name: 'IRCTC आधिकारिक रेलवे टिकट बुकिंग पोर्टल',
          url: 'https://www.irctc.co.in/',
          desc: 'भारतीय रेलवे खानपान एवं पर्यटन निगम का आधिकारिक ऑनलाइन टिकटिंग मंच।'
        },
        {
          name: 'NTES (राष्ट्रीय ट्रेन पूछताछ प्रणाली)',
          url: 'https://enquiry.indianrail.gov.in/',
          desc: 'ट्रेन के लाइव परिचालन समय और प्लेटफॉर्म की जानकारी के लिए आधिकारिक मंच।'
        }
      ],
      related: ['connectivity-networks', 'digital-payments', 'banking-atm']
    }
  }
];
