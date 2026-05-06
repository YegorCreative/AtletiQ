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

/* The 6 Preparation Pillars (Raw Inputs) */
export const mockPillarInputs = {
  training: { plannedLoad: 800, actualLoad: 780, consistency: 0.95 },
  recovery: { sleepAvg: 7.2, sleepTarget: 8, rhrTrend: 'stable' },
  nutrition: { qualityMeals: 15, totalMeals: 21, hydration: 6, hydrationTarget: 8, postWorkoutFueling: true },
  mobility: { sessionsPerWeek: 1, targetSessions: 4, soreness: 4, skippedCooldowns: 3 },
  strength: { sessions: 2, targetSessions: 2, progression: 'maintaining' },
  mental: { stressLevel: 2, motivationLevel: 4, reflectionsLogged: true },
};

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

/* Timeline events (Athlete Memory) */
export const mockTimelineEvents = [
  {
    id: 'evt_1',
    type: 'run',
    title: 'Morning Run completed',
    detail: '6.2 mi · 48:23 · Easy',
    time: 'Today, 6:30 AM',
    date: 'Today',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    id: 'evt_2',
    type: 'reflection',
    title: 'Evening Journal',
    detail: 'Mood: Focused · Stress: Low',
    quote: '"Felt unstoppable today. The new nutrition strategy finally clicked during the long run."',
    time: 'Yesterday, 8:00 PM',
    date: 'Yesterday',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  },
  {
    id: 'evt_3',
    type: 'milestone',
    title: 'Fastest 5k in 6 months',
    detail: 'Pace: 5:42/mi · HR Avg: 168 bpm',
    highlight: 'Breakthrough',
    time: 'Yesterday, 7:15 AM',
    date: 'Yesterday',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  },
  {
    id: 'evt_4',
    type: 'insight',
    title: 'Recovery Trend',
    detail: 'Your Resting HR dropped by 3bpm this week.',
    time: '2 days ago',
    date: 'April 14',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
  {
    id: 'evt_5',
    type: 'mobility',
    title: 'Mobility session',
    detail: 'Lower body · 15 min routine',
    time: '3 days ago',
    date: 'April 13',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  },
  {
    id: 'evt_6',
    type: 'milestone',
    title: 'Consistency Streak',
    detail: 'Hit 100% of planned workouts for 4 weeks.',
    highlight: 'Momentum',
    time: '1 week ago',
    date: 'April 8',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  }
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
