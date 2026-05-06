/* ============================================
   AtletiQ Mock Data — Elite Runner
   ============================================ */

export const mockAthlete = {
  id: 'athlete_001',
  name: 'Alex',
  fullName: 'Alex Rivera',
  role: 'Elite Runner',
  event: '800m / 1500m',
  level: 'Collegiate',
  team: 'St. Thomas',
  pbs: { '800m': '1:52.4', '1500m': '3:56.1' },
  avatar: null,
};

/* The 6 Preparation Pillars */
export const mockPreparation = [
  {
    id: 'training',
    label: 'Training',
    question: 'Did you complete your planned work?',
    score: 85,
    status: 'strong',
    color: 'green',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    id: 'recovery',
    label: 'Recovery',
    question: 'Are you sleeping and recovering enough?',
    score: 78,
    status: 'good',
    color: 'green',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>`,
  },
  {
    id: 'nutrition',
    label: 'Nutrition',
    question: 'Are you fueling your body properly?',
    score: 52,
    status: 'moderate',
    color: 'yellow',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>`,
  },
  {
    id: 'mobility',
    label: 'Mobility',
    question: 'Are you maintaining movement quality?',
    score: 28,
    status: 'low',
    color: 'red',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  },
  {
    id: 'strength',
    label: 'Strength',
    question: 'Are you building stability and durability?',
    score: 72,
    status: 'good',
    color: 'green',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" y1="21" x2="20" y2="21"/><line x1="12" y1="16" x2="12" y2="21"/></svg>`,
  },
  {
    id: 'mental',
    label: 'Mental Readiness',
    question: 'Are you focused and emotionally ready?',
    score: 80,
    status: 'good',
    color: 'green',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"/><path d="M12 8v4l3 3"/></svg>`,
  },
];

/* Daily readiness + causal insight */
export const mockReadiness = {
  score: 72,
  trend: 'up',
  label: 'Good',
  insight: {
    headline: "Here's why you feel this way",
    reasons: [
      { signal: 'Sleep dropped', detail: '6h 20m vs 8h avg', impact: 'negative' },
      { signal: 'Training load spiked', detail: '9.1/10 yesterday', impact: 'negative' },
      { signal: 'Hydration was low', detail: '4 glasses vs 8 goal', impact: 'negative' },
    ],
    positive: [
      { signal: 'Soreness is low', detail: '2/5', impact: 'positive' },
      { signal: 'Mental readiness high', detail: 'Focused & motivated', impact: 'positive' },
    ],
  },
};

/* Daily check-in signals */
export const mockDailyCheckin = {
  completed: true,
  timestamp: new Date().toISOString(),
  signals: {
    sleep: { value: 6.3, unit: 'hrs', label: 'Sleep' },
    restingHR: { value: 52, unit: 'bpm', label: 'Resting HR' },
    weight: { value: 156.2, unit: 'lbs', label: 'Weight' },
    trainingLoad: { value: 'hard', label: 'Training' },
    soreness: { value: 2, max: 5, label: 'Soreness' },
    mood: { value: 4, max: 5, label: 'Mood' },
  },
};

/* Today's actions */
export const mockTodayActions = [
  {
    id: 'action_1',
    title: 'Complete mobility routine',
    subtitle: '15 min hip & ankle work',
    category: 'mobility',
    completed: false,
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  },
  {
    id: 'action_2',
    title: 'Hydrate with electrolytes',
    subtitle: 'Hydration was low yesterday',
    category: 'nutrition',
    completed: false,
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  },
  {
    id: 'action_3',
    title: 'Log evening reflection',
    subtitle: 'How did today go?',
    category: 'mental',
    completed: false,
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  },
  {
    id: 'action_4',
    title: 'Eat recovery meal after workout',
    subtitle: 'Protein + carbs within 30 min',
    category: 'nutrition',
    completed: true,
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  },
];

/* Timeline events */
export const mockTimelineEvents = [
  {
    id: 'evt_1',
    type: 'run',
    title: 'Morning Run completed',
    detail: '6.2 mi · 48:23 · Easy',
    time: 'Today, 6:30 AM',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    id: 'evt_2',
    type: 'checkin',
    title: 'Sleep improved',
    detail: 'Quality score: 88 · +45m deep sleep',
    time: 'Today, 6:15 AM',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  },
  {
    id: 'evt_3',
    type: 'mobility',
    title: 'Mobility session',
    detail: 'Lower body · 15 min routine',
    time: 'Today, 8:00 AM',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  },
  {
    id: 'evt_4',
    type: 'nutrition',
    title: 'Hydration low',
    detail: '4 glasses vs 8 target',
    time: 'Yesterday, 9:00 PM',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  },
];

