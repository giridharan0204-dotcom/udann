import { AppLanguage } from '../types';

export interface TranslationDictionary {
  appName: string;
  tagline: string;
  findNextStep: string;
  exploreOpportunities: string;
  myJourney: string;
  myNextStep: string;
  home: string;
  settings: string;
  builtAroundConstraints: string;
  freeFirst: string;
  lowData: string;
  mobileFriendly: string;
  actionFocused: string;
  heroHeadline: string;
  heroSubtitle: string;
  youAreHere: string;
  discover: string;
  learn: string;
  practice: string;
  build: string;
  apply: string;
  nextOpportunity: string;
  canIAffordThis: string;
  goodFitForYou: string;
  freeAlternative: string;
  demoDisclaimer: string;
  stepOf: string;
  back: string;
  continue: string;
  finish: string;
  editAnswers: string;
  clearFilters: string;
  noResultsFound: string;
  categories: {
    all: string;
    scholarships: string;
    jobs: string;
    internships: string;
    freeCourses: string;
    mentorship: string;
    skillPrograms: string;
  };
}

export const translations: Record<AppLanguage, TranslationDictionary> = {
  en: {
    appName: 'UDAAN',
    tagline: 'Your next opportunity starts here.',
    findNextStep: 'Find My Next Step',
    exploreOpportunities: 'Explore Opportunities',
    myJourney: 'My Journey',
    myNextStep: 'My Next Step',
    home: 'Home',
    settings: 'Accessibility & Settings',
    builtAroundConstraints: 'Built around real-world constraints',
    freeFirst: 'FREE-FIRST',
    lowData: 'LOW-DATA',
    mobileFriendly: 'MOBILE-FRIENDLY',
    actionFocused: 'ACTION-FOCUSED',
    heroHeadline: 'Your next opportunity starts here.',
    heroSubtitle: 'Find free or affordable ways to learn, build skills, and move closer to your career goal — based on what works for YOU.',
    youAreHere: 'YOU ARE HERE',
    discover: 'Discover',
    learn: 'Learn',
    practice: 'Practice',
    build: 'Build',
    apply: 'Apply',
    nextOpportunity: 'Your Next Opportunity',
    canIAffordThis: 'Can I Afford This?',
    goodFitForYou: 'GOOD FIT FOR YOU',
    freeAlternative: 'Looking for a free option?',
    demoDisclaimer: 'Demo opportunity — replace with verified local resources before production use.',
    stepOf: 'Step {current} of {total}',
    back: 'Back',
    continue: 'Continue',
    finish: 'Generate My Action Plan',
    editAnswers: 'Edit My Answers',
    clearFilters: 'Clear all filters',
    noResultsFound: 'No opportunities match your current filters.',
    categories: {
      all: 'All Categories',
      scholarships: '🎓 Scholarships',
      jobs: '💼 Jobs',
      internships: '🧑‍💻 Internships',
      freeCourses: '📚 Free Courses',
      mentorship: '🧑‍🏫 Mentorship',
      skillPrograms: '🛠️ Skill Programs',
    },
  },
  hi: {
    appName: 'उड़ान (UDAAN)',
    tagline: 'आपका अगला अवसर यहीं से शुरू होता है।',
    findNextStep: 'मेरा अगला कदम खोजें',
    exploreOpportunities: 'अवसर देखें',
    myJourney: 'मेरी यात्रा',
    myNextStep: 'मेरा अगला कदम',
    home: 'होम',
    settings: 'सेटिंग्स और सुगमता',
    builtAroundConstraints: 'आपकी वास्तविक परिस्थितियों के अनुसार निर्मित',
    freeFirst: 'निःशुल्क प्राथमिकता',
    lowData: 'कम डेटा उपयोग',
    mobileFriendly: 'मोबाइल अनुकूल',
    actionFocused: 'कार्रवाई केंद्रित',
    heroHeadline: 'आपका अगला अवसर यहीं से शुरू होता है।',
    heroSubtitle: 'सीखने, कौशल विकसित करने और अपने करियर लक्ष्य के करीब पहुंचने के मुफ्त और किफायती तरीके खोजें — जो आपके अनुकूल हों।',
    youAreHere: 'आप यहाँ हैं',
    discover: 'खोजें',
    learn: 'सीखें',
    practice: 'अभ्यास करें',
    build: 'प्रोजेक्ट बनाएं',
    apply: 'आवेदन करें',
    nextOpportunity: 'आपका अगला अवसर',
    canIAffordThis: 'क्या यह मेरे बजट में है?',
    goodFitForYou: 'आपके लिए उपयुक्त',
    freeAlternative: 'क्या आप मुफ्त विकल्प ढूंढ रहे हैं?',
    demoDisclaimer: 'डेमो अवसर — वास्तविक उपयोग से पहले स्थानीय संसाधनों से पुष्टि करें।',
    stepOf: 'चरण {current} / {total}',
    back: 'पीछे जाएं',
    continue: 'आगे बढ़ें',
    finish: 'मेरी कार्य योजना बनाएं',
    editAnswers: 'उत्तर बदलें',
    clearFilters: 'फ़िल्टर हटाएं',
    noResultsFound: 'फ़िल्टर के अनुसार कोई अवसर नहीं मिला।',
    categories: {
      all: 'सभी श्रेणियां',
      scholarships: '🎓 छात्रवृत्तियां',
      jobs: '💼 नौकरियां',
      internships: '🧑‍💻 इंटर्नशिप',
      freeCourses: '📚 मुफ्त कोर्स',
      mentorship: '🧑‍🏫 मेंटरशिप',
      skillPrograms: '🛠️ कौशल कार्यक्रम',
    },
  },
  ta: {
    appName: 'உடான் (UDAAN)',
    tagline: 'உங்கள் அடுத்த வாய்ப்பு இங்கிருந்து தொடங்குகிறது.',
    findNextStep: 'எனது அடுத்த கட்டத்தைக் கண்டுபிடி',
    exploreOpportunities: 'வாய்ப்புகளை ஆராயுங்கள்',
    myJourney: 'எனது பயணம்',
    myNextStep: 'எனது அடுத்த கட்டம்',
    home: 'முகப்பு',
    settings: 'அணுகல்தன்மை & அமைப்புகள்',
    builtAroundConstraints: 'நிஜ வாழ்க்கை சூழ்நிலைகளுக்கு ஏற்ப வடிவமைக்கப்பட்டது',
    freeFirst: 'இலவச முன்னுரிமை',
    lowData: 'குறைந்த இணைய பயன்பாடு',
    mobileFriendly: 'மொபைல் நட்பு',
    actionFocused: 'செயல்பாட்டு இலக்கு',
    heroHeadline: 'உங்கள் அடுத்த வாய்ப்பு இங்கிருந்து தொடங்குகிறது.',
    heroSubtitle: 'கற்கவும், திறன்களை வளர்க்கவும், உங்கள் இலக்கை அடையவும் இலவச அல்லது குறைந்த கட்டண வழிகளைக் கண்டறியுங்கள்.',
    youAreHere: 'நீங்கள் இங்கே இருக்கிறீர்கள்',
    discover: 'கண்டறியவும்',
    learn: 'கற்கவும்',
    practice: 'பயிற்சி செய்யவும்',
    build: 'உருவாக்கவும்',
    apply: 'விண்ணப்பிக்கவும்',
    nextOpportunity: 'உங்கள் அடுத்த வாய்ப்பு',
    canIAffordThis: 'இதை என்னால் பெற முடியுமா?',
    goodFitForYou: 'உங்களுக்கு பொருத்தமானது',
    freeAlternative: 'இலவச மாற்று வழியைத் தேடுகிறீர்களா?',
    demoDisclaimer: 'மாதிரி வாய்ப்பு — பயன்படுத்துவதற்கு முன் சரிபார்க்கவும்.',
    stepOf: 'படி {current} / {total}',
    back: 'பின்னே செல்',
    continue: 'தொடர்க',
    finish: 'எனது திட்டத்தை உருவாக்கு',
    editAnswers: 'பதில்களை மாற்று',
    clearFilters: 'வடிகட்டிகளை அழிக்கவும்',
    noResultsFound: 'பொருந்தும் வாய்ப்புகள் எதுவும் இல்லை.',
    categories: {
      all: 'அனைத்து பிரிவுகள்',
      scholarships: '🎓 கல்வி உதவித்தொகை',
      jobs: '💼 வேலைகள்',
      internships: '🧑‍💻 இன்டர்ன்ஷிப்',
      freeCourses: '📚 இலவச படிப்புகள்',
      mentorship: '🧑‍🏫 வழிகாட்டுதல்',
      skillPrograms: '🛠️ திறன் திட்டங்கள்',
    },
  },
};
