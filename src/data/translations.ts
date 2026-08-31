import { AppLanguage } from '../types';

export interface TranslationDictionary {
  appName: string;
  tagline: string;
  home: string;
  myNextStep: string;
  exploreOpportunities: string;
  myJourney: string;
  settings: {
    title: string;
    textSize: string;
    highContrast: string;
    reducedMotion: string;
    lowData: string;
    save: string;
  };
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

  // Direct top-level convenience shortcuts used in components
  goodFit: string;
  beginner: string;
  cost: string;
  level: string;
  timeCommitment: string;
  dataRequirement: string;
  realityCheck: string;
  applied: string;
  startStep: string;
  savedOpportunities: string;
  saveOffline: string;
  updateAnswers: string;
  whyThisFitsYou: string;
  howToApply: string;
  skillsCovered: string;
  eligibility: string;
  prerequisites: string;
  source: string;
  viewOpportunity: string;
  filter: string;
  searchPlaceholder: string;

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
    email: string;
    password: string;
    fullName: string;
    confirmPassword: string;
    signIn: string;
    signUp: string;
    logout: string;
    continueGoogle: string;
    demoLogin: string;
    noAccount: string;
    hasAccount: string;
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
    emptyDesc: string;
    guaranteeTitle: string;
    guaranteeDesc: string;
    setProfileNotice: string;
    showingCount: string;
    sourceOfficial: string;
    verifiedOfficial: string;
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
  opportunity: {
    viewOfficial: string;
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
    aboutProject: string;
    accessibility: string;
    trust: string;
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

const rawTranslations: Record<AppLanguage, TranslationDictionary> = {
  en: {
    appName: 'UDAAN',
    tagline: 'Your next opportunity starts here.',
    findNextStep: 'Find My Next Step',
    exploreOpportunities: 'Explore Opportunities',
    myJourney: 'My Journey',
    myNextStep: 'My Next Step',
    home: 'Home',
    settings: {
      title: 'Accessibility & Display Preferences',
      textSize: 'Text Scaling Size',
      highContrast: 'High Contrast Mode',
      reducedMotion: 'Reduced Motion',
      lowData: 'Ultra Low-Data Saver',
      save: 'Save & Close',
    },
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

    goodFit: 'GOOD FIT FOR YOU',
    beginner: 'Beginner',
    cost: 'Cost',
    level: 'Level',
    timeCommitment: 'Time Commitment',
    dataRequirement: 'Data Requirement',
    realityCheck: '4-Point Reality Check',
    applied: 'Applied',
    startStep: 'Start This Step',
    savedOpportunities: 'Saved Opportunities',
    saveOffline: 'Save Plan Offline (.txt)',
    updateAnswers: 'Update My Profile & Answers',
    whyThisFitsYou: 'WHY THIS FITS YOUR SITUATION',
    howToApply: 'How to Apply',
    skillsCovered: 'Skills Covered',
    eligibility: 'Eligibility & Requirements',
    prerequisites: 'Prerequisites',
    source: 'Verified Official Source',
    viewOpportunity: 'View Opportunity',
    filter: 'Filter',
    searchPlaceholder: 'Search opportunities by title, skill, or keyword...',

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
      termsNotice: "By continuing, you agree to UDAAN's community accessibility principles.",
      privacyNotice: 'Your profile constraints remain strictly private on your device.',
      email: 'Email Address',
      password: 'Password',
      fullName: 'Full Name',
      confirmPassword: 'Confirm Password',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      logout: 'Log Out',
      continueGoogle: 'Continue with Google',
      demoLogin: 'Instant Demo Access',
      noAccount: "Don't have an account? Sign up",
      hasAccount: 'Already have an account? Sign in',
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
      emptyDesc: 'Try adjusting your search terms or filters to find verified opportunities.',
      guaranteeTitle: '100% Free & Verified Guarantee',
      guaranteeDesc: 'All listed opportunities are verified for upfront cost and data feasibility.',
      setProfileNotice: 'Personalized matching active based on your profile constraints.',
      showingCount: 'Showing {count} verified opportunities',
      sourceOfficial: 'Official Govt / Verified Source',
      verifiedOfficial: 'Verified Official Portal',
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
    opportunity: {
      viewOfficial: 'View Official Portal',
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
      goalNewSkillDesc: 'Programming, digital tools, communication, or vocational trades.',
      goalInternship: 'Find an Internship',
      goalInternshipDesc: 'Real-world workplace experience and stipends.',
      goalScholarship: 'Apply for Scholarships',
      goalScholarshipDesc: 'Financial grants and government fee waivers for education.',
      goalFreelancing: 'Start Freelancing / Self-Employment',
      goalFreelancingDesc: 'Online micro-tasks, writing, design, and local digital services.',
      goalEducation: 'Continue Formal Education',
      goalEducationDesc: 'Diplomas, degrees, open universities, or certifications.',
      levelBeginner: 'Complete Beginner (Start from Scratch)',
      levelBeginnerDesc: 'No prior experience. Need step-by-step guidance.',
      levelSomeBasics: 'Know Some Basics',
      levelSomeBasicsDesc: 'Familiar with concepts, need practical application.',
      levelIntermediate: 'Intermediate / Ready for Projects',
      levelIntermediateDesc: 'Comfortable with fundamentals, aiming for jobs or certifications.',
      devicePhone: 'Basic Smartphone (Android)',
      devicePhoneDesc: 'All material is formatted for small screens with zero PC requirement.',
      deviceSharedPhone: 'Family Shared Phone',
      deviceSharedPhoneDesc: 'Bite-sized lessons that can be finished in 30-45 minutes.',
      deviceLaptop: 'Personal Laptop / PC',
      deviceLaptopDesc: 'Full development environments and multi-tab workflows.',
      deviceCafe: 'Internet Cafe / Community Center',
      deviceCafeDesc: 'Offline prep at home, online execution at the center.',
      budgetZero: '₹0 (100% Free Resources Only)',
      budgetZeroDesc: 'No money required. Only government-funded and free community programs.',
      budget500: 'Under ₹500 / month',
      budget500Desc: 'Small nominal fees for exam registrations or study booklets.',
      budget2000: 'Under ₹2,000 / month',
      budget2000Desc: 'Affordable certifications, proctored exams, or specialized micro-courses.',
      budgetFlexible: 'Flexible Budget',
      budgetFlexibleDesc: 'Willing to invest in high-value credentialing programs.',
      dataLimited: 'Low Data (< 500MB/day)',
      dataLimitedDesc: 'Text, audio summaries, and lightweight PDF downloads.',
      data15GB: 'Daily Mobile Pack (1.5GB/day)',
      data15GBDesc: 'Standard 360p/480p videos, occasional downloads, and quizzes.',
      dataWifi: 'Unlimited Wi-Fi',
      dataWifiDesc: 'Full HD video lessons, heavy downloads, and live streams.',
      hours1: '1 hour / day',
      hours2: '2 hours / day',
      hours4: '3–4 hours / day',
      hours5Plus: '5+ hours / day',
      btnBack: 'Back',
      btnNext: 'Next Step',
      btnFinish: 'Generate My Action Plan',
    },
    settingsModal: {
      title: 'Accessibility & Settings',
      subtitle: 'Customize text size, language, and low-data modes.',
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
      aboutProject: 'About UDAAN & Methodology',
      accessibility: 'Accessibility & Display',
      trust: 'Trust & Accessibility',
    },
    categories: {
      all: 'All Categories',
      scholarships: 'Scholarships',
      jobs: 'Jobs',
      internships: 'Internships',
      freeCourses: 'Free Courses',
      mentorship: 'Mentorship',
      skillPrograms: 'Skill Programs',
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
    settings: {
      title: 'सुगमता और प्राथमिकताएं',
      textSize: 'टेक्स्ट का आकार',
      highContrast: 'उच्च कंट्रास्ट मोड',
      reducedMotion: 'कम गति (एनिमेशन बंद)',
      lowData: 'अल्ट्रा लो-डेटा सेवर',
      save: 'सहेजें और बंद करें',
    },
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
    demoDisclaimer: 'डेमो अवसर — वास्तविक उपयोग से पहले आधिकारिक पोर्टल पर विवरण सत्यापित करें।',
    stepOf: 'चरण {current} / {total}',
    back: 'पीछे जाएं',
    continue: 'आगे बढ़ें',
    finish: 'मेरी कार्य योजना बनाएं',
    editAnswers: 'मेरे उत्तर बदलें',
    clearFilters: 'सभी फ़िल्टर हटाएं',
    noResultsFound: 'वर्तमान फ़िल्टर से कोई अवसर मेल नहीं खाता।',

    goodFit: 'आपके लिए उपयुक्त',
    beginner: 'शुरुआती',
    cost: 'लागत',
    level: 'स्तर',
    timeCommitment: 'समय की आवश्यकता',
    dataRequirement: 'डेटा आवश्यकता',
    realityCheck: 'परिस्थिति जांच',
    applied: 'आवेदन किया',
    startStep: 'यह कदम शुरू करें',
    savedOpportunities: 'सहेजे गए अवसर',
    saveOffline: 'ऑफ़लाइन सहेजें (.txt)',
    updateAnswers: 'मेरे उत्तर अपडेट करें',
    whyThisFitsYou: 'यह आपके लिए क्यों उपयुक्त है',
    howToApply: 'आवेदन कैसे करें',
    skillsCovered: 'सिखाए जाने वाले कौशल',
    eligibility: 'पात्रता और शर्तें',
    prerequisites: 'पूर्वापेक्षाएँ',
    source: 'आधिकारिक सरकारी स्रोत',
    viewOpportunity: 'अवसर देखें',
    filter: 'फ़िल्टर',
    searchPlaceholder: 'शीर्षक, कौशल या कीवर्ड द्वारा खोजें...',

    nav: {
      home: 'होम',
      myNextStep: 'मेरा अगला कदम',
      explore: 'अवसर देखें',
      myJourney: 'मेरी यात्रा',
      settingsAndSize: 'सेटिंग्स और टेक्स्ट साइज',
      logOut: 'लॉग आउट',
      account: 'खाता',
    },
    hero: {
      badge: 'आप यहाँ हैं → खोजें → सीखें → अवसर',
      title: 'आपका अगला अवसर यहीं से शुरू होता है।',
      subtitle: 'हमें बताएं कि आप कहाँ हैं और कहाँ पहुँचना चाहते हैं। हम आपको बिना किसी महँगे शुल्क, जटिल भाषा या असंभव शर्तों के आपका अगला कदम खोजने में मदद करेंगे।',
      findStepBtn: 'मेरा अगला कदम खोजें',
      viewRoadmapBtn: 'मेरी कार्य योजना देखें',
      exploreBtn: 'अवसर देखें',
      freeFirstTitle: '100% मुफ्त प्राथमिकता',
      freeFirstDesc: 'सशुल्क विकल्पों से पहले शून्य-लागत, सरकारी और सत्यापित खुले पाठ्यक्रमों को प्राथमिकता।',
      lowDataTitle: 'कम डेटा और ऑफ़लाइन',
      lowDataDesc: '2G/3G स्पीड और सीमित दैनिक मोबाइल डेटा पैक के लिए अनुकूलित।',
      mobileTitle: 'स्मार्टफोन पर चलने योग्य',
      mobileDesc: 'प्रत्येक संसाधन बिना कंप्यूटर के सामान्य मोबाइल फोन पर आसानी से उपयोग किया जा सकता है।',
      actionTitle: 'कार्रवाई केंद्रित',
      actionDesc: 'कोई जटिल सूचियां नहीं। 1 स्पष्ट तत्काल कार्य और चरण-दर-चरण योजना प्राप्त करें।',
      verifiedOppCount: 'सत्यापित मुफ्त मार्ग',
      zeroCostRatio: 'शून्य लागत प्राथमिकता',
      dataFriendlyRate: 'कम डेटा अनुकूलता',
      pauseVideo: 'बैकग्राउंड वीडियो रोकें',
      playVideo: 'बैकग्राउंड वीडियो चलाएं',
      hideVideo: 'वीडियो छिपाएं (डेटा बचाएं)',
      showVideo: 'वीडियो दिखाएं',
      cardHighlight: 'व्यक्तिगत अगला कदम',
    },
    auth: {
      welcomeBack: 'उड़ान में आपका पुनः स्वागत है',
      createAccount: 'अपना मुफ्त खाता बनाएं',
      resetPassword: 'पासवर्ड रीसेट करें',
      welcomeDesc: 'अपनी सहेजी गई कार्य योजनाओं और प्रगति तक पहुँचने के लिए साइन इन करें।',
      createDesc: 'अपनी व्यक्तिगत करियर योजना बनाने के लिए कुछ ही सेकंड में साइन अप करें।',
      resetDesc: 'पासवर्ड रीसेट निर्देश प्राप्त करने के लिए अपना ईमेल दर्ज करें।',
      emailLabel: 'ईमेल पता',
      passwordLabel: 'पासवर्ड',
      fullNameLabel: 'पूरा नाम',
      confirmPasswordLabel: 'पासवर्ड की पुष्टि करें',
      forgotPassword: 'पासवर्ड भूल गए?',
      signInBtn: 'साइन इन करें और यात्रा जारी रखें',
      signingIn: 'साइन इन हो रहा है...',
      signUpBtn: 'खाता बनाएं और शुरू करें',
      creatingAccount: 'खाता बन रहा है...',
      sendResetLink: 'पासवर्ड रीसेट लिंक भेजें',
      sending: 'भेजा जा रहा है...',
      backToSignIn: 'साइन इन पर वापस जाएं',
      demoLoginBtn: 'त्वरित डेमो एक्सेस (बिना पासवर्ड)',
      demoLoginSub: 'डेमो उपयोगकर्ता के रूप में सभी सुविधाओं का तुरंत परीक्षण करें',
      orContinueWith: 'या ईमेल से जारी रखें',
      googleBtn: 'Google के साथ जारी रखें',
      termsNotice: 'जारी रखकर, आप उड़ान के डिजिटल सुगमता सिद्धांतों से सहमत होते हैं।',
      privacyNotice: 'आपकी परिस्थितियां आपके डिवाइस पर पूरी तरह सुरक्षित और निजी रहती हैं।',
      email: 'ईमेल पता',
      password: 'पासवर्ड',
      fullName: 'पूरा नाम',
      confirmPassword: 'पासवर्ड की पुष्टि करें',
      signIn: 'साइन इन करें',
      signUp: 'साइन अप करें',
      logout: 'लॉग आउट',
      continueGoogle: 'Google के साथ जारी रखें',
      demoLogin: 'त्वरित डेमो एक्सेस',
      noAccount: 'खाता नहीं है? साइन अप करें',
      hasAccount: 'पहले से खाता है? साइन इन करें',
    },
    roadmap: {
      badge: 'व्यक्तिगत कार्य योजना',
      actionPlanTitle: 'मेरा अगला कदम और योजना',
      personalizedFor: 'व्यक्तिगत योजना',
      immediateNextStep: 'आपका तत्काल अगला कदम',
      whyFitsLabel: 'यह आपके अनुकूल क्यों है',
      whyFitsDesc: 'मुफ्त, फोन पर काम करता है, कम डेटा और आपके समय के अनुकूल।',
      markCompleted: 'पूर्ण चिह्नित करें',
      completed: 'पूर्ण ✓',
      openOfficial: 'मुफ्त शिक्षण पोर्टल खोलें',
      saveOffline: 'योजना ऑफ़लाइन सहेजें (.txt)',
      downloadedNotice: 'ऑफ़लाइन पढ़ने के लिए योजना डाउनलोड हो गई!',
      allStages: 'पूरी 4-चरणीय कार्य योजना',
      stageLabel: 'चरण',
      weekLabel: 'सप्ताह',
      keyOutcome: 'मुख्य लक्ष्य',
      minutes: 'मिनट',
      costFree: 'मुफ्त',
      costLow: 'किफायती',
      lowDataReq: 'कम डेटा',
      normalDataReq: 'सामान्य डेटा',
      realityCheck: '4-बिंदु परिस्थिति जांच',
      budgetReady: 'बजट अनुकूल: ₹0 की आवश्यकता',
      deviceReady: 'उपकरण अनुकूल: 100% मोबाइल',
      dataReady: 'डेटा अनुकूल: कम डेटा उपयोग',
      timeReady: 'समय अनुकूल: दैनिक समय के अनुसार',
      allChecksPass: 'आपकी प्रोफ़ाइल के लिए सभी 4 जांच सफल रहीं!',
      noPlanYet: 'अभी कोई सक्रिय कार्य योजना नहीं है',
      noPlanDesc: 'अपनी व्यक्तिगत, परिस्थिति-जागरूक कार्य योजना प्राप्त करने के लिए हमारे त्वरित नेविगेटर को पूरा करें।',
      startDiagnostic: 'मेरा अगला कदम खोजें',
      editAnswers: 'मेरी प्रोफ़ाइल और उत्तर अपडेट करें',
      progressSummary: 'सभी चरणों में प्रगति',
    },
    journey: {
      title: 'मेरी यात्रा और प्रगति',
      subtitle: 'अपने पूर्ण किए गए चरण, सहेजे गए अवसर और अध्ययन नोट्स ट्रैक करें।',
      overallProgress: 'कुल यात्रा प्रगति',
      milestoneMap: 'मुख्य मील के पत्थर',
      savedOpportunities: 'सहेजे गए अवसर',
      appliedOpportunities: 'आवेदन किए गए मार्ग',
      notesTitle: 'व्यक्तिगत नोट्स और चेकलिस्ट',
      notesPlaceholder: 'अपने नोट्स, अध्ययन स्मरण या आवेदन आईडी यहाँ लिखें...',
      saveNote: 'नोट सहेजें',
      emptySaved: 'अभी कोई सहेजा गया अवसर नहीं है। अपने लक्ष्यों से मेल खाने वाले अवसर खोजें और सहेजें।',
      emptyApplied: 'अभी कोई आवेदन ट्रैक नहीं किया गया है। जब आप किसी छात्रवृत्ति या पाठ्यक्रम के लिए आवेदन करें, तो उसे चिह्नित करें।',
      exploreBtn: 'अवसर देखें',
      viewRoadmapBtn: 'कार्य योजना देखें',
      appliedBadge: 'आवेदन किया',
      bookmarkedBadge: 'सहेजा गया',
    },
    explorer: {
      title: 'सत्यापित अवसर खोजें',
      subtitle: 'लागत और डेटा आवश्यकताओं के साथ 100% सत्यापित छात्रवृत्तियां, मुफ्त पाठ्यक्रम, नौकरियां और मेंटरशिप ब्राउज़ करें।',
      searchPlaceholder: 'शीर्षक, कौशल या कीवर्ड द्वारा खोजें (जैसे पायथन, स्कॉलरशिप, हिंदी)...',
      filterLabel: 'श्रेणी के अनुसार फ़िल्टर करें',
      allCategories: 'सभी अवसर',
      scholarships: 'छात्रवृत्तियां',
      jobs: 'नौकरियां',
      internships: 'इंटर्नशिप',
      freeCourses: 'मुफ्त पाठ्यक्रम',
      mentorship: 'मेंटरशिप',
      costAll: 'सभी लागत',
      costFree: 'केवल 100% मुफ्त',
      costPaid: 'किफायती / सशुल्क',
      dataAll: 'सभी डेटा स्पीड',
      dataLow: 'केवल कम डेटा (टेक्स्ट/ऑडियो)',
      mobileOnly: 'केवल मोबाइल',
      goodFitOnly: 'केवल मेरे लिए उपयुक्त',
      resetFilters: 'सभी फ़िल्टर रीसेट करें',
      showingResults: '{count} सत्यापित अवसर दिखाए जा रहे हैं',
      noResults: 'वर्तमान फ़िल्टर से कोई अवसर मेल नहीं खाता।',
      emptyDesc: 'सत्यापित अवसर खोजने के लिए अपनी खोज या फ़िल्टर समायोजित करें।',
      guaranteeTitle: '100% मुफ्त और सत्यापित गारंटी',
      guaranteeDesc: 'सभी सूचीबद्ध अवसरों की लागत और डेटा अनुकूलता सत्यापित है।',
      setProfileNotice: 'आपकी प्रोफाइल के आधार पर वैयक्तिकृत सुझाव सक्रिय हैं।',
      showingCount: '{count} सत्यापित अवसर दिखाए जा रहे हैं',
      sourceOfficial: 'आधिकारिक सरकारी / सत्यापित स्रोत',
      verifiedOfficial: 'सत्यापित आधिकारिक पोर्टल',
    },
    card: {
      goodFit: 'आपके लिए उपयुक्त',
      potentialFit: 'संभावित उपयुक्त',
      mayNotFit: 'शायद उपयुक्त नहीं',
      freeAlternative: 'मुफ्त विकल्प उपलब्ध है',
      freeAlternativePrompt: 'क्या आप 100% मुफ्त विकल्प ढूंढ रहे हैं?',
      checkAffordability: 'क्या यह मेरे बजट में है?',
      applyNow: 'पोर्टल खोलें',
      bookmarked: 'सहेजा गया',
      bookmark: 'सहेजें',
      applied: 'आवेदन किया',
      markApplied: 'आवेदन किया चिह्नित करें',
      viewDetails: 'विवरण देखें',
      hideDetails: 'विवरण छिपाएं',
      eligibility: 'पात्रता',
      skillsTaught: 'सिखाए जाने वाले कौशल',
      howToApply: 'आवेदन कैसे करें',
      deadline: 'अंतिम तिथि',
      lowData: 'कम डेटा',
      mobileFriendly: 'मोबाइल तैयार',
      free: 'मुफ्त',
    },
    opportunity: {
      viewOfficial: 'आधिकारिक पोर्टल देखें',
    },
    onboarding: {
      modalTitle: 'मेरा अगला कदम खोजें — नैदानिक प्रश्नोत्तरी',
      step1Title: 'अभी आपका प्राथमिक लक्ष्य क्या है?',
      step1Subtitle: 'वह मुख्य मील का पत्थर चुनें जिसे आप आगे हासिल करना चाहते हैं।',
      step2Title: 'आपका वर्तमान अनुभव स्तर क्या है?',
      step2Subtitle: 'हम आपके स्तर से शुरू होने वाले शिक्षण चरणों का मिलान करेंगे।',
      step3Title: 'आप सबसे अधिक किस उपकरण का उपयोग करते हैं?',
      step3Subtitle: 'हम सुनिश्चित करते हैं कि सभी सिफारिशें आपके उपकरण पर सुचारू रूप से काम करें।',
      step4Title: 'आपकी व्यावहारिक परिस्थितियां क्या हैं?',
      step4Subtitle: 'बजट, दैनिक समय और इंटरनेट कनेक्शन सीमाएं।',
      goalFirstJob: 'मेरी पहली नौकरी पाएं',
      goalFirstJobDesc: 'प्रारंभिक स्तर की नौकरियां और व्यावहारिक प्रशिक्षण।',
      goalNewSkill: 'मांग वाला कौशल सीखें',
      goalNewSkillDesc: 'प्रोग्रामिंग, डिजिटल उपकरण, संचार या व्यावसायिक कार्य।',
      goalInternship: 'इंटर्नशिप खोजें',
      goalInternshipDesc: 'व्यावहारिक कार्य अनुभव और वजीफा।',
      goalScholarship: 'छात्रवृत्ति के लिए आवेदन करें',
      goalScholarshipDesc: 'शिक्षा के लिए वित्तीय अनुदान और सरकारी शुल्क छूट।',
      goalFreelancing: 'फ्रीलांसिंग / स्व-रोजगार शुरू करें',
      goalFreelancingDesc: 'ऑनलाइन छोटे कार्य, लेखन, डिज़ाइन और स्थानीय डिजिटल सेवाएं।',
      goalEducation: 'औपचारिक शिक्षा जारी रखें',
      goalEducationDesc: 'डिप्लोमा, डिग्री, मुक्त विश्वविद्यालय या प्रमाणपत्र।',
      levelBeginner: 'बिल्कुल शुरुआती (शून्य से शुरुआत)',
      levelBeginnerDesc: 'कोई पूर्व अनुभव नहीं। चरण-दर-चरण मार्गदर्शन आवश्यक है।',
      levelSomeBasics: 'कुछ बुनियादी बातें जानते हैं',
      levelSomeBasicsDesc: 'अवधारणाओं से परिचित हैं, व्यावहारिक अभ्यास की आवश्यकता है।',
      levelIntermediate: 'मध्यम / प्रोजेक्ट के लिए तैयार',
      levelIntermediateDesc: 'मूल बातें स्पष्ट हैं, नौकरी या प्रमाणपत्र का लक्ष्य है।',
      devicePhone: 'सामान्य स्मार्टफोन (Android)',
      devicePhoneDesc: 'सभी सामग्री बिना कंप्यूटर के छोटी स्क्रीन के लिए स्वरूपित है।',
      deviceSharedPhone: 'परिवार का साझा फोन',
      deviceSharedPhoneDesc: 'छोटे पाठ जो 30-45 मिनट में पूरे किए जा सकते हैं।',
      deviceLaptop: 'व्यक्तिगत लैपटॉप / कंप्यूटर',
      deviceLaptopDesc: 'पूर्ण विकास वातावरण और मल्टी-टैब कार्य।',
      deviceCafe: 'साइबर कैफे / सामुदायिक केंद्र',
      deviceCafeDesc: 'घर पर ऑफ़लाइन तैयारी, केंद्र पर ऑनलाइन कार्य।',
      budgetZero: '₹0 (केवल 100% मुफ्त संसाधन)',
      budgetZeroDesc: 'पैसे की आवश्यकता नहीं। केवल सरकारी और मुफ्त कार्यक्रम।',
      budget500: '₹500 / माह से कम',
      budget500Desc: 'परीक्षा पंजीकरण या अध्ययन सामग्री के लिए छोटा शुल्क।',
      budget2000: '₹2,000 / माह से कम',
      budget2000Desc: 'सस्ती प्रमाणपत्र परीक्षाएं या विशेष पाठ्यक्रम।',
      budgetFlexible: 'लचीला बजट',
      budgetFlexibleDesc: 'उच्च-मूल्य वाले क्रेडेंशियल कार्यक्रमों में निवेश के लिए तैयार।',
      dataLimited: 'कम डेटा (< 500MB/दिन)',
      dataLimitedDesc: 'टेक्स्ट, ऑडियो सारांश और हल्के PDF डाउनलोड।',
      data15GB: 'दैनिक मोबाइल पैक (1.5GB/दिन)',
      data15GBDesc: 'मानक 360p/480p वीडियो और क्विज़।',
      dataWifi: 'अनलिमिटेड वाई-फ़ाई',
      dataWifiDesc: 'फुल एचडी वीडियो और लाइव कक्षाएं।',
      hours1: '1 घंटा / दिन',
      hours2: '2 घंटे / दिन',
      hours4: '3–4 घंटे / दिन',
      hours5Plus: '5+ घंटे / दिन',
      btnBack: 'पीछे जाएं',
      btnNext: 'अगला चरण',
      btnFinish: 'मेरी कार्य योजना बनाएं',
    },
    settingsModal: {
      title: 'सुगमता और सेटिंग्स',
      subtitle: 'टेक्स्ट का आकार, भाषा और कम-डेटा मोड बदलें।',
      textSize: 'पढ़ने का टेक्स्ट आकार',
      textSizeNormal: 'सामान्य (मानक)',
      textSizeLarge: 'बड़ा (सुविधाजनक)',
      textSizeXLarge: 'अति बड़ा (स्पष्ट पठनीय)',
      language: 'एप्लिकेशन भाषा',
      highContrast: 'उच्च कंट्रास्ट मोड',
      highContrastDesc: 'बॉर्डर की स्पष्टता और गहरे काले टेक्स्ट कंट्रास्ट को बढ़ाता है।',
      lowData: 'कम डेटा मोड',
      lowDataDesc: 'बैकग्राउंड वीडियो बंद करता है और इमेज लोडिंग कम करता है।',
      reducedMotion: 'कम गति (एनिमेशन बंद)',
      reducedMotionDesc: 'किफायती फोन पर सुचारू प्रदर्शन के लिए एनिमेशन बंद करता है।',
      closeBtn: 'सहेजें और बंद करें',
      signedInAs: 'के रूप में साइन इन हैं',
      logOut: 'लॉग आउट',
    },
    affordability: {
      title: 'क्या यह अवसर मेरे बजट में है?',
      overallFit: 'परिस्थिति अनुकूलता जांच',
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
      builtForDignity: 'समान अवसर और गरिमा के लिए निर्मित',
      allRightsReserved: '© 2026 उड़ान (UDAAN). सर्वाधिकार सुरक्षित।',
      disclaimer: 'सभी अवसर सरकारी और आधिकारिक पोर्टलों से सत्यापित हैं।',
      aboutProject: 'उड़ान और कार्यप्रणाली के बारे में',
      accessibility: 'सुगमता और प्रदर्शन',
      trust: 'विश्वसनीयता और सुगमता',
    },
    categories: {
      all: 'सभी श्रेणियां',
      scholarships: 'छात्रवृत्तियां',
      jobs: 'नौकरियां',
      internships: 'इंटर्नशिप',
      freeCourses: 'मुफ्त पाठ्यक्रम',
      mentorship: 'मेंटरशिप',
      skillPrograms: 'कौशल कार्यक्रम',
    },
  },
  ta: {
    appName: 'உடான் (UDAAN)',
    tagline: 'உங்கள் அடுத்த வாய்ப்பு இங்கிருந்து தொடங்குகிறது.',
    findNextStep: 'எனது அடுத்த கட்டத்தைக் கண்டுபிடி',
    exploreOpportunities: 'வாய்ப்புகளைப் பார்க்கவும்',
    myJourney: 'எனது பயணம்',
    myNextStep: 'எனது அடுத்த படி',
    home: 'முகப்பு',
    settings: {
      title: 'அணுகல்தன்மை மற்றும் அமைப்புகள்',
      textSize: 'எழுத்து அளவு',
      highContrast: 'அதிக மாறுபட்ட பயன்முறை',
      reducedMotion: 'குறைந்த இயக்கம்',
      lowData: 'குறைந்த டேட்டா சேமிப்பான்',
      save: 'சேமித்து மூடுக',
    },
    builtAroundConstraints: 'நிஜ வாழ்க்கை சூழ்நிலைகளுக்கு ஏற்ப வடிவமைக்கப்பட்டது',
    freeFirst: 'இலவச முன்னுரிமை',
    lowData: 'குறைந்த இணைய பயன்பாடு',
    mobileFriendly: 'மொபைல் நட்பு',
    actionFocused: 'செயல் சார்ந்த வழிகாட்டல்',
    heroHeadline: 'உங்கள் அடுத்த வாய்ப்பு இங்கிருந்து தொடங்குகிறது.',
    heroSubtitle: 'கட்டணமில்லாமல் அல்லது மிகக் குறைந்த செலவில் கற்றுக்கொள்ள, திறன்களை வளர்க்க மற்றும் உங்கள் வேலைவாய்ப்பு இலக்கை அடைய சிறந்த வழிகளைக் கண்டறியுங்கள்.',
    youAreHere: 'நீங்கள் இங்கு உள்ளீர்கள்',
    discover: 'கண்டறியவும்',
    learn: 'கற்கவும்',
    practice: 'பயிற்சி செய்யவும்',
    build: 'திட்டம் உருவாக்கவும்',
    apply: 'விண்ணப்பிக்கவும்',
    nextOpportunity: 'உங்கள் அடுத்த வாய்ப்பு',
    canIAffordThis: 'இதை என்னால் பெற முடியுமா?',
    goodFitForYou: 'உங்களுக்கு ஏற்றது',
    freeAlternative: 'இலவச மாற்றைத் தேடுகிறீர்களா?',
    demoDisclaimer: 'டெமோ வாய்ப்பு — பயன்படுத்தும் முன் அதிகாரப்பூர்வ தளத்தில் விவரங்களைச் சரிபார்க்கவும்.',
    stepOf: 'படி {current} / {total}',
    back: 'பின்னே செல்',
    continue: 'தொடர்க',
    finish: 'எனது செயல் திட்டத்தை உருவாக்கு',
    editAnswers: 'எனது பதில்களை மாற்றுக',
    clearFilters: 'அனைத்து வடிகட்டிகளையும் நீக்கு',
    noResultsFound: 'உங்கள் வடிகட்டிகளுக்கு ஏற்ற வாய்ப்புகள் எதுவும் கிடைக்கவில்லை.',

    goodFit: 'உங்களுக்கு ஏற்றது',
    beginner: 'தொடக்க நிலை',
    cost: 'செலவு',
    level: 'நிலை',
    timeCommitment: 'நேரத் தேவை',
    dataRequirement: 'டேட்டா தேவை',
    realityCheck: 'யதார்த்த சோதனை',
    applied: 'விண்ணப்பிக்கப்பட்டது',
    startStep: 'இந்த படியைத் தொடங்கு',
    savedOpportunities: 'சேமிக்கப்பட்ட வாய்ப்புகள்',
    saveOffline: 'ஆஃப்லைனில் சேமி (.txt)',
    updateAnswers: 'எனது பதில்களை மாற்றுக',
    whyThisFitsYou: 'இது உங்களுக்கு ஏன் பொருந்துகிறது',
    howToApply: 'விண்ணப்பிப்பது எப்படி',
    skillsCovered: 'கற்றுத்தரப்படும் திறன்கள்',
    eligibility: 'தகுதி மற்றும் தேவைகள்',
    prerequisites: 'முன்தேவைகள்',
    source: 'அதிகாரப்பூர்வ அரசு மூலம்',
    viewOpportunity: 'வாய்ப்பைக் காண்க',
    filter: 'வடிகட்டி',
    searchPlaceholder: 'தலைப்பு, திறன் அல்லது முக்கிய வார்த்தை மூலம் தேடுங்கள்...',

    nav: {
      home: 'முகப்பு',
      myNextStep: 'எனது அடுத்த படி',
      explore: 'வாய்ப்புகளைப் பார்க்கவும்',
      myJourney: 'எனது பயணம்',
      settingsAndSize: 'அமைப்புகள் மற்றும் எழுத்து அளவு',
      logOut: 'வெளியேறு',
      account: 'கணக்கு',
    },
    hero: {
      badge: 'நீங்கள் இங்கு உள்ளீர்கள் → கண்டறியவும் → கற்கவும் → வாய்ப்பு',
      title: 'உங்கள் அடுத்த வாய்ப்பு இங்கிருந்து தொடங்குகிறது.',
      subtitle: 'நீங்கள் இப்போது எங்கு இருக்கிறீர்கள் மற்றும் எங்கு செல்ல விரும்புகிறீர்கள் என்பதை எங்களிடம் கூறுங்கள். அதிக கட்டணம் அல்லது சிக்கலான ஆங்கிலம் இல்லாமல் உங்கள் அடுத்த கட்டத்தைக் கண்டறிய உதவுவோம்.',
      findStepBtn: 'எனது அடுத்த கட்டத்தைக் கண்டுபிடி',
      viewRoadmapBtn: 'செயல் திட்டத்தைப் பார்க்கவும்',
      exploreBtn: 'வாய்ப்புகளைப் பார்க்கவும்',
      freeFirstTitle: '100% இலவச முன்னுரிமை',
      freeFirstDesc: 'கட்டண திட்டங்களுக்கு முன் அரசு மற்றும் திறந்தநிலை இலவசப் படிப்புகளுக்கு முதன்மை முன்னுரிமை.',
      lowDataTitle: 'குறைந்த டேட்டா & ஆஃப்லைன்',
      lowDataDesc: '2G/3G வேகம் மற்றும் தினசரி குறைந்த இணைய பயன்பாட்டிற்கு ஏற்ப உரை வடிவில் வடிவமைக்கப்பட்டது.',
      mobileTitle: 'ஸ்மார்ட்போனில் எளிதாகப் பயன்படும்',
      mobileDesc: 'கம்ப்யூட்டர் தேவையின்றி அடிப்படை ஆண்ட்ராய்டு போனிலேயே முழுமையாகப் படிக்க முடியும்.',
      actionTitle: 'செயல் சார்ந்த திட்டம்',
      actionDesc: 'நீண்ட பட்டியல்கள் இல்லை. 1 தெளிவான உடனடிப் பணியும் வாராந்திர இலக்குகளும்.',
      verifiedOppCount: 'சரிபார்க்கப்பட்ட இலவச வழிகள்',
      zeroCostRatio: 'பூஜ்ஜிய கட்டண முன்னுரிமை',
      dataFriendlyRate: 'குறைந்த இணைய பொருந்தக்கூடிய தன்மை',
      pauseVideo: 'பின்னணி வீடியோவை நிறுத்து',
      playVideo: 'பின்னணி வீடியோவை இயக்கு',
      hideVideo: 'வீடியோவை மறை (டேட்டா சேமி)',
      showVideo: 'வீடியோவைக் காட்டு',
      cardHighlight: 'தனிப்பயனாக்கப்பட்ட அடுத்த படி',
    },
    auth: {
      welcomeBack: 'உடான் தளத்திற்கு மீண்டும் வருக',
      createAccount: 'இலவச கணக்கை உருவாக்கவும்',
      resetPassword: 'கடவுச்சொல்லை மாற்றவும்',
      welcomeDesc: 'உங்கள் சேமிக்கப்பட்ட திட்டங்களையும் முன்னேற்றத்தையும் காண உள்நுழையவும்.',
      createDesc: 'உங்கள் பிரத்யேக திட்டத்தை உருவாக்க சில நொடிகளில் பதிவு செய்யவும்.',
      resetDesc: 'கடவுச்சொல் மீட்பு தகவல்களைப் பெற உங்கள் மின்னஞ்சலை உள்ளிடவும்.',
      emailLabel: 'மின்னஞ்சல் முகவரி',
      passwordLabel: 'கடவுச்சொல்',
      fullNameLabel: 'முழு பெயர்',
      confirmPasswordLabel: 'கடவுச்சொல்லை உறுதிசெய்க',
      forgotPassword: 'கடவுச்சொல் மறந்துவிட்டதா?',
      signInBtn: 'உள்நுழைந்து தொடரவும்',
      signingIn: 'உள்நுழைகிறது...',
      signUpBtn: 'பதிவு செய்து தொடங்கவும்',
      creatingAccount: 'கணக்கு உருவாக்கப்படுகிறது...',
      sendResetLink: 'மீட்பு இணைப்பை அனுப்பவும்',
      sending: 'அனுப்பப்படுகிறது...',
      backToSignIn: 'உள்நுழைவுக்குத் திரும்பு',
      demoLoginBtn: 'உடனடி டெமோ அணுகல் (கடவுச்சொல் இன்றி)',
      demoLoginSub: 'டெமோ பயனராக அனைத்து வசதிகளையும் உடனே சோதிக்கவும்',
      orContinueWith: 'அல்லது மின்னஞ்சல் மூலம் தொடரவும்',
      googleBtn: 'Google மூலம் தொடரவும்',
      termsNotice: 'தொடர்வதன் மூலம் உடான் அணுகல்தன்மைக் கொள்கைகளை ஏற்கிறீர்கள்.',
      privacyNotice: 'உங்கள் விவரங்கள் உங்கள் சாதனத்தில் பாதுகாப்பாகவும் தனிப்பட்டதாகவும் இருக்கும்.',
      email: 'மின்னஞ்சல் முகவரி',
      password: 'கடவுச்சொல்',
      fullName: 'முழு பெயர்',
      confirmPassword: 'கடவுச்சொல்லை உறுதிசெய்க',
      signIn: 'உள்நுழைக',
      signUp: 'பதிவு செய்க',
      logout: 'வெளியேறு',
      continueGoogle: 'Google மூலம் தொடரவும்',
      demoLogin: 'உடனடி டெமோ அணுகல்',
      noAccount: 'கணக்கு இல்லையா? பதிவு செய்க',
      hasAccount: 'ஏற்கனவே கணக்கு உள்ளதா? உள்நுழைக',
    },
    roadmap: {
      badge: 'தனிப்பயனாக்கப்பட்ட செயல் திட்டம்',
      actionPlanTitle: 'எனது அடுத்த கட்டமும் செயல் வரிசையும்',
      personalizedFor: 'தனிப்பயனாக்கப்பட்ட திட்டம்',
      immediateNextStep: 'உங்கள் உடனடி அடுத்த படி',
      whyFitsLabel: 'இது உங்களுக்கு ஏன் பொருந்துகிறது',
      whyFitsDesc: 'இலவசம், மொபைலில் செயல்படும், குறைந்த டேட்டா மற்றும் உங்கள் நேரத்திற்கு ஏற்றது.',
      markCompleted: 'முடித்ததாகக் குறிக்க',
      completed: 'முடிந்தது ✓',
      openOfficial: 'இலவச கற்றல் தளத்தைத் திற',
      saveOffline: 'திட்டத்தை ஆஃப்லைனில் சேமி (.txt)',
      downloadedNotice: 'ஆஃப்லைனில் படிக்க திட்டம் பதிவிறக்கப்பட்டது!',
      allStages: 'முழு 4-கட்ட செயல் வரிசை',
      stageLabel: 'கட்டம்',
      weekLabel: 'வாரம்',
      keyOutcome: 'முக்கிய மைல்கல்',
      minutes: 'நிமிடம்',
      costFree: 'இலவசம்',
      costLow: 'குறைந்த கட்டணம்',
      lowDataReq: 'குறைந்த டேட்டா',
      normalDataReq: 'வழக்கமான டேட்டா',
      realityCheck: '4-புள்ளி யதார்த்த சோதனை',
      budgetReady: 'பட்ஜெட் பொருத்தம்: ₹0 தேவை',
      deviceReady: 'சாதனப் பொருத்தம்: 100% மொபைல்',
      dataReady: 'டேட்டா பொருத்தம்: குறைந்த இணையம் போதுமானது',
      timeReady: 'நேரப் பொருத்தம்: உங்கள் நேரத்திற்கு ஏற்றது',
      allChecksPass: 'உங்கள் சுயவிவரத்திற்கான 4 சோதனைகளும் தேர்ச்சி பெற்றன!',
      noPlanYet: 'செயலில் உள்ள திட்டம் இன்னும் இல்லை',
      noPlanDesc: 'உங்கள் சூழ்நிலைக்கு ஏற்ற அடுத்த படியைக் கண்டறிய எங்கள் எளிய வழிகாட்டியை முடிக்கவும்.',
      startDiagnostic: 'எனது அடுத்த கட்டத்தைக் கண்டுபிடி',
      editAnswers: 'சுயவிவரப் பதில்களை மாற்றவும்',
      progressSummary: 'மைல்கற்களின் முன்னேற்றம்',
    },
    journey: {
      title: 'எனது பயணம் & முன்னேற்றம்',
      subtitle: 'முடித்த மைல்கற்கள், சேமித்த வாய்ப்புகள் மற்றும் குறிப்புகளைக் கண்காணிக்கவும்.',
      overallProgress: 'முழு பயண முன்னேற்றம்',
      milestoneMap: 'முக்கிய மைல்கல் கட்டங்கள்',
      savedOpportunities: 'சேமிக்கப்பட்ட வாய்ப்புகள்',
      appliedOpportunities: 'விண்ணப்பித்த வழிகள்',
      notesTitle: 'தனிப்பட்ட குறிப்புகள் & பட்டியல்',
      notesPlaceholder: 'உங்கள் குறிப்புகள் அல்லது விண்ணப்ப எண்களை இங்கு எழுதவும்...',
      saveNote: 'குறிப்பைச் சேமி',
      emptySaved: 'வாய்ப்புகள் எதுவும் சேமிக்கப்படவில்லை. உங்கள் இலக்குகளுக்கு ஏற்ற வாய்ப்புகளைத் தேடி சேமிக்கவும்.',
      emptyApplied: 'விண்ணப்பங்கள் எதுவும் இன்னும் பதியப்படவில்லை. நீங்கள் விண்ணப்பித்தவுடன் அதைக் குறிக்கவும்.',
      exploreBtn: 'வாய்ப்புகளைப் பார்க்கவும்',
      viewRoadmapBtn: 'செயல் திட்டத்தைப் பார்க்கவும்',
      appliedBadge: 'விண்ணப்பிக்கப்பட்டது',
      bookmarkedBadge: 'சேமிக்கப்பட்டது',
    },
    explorer: {
      title: 'சரிபார்க்கப்பட்ட வாய்ப்புகளைத் தேடுங்கள்',
      subtitle: 'செலவு மற்றும் இணையத் தேவைகளுடன் 100% சரிபார்க்கப்பட்ட உதவித்தொகைகள், இலவசப் படிப்புகள், வேலைகளைக் காண்க.',
      searchPlaceholder: 'தலைப்பு, திறன் அல்லது முக்கிய வார்த்தை மூலம் தேடுங்கள் (எ.கா. Python, Scholarship, Tamil)...',
      filterLabel: 'பிரிவு வாரியாக வடிகட்டு',
      allCategories: 'அனைத்து வாய்ப்புகள்',
      scholarships: 'கல்வி உதவித்தொகை',
      jobs: 'வேலைகள்',
      internships: 'இன்டர்ன்ஷிப்',
      freeCourses: 'இலவச படிப்புகள்',
      mentorship: 'வழிகாட்டுதல்',
      costAll: 'அனைத்து செலவுகள்',
      costFree: '100% இலவசம் மட்டுமே',
      costPaid: 'குறைந்த கட்டணம் / கட்டணம்',
      dataAll: 'அனைத்து டேட்டா வேகம்',
      dataLow: 'குறைந்த டேட்டா மட்டுமே (உரை/ஆடியோ)',
      mobileOnly: 'மொபைல் மட்டுமே',
      goodFitOnly: 'எனக்கு ஏற்றது மட்டுமே',
      resetFilters: 'வடிகட்டிகளை மீட்டமைக்க',
      showingResults: '{count} சரிபார்க்கப்பட்ட வாய்ப்புகள் காட்டப்படுகின்றன',
      noResults: 'உங்கள் வடிகட்டிகளுக்கு ஏற்ற வாய்ப்புகள் எதுவும் கிடைக்கவில்லை.',
      emptyDesc: 'வாய்ப்புகளைக் கண்டறிய உங்கள் தேடல் அல்லது வடிகட்டிகளை மாற்றவும்.',
      guaranteeTitle: '100% இலவச மற்றும் சரிபார்க்கப்பட்ட உத்தரவாதம்',
      guaranteeDesc: 'பட்டியலிடப்பட்ட அனைத்து வாய்ப்புகளும் சரிபார்க்கப்பட்டவை.',
      setProfileNotice: 'உங்கள் சுயவிவரத்தின் அடிப்படையில் தனிப்பயனாக்கப்பட்ட பரிந்துரைகள்.',
      showingCount: '{count} சரிபார்க்கப்பட்ட வாய்ப்புகள் காட்டப்படுகின்றன',
      sourceOfficial: 'அதிகாரப்பூர்வ அரசு / சரிபார்க்கப்பட்ட ஆதாரம்',
      verifiedOfficial: 'சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ போர்டல்',
    },
    card: {
      goodFit: 'உங்களுக்கு ஏற்றது',
      potentialFit: 'பொருந்த வாய்ப்புள்ளது',
      mayNotFit: 'பொருந்தாமல் போகலாம்',
      freeAlternative: 'இலவச மாற்று வழி உள்ளது',
      freeAlternativePrompt: '100% இலவச வழியைத் தேடுகிறீர்களா?',
      checkAffordability: 'இதை என்னால் பெற முடியுமா?',
      applyNow: 'தளத்தைத் திற',
      bookmarked: 'சேமிக்கப்பட்டது',
      bookmark: 'சேமி',
      applied: 'விண்ணப்பிக்கப்பட்டது',
      markApplied: 'விண்ணப்பித்ததாகக் குறி',
      viewDetails: 'விவரங்களைப் பார்',
      hideDetails: 'விவரங்களை மறை',
      eligibility: 'தகுதி',
      skillsTaught: 'கற்றுத்தரப்படும் திறன்கள்',
      howToApply: 'விண்ணப்பிப்பது எப்படி',
      deadline: 'கடைசி தேதி',
      lowData: 'குறைந்த டேட்டா',
      mobileFriendly: 'மொபைல் தயார்',
      free: 'இலவசம்',
    },
    opportunity: {
      viewOfficial: 'அதிகாரப்பூர்வ தளத்தைப் பார்க்கவும்',
    },
    onboarding: {
      modalTitle: 'எனது அடுத்த கட்டத்தைக் கண்டுபிடி — வழிகாட்டி',
      step1Title: 'இப்போது உங்கள் முதன்மை இலக்கு என்ன?',
      step1Subtitle: 'நீங்கள் அடுத்து அடைய விரும்பும் முக்கிய மைல்கல்லைத் தேர்வுசெய்க.',
      step2Title: 'உங்கள் தற்போதைய அனுபவ நிலை என்ன?',
      step2Subtitle: 'உங்கள் நிலையில் இருந்து தொடங்கும் கற்றல் படிகளைப் பொருத்துவோம்.',
      step3Title: 'நீங்கள் அதிகமாகப் பயன்படுத்தும் சாதனம் எது?',
      step3Subtitle: 'அனைத்துப் பரிந்துரைகளும் உங்கள் சாதனத்தில் செயல்படுவதை உறுதிசெய்கிறோம்.',
      step4Title: 'உங்கள் நடைமுறை சூழ்நிலைகள் என்ன?',
      step4Subtitle: 'பட்ஜெட், தினசரி நேரம் மற்றும் இணைய வரம்புகள்.',
      goalFirstJob: 'முதல் வேலையைப் பெறுதல்',
      goalFirstJobDesc: 'தொடக்க நிலை வேலைகள் மற்றும் நடைமுறைப் பயிற்சிகள்.',
      goalNewSkill: 'தேவை உள்ள புதிய திறனைக் கற்றல்',
      goalNewSkillDesc: 'புரோகிராமிங், டிஜிட்டல் கருவிகள், தகவல் தொடர்பு அல்லது தொழில்முறைப் பயிற்சி.',
      goalInternship: 'இன்டர்ன்ஷிப் தேடுதல்',
      goalInternshipDesc: 'நேரடி பணி அனுபவம் மற்றும் உதவித்தொகை.',
      goalScholarship: 'கல்வி உதவித்தொகைக்கு விண்ணப்பித்தல்',
      goalScholarshipDesc: 'கல்விக்கான நிதியுதவி மற்றும் அரசு கட்டணச் சலுகைகள்.',
      goalFreelancing: 'சுயதொழில் / ஃப்ரீலான்சிங் தொடங்குதல்',
      goalFreelancingDesc: 'ஆன்லைன் எளிய பணிகள், எழுதுதல், வடிவமைப்பு மற்றும் டிஜிட்டல் சேவைகள்.',
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
      aboutProject: 'உடான் பற்றி',
      accessibility: 'அணுகல்தன்மை மற்றும் காட்சி',
      trust: 'நம்பகத்தன்மை மற்றும் அணுகல்தன்மை',
    },
    categories: {
      all: 'அனைத்து பிரிவுகள்',
      scholarships: 'கல்வி உதவித்தொகை',
      jobs: 'வேலைகள்',
      internships: 'இன்டர்ன்ஷிப்',
      freeCourses: 'இலவச படிப்புகள்',
      mentorship: 'வழிகாட்டுதல்',
      skillPrograms: 'திறன் திட்டங்கள்',
    },
  },
};

function createFallbackProxy<T extends object>(target: T, fallback?: any): T {
  return new Proxy(target, {
    get(obj, prop) {
      if (typeof prop === 'symbol') {
        return (obj as any)[prop];
      }
      if (prop in obj && (obj as any)[prop] !== undefined) {
        const val = (obj as any)[prop];
        if (typeof val === 'object' && val !== null) {
          const fbVal = fallback && typeof fallback === 'object' ? fallback[prop] : undefined;
          return createFallbackProxy(val, fbVal);
        }
        return val;
      }
      if (fallback && typeof fallback === 'object' && prop in fallback) {
        const fbVal = fallback[prop];
        if (typeof fbVal === 'object' && fbVal !== null) {
          return createFallbackProxy(fbVal, fbVal);
        }
        return fbVal;
      }
      return '';
    },
  });
}

export const translations: Record<AppLanguage, TranslationDictionary> = {
  en: createFallbackProxy(rawTranslations.en, rawTranslations.en),
  hi: createFallbackProxy(rawTranslations.hi, rawTranslations.en),
  ta: createFallbackProxy(rawTranslations.ta, rawTranslations.en),
};