/* Regimen habits */
export const mockRegimen = [
  { id: 'hab_1', name: 'Core routine', streak: 24, frequency: '6/7 days', active: true },
  { id: 'hab_2', name: 'Hydration 8+ glasses', streak: 5, frequency: '5/7 days', active: true },
  { id: 'hab_3', name: 'Sleep 8+ hours', streak: 3, frequency: '3/7 days', active: true },
  { id: 'hab_4', name: 'Mobility work', streak: 0, frequency: '1/7 days', active: true },
  { id: 'hab_5', name: 'Recovery meal', streak: 12, frequency: '7/7 days', active: true },
];

/* Weekly data */
export const mockWeekData = {
  monday:    { training: 8.5, recovery: 7.5, sleep: 8.0 },
  tuesday:   { training: 7.2, recovery: 8.0, sleep: 8.5 },
  wednesday: { training: 9.0, recovery: 6.5, sleep: 7.5 },
  thursday:  { training: 6.8, recovery: 8.2, sleep: 8.2 },
  friday:    { training: 8.1, recovery: 7.8, sleep: 8.0 },
  saturday:  { training: 7.5, recovery: 9.0, sleep: 9.0 },
  sunday:    { training: 5.0, recovery: 9.5, sleep: 8.5 },
};

/* New data structures for revised app direction */
export const mockTodaysFocus = {
  title: "Today's Focus",
  biggestOpportunity: "Mobility + Sleep Consistency",
  supportingText: "Small improvements here will have the biggest impact on your preparation.",
  preparationStatus: "Building",
  recoveryStatus: "Good",
};

export const mockPreparationPillars = [
  {
    id: 'pillar_1',
    name: 'Training',
    status: 'Good',
    progress: 85,
    explanation: 'Consistent training builds aerobic base and strength.',
    opportunity: 'Medium',
  },
  {
    id: 'pillar_2',
    name: 'Recovery',
    status: 'Good',
    progress: 90,
    explanation: 'Quality recovery enables consistent performance.',
    opportunity: 'Low',
  },
  {
    id: 'pillar_3',
    name: 'Nutrition',
    status: 'Moderate',
    progress: 65,
    explanation: 'Proper fueling supports training and recovery.',
    opportunity: 'High',
  },
  {
    id: 'pillar_4',
    name: 'Mobility',
    status: 'Low',
    progress: 40,
    explanation: 'Mobility improves durability, movement quality, and injury prevention.',
    opportunity: 'High',
    eliteBenchmark: '4–6 sessions/week',
    yourConsistency: '2/week',
  },
  {
    id: 'pillar_5',
    name: 'Strength',
    status: 'Moderate',
    progress: 70,
    explanation: 'Strength training enhances power and injury resilience.',
    opportunity: 'Medium',
  },
  {
    id: 'pillar_6',
    name: 'Mental Readiness',
    status: 'Good',
    progress: 80,
    explanation: 'Mental preparation optimizes focus and motivation.',
    opportunity: 'Low',
  },
];

export const mockAthleteIQ = [
  {
    id: 'iq_1',
    pillar: 'Mobility',
    whyItMatters: 'Mobility improves durability, movement efficiency, and injury prevention.',
    elitePriorities: '4–6 short mobility sessions per week',
    yourConsistency: '2 sessions/week',
    opportunity: 'High',
  },
  {
    id: 'iq_2',
    pillar: 'Sleep',
    whyItMatters: 'Quality sleep enhances recovery, learning, and performance.',
    elitePriorities: '7–9 hours of consistent sleep',
    yourConsistency: '6–8 hours, inconsistent',
    opportunity: 'High',
  },
  {
    id: 'iq_3',
    pillar: 'Nutrition',
    whyItMatters: 'Proper fueling supports energy, recovery, and adaptation.',
    elitePriorities: 'Balanced macros, timing around workouts',
    yourConsistency: 'Good post-workout, inconsistent breakfast',
    opportunity: 'Medium',
  },
];

export const mockTodaysActions = {
  completed: 1,
  total: 4,
  actions: [
    {
      id: 'action_1',
      title: 'Complete 12 minute mobility routine',
      why: 'Mobility is your biggest current opportunity',
      completed: true,
    },
    {
      id: 'action_2',
      title: 'Hydrate with electrolytes',
      why: 'Hydration was low yesterday',
      completed: false,
    },
    {
      id: 'action_3',
      title: 'Log remaining meals',
      why: 'Nutrition data is incomplete',
      completed: false,
    },
    {
      id: 'action_4',
      title: 'Evening review',
      why: 'Confirm today\'s inputs before tomorrow',
      completed: false,
    },
  ],
};
