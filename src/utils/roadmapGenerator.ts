import { UserProfile, UserRoadmap, RoadmapWeek } from '../types';

const INTEREST_LABELS: Record<string, string> = {
  web_tech: 'Technology & Web Skills',
  digital_marketing: 'Digital Marketing & Social Media',
  data_office_skills: 'Data Entry & Spreadsheet Office Skills',
  graphic_design: 'Graphic Design & Mobile Content Creation',
  healthcare_support: 'Healthcare & Nursing Assistance',
  vocational_trades: 'Technical & Vocational Trades (ITI)',
  government_exams: 'Public Sector & Government Exam Prep',
  customer_support: 'Customer Care & Remote Chat Support',
};

const GOAL_LABELS: Record<string, string> = {
  first_job: 'Get your first entry-level job',
  new_skill: 'Master a high-demand practical skill',
  internship: 'Secure a paid practical internship',
  scholarship: 'Win an education grant or fee waiver',
  freelancing: 'Start earning small freelance income from home',
  continue_education: 'Continue higher education or diploma',
};

const TIME_LABELS: Record<string, string> = {
  '1_hour': '1 hour per day (7 hrs/week)',
  '2_hours': '2 hours per day (14 hrs/week)',
  '3_to_4_hours': '3–4 hours per day (25 hrs/week)',
  '5_plus_hours': '5+ hours per day (Full-time focus)',
};

const DEVICE_LABELS: Record<string, string> = {
  basic_smartphone: 'Basic Smartphone',
  shared_family_phone: 'Shared Family Phone',
  laptop_pc: 'Personal Laptop / PC',
  cyber_cafe_library: 'Cyber Cafe / Library visits',
};

