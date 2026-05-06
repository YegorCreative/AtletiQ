/* ============================================
   AtletiQ Main Application
   ============================================ */

import { router } from './router.js';
import { dashboard } from './dashboard.js';
import { timeline } from './timeline.js';
import { storage } from './storage.js';

export class App {
  constructor() {
    this.initialized = false;
  }

  /**
   * Initialize the app
   */
  init() {
    if (this.initialized) return;

    this.setupRoutes();
    this.setupNavigation();
    this.setupEventListeners();

    // Navigate to dashboard
    router.navigate('dashboard');

    this.initialized = true;
    console.log('AtletiQ initialized');
  }

  /**
   * Register all routes
   */
  setupRoutes() {
    router.register('dashboard', () => {
      this.updateHeader('dashboard');
      dashboard.init();
    });

    router.register('timeline', () => {
      this.updateHeader('timeline');
      timeline.init();
    });

    router.register('prepare', () => {
      this.updateHeader('prepare');
      this.showPlaceholder(
        'Prepare',
        'Build your regimen. Track your habits. See your consistency.',
        `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>`,
      );
    });

    router.register('profile', () => {
      this.updateHeader('profile');
      this.showPlaceholder(
        'Profile',
        'Your performance record. Preparation, capability, and growth — all in one place.',
        `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>`,
      );
    });
  }

  /**
   * Setup bottom navigation
   */
  setupNavigation() {
    const navItems = document.querySelectorAll('.bottom-nav__item');

    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        const route = item.getAttribute('data-route');
        if (route && route !== router.getCurrentRoute()) {
          router.navigate(route);
          this.updateNavigation(route);
        }
      });
    });

    // Sync nav state on route change
    router.onChange((route) => {
      this.updateNavigation(route);
    });
  }

  /**
   * Update nav active state
   */
  updateNavigation(route) {
    const navItems = document.querySelectorAll('.bottom-nav__item');
    navItems.forEach((item) => {
      const itemRoute = item.getAttribute('data-route');
      if (itemRoute === route) {
        item.classList.add('active');
        item.setAttribute('aria-selected', 'true');
      } else {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      }
    });
  }

  /**
   * Update header based on route
   */
  updateHeader(route) {
    const greetEl = document.getElementById('header-greeting');
    const dateEl = document.getElementById('header-date');

    if (route === 'dashboard') {
      // Dashboard updates its own header
      return;
    }

    // For other routes, show route name
    const titles = {
      timeline: 'Timeline',
      prepare: 'Prepare',
      profile: 'Profile',
    };

    if (greetEl) greetEl.textContent = titles[route] || route;
    if (dateEl) {
      const now = new Date();
      dateEl.textContent = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
      });
    }
  }

  /**
   * Show placeholder for upcoming views
   */
  showPlaceholder(title, description, iconSvg) {
    const el = document.querySelector('.app-content__inner');
    if (!el) return;

    el.innerHTML = `
      <div class="empty-state page-enter">
        <div class="empty-state__icon">${iconSvg}</div>
        <div class="empty-state__title">${title}</div>
        <div class="empty-state__description">${description}</div>
        <button class="btn btn-secondary" style="margin-top:var(--space-4);">Coming Soon</button>
      </div>
    `;
  }

  /**
   * Setup global event listeners
   */
  setupEventListeners() {
    // Handle visibility changes
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        // Refresh on return
        console.log('App foregrounded');
      }
    });

    // Profile button
    const profileBtn = document.getElementById('profile-btn');
    if (profileBtn) {
      profileBtn.addEventListener('click', () => {
        router.navigate('profile');
        this.updateNavigation('profile');
      });
    }
  }
}

// Create app instance
export const app = new App();

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}
