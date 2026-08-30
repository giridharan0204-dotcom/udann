import { AppLanguage } from '../types';

export interface TranslationDictionary {
  appName: string;
  tagline: string;
  home: string;
  myNextStep: string;
  exploreOpportunities: string;
  myJourney: string;
  settings: string;
  findNextStep: string;
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
  nav: {
    home: string;
    myNextStep: string;
    explore: string;
    myJourney: string;
    settingsAndSize: string;
    logOut: string;
    account: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    findStepBtn: string;
    viewRoadmapBtn: string;
    exploreBtn: string;
    freeFirstTitle: string;
    freeFirstDesc: string;
    lowDataTitle: string;
    lowDataDesc: string;
    mobileTitle: string;
    mobileDesc: string;
    actionTitle: string;
    actionDesc: string;
    verifiedOppCount: string;
    zeroCostRatio: string;
    dataFriendlyRate: string;
    pauseVideo: string;
    playVideo: string;
    hideVideo: string;
    showVideo: string;
    cardHighlight: string;
  };
  auth: {
    welcomeBack: string;
    createAccount: string;
    resetPassword: string;
    welcomeDesc: string;
    createDesc: string;
    resetDesc: string;
    emailLabel: string;
    passwordLabel: string;
    fullNameLabel: string;
    confirmPasswordLabel: string;
    forgotPassword: string;
    signInBtn: string;
    signingIn: string;
    signUpBtn: string;
    creatingAccount: string;
    sendResetLink: string;
    sending: string;
    backToSignIn: string;
    demoLoginBtn: string;
    demoLoginSub: string;
    orContinueWith: string;
    googleBtn: string;
    termsNotice: string;
    privacyNotice: string;
  };
  roadmap: {
    badge: string;
    actionPlanTitle: string;
    personalizedFor: string;
    immediateNextStep: string;
    whyFitsLabel: string;
    whyFitsDesc: string;
    markCompleted: string;
    completed: string;
    openOfficial: string;
    saveOffline: string;
    downloadedNotice: string;
    allStages: string;
    stageLabel: string;
    weekLabel: string;
    keyOutcome: string;
    minutes: string;
    costFree: string;
    costLow: string;
    lowDataReq: string;
    normalDataReq: string;
    realityCheck: string;
    budgetReady: string;
    deviceReady: string;
    dataReady: string;
    timeReady: string;
    allChecksPass: string;
    noPlanYet: string;
    noPlanDesc: string;
    startDiagnostic: string;
    editAnswers: string;
    progressSummary: string;
  };
  journey: {
    title: string;
    subtitle: string;
    overallProgress: string;
    milestoneMap: string;
    savedOpportunities: string;
    appliedOpportunities: string;
    notesTitle: string;
    notesPlaceholder: string;
    saveNote: string;
    emptySaved: string;
    emptyApplied: string;
    exploreBtn: string;
    viewRoadmapBtn: string;
    appliedBadge: string;
    bookmarkedBadge: string;
  };
  explorer: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterLabel: string;
    allCategories: string;
    scholarships: string;
    jobs: string;
    internships: string;
    freeCourses: string;
    mentorship: string;
    costAll: string;
    costFree: string;
    costPaid: string;
    dataAll: string;
    dataLow: string;
    mobileOnly: string;
    goodFitOnly: string;
    resetFilters: string;
    showingResults: string;
    noResults: string;
  };
  card: {
    goodFit: string;
    potentialFit: string;
    mayNotFit: string;
    freeAlternative: string;
    freeAlternativePrompt: string;
    checkAffordability: string;
    applyNow: string;
    bookmarked: string;
    bookmark: string;
    applied: string;
    markApplied: string;
    viewDetails: string;
    hideDetails: string;
    eligibility: string;
    skillsTaught: string;
    howToApply: string;
    deadline: string;
    lowData: string;
    mobileFriendly: string;
    free: string;
  };
  onboarding: {
    modalTitle: string;
    step1Title: string;
    step1Subtitle: string;
    step2Title: string;
    step2Subtitle: string;
    step3Title: string;
    step3Subtitle: string;
    step4Title: string;
    step4Subtitle: string;
    goalFirstJob: string;
    goalFirstJobDesc: string;
    goalNewSkill: string;
    goalNewSkillDesc: string;
    goalInternship: string;
    goalInternshipDesc: string;
    goalScholarship: string;
    goalScholarshipDesc: string;
    goalFreelancing: string;
    goalFreelancingDesc: string;
    goalEducation: string;
    goalEducationDesc: string;
    levelBeginner: string;
    levelBeginnerDesc: string;
    levelSomeBasics: string;
    levelSomeBasicsDesc: string;
    levelIntermediate: string;
    levelIntermediateDesc: string;
    devicePhone: string;
    devicePhoneDesc: string;
    deviceSharedPhone: string;
    deviceSharedPhoneDesc: string;
    deviceLaptop: string;
    deviceLaptopDesc: string;
    deviceCafe: string;
    deviceCafeDesc: string;
    budgetZero: string;
    budgetZeroDesc: string;
    budget500: string;
    budget500Desc: string;
    budget2000: string;
    budget2000Desc: string;
    budgetFlexible: string;
    budgetFlexibleDesc: string;
    dataLimited: string;
    dataLimitedDesc: string;
    data15GB: string;
    data15GBDesc: string;
    dataWifi: string;
    dataWifiDesc: string;
    hours1: string;
    hours2: string;
    hours4: string;
    hours5Plus: string;
    btnBack: string;
    btnNext: string;
    btnFinish: string;
  };
  settingsModal: {
    title: string;
    subtitle: string;
    textSize: string;
    textSizeNormal: string;
    textSizeLarge: string;
    textSizeXLarge: string;
    language: string;
    highContrast: string;
    highContrastDesc: string;
    lowData: string;
    lowDataDesc: string;
    reducedMotion: string;
    reducedMotionDesc: string;
    closeBtn: string;
    signedInAs: string;
    logOut: string;
  };
  affordability: {
    title: string;
    overallFit: string;
    budgetCheck: string;
    dataCheck: string;
    timeCheck: string;
    deviceCheck: string;
    freeAlternativeTitle: string;
    exploreFreeAlt: string;
    closeBtn: string;
  };
  footer: {
    tagline: string;
    mission: string;
    navigation: string;
    trustAndAccessibility: string;
    aboutUs: string;
    privacy: string;
    accessibilitySettings: string;
    builtForDignity: string;
    allRightsReserved: string;
    disclaimer: string;
  };
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
    nav: {
      home: 'Home',
      myNextStep: 'My Next Step',
      explore: 'Explore Opportunities',
      myJourney: 'My Journey',
      settingsAndSize: 'Settings & Text Size',
      logOut: 'Log Out',
      account: 'Account',
    },
    hero: {
      badge: 'YOU ARE HERE → DISCOVER → LEARN → OPPORTUNITY',
      title: 'Your next opportunity starts here.',
      subtitle: 'Tell us where you are and where you want to go. We will help you find your next step — without expensive fees, confusing jargon, or impossible prerequisites.',
      findStepBtn: 'Find My Next Step',
      viewRoadmapBtn: 'View My Action Plan',
      exploreBtn: 'Explore Opportunities',
      freeFirstTitle: '100% Free First',
      freeFirstDesc: 'Prioritizing zero-cost, government-backed, and verified open-access pathways before paid alternatives.',
      lowDataTitle: 'Low Data & Offline',
      lowDataDesc: 'Engineered for 2G/3G speeds and daily mobile data caps with lightweight summaries.',
      mobileTitle: 'Smartphone Ready',
      mobileDesc: 'Every resource is fully usable on a basic phone without requiring a PC or laptop.',
      actionTitle: 'Action-Focused',
      actionDesc: 'No vague lists. Get 1 clear immediate task and a step-by-step milestone plan.',
      verifiedOppCount: 'Verified Free Pathways',
      zeroCostRatio: 'Zero-Cost Priority',
      dataFriendlyRate: 'Low-Data Compatible',
      pauseVideo: 'Pause background video',
      playVideo: 'Play background video',
      hideVideo: 'Hide video (Save Data)',
      showVideo: 'Show video',
      cardHighlight: 'Personalized Next Step',
    },
    auth: {
      welcomeBack: 'Welcome back to UDAAN',
      createAccount: 'Create your free account',
      resetPassword: 'Reset your password',
      welcomeDesc: 'Sign in to access your saved roadmaps, bookmarks, and progress.',
      createDesc: 'Sign up in seconds to start building your personalized career plan.',
      resetDesc: 'Enter your email address to receive password recovery instructions.',
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      fullNameLabel: 'Full Name',
      confirmPasswordLabel: 'Confirm Password',
      forgotPassword: 'Forgot Password?',
      signInBtn: 'Sign In & Continue Journey',
      signingIn: 'Signing In...',
      signUpBtn: 'Create Account & Start',
      creatingAccount: 'Creating Account...',
      sendResetLink: 'Send Password Reset Link',
      sending: 'Sending...',
      backToSignIn: 'Back to Sign In',
      demoLoginBtn: 'Instant Demo Access (No Password)',
      demoLoginSub: 'Explore all features immediately as a demo user',
      orContinueWith: 'Or continue with email',
      googleBtn: 'Continue with Google',
      termsNotice: 'By continuing, you agree to UDAAN\'s community accessibility principles.',
      privacyNotice: 'Your profile constraints remain strictly private on your device.',
    },
    roadmap: {
      badge: 'PERSONALIZED ACTION PLAN',
      actionPlanTitle: 'My Next Step & Action Sequence',
      personalizedFor: 'Personalized Plan',
      immediateNextStep: 'YOUR IMMEDIATE NEXT STEP',
      whyFitsLabel: 'WHY THIS FITS YOUR SITUATION',
      whyFitsDesc: 'Free, works on phone, low data, and fits your schedule.',
      markCompleted: 'Mark as Completed',
      completed: 'Completed ✓',
      openOfficial: 'Open Free Learning Portal',
      saveOffline: 'Save Plan Offline (.txt)',
      downloadedNotice: 'Plan downloaded for offline reading!',
      allStages: 'Full Action Sequence',
      stageLabel: 'Stage',
      weekLabel: 'Week',
      keyOutcome: 'Key Milestone',
      minutes: 'min',
      costFree: 'FREE',
      costLow: 'LOW COST',
      lowDataReq: 'LOW DATA',
      normalDataReq: 'NORMAL DATA',
      realityCheck: '4-Point Reality Check',
      budgetReady: 'Budget matches: ₹0 needed',
      deviceReady: 'Device matches: 100% Mobile',
      dataReady: 'Data matches: Low-data compatible',
      timeReady: 'Time matches: Fits daily schedule',
      allChecksPass: 'All 4 constraint checks passed for your profile!',
      noPlanYet: 'No Active Action Plan Yet',
      noPlanDesc: 'Complete our quick diagnostic navigator to find your personalized, constraint-aware next step.',
      startDiagnostic: 'Find My Next Step',
      editAnswers: 'Update My Profile & Answers',
      progressSummary: 'Progress across all roadmap milestones',
    },
    journey: {
      title: 'My Journey & Progress',
      subtitle: 'Track your completed milestones, saved opportunities, and personal study notes.',
      overallProgress: 'Overall Journey Progress',
      milestoneMap: 'Signature Milestone Stages',
      savedOpportunities: 'Bookmarked Opportunities',
      appliedOpportunities: 'Applied Pathways',
      notesTitle: 'Personal Notes & Checklist',
      notesPlaceholder: 'Write your notes, study reminders, or application IDs here...',
      saveNote: 'Save Note',
      emptySaved: 'No bookmarked opportunities yet. Explore and bookmark items that fit your goals.',
      emptyApplied: 'No applications tracked yet. When you apply to a scholarship or course, mark it as applied.',
      exploreBtn: 'Explore Opportunities',
      viewRoadmapBtn: 'View Action Plan',
      appliedBadge: 'Applied',
      bookmarkedBadge: 'Saved',
    },
    explorer: {
      title: 'Explore Verified Opportunities',
      subtitle: 'Browse 100% verified scholarships, free courses, jobs, and mentorship programs with upfront cost and data requirements.',
      searchPlaceholder: 'Search by title, skill, or keyword (e.g. Python, Scholarship, Hindi)...',
      filterLabel: 'Filter By Category',
      allCategories: 'All Opportunities',
      scholarships: 'Scholarships',
      jobs: 'Jobs',
      internships: 'Internships',
      freeCourses: 'Free Courses',
      mentorship: 'Mentorship',
      costAll: 'All Costs',
      costFree: '100% Free Only',
      costPaid: 'Affordable / Paid',
      dataAll: 'All Data Speeds',
      dataLow: 'Low Data Only (Text/Audio)',
      mobileOnly: 'Mobile Only',
      goodFitOnly: 'Good Fit for Me Only',
      resetFilters: 'Reset all filters',
      showingResults: 'Showing {count} verified opportunities',
      noResults: 'No opportunities match your current filters.',
    },
    card: {
      goodFit: 'GOOD FIT FOR YOU',
      potentialFit: 'POTENTIAL FIT',
      mayNotFit: 'MAY NOT FIT',
      freeAlternative: 'Free Alternative Available',
      freeAlternativePrompt: 'Looking for a 100% free option?',
      checkAffordability: 'Can I Afford This?',
      applyNow: 'Open Portal',
      bookmarked: 'Saved',
      bookmark: 'Save',
      applied: 'Applied',
      markApplied: 'Mark as Applied',
      viewDetails: 'View Details',
      hideDetails: 'Hide Details',
      eligibility: 'Eligibility',
      skillsTaught: 'Skills Taught',
      howToApply: 'How to Apply',
      deadline: 'Deadline',
      lowData: 'Low Data',
      mobileFriendly: 'Mobile Ready',
      free: 'FREE',
    },
    onboarding: {
      modalTitle: 'Find My Next Step — Diagnostic',
      step1Title: 'What is your primary goal right now?',
      step1Subtitle: 'Choose the main milestone you want to reach next.',
      step2Title: 'What is your current experience level?',
      step2Subtitle: 'We will match learning steps starting from your level.',
      step3Title: 'What device do you use most?',
      step3Subtitle: 'We ensure all recommendations work seamlessly on your equipment.',
      step4Title: 'What are your practical constraints?',
      step4Subtitle: 'Budget, daily hours, and internet connection limits.',
      goalFirstJob: 'Get My First Job',
      goalFirstJobDesc: 'Entry-level jobs and practical work-ready training.',
      goalNewSkill: 'Learn a In-Demand Skill',
      goalNewSkillDesc: 'Practical tech, design, data, or vocational skills.',
      goalInternship: 'Find an Internship',
      goalInternshipDesc: 'Real-world workplace experience with stipend options.',
      goalScholarship: 'Apply for a Scholarship',
      goalScholarshipDesc: 'Financial aid and fee waivers for your studies.',
      goalFreelancing: 'Start Freelancing / Earning',
      goalFreelancingDesc: 'Online tasks, client projects, and independent income.',
      goalEducation: 'Continue Education',
      goalEducationDesc: 'Diploma, degree, or open-university programs.',
      levelBeginner: 'Complete Beginner (Zero Background)',
      levelBeginnerDesc: 'No prior knowledge needed. Step-by-step from zero.',
      levelSomeBasics: 'Know Some Basics',
      levelSomeBasicsDesc: 'Have tried tutorials or elementary school basics.',
      levelIntermediate: 'Intermediate / Ready for Projects',
      levelIntermediateDesc: 'Looking for portfolios, mentorship, and applications.',
      devicePhone: 'Basic Smartphone (Android)',
      devicePhoneDesc: 'All materials will be lightweight, readable, and mobile-friendly.',
      deviceSharedPhone: 'Shared Family Phone',
      deviceSharedPhoneDesc: 'Short micro-tasks designed for 30-minute intervals.',
      deviceLaptop: 'Personal Laptop / PC',
      deviceLaptopDesc: 'Access to full development tools and software suites.',
      deviceCafe: 'Cyber Café / Library Access',
      deviceCafeDesc: 'Tasks you can prepare offline and execute during cafe sessions.',
      budgetZero: '₹0 (100% Free Only)',
      budgetZeroDesc: 'Strictly zero fees. Government & philanthropic resources.',
      budget500: 'Under ₹500 / month',
      budget500Desc: 'Small budget for exam fees or study books if required.',
      budget2000: 'Under ₹2,000 / month',
      budget2000Desc: 'Flexible for certification exams or specialized bootcamps.',
      budgetFlexible: 'Flexible Budget',
      budgetFlexibleDesc: 'Open to paid programs if quality is high.',
      dataLimited: 'Limited Data (< 500MB / day)',
      dataLimitedDesc: 'Text-first, audio summaries, and downloadable PDFs.',
      data15GB: 'Daily Mobile Pack (1.5GB / day)',
      data15GBDesc: 'Streaming videos in 360p/480p and online quizzes.',
      dataWifi: 'Unlimited Wi-Fi',
      dataWifiDesc: 'Full HD video courses and large downloads.',
      hours1: '1 Hour / Day',
      hours2: '2 Hours / Day',
      hours4: '3–4 Hours / Day',
      hours5Plus: '5+ Hours / Day',
      btnBack: 'Back',
      btnNext: 'Continue',
      btnFinish: 'Generate My Action Plan',
    },
    settingsModal: {
      title: 'Accessibility & Settings',
      subtitle: 'Customize reading font size, language, and low-data modes.',
      textSize: 'Reading Text Size',
      textSizeNormal: 'Normal (Standard)',
      textSizeLarge: 'Large (Comfort)',
      textSizeXLarge: 'Extra Large (High Legibility)',
      language: 'Application Language',
      highContrast: 'High Contrast Mode',
      highContrastDesc: 'Increases border clarity and deep black text contrast.',
      lowData: 'Low Data Mode',
      lowDataDesc: 'Disables background videos and minimizes image loading.',
      reducedMotion: 'Reduced Motion',
      reducedMotionDesc: 'Disables animations for smooth performance on budget phones.',
      closeBtn: 'Save & Close',
      signedInAs: 'Signed in as',
      logOut: 'Log Out',
    },
    affordability: {
      title: 'Can I Afford This Opportunity?',
      overallFit: 'Constraint Compatibility Check',
      budgetCheck: 'Financial Cost',
      dataCheck: 'Data & Bandwidth',
      timeCheck: 'Time Commitment',
      deviceCheck: 'Device Compatibility',
      freeAlternativeTitle: '100% Free Alternative Available',
      exploreFreeAlt: 'Explore Free Option Instead',
      closeBtn: 'Close Assessment',
    },
    footer: {
      tagline: 'Your next opportunity starts here.',
      mission: 'A free-first, low-bandwidth, and constraint-aware career navigator designed specifically for ambitious youth with limited financial resources and internet access.',
      navigation: 'Navigation',
      trustAndAccessibility: 'Trust & Accessibility',
      aboutUs: 'About UDAAN & Methodology',
      privacy: 'Privacy & Data Protection',
      accessibilitySettings: 'Accessibility Settings',
      builtForDignity: 'BUILT FOR INCLUSIVE OPPORTUNITY & DIGNITY',
      allRightsReserved: '© 2026 UDAAN Opportunity Navigator. All rights reserved.',
      disclaimer: 'All opportunities are verified against official government and non-profit portals.',
    },
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
    nav: {
      home: 'होम',
      myNextStep: 'मेरा अगला कदम',
      explore: 'अवसर देखें',
      myJourney: 'मेरी यात्रा',
      settingsAndSize: 'सेटिंग्स व फ़ॉन्ट आकार',
      logOut: 'लॉग आउट',
      account: 'खाता',
    },
    hero: {
      badge: 'आप यहाँ हैं → खोजें → सीखें → अवसर',
      title: 'आपका अगला अवसर यहीं से शुरू होता है।',
      subtitle: 'हमें बताएं कि आप अभी कहाँ हैं और कहाँ पहुँचना चाहते हैं। हम आपको बिना किसी महँगी फ़ीस, कठिन भाषा या रुकावटों के आपका अगला सही कदम खोजने में मदद करेंगे।',
      findStepBtn: 'मेरा अगला कदम खोजें',
      viewRoadmapBtn: 'मेरी कार्य योजना देखें',
      exploreBtn: 'सत्यापित अवसर देखें',
      freeFirstTitle: '100% निःशुल्क प्राथमिकता',
      freeFirstDesc: 'सशुल्क विकल्पों से पहले शून्य-लागत, सरकारी और सत्यापित ओपन-एक्सेस रास्तों को प्राथमिकता।',
      lowDataTitle: 'कम डेटा और ऑफ़लाइन',
      lowDataDesc: '2जी/3जी स्पीड और सीमित दैनिक मोबाइल डेटा पैक के अनुकूल हल्का व तेज़ प्लेटफ़ॉर्म।',
      mobileTitle: 'मोबाइल पर पूर्ण रूप से सुलभ',
      mobileDesc: 'प्रत्येक संसाधन बेसिक स्मार्टफ़ोन पर आसानी से चलेगा, कंप्यूटर की अनिवार्यता नहीं।',
      actionTitle: 'कार्रवाई केंद्रित योजना',
      actionDesc: 'भ्रमित करने वाली लंबी सूचियों के बजाय तुरंत करने योग्य 1 स्पष्ट कार्य और चरणबद्ध रोडमैप।',
      verifiedOppCount: 'सत्यापित निःशुल्क रास्ते',
      zeroCostRatio: 'निःशुल्क प्राथमिकता',
      dataFriendlyRate: 'कम डेटा अनुकूल',
      pauseVideo: 'वीडियो रोकें',
      playVideo: 'वीडियो चलाएं',
      hideVideo: 'वीडियो छिपाएं (डेटा बचाएं)',
      showVideo: 'वीडियो दिखाएं',
      cardHighlight: 'व्यक्तिगत अगला कदम',
    },
    auth: {
      welcomeBack: 'उड़ान (UDAAN) में आपका स्वागत है',
      createAccount: 'अपना निःशुल्क खाता बनाएं',
      resetPassword: 'पासवर्ड रीसेट करें',
      welcomeDesc: 'अपने सहेजे गए रोडमैप, बुकमार्क और प्रगति को देखने के लिए साइन इन करें।',
      createDesc: 'अपनी व्यक्तिगत करियर योजना तुरंत शुरू करने के लिए निःशुल्क खाता बनाएं।',
      resetDesc: 'पासवर्ड रीसेट लिंक प्राप्त करने के लिए अपना ईमेल दर्ज करें।',
      emailLabel: 'ईमेल पता',
      passwordLabel: 'पासवर्ड',
      fullNameLabel: 'पूरा नाम',
      confirmPasswordLabel: 'पासवर्ड की पुष्टि करें',
      forgotPassword: 'पासवर्ड भूल गए?',
      signInBtn: 'साइन इन करें और आगे बढ़ें',
      signingIn: 'साइन इन हो रहा है...',
      signUpBtn: 'खाता बनाएं और शुरू करें',
      creatingAccount: 'खाता बन रहा है...',
      sendResetLink: 'रीसेट लिंक भेजें',
      sending: 'भेजा जा रहा है...',
      backToSignIn: 'साइन इन पर वापस जाएं',
      demoLoginBtn: 'त्वरित डेमो प्रवेश (बिना पासवर्ड)',
      demoLoginSub: 'डेमो उपयोगकर्ता के रूप में सभी सुविधाओं का तुरंत अनुभव लें',
      orContinueWith: 'या ईमेल द्वारा आगे बढ़ें',
      googleBtn: 'Google के साथ जारी रखें',
      termsNotice: 'आगे बढ़कर, आप उड़ान के सुगमता और समुदाय सिद्धांतों से सहमत होते हैं।',
      privacyNotice: 'आपकी प्रोफ़ाइल जानकारी आपके उपकरण पर सुरक्षित और निजी रहती है।',
    },
    roadmap: {
      badge: 'व्यक्तिगत कार्य योजना',
      actionPlanTitle: 'मेरा अगला कदम और रोडमैप',
      personalizedFor: 'व्यक्तिगत योजना',
      immediateNextStep: 'आपका तुरंत करने योग्य अगला कदम',
      whyFitsLabel: 'यह आपके अनुकूल क्यों है',
      whyFitsDesc: 'मुफ़्त, मोबाइल अनुकूल, कम डेटा उपयोग और आपके दैनिक समय के अनुसार।',
      markCompleted: 'पूर्ण चिह्नित करें',
      completed: 'पूर्ण ✓',
      openOfficial: 'मुफ़्त लर्निंग पोर्टल खोलें',
      saveOffline: 'ऑफ़लाइन सेव करें (.txt)',
      downloadedNotice: 'ऑफ़लाइन पढ़ने के लिए योजना डाउनलोड हो गई!',
      allStages: 'सम्पूर्ण 4-चरणीय कार्य योजना',
      stageLabel: 'चरण',
      weekLabel: 'सप्ताह',
      keyOutcome: 'मुख्य उपलब्धि',
      minutes: 'मिनट',
      costFree: 'निःशुल्क',
      costLow: 'किफायती',
      lowDataReq: 'कम डेटा',
      normalDataReq: 'सामान्य डेटा',
      realityCheck: '4-बिंदु वास्तविकता परीक्षण',
      budgetReady: 'बजट अनुकूल: ₹0 आवश्यक',
      deviceReady: 'उपकरण अनुकूल: 100% मोबाइल',
      dataReady: 'डेटा अनुकूल: कम इंटरनेट उपयोग',
      timeReady: 'समय अनुकूल: दैनिक कार्यक्रम अनुसार',
      allChecksPass: 'आपकी प्रोफ़ाइल के लिए सभी 4 परीक्षण सफल रहे!',
      noPlanYet: 'अभी कोई सक्रिय योजना नहीं है',
      noPlanDesc: 'अपना व्यक्तिगत अगला कदम पाने के लिए हमारे त्वरित नैदानिक सवाल पूरे करें।',
      startDiagnostic: 'मेरा अगला कदम खोजें',
      editAnswers: 'उत्तर बदलें / प्रोफ़ाइल अपडेट करें',
      progressSummary: 'रोडमैप के सभी पड़ावों की कुल प्रगति',
    },
    journey: {
      title: 'मेरी यात्रा और प्रगति',
      subtitle: 'अपने पूर्ण किए गए पड़ावों, सहेजे गए अवसरों और अध्ययन नोट्स को ट्रैक करें।',
      overallProgress: 'कुल यात्रा प्रगति',
      milestoneMap: 'हस्ताक्षर पड़ाव चरण',
      savedOpportunities: 'सहेजे गए (बुकमार्क) अवसर',
      appliedOpportunities: 'आवेदित रास्ते',
      notesTitle: 'व्यक्तिगत नोट्स और चेकलिस्ट',
      notesPlaceholder: 'यहाँ अपने अध्ययन नोट्स, महत्वपूर्ण बिंदु या आवेदन संख्या लिखें...',
      saveNote: 'नोट सेव करें',
      emptySaved: 'अभी कोई अवसर सहेजा नहीं गया है। अवसर देखें और अपने लक्ष्य अनुसार सहेजें।',
      emptyApplied: 'अभी कोई आवेदन ट्रैक नहीं किया गया है। आवेदन करने पर यहाँ चिह्नित करें।',
      exploreBtn: 'अवसर देखें',
      viewRoadmapBtn: 'कार्य योजना देखें',
      appliedBadge: 'आवेदित',
      bookmarkedBadge: 'सहेजा गया',
    },
    explorer: {
      title: 'सत्यापित अवसर खोजें',
      subtitle: '100% सत्यापित छात्रवृत्तियां, मुफ्त कोर्स, नौकरियां और मेंटरशिप कार्यक्रम खोजें।',
      searchPlaceholder: 'शीर्षक, कौशल या कीवर्ड द्वारा खोजें (उदा. पायथन, छात्रवृत्ति, हिंदी)...',
      filterLabel: 'श्रेणी के अनुसार फ़िल्टर',
      allCategories: 'सभी अवसर',
      scholarships: 'छात्रवृत्तियां',
      jobs: 'नौकरियां',
      internships: 'इंटर्नशिप',
      freeCourses: 'मुफ्त कोर्स',
      mentorship: 'मेंटरशिप',
      costAll: 'सभी लागत',
      costFree: '100% केवल मुफ्त',
      costPaid: 'किफायती / सशुल्क',
      dataAll: 'सभी डेटा स्पीड',
      dataLow: 'केवल कम डेटा (टेक्स्ट/ऑडियो)',
      mobileOnly: 'केवल मोबाइल अनुकूल',
      goodFitOnly: 'केवल मेरे लिए उपयुक्त',
      resetFilters: 'फ़िल्टर हटाएं',
      showingResults: '{count} सत्यापित अवसर प्रदर्शित',
      noResults: 'फ़िल्टर के अनुसार कोई अवसर नहीं मिला।',
    },
    card: {
      goodFit: 'आपके लिए उपयुक्त',
      potentialFit: 'संभावित विकल्प',
      mayNotFit: 'शायद अनुकूल नहीं',
      freeAlternative: 'मुफ्त विकल्प उपलब्ध',
      freeAlternativePrompt: 'क्या आप 100% मुफ्त विकल्प चाहते हैं?',
      checkAffordability: 'क्या यह मेरे बजट में है?',
      applyNow: 'पोर्टल खोलें',
      bookmarked: 'सहेजा गया',
      bookmark: 'सहेजें',
      applied: 'आवेदित',
      markApplied: 'आवेदित चिह्नित करें',
      viewDetails: 'विवरण देखें',
      hideDetails: 'विवरण छिपाएं',
      eligibility: 'पात्रता',
      skillsTaught: 'सिखाए जाने वाले कौशल',
      howToApply: 'आवेदन कैसे करें',
      deadline: 'अंतिम तिथि',
      lowData: 'कम डेटा',
      mobileFriendly: 'मोबाइल अनुकूल',
      free: 'निःशुल्क',
    },
    onboarding: {
      modalTitle: 'मेरा अगला कदम खोजें — नैदानिक प्रश्न',
      step1Title: 'इस समय आपका मुख्य लक्ष्य क्या है?',
      step1Subtitle: 'वह मुख्य पड़ाव चुनें जिसे आप हासिल करना चाहते हैं।',
      step2Title: 'आपका वर्तमान अनुभव स्तर क्या है?',
      step2Subtitle: 'हम आपके स्तर से शुरू होने वाले सीखने के चरणों का मिलान करेंगे।',
      step3Title: 'आप सबसे अधिक किस उपकरण का उपयोग करते हैं?',
      step3Subtitle: 'हम सुनिश्चित करते हैं कि सभी सिफारिशें आपके उपकरण पर सही चलें।',
      step4Title: 'आपकी व्यावहारिक सीमाएं क्या हैं?',
      step4Subtitle: 'बजट, दैनिक समय और इंटरनेट डेटा की सीमाएं।',
      goalFirstJob: 'मेरी पहली नौकरी प्राप्त करना',
      goalFirstJobDesc: 'प्रारंभिक स्तर की नौकरियां और व्यावहारिक प्रशिक्षण।',
      goalNewSkill: 'मांग वाला कौशल सीखना',
      goalNewSkillDesc: 'प्रौद्योगिकी, डिज़ाइन, डेटा या व्यावसायिक कौशल।',
      goalInternship: 'इंटर्नशिप खोजना',
      goalInternshipDesc: 'स्टाइपेंड के साथ वास्तविक कार्य अनुभव।',
      goalScholarship: 'छात्रवृत्ति के लिए आवेदन',
      goalScholarshipDesc: 'शिक्षा के लिए वित्तीय सहायता और शुल्क छूट।',
      goalFreelancing: 'फ़्रीलांसिंग / स्वतंत्र कमाई',
      goalFreelancingDesc: 'ऑनलाइन प्रोजेक्ट और स्वतंत्र आय।',
      goalEducation: 'शिक्षा जारी रखना',
      goalEducationDesc: 'डिप्लोमा, डिग्री या दूरस्थ शिक्षा कार्यक्रम।',
      levelBeginner: 'पूर्ण शुरुआती (शून्य अनुभव)',
      levelBeginnerDesc: 'शुरुआत से चरणबद्ध मार्गदर्शन।',
      levelSomeBasics: 'थोड़ी बुनियादी समझ है',
      levelSomeBasicsDesc: 'पहले कुछ बुनियादी बातें सीखी हैं।',
      levelIntermediate: 'मध्यम स्तर / प्रोजेक्ट्स के लिए तैयार',
      levelIntermediateDesc: 'प्रोजेक्ट्स, पोर्टफोलियो और आवेदन के लिए तैयार।',
      devicePhone: 'बेसिक स्मार्टफ़ोन (Android)',
      devicePhoneDesc: 'सभी सामग्रियां हल्की और मोबाइल पर आसानी से पठनीय होंगी।',
      deviceSharedPhone: 'परिवार का साझा फ़ोन',
      deviceSharedPhoneDesc: '30-45 मिनट के छोटे अंतरालों में पूरे होने वाले कार्य।',
      deviceLaptop: 'पर्सनल लैपटॉप / कंप्यूटर',
      deviceLaptopDesc: 'पूर्ण सॉफ़्टवेयर और विकास टूल्स का उपयोग।',
      deviceCafe: 'साइबर कैफ़े / लाइब्रेरी',
      deviceCafeDesc: 'ऑफ़लाइन तैयारी योग्य कार्य।',
      budgetZero: '₹0 (केवल 100% निःशुल्क)',
      budgetZeroDesc: 'शून्य शुल्क। सरकारी और परोपकारी संसाधन।',
      budget500: '₹500 प्रति माह से कम',
      budget500Desc: 'परीक्षा शुल्क या पुस्तकों के लिए छोटा बजट।',
      budget2000: '₹2,000 प्रति माह से कम',
      budget2000Desc: 'विशेष प्रमाणन या कोर्स के लिए अनुकूल।',
      budgetFlexible: 'लचीला बजट',
      budgetFlexibleDesc: 'गुणवत्ता होने पर सशुल्क कार्यक्रमों के लिए तैयार।',
      dataLimited: 'सीमित डेटा (प्रति दिन 500MB से कम)',
      dataLimitedDesc: 'टेक्स्ट आधारित, ऑडियो सारांश और पीडीएफ।',
      data15GB: 'दैनिक मोबाइल पैक (1.5GB / दिन)',
      data15GBDesc: '360p/480p वीडियो और ऑनलाइन क्विज़।',
      dataWifi: 'असीमित वाई-फ़ाई',
      dataWifiDesc: 'फुल एचडी वीडियो और बड़े डाउनलोड।',
      hours1: '1 घंटा / दिन',
      hours2: '2 घंटे / दिन',
      hours4: '3–4 घंटे / दिन',
      hours5Plus: '5+ घंटे / दिन',
      btnBack: 'पीछे जाएं',
      btnNext: 'आगे बढ़ें',
      btnFinish: 'मेरी कार्य योजना बनाएं',
    },
    settingsModal: {
      title: 'सेटिंग्स और सुगमता',
      subtitle: 'फ़ॉन्ट आकार, भाषा और कम डेटा मोड को अनुकूलित करें।',
      textSize: 'टेक्स्ट का आकार',
      textSizeNormal: 'सामान्य (मानक)',
      textSizeLarge: 'बड़ा (आरामदायक)',
      textSizeXLarge: 'अति बड़ा (अधिक स्पष्ट)',
      language: 'एप्लिकेशन भाषा',
      highContrast: 'उच्च कंट्रास्ट मोड',
      highContrastDesc: 'स्पष्ट किनारों और गहरे काले रंग के साथ पठनीयता बढ़ाता है।',
      lowData: 'कम डेटा मोड',
      lowDataDesc: 'बैकग्राउंड वीडियो रोकता है और डेटा खपत कम करता है।',
      reducedMotion: 'कम गति (एनीमेशन बंद)',
      reducedMotionDesc: 'बजट फ़ोनों पर सुचारू प्रदर्शन के लिए एनीमेशन सीमित करता है।',
      closeBtn: 'सहेजें और बंद करें',
      signedInAs: 'साइन इन खाता',
      logOut: 'लॉग आउट',
    },
    affordability: {
      title: 'क्या यह अवसर मेरे बजट में है?',
      overallFit: 'परिस्थिति अनुकूलता परीक्षण',
      budgetCheck: 'वित्तीय लागत',
      dataCheck: 'डेटा और इंटरनेट',
      timeCheck: 'समय की आवश्यकता',
      deviceCheck: 'उपकरण अनुकूलता',
      freeAlternativeTitle: '100% मुफ्त विकल्प उपलब्ध है',
      exploreFreeAlt: 'मुफ्त विकल्प देखें',
      closeBtn: 'बंद करें',
    },
    footer: {
      tagline: 'आपका अगला अवसर यहीं से शुरू होता है।',
      mission: 'सीमित वित्तीय संसाधनों और इंटरनेट कनेक्टिविटी वाले महत्वाकांक्षी युवाओं के लिए बनाया गया मुफ्त, कम-डेटा और परिस्थिति-जागरूक करियर नेविगेटर।',
      navigation: 'नेविगेशन',
      trustAndAccessibility: 'विश्वसनीयता और सुगमता',
      aboutUs: 'उड़ान के बारे में',
      privacy: 'गोपनीयता और डेटा सुरक्षा',
      accessibilitySettings: 'सुगमता सेटिंग्स',
      builtForDignity: 'समान अवसर और गरिमा के लिए समर्पित',
      allRightsReserved: '© 2026 उड़ान (UDAAN). सर्वाधिकार सुरक्षित।',
      disclaimer: 'सभी अवसर सरकारी और विश्वसनीय पोर्टलों द्वारा सत्यापित हैं।',
    },
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
    nav: {
      home: 'முகப்பு',
      myNextStep: 'எனது அடுத்த கட்டம்',
      explore: 'வாய்ப்புகள்',
      myJourney: 'எனது பயணம்',
      settingsAndSize: 'அமைப்புகள் & எழுத்து அளவு',
      logOut: 'வெளியேறு',
      account: 'கணக்கு',
    },
    hero: {
      badge: 'நீங்கள் இங்கே இருக்கிறீர்கள் → கண்டறியவும் → கற்கவும் → வாய்ப்பு',
      title: 'உங்கள் அடுத்த வாய்ப்பு இங்கிருந்து தொடங்குகிறது.',
      subtitle: 'நீங்கள் எங்கு இருக்கிறீர்கள் மற்றும் உங்கள் இலக்கு என்ன என்பதை தெரிவியுங்கள். அதிக கட்டணங்கள் அல்லது சிக்கல்கள் இன்றி உங்கள் அடுத்த சரியான வழியைக் கண்டறிய உதவுவோம்.',
      findStepBtn: 'எனது அடுத்த கட்டத்தைக் கண்டுபிடி',
      viewRoadmapBtn: 'எனது செயல் திட்டத்தைப் பார்',
      exploreBtn: 'வாய்ப்புகளை ஆராயுங்கள்',
      freeFirstTitle: '100% இலவச முன்னுரிமை',
      freeFirstDesc: 'கட்டண படிப்புகளுக்கு முன் அரசு மற்றும் இலவச திறந்தவெளி வழிகளுக்கு முதலிடம்.',
      lowDataTitle: 'குறைந்த டேட்டா & ஆஃப்லைன்',
      lowDataDesc: '2G/3G வேகம் மற்றும் குறைந்த தினசரி டேட்டா பயன்பாட்டிற்கு ஏற்றது.',
      mobileTitle: 'மொபைல் பயன்பாட்டிற்கு உகந்தது',
      mobileDesc: 'கம்ப்யூட்டர் இன்றி எளிய ஸ்மார்ட்போனிலேயே முழுமையாக பயன்படுத்தலாம்.',
      actionTitle: 'செயல்பாட்டு இலக்கு',
      actionDesc: 'குழப்பமான பட்டியல்களுக்குப் பதிலாக உடனே செய்யக்கூடிய 1 தெளிவான பணி மற்றும் படிநிலை திட்டம்.',
      verifiedOppCount: 'சரிபார்க்கப்பட்ட இலவச வழிகள்',
      zeroCostRatio: 'இலவச முன்னுரிமை',
      dataFriendlyRate: 'குறைந்த டேட்டா ஆதரவு',
      pauseVideo: 'வீடியோவை நிறுத்து',
      playVideo: 'வீடியோவை இயக்கு',
      hideVideo: 'வீடியோவை மறை (டேட்டா சேமிப்பு)',
      showVideo: 'வீடியோவைக் காட்டு',
      cardHighlight: 'தனிப்பயனாக்கப்பட்ட அடுத்த படி',
    },
    auth: {
      welcomeBack: 'உடான் (UDAAN)-க்கு மீண்டும் நல்வரவு',
      createAccount: 'இலவச கணக்கை உருவாக்குங்கள்',
      resetPassword: 'கடவுச்சொல்லை மீட்டமைக்கவும்',
      welcomeDesc: 'உங்கள் சேமித்த வழிகாட்டி மற்றும் முன்னேற்றத்தை அணுக உள்நுழைக.',
      createDesc: 'உங்கள் தனிப்பயனாக்கப்பட்ட தொழில் திட்டத்தைத் தொடங்க உடனே பதிவு செய்யுங்கள்.',
      resetDesc: 'கடவுச்சொல் மீட்பு வழிகாட்டலைப் பெற உங்கள் மின்னஞ்சலை உள்ளிடவும்.',
      emailLabel: 'மின்னஞ்சல் முகவரி',
      passwordLabel: 'கடவுச்சொல்',
      fullNameLabel: 'முழுப் பெயர்',
      confirmPasswordLabel: 'கடவுச்சொல்லை உறுதிப்படுத்தவும்',
      forgotPassword: 'கடவுச்சொல் மறந்துவிட்டதா?',
      signInBtn: 'உள்நுழைந்து தொடரவும்',
      signingIn: 'உள்நுழைகிறது...',
      signUpBtn: 'கணக்கை உருவாக்கி தொடங்கவும்',
      creatingAccount: 'கணக்கு உருவாக்கப்படுகிறது...',
      sendResetLink: 'மீட்டமைப்பு இணைப்பை அனுப்பு',
      sending: 'அனுப்பப்படுகிறது...',
      backToSignIn: 'உள்நுழைவுக்குத் திரும்பு',
      demoLoginBtn: 'உடனடி மாதிரி நுழைவு (கடவுச்சொல் தேவையில்லை)',
      demoLoginSub: 'மாதிரி பயனராக அனைத்து வசதிகளையும் உடனே சோதிக்கவும்',
      orContinueWith: 'அல்லது மின்னஞ்சல் மூலம் தொடரவும்',
      googleBtn: 'Google மூலம் தொடரவும்',
      termsNotice: 'தொடர்வதன் மூலம், நீங்கள் உடானின் அணுகல்தன்மைக் கொள்கைகளை ஏற்கிறீர்கள்.',
      privacyNotice: 'உங்கள் தகவல்கள் உங்கள் சாதனத்திலேயே பாதுகாப்பாக வைக்கப்படும்.',
    },
    roadmap: {
      badge: 'தனிப்பயனாக்கப்பட்ட செயல் திட்டம்',
      actionPlanTitle: 'எனது அடுத்த கட்டம் & செயல் திட்டம்',
      personalizedFor: 'தனிப்பயனாக்கப்பட்ட திட்டம்',
      immediateNextStep: 'உங்கள் உடனடி அடுத்த படி',
      whyFitsLabel: 'இது உங்களுக்கு ஏன் பொருத்தமானது',
      whyFitsDesc: 'இலவசம், மொபைலில் இயங்கும், குறைந்த டேட்டா மற்றும் உங்கள் நேரத்திற்கு ஏற்றது.',
      markCompleted: 'முடிந்தது என குறிக்கவும்',
      completed: 'முடிந்தது ✓',
      openOfficial: 'இலவச கற்றல் தளத்தைத் திறக்கவும்',
      saveOffline: 'ஆஃப்லைனில் சேமிக்கவும் (.txt)',
      downloadedNotice: 'ஆஃப்லைனில் படிக்க திட்டம் பதிவிறக்கம் செய்யப்பட்டது!',
      allStages: 'முழுமையான 4-படிநிலை செயல் திட்டம்',
      stageLabel: 'படிநிலை',
      weekLabel: 'வாரம்',
      keyOutcome: 'முக்கிய மைல்கல்',
      minutes: 'நிமிடங்கள்',
      costFree: 'இலவசம்',
      costLow: 'குறைந்த கட்டணம்',
      lowDataReq: 'குறைந்த டேட்டா',
      normalDataReq: 'சாதாரண டேட்டா',
      realityCheck: '4-புள்ளி நடைமுறை சோதனை',
      budgetReady: 'பட்ஜெட் பொருத்தம்: ₹0 தேவை',
      deviceReady: 'சாதன பொருத்தம்: 100% மொபைல்',
      dataReady: 'டேட்டா பொருத்தம்: குறைந்த இணையம்',
      timeReady: 'நேர பொருத்தம்: தினசரி அட்டவணை',
      allChecksPass: 'உங்கள் சுயவிவரத்திற்கான 4 சோதனைகளும் தேர்ச்சி பெற்றன!',
      noPlanYet: 'செயலில் உள்ள திட்டம் எதுவும் இல்லை',
      noPlanDesc: 'உங்கள் அடுத்த கட்டத்தைக் கண்டறிய எளிய கேள்விகளுக்குப் பதிலளிக்கவும்.',
      startDiagnostic: 'எனது அடுத்த கட்டத்தைக் கண்டுபிடி',
      editAnswers: 'சுயவிவரத்தைப் புதுப்பிக்கவும்',
      progressSummary: 'அனைத்து மைல்கற்களின் ஒட்டுமொத்த முன்னேற்றம்',
    },
    journey: {
      title: 'எனது பயணம் & முன்னேற்றம்',
      subtitle: 'முடிந்த மைல்கற்கள், சேமித்த வாய்ப்புகள் மற்றும் குறிப்புகளைக் கண்காணியுங்கள்.',
      overallProgress: 'ஒட்டுமொத்த பயண முன்னேற்றம்',
      milestoneMap: 'முக்கிய மைல்கல் படிநிலைகள்',
      savedOpportunities: 'சேமிக்கப்பட்ட வாய்ப்புகள்',
      appliedOpportunities: 'விண்ணப்பித்த வழிகள்',
      notesTitle: 'தனிப்பட்ட குறிப்புகள் & பட்டியல்',
      notesPlaceholder: 'உங்கள் குறிப்புகள், படிப்பு நினைவூட்டல்களை இங்கே எழுதுங்கள்...',
      saveNote: 'குறிப்பைச் சேமி',
      emptySaved: 'சேமிக்கப்பட்ட வாய்ப்புகள் எதுவும் இல்லை. வாய்ப்புகளை ஆராய்ந்து சேமிக்கவும்.',
      emptyApplied: 'விண்ணப்பங்கள் எதுவும் கண்காணிக்கப்படவில்லை. விண்ணப்பிக்கும் போது இங்கே குறிக்கவும்.',
      exploreBtn: 'வாய்ப்புகளை ஆராயுங்கள்',
      viewRoadmapBtn: 'செயல் திட்டத்தைப் பார்',
      appliedBadge: 'விண்ணப்பிக்கப்பட்டது',
      bookmarkedBadge: 'சேமிக்கப்பட்டது',
    },
    explorer: {
      title: 'சரிபார்க்கப்பட்ட வாய்ப்புகள்',
      subtitle: '100% சரிபார்க்கப்பட்ட கல்வி உதவித்தொகை, இலவச படிப்புகள் மற்றும் வேலைகளை ஆராயுங்கள்.',
      searchPlaceholder: 'தலைப்பு, திறன் அல்லது குறிச்சொல் மூலம் தேடவும் (எ.கா. Python, உதவித்தொகை)...',
      filterLabel: 'பிரிவு வாரியாக வடிகட்டு',
      allCategories: 'அனைத்து வாய்ப்புகள்',
      scholarships: 'கல்வி உதவித்தொகை',
      jobs: 'வேலைகள்',
      internships: 'இன்டர்ன்ஷிப்',
      freeCourses: 'இலவச படிப்புகள்',
      mentorship: 'வழிகாட்டுதல்',
      costAll: 'அனைத்து கட்டணங்களும்',
      costFree: '100% இலவசம் மட்டும்',
      costPaid: 'குறைந்த கட்டணம் / கட்டணம்',
      dataAll: 'அனைத்து இணைய வேகங்களும்',
      dataLow: 'குறைந்த டேட்டா மட்டும் (உரை/ஆடியோ)',
      mobileOnly: 'மொபைல் மட்டும்',
      goodFitOnly: 'எனக்கு ஏற்றவை மட்டும்',
      resetFilters: 'வடிகட்டிகளை அழிக்கவும்',
      showingResults: '{count} வாய்ப்புகள் காட்டப்படுகின்றன',
      noResults: 'பொருந்தும் வாய்ப்புகள் எதுவும் இல்லை.',
    },
    card: {
      goodFit: 'உங்களுக்கு பொருத்தமானது',
      potentialFit: 'வாய்ப்புள்ள தேர்வு',
      mayNotFit: 'பொருந்தாமல் போகலாம்',
      freeAlternative: 'இலவச மாற்று வழி உள்ளது',
      freeAlternativePrompt: '100% இலவச வழியைத் தேடுகிறீர்களா?',
      checkAffordability: 'இதை என்னால் பெற முடியுமா?',
      applyNow: 'தளத்தைத் திறக்கவும்',
      bookmarked: 'சேமிக்கப்பட்டது',
      bookmark: 'சேமி',
      applied: 'விண்ணப்பிக்கப்பட்டது',
      markApplied: 'விண்ணப்பித்ததாகக் குறி',
      viewDetails: 'விவரங்களைப் பார்',
      hideDetails: 'விவரங்களை மறை',
      eligibility: 'தகுதி',
      skillsTaught: 'கற்றுக்கொடுக்கப்படும் திறன்கள்',
      howToApply: 'விண்ணப்பிப்பது எப்படி',
      deadline: 'கடைசி தேதி',
      lowData: 'குறைந்த டேட்டா',
      mobileFriendly: 'மொபைல் நட்பு',
      free: 'இலவசம்',
    },
    onboarding: {
      modalTitle: 'எனது அடுத்த கட்டத்தைக் கண்டுபிடி — பரிசோதனை',
      step1Title: 'உங்கள் முதன்மை இலக்கு என்ன?',
      step1Subtitle: 'நீங்கள் அடைய விரும்பும் முக்கிய மைல்கல்லைத் தேர்வுசெய்யவும்.',
      step2Title: 'உங்கள் தற்போதைய அனுபவ நிலை என்ன?',
      step2Subtitle: 'உங்கள் நிலையில் இருந்து தொடங்கும் கற்றல் படிகளைப் பொருத்துவோம்.',
      step3Title: 'நீங்கள் அதிகம் பயன்படுத்தும் சாதனம் எது?',
      step3Subtitle: 'உங்கள் சாதனத்தில் எளிதாக இயங்கும் வழிகளை உறுதி செய்வோம்.',
      step4Title: 'உங்கள் நடைமுறை வரம்புகள் என்ன?',
      step4Subtitle: 'பட்ஜெட், தினசரி நேரம் மற்றும் இணைய பயன்பாட்டு வரம்புகள்.',
      goalFirstJob: 'முதல் வேலையைப் பெறுதல்',
      goalFirstJobDesc: 'தொடக்க நிலை வேலைகள் மற்றும் நடைமுறைப் பயிற்சி.',
      goalNewSkill: 'புதிய திறன் கற்றல்',
      goalNewSkillDesc: 'தொழில்நுட்பம், வடிவமைப்பு அல்லது தொழில் திறன்கள்.',
      goalInternship: 'இன்டர்ன்ஷிப் தேடுதல்',
      goalInternshipDesc: 'உதவித்தொகையுடன் கூடிய நேரடிப் பணி அனுபவம்.',
      goalScholarship: 'கல்வி உதவித்தொகை விண்ணப்பம்',
      goalScholarshipDesc: 'படிப்புக்கான நிதி உதவி மற்றும் கட்டணத் தள்ளுபடி.',
      goalFreelancing: 'சுயதொழில் / வருமானம்',
      goalFreelancingDesc: 'ஆன்லைன் பணிகள் மற்றும் சுயாதீன வருவாய்.',
      goalEducation: 'கல்வியைத் தொடர்தல்',
      goalEducationDesc: 'டிப்ளமோ, பட்டப்படிப்பு அல்லது திறந்தநிலைப் பல்கலைக்கழகம்.',
      levelBeginner: 'முற்றிலும் தொடக்க நிலை (அடிப்படையில் இருந்து)',
      levelBeginnerDesc: 'முன் அனுபவம் தேவையில்லை. பூஜ்ஜியத்திலிருந்து கற்றல்.',
      levelSomeBasics: 'சில அடிப்படைகள் தெரியும்',
      levelSomeBasicsDesc: 'முன்பு சில அடிப்படைகளைக் கற்றுள்ளேன்.',
      levelIntermediate: 'இடைநிலை / பயன்பாட்டிற்குத் தயார்',
      levelIntermediateDesc: 'நேரடி திட்டங்கள் மற்றும் விண்ணப்பங்களுக்குத் தயார்.',
      devicePhone: 'எளிய ஸ்மார்ட்போன் (Android)',
      devicePhoneDesc: 'அனைத்து தகவல்களும் மொபைலில் படிக்க எளிதாக இருக்கும்.',
      deviceSharedPhone: 'குடும்பப் பகிர்வு போன்',
      deviceSharedPhoneDesc: '30-45 நிமிடங்களில் முடிக்கக்கூடிய சிறிய பணிகள்.',
      deviceLaptop: 'லேப்டாப் / கம்ப்யூட்டர்',
      deviceLaptopDesc: 'முழு மென்பொருட்களைப் பயன்படுத்தும் வசதி.',
      deviceCafe: 'பிரவுசிங் சென்டர் / நூலகம்',
      deviceCafeDesc: 'ஆஃப்லைனில் தயார் செய்து சென்டரில் செயல்படுத்தும் பணிகள்.',
      budgetZero: '₹0 (100% முற்றிலும் இலவசம்)',
      budgetZeroDesc: 'கட்டணம் இல்லை. அரசு மற்றும் இலவச வளங்கள்.',
      budget500: 'மாதம் ₹500-க்கு கீழ்',
      budget500Desc: 'தேர்வு கட்டணம் அல்லது புத்தகங்களுக்கான சிறிய தொகை.',
      budget2000: 'மாதம் ₹2,000-க்கு கீழ்',
      budget2000Desc: 'சான்றிதழ் தேர்வுகள் அல்லது சிறப்புப் பயிற்சிகளுக்கு ஏற்றது.',
      budgetFlexible: 'வளைந்து கொடுக்கும் பட்ஜெட்',
      budgetFlexibleDesc: 'தரமான கட்டண திட்டங்களுக்குத் தயார்.',
      dataLimited: 'குறைந்த டேட்டா (நாள் ஒன்றுக்கு < 500MB)',
      dataLimitedDesc: 'உரை, ஆடியோ சுருக்கங்கள் மற்றும் PDF-கள்.',
      data15GB: 'தினசரி மொபைல் பேக் (1.5GB / நாள்)',
      data15GBDesc: '360p/480p வீடியோக்கள் மற்றும் ஆன்லைன் வினாடி வினா.',
      dataWifi: 'வரம்பற்ற வைஃபை',
      dataWifiDesc: 'முழு HD வீடியோக்கள் மற்றும் பதிவிறக்கங்கள்.',
      hours1: '1 மணிநேரம் / நாள்',
      hours2: '2 மணிநேரம் / நாள்',
      hours4: '3–4 மணிநேரம் / நாள்',
      hours5Plus: '5+ மணிநேரம் / நாள்',
      btnBack: 'பின்னே செல்',
      btnNext: 'தொடர்க',
      btnFinish: 'எனது திட்டத்தை உருவாக்கு',
    },
    settingsModal: {
      title: 'அணுகல்தன்மை & அமைப்புகள்',
      subtitle: 'எழுத்து அளவு, மொழி மற்றும் குறைந்த டேட்டா முறையை மாற்றவும்.',
      textSize: 'படிக்கும் எழுத்து அளவு',
      textSizeNormal: 'சாதாரண (வழக்கமான)',
      textSizeLarge: 'பெரியது (சௌகரியமான)',
      textSizeXLarge: 'மிகப் பெரியது (தெளிவான)',
      language: 'பயன்பாட்டு மொழி',
      highContrast: 'அதிக மாறுபட்ட வண்ண முறை (High Contrast)',
      highContrastDesc: 'எழுத்துக்களை இன்னும் தெளிவாகவும் கருமையாகவும் காட்டும்.',
      lowData: 'குறைந்த டேட்டா முறை',
      lowDataDesc: 'பின்னணி வீடியோக்களை நிறுத்தி இணைய பயன்பாட்டைக் குறைக்கும்.',
      reducedMotion: 'குறைந்த அசைவு (Reduced Motion)',
      reducedMotionDesc: 'குறைந்த விலை போன்களில் சீராக இயங்க அனிமேஷன்களைக் குறைக்கும்.',
      closeBtn: 'சேமித்து மூடுக',
      signedInAs: 'உள்நுழைந்துள்ள கணக்கு',
      logOut: 'வெளியேறு',
    },
    affordability: {
      title: 'இதை என்னால் பெற முடியுமா?',
      overallFit: 'சூழ்நிலை பொருந்தும் சோதனை',
      budgetCheck: 'நிதிச் செலவு',
      dataCheck: 'இணைய பயன்பாடு',
      timeCheck: 'நேரத் தேவை',
      deviceCheck: 'சாதனப் பொருத்தம்',
      freeAlternativeTitle: '100% இலவச மாற்று வழி உள்ளது',
      exploreFreeAlt: 'இலவச வழியைப் பார்க்கவும்',
      closeBtn: 'மூடுக',
    },
    footer: {
      tagline: 'உங்கள் அடுத்த வாய்ப்பு இங்கிருந்து தொடங்குகிறது.',
      mission: 'குறைந்த நிதி மற்றும் இணைய வசதி கொண்ட இளைஞர்களுக்காக பிரத்யேகமாக வடிவமைக்கப்பட்ட இலவச, குறைந்த டேட்டா தொழில் வழிகாட்டி.',
      navigation: 'வழிகாட்டுதல்',
      trustAndAccessibility: 'நம்பகத்தன்மை & அணுகல்தன்மை',
      aboutUs: 'உடான் பற்றி',
      privacy: 'தனியுரிமை & தரவு பாதுகாப்பு',
      accessibilitySettings: 'அணுகல்தன்மை அமைப்புகள்',
      builtForDignity: 'அனைவருக்கும் சம வாய்ப்பு மற்றும் கண்ணியத்திற்காக உருவாக்கப்பட்டது',
      allRightsReserved: '© 2026 உடான் (UDAAN). அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      disclaimer: 'அனைத்து வாய்ப்புகளும் அரசு மற்றும் அதிகாரப்பூர்வ தளங்கள் மூலம் சரிபார்க்கப்பட்டவை.',
    },
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
