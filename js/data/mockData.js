/* ============================================
   AthletiQ Mock Data
   Realistic athlete performance data
   ============================================ */

export const mockAthlete = {
  id: 'athlete_001',
  name: 'Alex Rivera',
  role: 'Elite Runner',
  specialty: '5K / 10K',
  profileImage: '👤',
};

export const mockDailyReadiness = {
  score: 72,
  trend: 'up',
  factors: {
    sleep: {
      label: 'Sleep',
      value: '8h 12m',
      status: 'good',
      detail: '+42 min from avg',
      emoji: '😴',
    },
    recovery: {
      label: 'Recovery',
      value: 'Good',
      status: 'good',
      detail: 'Well recovered',
      emoji: '✅',
    },
    hydration: {
      label: 'Hydration',
      value: 'Moderate',
      status: 'warning',
      detail: '+2 more glasses',
      emoji: '💧',
    },
    soreness: {
      label: 'Soreness',
      value: 'Low',
      status: 'good',
      detail: 'Minimal muscle tension',
      emoji: '💪',
    },
  },
};

export const mockPerformanceMetrics = [
  {
    id: 'metric_1',
    label: 'Training Load',
    value: '8.2',
    unit: '/10',
    status: 'good',
    trend: 'up',
    detail: 'High intensity session',
    icon: '⚡',
  },
  {
    id: 'metric_2',
    label: 'Mental Ready',
    value: '8.5',
    unit: '/10',
    status: 'good',
    trend: 'up',
    detail: 'Focused and motivated',
    icon: '🧠',
  },
  {
    id: 'metric_3',
    label: 'Stress Level',
    value: '3.2',
    unit: '/10',
    status: 'good',
    trend: 'down',
    detail: 'Low stress, well managed',
    icon: '😌',
  },
  {
    id: 'metric_4',
    label: 'Consistency',
    value: '94%',
    unit: 'this week',
    status: 'good',
    trend: 'up',
    detail: '6 of 6 planned sessions',
    icon: '📊',
  },
];

export const mockTimelineEvents = [
  {
    id: 'event_1',
    title: 'Morning Run Completed',
    meta: 'Today, 6:30 AM',
    description: '6.2 miles • Moderate effort • 48 min 23 sec',
    type: 'completed',
    category: 'training',
    emoji: '🏃',
  },
  {
    id: 'event_2',
    title: 'Sleep Improved',
    meta: 'Last night',
    description: '8h 12m • +42 min from average',
    type: 'good',
    category: 'recovery',
    emoji: '😴',
  },
  {
    id: 'event_3',
    title: 'Mobility Session',
    meta: 'Yesterday, 7:00 PM',
    description: '15 min hip mobility • 8 min foam rolling',
    type: 'completed',
    category: 'recovery',
    emoji: '🧘',
  },
  {
    id: 'event_4',
    title: 'Hydration Low',
    meta: 'Today, 2:30 PM',
    description: 'Increase electrolyte intake • Consider extra water',
    type: 'alert',
    category: 'nutrition',
    emoji: '💧',
  },
  {
    id: 'event_5',
    title: 'Strength Session',
    meta: '2 days ago',
    description: 'Lower body • 45 min • High intensity',
    type: 'completed',
    category: 'training',
    emoji: '💪',
  },
];

export const mockRecoveryAreas = [
  {
    id: 'recovery_1',
    title: 'Sleep Quality',
    detail: '8h 12m last night',
    status: 'good',
    emoji: '🛏️',
  },
  {
    id: 'recovery_2',
    title: 'Muscle Recovery',
    detail: 'Minimal soreness',
    status: 'good',
    emoji: '💪',
  },
  {
    id: 'recovery_3',
    title: 'Nutrition Status',
    detail: 'Well fueled',
    status: 'good',
    emoji: '🥗',
  },
  {
    id: 'recovery_4',
    title: 'Hydration Level',
    detail: 'Moderate - add 2 glasses',
    status: 'moderate',
    emoji: '💧',
  },
  {
    id: 'recovery_5',
    title: 'Mental State',
    detail: 'Focused and motivated',
    status: 'good',
    emoji: '🧠',
  },
  {
    id: 'recovery_6',
    title: 'Fatigue Level',
    detail: 'Low fatigue',
    status: 'good',
    emoji: '⚡',
  },
];

export const mockActionItems = [
  {
    id: 'action_1',
    title: 'Schedule Rest Day',
    description: 'Consider recovery activities',
    icon: '📅',
  },
  {
    id: 'action_2',
    title: 'Log Today\'s Workout',
    description: 'Complete training entry',
    icon: '✍️',
  },
  {
    id: 'action_3',
    title: 'Review Recovery Metrics',
    description: 'Check detailed analysis',
    icon: '📈',
  },
];

export const mockWeekData = {
  monday: { training: 8.5, recovery: 7.5, sleep: 8 },
  tuesday: { training: 7.2, recovery: 8.0, sleep: 8.5 },
  wednesday: { training: 9.0, recovery: 6.5, sleep: 7.5 },
  thursday: { training: 6.8, recovery: 8.2, sleep: 8.2 },
  friday: { training: 8.1, recovery: 7.8, sleep: 8.0 },
  saturday: { training: 7.5, recovery: 9.0, sleep: 9.0 },
  sunday: { training: 5.0, recovery: 9.5, sleep: 8.5 },
};

export const mockInsights = [
  {
    title: 'Performance is not random',
    description: 'Your training shows correlation with recovery practices',
  },
  {
    title: 'Recovery matters',
    description: 'Days with 8+ hours of sleep show 12% better performance',
  },
  {
    title: 'Consistency matters',
    description: 'You\'ve maintained 94% consistency this week',
  },
  {
    title: 'Small actions compound',
    description: 'Hydration improvements correlate with reduced soreness',
  },
];
