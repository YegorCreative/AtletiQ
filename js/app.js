/* ============================================
   AtletiQ Main Application
   ============================================ */

import { router } from './router.js';
import { dashboard } from './dashboard.js';
import { timeline } from './timeline.js';
import { fuel } from './fuel.js';
import { profile } from './profile.js';
import { stats } from './stats.js';
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
      this.updateHeader('fuel'); // Use a custom header title logic or update `titles` mapping
      fuel.init();
    });

    router.register('profile', () => {
      this.updateHeader('profile');
      profile.init();
    });

    router.register('stats', () => {
      this.updateHeader('stats');
      stats.init();
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
      prepare: 'Fuel Lens',
      fuel: 'Fuel Lens',
      stats: 'Statistics',
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
