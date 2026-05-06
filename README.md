# AthletiQ

**Performance Intelligence for Elite Runners**

A mobile-first athletic performance tracking app built with HTML, CSS, and JavaScript. AthletiQ helps elite runners understand their training, recovery, sleep, soreness, hydration, and more through one connected athlete timeline.

## Core Philosophy

- **Understanding over vanity** - Real insights, not social comparison
- **Recovery matters** - Performance is built on proper recovery
- **Small actions compound** - Consistency and habits drive results
- **Premium experience** - Native app feel, minimal design

## Features

### Current Implementation

- 🎯 **Dashboard** - Daily readiness score and key metrics
- 📊 **Performance Metrics** - Training load, mental readiness, stress level, consistency
- 💆 **Recovery Focus** - Sleep, muscle recovery, nutrition, hydration, mental state, fatigue
- 📈 **Recent Activity** - Timeline preview of recent events and activities
- ✨ **Interactive UI** - Smooth animations and transitions
- 📱 **Mobile-First** - Optimized for phones, native app feel

### Planned Features

- 📅 **Timeline** - Detailed athlete activity timeline
- 🏋️ **Regimen** - Training plans and workouts
- 👤 **Profile** - Athlete profile and settings
- 🔧 **Settings** - App customization and preferences
- 📊 **Analytics** - Deep performance analysis
- 🐍 **Python Backend** - Advanced insights and predictions
- ⚡ **API Integration** - Flask/FastAPI backend
- ⚛️ **React Native** - Cross-platform native app

## Design System

### Colors

- **Background**: `#0B0F14` (Dark)
- **Card**: `#121821` (Slightly lighter)
- **Primary Green**: `#4ADE80` (Success/Active)
- **Secondary Green**: `#22C55E` (Hover)
- **Text**: `#F8FAFC` (Primary)
- **Subtext**: `#94A3B8` (Secondary)
- **Danger**: `#EF4444` (Alerts)
- **Warning**: `#FACC15` (Cautions)

### Typography

- Modern, clean, athletic
- System fonts for performance
- Generous spacing for premium feel

## Project Structure

```
AthletiQ/
├── index.html              # Main entry point
├── css/                    # Stylesheets
│   ├── variables.css       # Design tokens
│   ├── reset.css          # Base styles
│   ├── animations.css     # Transitions & keyframes
│   ├── components.css     # Reusable components
│   ├── responsive.css     # Media queries
│   ├── mobile.css         # Mobile optimizations
│   └── styles.css         # Main stylesheet
├── js/                    # JavaScript modules
│   ├── app.js            # App initialization
│   ├── router.js         # Client-side routing
│   ├── dashboard.js      # Dashboard view
│   ├── storage.js        # Local storage
│   ├── utils.js          # Utility functions
│   └── data/
│       └── mockData.js   # Mock athlete data
├── assets/               # Images, icons, logos
└── docs/                # Documentation
```

## Getting Started

### Installation

1. Clone the repository
2. Open `index.html` in a modern web browser
3. Start exploring the dashboard

### Browser Support

- iOS Safari 13+
- Chrome Mobile 80+
- Firefox Mobile 79+
- Samsung Internet 12+

### Mobile Optimization

- Safe area insets for notched devices
- Touch-friendly interface (44px+ tap targets)
- Smooth scrolling and animations
- Optimized for 375px - 480px screens

## Development

### Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Architecture**: Component-based, modular
- **Storage**: Local storage for persistence
- **Routing**: Client-side router

### CSS Architecture

- CSS Variables for theming
- Mobile-first responsive design
- Utility classes for rapid development
- Component system for reusability

### JavaScript Modules

- **app.js** - Main app controller
- **router.js** - Navigation system
- **dashboard.js** - Dashboard rendering
- **storage.js** - Data persistence
- **utils.js** - Utility functions
- **mockData.js** - Sample athlete data

## Future Enhancements

### Phase 2: Backend Integration

- Python analysis engine
- Flask/FastAPI REST API
- Database integration
- User authentication

### Phase 3: Advanced Features

- Machine learning predictions
- Social features (without vanity)
- Integration with wearables
- Advanced analytics

### Phase 4: Native Apps

- React Native conversion
- iOS and Android apps
- Push notifications
- Offline-first architecture

## Performance

- Lightweight (~100KB initial load)
- No external dependencies (pure vanilla)
- Fast animations at 60fps
- Optimized for cellular connections

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast dark mode

## License

All rights reserved. AthletiQ © 2024-2025

---

**Built for athletes who demand performance intelligence.**
