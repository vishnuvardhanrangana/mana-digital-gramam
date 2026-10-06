import { topicsData } from './src/data/topicsData.js';
import { uiTranslations } from './src/data/translations.js';
import { featuredGuides } from './src/data/guidesData.js';

console.log('--- STARTING VERIFICATION OF MANA DIGITAL GRAMAM ---');

let errors = [];

// 1. Verify UI Translations
console.log('\n[1] Checking Multilingual UI Translations...');
const languages = ['te', 'en', 'hi'];
const baseKeys = Object.keys(uiTranslations.te);

for (const lang of languages) {
  if (!uiTranslations[lang]) {
    errors.push(`Missing translations dictionary for '${lang}'`);
    continue;
  }
  const langKeys = Object.keys(uiTranslations[lang]);
  console.log(`  - Language '${lang}': ${langKeys.length} translation keys found.`);
  for (const key of baseKeys) {
    if (!uiTranslations[lang][key]) {
      errors.push(`Missing key '${key}' in '${lang}' dictionary.`);
    }
  }
}

// 2. Verify 8 Topics Content
console.log('\n[2] Checking 8 Topics Content Data...');
if (topicsData.length !== 8) {
  errors.push(`Expected 8 topics, but found ${topicsData.length}`);
} else {
  console.log(`  - Exactly 8 topics defined:`);
  topicsData.forEach((t, i) => {
    console.log(`    ${i + 1}. [${t.id}] ${t.te.title} | ${t.en.title} | ${t.hi.title}`);
  });
}

const requiredFieldsPerTopic = ['title', 'tagline', 'shortDesc', 'whyMatters', 'stepGuide', 'commonMistakes', 'safetyRules', 'faqs', 'officialResources'];

topicsData.forEach((topic) => {
  for (const lang of languages) {
    const content = topic[lang];
    if (!content) {
      errors.push(`Topic '${topic.id}' is missing content for language '${lang}'`);
      continue;
    }
    for (const field of requiredFieldsPerTopic) {
      if (!content[field]) {
        errors.push(`Topic '${topic.id}' in language '${lang}' is missing field '${field}'`);
      }
    }
    // Check steps
    if (!content.stepGuide || content.stepGuide.length === 0) {
      errors.push(`Topic '${topic.id}' in '${lang}' has 0 steps in stepGuide`);
    }
    // Check mistakes
    if (!content.commonMistakes || content.commonMistakes.length === 0) {
      errors.push(`Topic '${topic.id}' in '${lang}' has 0 commonMistakes`);
    }
    // Check faqs
    if (!content.faqs || content.faqs.length === 0) {
      errors.push(`Topic '${topic.id}' in '${lang}' has 0 FAQs`);
    }
  }

  // Check verified URL
  if (!topic.verifiedUrl || !topic.verifiedUrl.startsWith('http')) {
    errors.push(`Topic '${topic.id}' has invalid verifiedUrl: ${topic.verifiedUrl}`);
  }
});

// 3. Verify Featured Guides
console.log('\n[3] Checking Featured Guides...');
if (featuredGuides.length !== 3) {
  errors.push(`Expected 3 featured guides, found ${featuredGuides.length}`);
} else {
  featuredGuides.forEach((g) => {
    const topicExists = topicsData.some((t) => t.id === g.topicId);
    if (!topicExists) {
      errors.push(`Featured guide '${g.id}' points to non-existent topic '${g.topicId}'`);
    }
    console.log(`  - Guide '${g.id}' -> Links to valid topic '${g.topicId}'`);
  });
}

// 4. Test Search Filter Logic
console.log('\n[4] Testing Search Filter Engine...');
const testQueries = [
  { q: 'UPI', expectedTopic: 'digital-payments' },
  { q: 'చెల్లింపులు', expectedTopic: 'digital-payments' },
  { q: 'వ్యవసాయం', expectedTopic: 'digital-farming' },
  { q: 'farming', expectedTopic: 'digital-farming' },
  { q: 'ఆరోగ్యం', expectedTopic: 'online-healthcare' },
  { q: 'health', expectedTopic: 'online-healthcare' },
  { q: 'ATM', expectedTopic: 'banking-atm' },
  { q: 'బస్సు', expectedTopic: 'public-transport' },
  { q: 'bus', expectedTopic: 'public-transport' },
];

for (const test of testQueries) {
  const matches = topicsData.filter((topic) => {
    const teMatch = topic.te.title.toLowerCase().includes(test.q.toLowerCase()) || 
                    topic.te.shortDesc.toLowerCase().includes(test.q.toLowerCase());
    const enMatch = topic.en.title.toLowerCase().includes(test.q.toLowerCase()) || 
                    topic.en.shortDesc.toLowerCase().includes(test.q.toLowerCase());
    return teMatch || enMatch;
  });
  const hasExpected = matches.some((m) => m.id === test.expectedTopic);
  if (!hasExpected) {
    errors.push(`Search query '${test.q}' failed to match '${test.expectedTopic}'`);
  } else {
    console.log(`  ✓ Search query '${test.q}' correctly found '${test.expectedTopic}'`);
  }
}

// 5. Check Live HTTP Server Response
console.log('\n[5] Checking HTTP Server at http://localhost:5173/...');
try {
  const response = await fetch('http://localhost:5173/');
  if (response.status === 200) {
    const html = await response.text();
    const hasRoot = html.includes('id="root"');
    const hasTitle = html.includes('Mana Digital Gramam');
    console.log(`  ✓ HTTP Server returned 200 OK`);
    console.log(`  ✓ HTML contains root div: ${hasRoot}`);
    console.log(`  ✓ HTML contains title: ${hasTitle}`);
    if (!hasRoot || !hasTitle) {
      errors.push('HTTP response HTML missing essential root or title');
    }
  } else {
    errors.push(`HTTP Server returned status ${response.status}`);
  }
} catch (err) {
  errors.push(`Failed to connect to http://localhost:5173/: ${err.message}`);
}

console.log('\n=======================================');
if (errors.length === 0) {
  console.log('✅ ALL VERIFICATION TESTS PASSED SUCCESSFULLY! (0 errors)');
} else {
  console.error(`❌ FOUND ${errors.length} ERRORS:`);
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}
