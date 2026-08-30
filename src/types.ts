/**
 * Core domain types for UDAAN - Next Opportunity Navigator
 */

export interface User {
  id: string;
  email: string;
  name: string;
  provider: 'email' | 'google' | 'demo';
  createdAt: string;
  avatar?: string;
  hasCompletedOnboarding?: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export type AuthMode = 'login' | 'signup' | 'forgot_password';

export type PrimaryGoal = 
  | 'first_job'
  | 'new_skill'
  | 'internship'
  | 'scholarship'
  | 'freelancing'
  | 'continue_education';

export type EducationLevel = 
  | 'below_10th'
  | '10th_pass'
  | '12th_pass'
  | 'diploma_polytechnic'
  | 'undergraduate_enrolled'
  | 'graduate'
  | 'self_taught';

export type CareerInterest = 
  | 'web_tech'
  | 'digital_marketing'
  | 'data_office_skills'
  | 'graphic_design'
  | 'healthcare_support'
  | 'vocational_trades'
  | 'government_exams'
  | 'customer_support';

export type DailyHours = '1_hour' | '2_hours' | '3_to_4_hours' | '5_plus_hours';

export type MonthlyBudget = 'zero' | 'under_500' | 'under_2000' | 'flexible';

export type InternetAccess = 'limited_mobile_data' | 'daily_mobile_1_5gb' | 'unlimited_wifi';

export type DeviceAccess = 'basic_smartphone' | 'shared_family_phone' | 'laptop_pc' | 'cyber_cafe_library';

export type SkillLevel = 'beginner' | 'some_basics' | 'intermediate';

export type AppLanguage = 'en' | 'hi' | 'ta';

export interface UserProfile {
  age?: number | string;
  goal: PrimaryGoal;
  educationLevel: EducationLevel;
  careerInterest: CareerInterest;
  skillLevel: SkillLevel;
  dailyHours: DailyHours;
  monthlyBudget: MonthlyBudget;
  internetAccess: InternetAccess;
  deviceAccess: DeviceAccess;
  createdAt: string;
}

export type OpportunityCategory = 
  | 'scholarships'
  | 'jobs'
  | 'internships'
  | 'free_courses'
  | 'mentorship'
  | 'skill_programs';

export type OpportunityCost = 'free' | 'under_500' | 'paid';
export type OpportunityData = 'low_data' | 'normal_data';
export type OpportunityFormat = 'online' | 'offline' | 'hybrid';
export type OpportunityLevel = 'beginner' | 'intermediate' | 'advanced';
export type OpportunityLocation = 'online' | 'local_pan_india' | 'metro_cities';

export interface FreeAlternative {
  title: string;
  provider: string;
  cost: 'FREE';
  dataRequirement: 'LOW' | 'NORMAL';
  description: string;
  actionUrl?: string;
}

export interface Opportunity {
  id: string;
  title: string;
  category: OpportunityCategory;
  provider: string;
  cost: OpportunityCost;
  costLabel: string;
  timeCommitment: string;
  dataRequirement: OpportunityData;
  format: OpportunityFormat;
  level: OpportunityLevel;
  location: OpportunityLocation;
  locationLabel: string;
  url: string;
  source: string;
  whyItFits?: string;
  deadline?: string;
  description: string;
  eligibility: string[];
  skillsTaught: string[];
  mobileFriendly: boolean;
  language: string;
  howToApply: string;
  isDemo?: boolean;
  freeAlternative?: FreeAlternative;
}

export interface RoadmapTask {
  id: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  dataRequirement: 'LOW' | 'NORMAL';
  cost: 'FREE' | 'LOW';
  mobileFriendly: boolean;
  offlinePossible: boolean;
  completed: boolean;
  actionGuide?: string;
}

export interface RoadmapWeek {
  weekNumber: number;
  stageName: 'Discover' | 'Learn' | 'Practice' | 'Build' | 'Launch';
  title: string;
  description: string;
  estimatedWeeklyHours: number;
  tasks: RoadmapTask[];
  keyOutcome: string;
  freeAlternativeTip?: string;
}

export interface UserRoadmap {
  id: string;
  createdAt: string;
  profileSummary: {
    interestName: string;
    goalName: string;
    hoursPerDay: string;
    budgetType: string;
    deviceType: string;
  };
  headline: string;
  summaryText: string;
  weeks: RoadmapWeek[];
}

export interface AffordabilityAssessment {
  status: 'GOOD_MATCH' | 'POTENTIAL_FIT' | 'MAY_NOT_FIT';
  score: number; // 0 to 100
  criteria: {
    cost: { status: 'pass' | 'warn' | 'fail'; label: string; detail: string };
    data: { status: 'pass' | 'warn' | 'fail'; label: string; detail: string };
    time: { status: 'pass' | 'warn' | 'fail'; label: string; detail: string };
    device: { status: 'pass' | 'warn' | 'fail'; label: string; detail: string };
    language: { status: 'pass' | 'warn' | 'fail'; label: string; detail: string };
  };
  empowermentNote: string;
  freeAlternative?: FreeAlternative;
}

export interface AccessibilitySettings {
  textSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  reducedMotion: boolean;
  lowDataMode: boolean;
  language: AppLanguage;
}

export interface JourneyState {
  currentStageIndex: number;
  completedTaskIds: string[];
  bookmarkedOpportunityIds: string[];
  appliedOpportunityIds: string[];
  notes: Record<string, string>;
  lastActiveDate: string;
}
