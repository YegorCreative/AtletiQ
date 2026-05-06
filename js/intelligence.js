/* ============================================
   AtletiQ Intelligence Engine
   Calculates scores, statuses, and reasoning based on raw inputs.
   ============================================ */

export const IntelligenceEngine = {
  /**
   * Evaluates all preparation pillars based on their raw inputs.
   * @param {Object} inputs - Raw input data for each pillar.
   * @returns {Array} - Array of evaluated pillar objects ready for UI.
   */
  evaluatePreparation(inputs) {
    return [
      this.evaluateTraining(inputs.training),
      this.evaluateRecovery(inputs.recovery),
      this.evaluateNutrition(inputs.nutrition),
      this.evaluateMobility(inputs.mobility),
      this.evaluateStrength(inputs.strength),
      this.evaluateMental(inputs.mental),
    ];
  },

  evaluateTraining(data) {
    // Formula: Consistency (50%) + Volume Adherence (50%)
    const volumeRatio = Math.min(data.actualLoad / data.plannedLoad, 1);
    const score = Math.round((data.consistency * 50) + (volumeRatio * 50));
    
    let status, color, reasoning;
    if (score >= 85) {
      status = 'strong'; color = 'green';
      reasoning = 'You are hitting your planned volume consistently.';
    } else if (score >= 70) {
      status = 'good'; color = 'green';
      reasoning = 'Training is on track, with minor deviations from plan.';
    } else if (score >= 50) {
      status = 'moderate'; color = 'yellow';
      reasoning = 'Training consistency is slipping. Try to stick closer to the plan.';
    } else {
      status = 'low'; color = 'red';
      reasoning = 'Significant missed volume. Focus on completing core sessions.';
    }

    return {
      id: 'training',
      label: 'Training',
      score, status, color, reasoning,
      inputs: data,
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    };
  },

  evaluateRecovery(data) {
    // Formula: Sleep Adherence (70%) + RHR trend (30%)
    const sleepRatio = Math.min(data.sleepAvg / data.sleepTarget, 1);
    const rhrScore = data.rhrTrend === 'stable' ? 30 : (data.rhrTrend === 'improving' ? 35 : 10);
    const score = Math.min(Math.round((sleepRatio * 70) + rhrScore), 100);

    let status, color, reasoning;
    if (score >= 85) {
      status = 'strong'; color = 'green';
      reasoning = 'Sleep is optimal and resting heart rate is stable/improving.';
    } else if (score >= 70) {
      status = 'good'; color = 'green';
      reasoning = 'Recovery is solid, but sleep could be slightly longer.';
    } else if (score >= 50) {
      status = 'moderate'; color = 'yellow';
      reasoning = 'Sleep debt is accumulating. Prioritize rest tonight.';
    } else {
      status = 'low'; color = 'red';
      reasoning = 'Recovery compromised. RHR is elevated and sleep is poor.';
    }

    return {
      id: 'recovery',
      label: 'Recovery',
      score, status, color, reasoning,
      inputs: data,
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>`,
    };
  },

  evaluateNutrition(data) {
    // Formula: Quality Meals (40%) + Hydration (40%) + Timing (20%)
    const mealScore = (data.qualityMeals / data.totalMeals) * 40;
    const hydrationScore = Math.min(data.hydration / data.hydrationTarget, 1) * 40;
    const timingScore = data.postWorkoutFueling ? 20 : 0;
    const score = Math.round(mealScore + hydrationScore + timingScore);

    let status, color, reasoning;
    if (score >= 80) {
      status = 'strong'; color = 'green';
      reasoning = 'Fueling and hydration are on point.';
    } else if (score >= 60) {
      status = 'moderate'; color = 'yellow';
      reasoning = 'Decent fueling, but missed post-workout recovery window.';
    } else {
      status = 'low'; color = 'red';
      reasoning = 'Hydration and meal quality are dropping. Refuel properly.';
    }

    return {
      id: 'nutrition',
      label: 'Nutrition',
      score, status, color, reasoning,
      inputs: data,
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>`,
    };
  },

  evaluateMobility(data) {
    // Formula: Consistency (50%) - SorenessPenalty (25%) - SkippedCooldownPenalty (25%)
    const consistency = Math.min(data.sessionsPerWeek / data.targetSessions, 1) * 50;
    const sorenessPenalty = (data.soreness / 5) * 25; 
    const skippedPenalty = Math.min(data.skippedCooldowns * 10, 25);
    const score = Math.max(Math.round(consistency + 50 - sorenessPenalty - skippedPenalty), 0);

    let status, color, reasoning;
    if (score >= 80) {
      status = 'strong'; color = 'green';
      reasoning = 'Movement quality is high. Keep up the routines.';
    } else if (score >= 60) {
      status = 'moderate'; color = 'yellow';
      reasoning = 'Slight stiffness. Don\'t skip your cooldowns.';
    } else {
      status = 'low'; color = 'red';
      reasoning = `Attention needed: You skipped ${data.skippedCooldowns} cooldowns and soreness is high.`;
    }

    return {
      id: 'mobility',
      label: 'Mobility',
      score, status, color, reasoning,
      inputs: data,
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    };
  },

  evaluateStrength(data) {
    // Formula: Sessions (60%) + Progression (40%)
    const sessionsScore = Math.min(data.sessions / data.targetSessions, 1) * 60;
    const progressionScore = data.progression === 'increasing' ? 40 : (data.progression === 'maintaining' ? 30 : 10);
    const score = Math.round(sessionsScore + progressionScore);

    let status, color, reasoning;
    if (score >= 80) {
      status = 'strong'; color = 'green';
      reasoning = 'Strength is building well with progressive overload.';
    } else if (score >= 60) {
      status = 'good'; color = 'green';
      reasoning = 'Maintaining strength base. No red flags.';
    } else {
      status = 'moderate'; color = 'yellow';
      reasoning = 'Missed strength sessions. Stability is at risk.';
    }

    return {
      id: 'strength',
      label: 'Strength',
      score, status, color, reasoning,
      inputs: data,
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" y1="21" x2="20" y2="21"/><line x1="12" y1="16" x2="12" y2="21"/></svg>`,
    };
  },

  evaluateMental(data) {
    // Formula: Stress (40%) + Motivation (40%) + Reflection Consistency (20%)
    // Assuming stress is 1 (low) to 5 (high), motivation is 1 (low) to 5 (high)
    const stressScore = ((5 - data.stressLevel) / 4) * 40; 
    const motivationScore = ((data.motivationLevel - 1) / 4) * 40;
    const reflectionScore = data.reflectionsLogged ? 20 : 0;
    const score = Math.max(Math.round(stressScore + motivationScore + reflectionScore), 0);

    let status, color, reasoning;
    if (score >= 80) {
      status = 'strong'; color = 'green';
      reasoning = 'Emotionally resilient and focused.';
    } else if (score >= 60) {
      status = 'good'; color = 'green';
      reasoning = 'Handling training load well mentally.';
    } else if (score >= 40) {
      status = 'moderate'; color = 'yellow';
      reasoning = 'Stress is accumulating. Make time to decompress.';
    } else {
      status = 'low'; color = 'red';
      reasoning = 'High stress and low motivation. Psychological burnout risk.';
    }

    return {
      id: 'mental',
      label: 'Mental Readiness',
      score, status, color, reasoning,
      inputs: data,
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"/><path d="M12 8v4l3 3"/></svg>`,
    };
  }
};