export function generatePersonalizedRoadmap(profile: UserProfile): UserRoadmap {
  const isMobileOnly = profile.deviceAccess === 'basic_smartphone' || profile.deviceAccess === 'shared_family_phone';
  const isLowData = profile.internetAccess === 'limited_mobile_data';
  const hoursPerDay = profile.dailyHours === '1_hour' ? 1 : profile.dailyHours === '2_hours' ? 2 : profile.dailyHours === '3_to_4_hours' ? 3.5 : 5;
  const weeklyHours = hoursPerDay * 7;

  const interestName = INTEREST_LABELS[profile.careerInterest] || 'Practical Skills';
  const goalName = GOAL_LABELS[profile.goal] || 'Career Advancement';

  // Generate 4-week modular milestones tailored to profile
  const weeks: RoadmapWeek[] = [];

  // WEEK 1: DISCOVER
  if (profile.careerInterest === 'web_tech') {
    weeks.push({
      weekNumber: 1,
      stageName: 'Discover',
      title: 'Foundations & Tool Setup (Zero Cost)',
      description: isMobileOnly
        ? 'Understand how websites work using bite-sized text guides and install a lightweight mobile code editor (like TrebEdit or SoloLearn).'
        : 'Understand how websites work, set up VS Code or open-source browser editor, and master basic HTML tags.',
      estimatedWeeklyHours: Math.round(weeklyHours * 0.9),
      keyOutcome: 'Build your very first basic webpage showing your personal profile and favorite topics.',
      freeAlternativeTip: 'Download free PDF notes once via WiFi to read offline without consuming daily mobile data.',
      tasks: [
        {
          id: 'task-w1-1',
          title: 'Understand the 3 Pillars: HTML, CSS, and JS',
          description: 'Read the low-bandwidth text tutorial explaining how browsers render web pages.',
          estimatedMinutes: 45,
          dataRequirement: 'LOW',
          cost: 'FREE',
          mobileFriendly: true,
          offlinePossible: true,
          completed: false,
          actionGuide: 'Focus on understanding tags: <h1>, <p>, <a>, <img>, and <div>.'
        },
        {
          id: 'task-w1-2',
          title: isMobileOnly ? 'Set Up Free Mobile Code Scratchpad' : 'Install Free Code Editor',
          description: isMobileOnly 
            ? 'Install TrebEdit / Replit app on your phone to write and preview code without a laptop.'
            : 'Install VS Code and Live Server extension on your computer.',
          estimatedMinutes: 30,
          dataRequirement: 'LOW',
          cost: 'FREE',
          mobileFriendly: true,
          offlinePossible: true,
          completed: false,
        },
        {
          id: 'task-w1-3',
          title: 'Draft Your "About Me" Bio Page',
          description: 'Create an index.html file with your name, education, career dream, and 3 favorite skills.',
          estimatedMinutes: 60,
          dataRequirement: 'LOW',
          cost: 'FREE',
          mobileFriendly: true,
          offlinePossible: true,
          completed: false,
        }
      ]
    });
  } else if (profile.careerInterest === 'data_office_skills') {
    weeks.push({
      weekNumber: 1,
      stageName: 'Discover',
      title: 'Spreadsheet Fundamentals & Data Accuracy',
      description: 'Master Google Sheets or free LibreOffice basics: cells, rows, columns, data formatting, and essential keyboard shortcuts.',
      estimatedWeeklyHours: Math.round(weeklyHours * 0.9),
      keyOutcome: 'Create a clean monthly household budget sheet with auto-calculating totals.',
      freeAlternativeTip: 'Google Sheets mobile app is 100% free and works fully offline in offline mode.',
      tasks: [
        {
          id: 'task-w1-1',
          title: 'Install Free Google Sheets on Mobile / PC',
          description: 'Enable offline mode in Google Drive so you can practice without internet.',
          estimatedMinutes: 20,
          dataRequirement: 'LOW',
          cost: 'FREE',
          mobileFriendly: true,
          offlinePossible: true,
          completed: false,
        },
        {
          id: 'task-w1-2',
          title: 'Learn Essential Arithmetic Formulas',
          description: 'Practice =SUM(), =AVERAGE(), =MIN(), =MAX(), and cell references (=A1+B1).',
          estimatedMinutes: 50,
          dataRequirement: 'LOW',
          cost: 'FREE',
          mobileFriendly: true,
          offlinePossible: true,
          completed: false,
        },
        {
          id: 'task-w1-3',
          title: 'Format a Mock Grocery & Bill Tracker',
          description: 'Format currency, bold headers, apply zebra striping, and fix text wrapping.',
          estimatedMinutes: 45,
          dataRequirement: 'LOW',
          cost: 'FREE',
          mobileFriendly: true,
          offlinePossible: true,
          completed: false,
        }
      ]
    });
  } else {
    weeks.push({
      weekNumber: 1,
      stageName: 'Discover',
      title: `Core Fundamentals of ${interestName}`,
      description: `Understand the foundational terms, daily workflow, and career opportunities available in ${interestName}.`,
      estimatedWeeklyHours: Math.round(weeklyHours * 0.9),
      keyOutcome: 'Complete a self-assessment checklist and establish a dedicated 1-hour daily study routine.',
      freeAlternativeTip: 'All foundational guides here are curated from verified public educational resources.',
      tasks: [
        {
          id: 'task-w1-1',
          title: `Introductory Map to ${interestName}`,
          description: 'Read the beginner field primer covering entry roles and skill requirements.',
          estimatedMinutes: 40,
          dataRequirement: 'LOW',
          cost: 'FREE',
          mobileFriendly: true,
          offlinePossible: true,
          completed: false,
        },
        {
          id: 'task-w1-2',
          title: 'Organize Your Digital Study Folder',
          description: 'Create a dedicated notes notebook or phone folder to save cheatsheets and lesson summaries.',
          estimatedMinutes: 25,
          dataRequirement: 'LOW',
          cost: 'FREE',
          mobileFriendly: true,
          offlinePossible: true,
          completed: false,
        },
        {
          id: 'task-w1-3',
          title: 'Complete 3 Foundational Micro-Lessons',
          description: 'Study the 3 core principles of this domain and write down 5 key takeaways in your own words.',
          estimatedMinutes: 60,
          dataRequirement: 'LOW',
          cost: 'FREE',
          mobileFriendly: true,
          offlinePossible: true,
          completed: false,
        }
      ]
    });
  }

  // WEEK 2: LEARN
  weeks.push({
    weekNumber: 2,
    stageName: 'Learn',
    title: 'Guided Exercises & Core Skill Practice',
    description: profile.careerInterest === 'web_tech'
      ? 'Learn CSS styling (colors, fonts, box model, responsive flexbox) and make your personal webpage look sharp on any screen size.'
      : profile.careerInterest === 'data_office_skills'
      ? 'Master intermediate formulas (IF conditions, COUNTIF, basic VLOOKUP/XLOOKUP) and data filtering techniques.'
      : `Deep dive into practical techniques used by junior professionals in ${interestName}.`,
    estimatedWeeklyHours: Math.round(weeklyHours),
    keyOutcome: 'Complete 5 guided practical exercises and solve common beginner errors independently.',
    freeAlternativeTip: 'Use community discussion forums or Udaan study circles if you get stuck on an exercise.',
    tasks: [
      {
        id: 'task-w2-1',
        title: 'Core Concept Deep-Dive: Structured Exercises',
        description: 'Work through interactive step-by-step drills testing your syntax and conceptual understanding.',
        estimatedMinutes: 60,
        dataRequirement: 'LOW',
        cost: 'FREE',
        mobileFriendly: true,
        offlinePossible: true,
        completed: false,
      },
      {
        id: 'task-w2-2',
        title: 'Troubleshooting & Error Fixing Drill',
        description: 'Learn how to spot common mistakes and solve them using simple search and self-checking.',
        estimatedMinutes: 45,
        dataRequirement: 'LOW',
        cost: 'FREE',
        mobileFriendly: true,
        offlinePossible: true,
        completed: false,
      },
      {
        id: 'task-w2-3',
        title: 'Speed & Consistency Challenge',
        description: 'Rebuild the exercise from memory without looking at notes to solidify muscle memory.',
        estimatedMinutes: 50,
        dataRequirement: 'LOW',
        cost: 'FREE',
        mobileFriendly: true,
        offlinePossible: true,
        completed: false,
      }
    ]
  });

  // WEEK 3: BUILD
  weeks.push({
    weekNumber: 3,
    stageName: 'Build',
    title: 'Create Your First Tangible Portfolio Project',
    description: profile.careerInterest === 'web_tech'
      ? 'Build a working, mobile-responsive local business page (e.g. for a neighborhood bakery or clinic) with working navigation and contact link.'
      : profile.careerInterest === 'data_office_skills'
      ? 'Build a comprehensive Inventory & Sales Report dashboard with automated summary cards and charts.'
      : `Build a complete sample work artifact or case study showcasing your skills in ${interestName}.`,
    estimatedWeeklyHours: Math.round(weeklyHours * 1.1),
    keyOutcome: 'Have 1 completed, verified project proof to show future employers or internship recruiters.',
    freeAlternativeTip: 'Host your project for free on GitHub Pages / Google Drive / Notion with zero hosting bills.',
    tasks: [
      {
        id: 'task-w3-1',
        title: 'Plan Project Requirements & Structure',
        description: 'Draft the layout on paper before writing or designing.',
        estimatedMinutes: 40,
        dataRequirement: 'LOW',
        cost: 'FREE',
        mobileFriendly: true,
        offlinePossible: true,
        completed: false,
      },
      {
        id: 'task-w3-2',
        title: 'Build the Core Project Artifact',
        description: 'Execute the project step-by-step applying everything learned in Weeks 1 and 2.',
        estimatedMinutes: 90,
        dataRequirement: isLowData ? 'LOW' : 'NORMAL',
        cost: 'FREE',
        mobileFriendly: true,
        offlinePossible: true,
        completed: false,
      },
      {
        id: 'task-w3-3',
        title: 'Publish Free Project Link or PDF Proof',
        description: 'Save your project link or export clean PDF screenshots to share in your application.',
        estimatedMinutes: 35,
        dataRequirement: 'LOW',
        cost: 'FREE',
        mobileFriendly: true,
        offlinePossible: true,
        completed: false,
      }
    ]
  });

  // WEEK 4: LAUNCH / APPLY
  weeks.push({
    weekNumber: 4,
    stageName: 'Launch',
    title: profile.goal === 'scholarship'
      ? 'Finalize Grant Applications & Document Verification'
      : profile.goal === 'internship' || profile.goal === 'first_job'
      ? 'Prepare 1-Page Resume & Apply to 3 Verified Opportunities'
      : 'Launch Freelance Profile / Certification & Next Milestone',
    description: 'Format a clean, professional 1-page mobile-friendly CV highlighting your newly built project, and submit to matched free opportunities.',
    estimatedWeeklyHours: Math.round(weeklyHours * 0.9),
    keyOutcome: 'Submit minimum 3 targeted applications or scholarship forms with zero application fees.',
    freeAlternativeTip: 'Never pay application or processing fees for jobs or government scholarships.',
    tasks: [
      {
        id: 'task-w4-1',
        title: 'Draft a Clean 1-Page Resume (Free Template)',
        description: 'Highlight your education, project link, key skills, and contact details without typos.',
        estimatedMinutes: 60,
        dataRequirement: 'LOW',
        cost: 'FREE',
        mobileFriendly: true,
        offlinePossible: true,
        completed: false,
      },
      {
        id: 'task-w4-2',
        title: 'Book a Free 1-on-1 Mentor Review or Peer Check',
        description: 'Get feedback on your resume from a mentor or friend before applying.',
        estimatedMinutes: 30,
        dataRequirement: 'LOW',
        cost: 'FREE',
        mobileFriendly: true,
        offlinePossible: true,
        completed: false,
      },
      {
        id: 'task-w4-3',
        title: 'Submit 3 Matched Applications on Udaan Explorer',
        description: 'Apply to opportunities tagged "GOOD FIT FOR YOU" in the Opportunity Explorer.',
        estimatedMinutes: 60,
        dataRequirement: 'LOW',
        cost: 'FREE',
        mobileFriendly: true,
        offlinePossible: true,
        completed: false,
      }
    ]
  });

  const budgetText = profile.monthlyBudget === 'zero' ? 'prefer 100% free resources' : `have a budget of ${profile.monthlyBudget.replace('_', ' ')}`;
  const timeText = TIME_LABELS[profile.dailyHours] || `${hoursPerDay} hours/day`;
  const deviceText = DEVICE_LABELS[profile.deviceAccess] || 'your current device';

  return {
    id: `roadmap-${Date.now()}`,
    createdAt: new Date().toISOString(),
    profileSummary: {
      interestName,
      goalName,
      hoursPerDay: timeText,
      budgetType: profile.monthlyBudget === 'zero' ? '₹0 (Free First)' : 'Low Budget',
      deviceType: deviceText,
    },
    headline: `Your 30-Day Step-by-Step Path to ${goalName}`,
    summaryText: `You're interested in ${interestName}, have about ${timeText}, rely on ${deviceText}, and ${budgetText}. Here's a realistic 30-day starting path built specifically around what works for YOU.`,
    weeks,
  };
}
