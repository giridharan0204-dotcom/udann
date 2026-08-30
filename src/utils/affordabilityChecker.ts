import { Opportunity, UserProfile, AffordabilityAssessment } from '../types';

export function evaluateAffordability(
  opportunity: Opportunity,
  profile: UserProfile | null
): AffordabilityAssessment {
  // If user has not completed onboarding, provide a baseline assessment
  if (!profile) {
    const isFree = opportunity.cost === 'free';
    const isLowData = opportunity.dataRequirement === 'low_data';
    const isMobile = opportunity.mobileFriendly;

    return {
      status: isFree && isMobile ? 'GOOD_MATCH' : 'POTENTIAL_FIT',
      score: isFree ? 95 : 60,
      criteria: {
        cost: {
          status: isFree ? 'pass' : 'warn',
          label: isFree ? '100% Free' : opportunity.costLabel,
          detail: isFree ? 'Zero fees required' : 'May have associated course or application fees',
        },
        data: {
          status: isLowData ? 'pass' : 'warn',
          label: isLowData ? 'Low Data Usage' : 'Standard Data',
          detail: isLowData ? 'Uses < 20MB per session' : 'Best with regular data or WiFi',
        },
        time: {
          status: 'pass',
          label: opportunity.timeCommitment,
          detail: 'Check weekly schedule commitment',
        },
        device: {
          status: isMobile ? 'pass' : 'warn',
          label: isMobile ? 'Mobile Compatible' : 'Computer Recommended',
          detail: isMobile ? 'Works seamlessly on any smartphone' : 'Requires desktop or laptop',
        },
        language: {
          status: 'pass',
          label: opportunity.language,
          detail: 'Multiple regional language support options',
        },
      },
      empowermentNote: isFree 
        ? 'This opportunity is free and accessible on mobile devices.' 
        : 'Compare this with free community-supported alternatives below.',
      freeAlternative: opportunity.freeAlternative,
    };
  }

  // Evaluate each dimension against user profile
  let score = 100;
  let hasFail = false;
  let hasWarn = false;

  // 1. Cost evaluation
  let costStatus: 'pass' | 'warn' | 'fail' = 'pass';
  let costDetail = 'Matches your zero-cost / affordable preference perfectly.';
  
  if (opportunity.cost === 'paid') {
    if (profile.monthlyBudget === 'zero' || profile.monthlyBudget === 'under_500') {
      costStatus = 'fail';
      hasFail = true;
      score -= 40;
      costDetail = 'This option has tuition fees. We found an equivalent 100% free alternative below.';
    } else {
      costStatus = 'warn';
      hasWarn = true;
      score -= 15;
      costDetail = 'Requires a financial investment. Verify if fee waivers are available.';
    }
  } else if (opportunity.cost === 'under_500' && profile.monthlyBudget === 'zero') {
    costStatus = 'warn';
    hasWarn = true;
    score -= 15;
    costDetail = 'Has a small fee under ₹500, but free alternatives exist.';
  }

  // 2. Data evaluation
  let dataStatus: 'pass' | 'warn' | 'fail' = 'pass';
  let dataDetail = 'Optimized for mobile data saver and low bandwidth.';

  if (opportunity.dataRequirement === 'normal_data') {
    if (profile.internetAccess === 'limited_mobile_data') {
      dataStatus = 'fail';
      hasFail = true;
      score -= 25;
      dataDetail = 'Involves video streams. You can request text summaries or offline PDFs.';
    } else if (profile.internetAccess === 'daily_mobile_1_5gb') {
      dataStatus = 'warn';
      hasWarn = true;
      score -= 10;
      dataDetail = 'Uses standard video data. Recommend downloading materials during off-peak hours.';
    }
  }

  // 3. Device evaluation
  let deviceStatus: 'pass' | 'warn' | 'fail' = 'pass';
  let deviceDetail = 'Fully usable on your current smartphone.';

  if (!opportunity.mobileFriendly) {
    if (profile.deviceAccess === 'basic_smartphone' || profile.deviceAccess === 'shared_family_phone') {
      deviceStatus = 'fail';
      hasFail = true;
      score -= 30;
      deviceDetail = 'Best experienced on a computer. Check local cyber cafes or our smartphone-optimized alternative.';
    } else if (profile.deviceAccess === 'cyber_cafe_library') {
      deviceStatus = 'warn';
      hasWarn = true;
      score -= 10;
      deviceDetail = 'Can be completed during your scheduled visits to a local computer lab or cyber cafe.';
    }
  }

  // 4. Time commitment
  let timeStatus: 'pass' | 'warn' | 'fail' = 'pass';
  let timeDetail = 'Fits comfortably within your daily available study time.';

  if (opportunity.timeCommitment.toLowerCase().includes('full-time') || opportunity.timeCommitment.toLowerCase().includes('20 hours')) {
    if (profile.dailyHours === '1_hour' || profile.dailyHours === '2_hours') {
      timeStatus = 'warn';
      hasWarn = true;
      score -= 15;
      timeDetail = 'Requires more hours than your current 1-2 hours/day. You can break it into smaller milestones.';
    }
  }

  // 5. Language accessibility
  const langStatus: 'pass' | 'warn' | 'fail' = 'pass';
  const langDetail = `Available in ${opportunity.language}.`;

  // Final status calculation
  let overallStatus: 'GOOD_MATCH' | 'POTENTIAL_FIT' | 'MAY_NOT_FIT' = 'GOOD_MATCH';
  let empowermentNote = 'Great match for your daily time, current device, and budget!';

  if (hasFail) {
    overallStatus = 'MAY_NOT_FIT';
    empowermentNote = 'This option may not fit your current budget or device setup right now. Take a look at the free, mobile-friendly alternatives below.';
  } else if (hasWarn || score < 80) {
    overallStatus = 'POTENTIAL_FIT';
    empowermentNote = 'This opportunity is manageable with slight adjustments to your weekly schedule or data plan.';
  }

  return {
    status: overallStatus,
    score: Math.max(20, Math.min(100, score)),
    criteria: {
      cost: {
        status: costStatus,
        label: opportunity.cost === 'free' ? '100% Free' : opportunity.costLabel,
        detail: costDetail,
      },
      data: {
        status: dataStatus,
        label: opportunity.dataRequirement === 'low_data' ? 'Low Data (Offline-ready)' : 'Standard Video Data',
        detail: dataDetail,
      },
      time: {
        status: timeStatus,
        label: opportunity.timeCommitment,
        detail: timeDetail,
      },
      device: {
        status: deviceStatus,
        label: opportunity.mobileFriendly ? 'Smartphone Friendly' : 'Laptop / PC Preferred',
        detail: deviceDetail,
      },
      language: {
        status: langStatus,
        label: opportunity.language,
        detail: langDetail,
      },
    },
    empowermentNote,
    freeAlternative: opportunity.freeAlternative,
  };
}
