/* ============================================
   AthletiQ Main Application
   App initialization and management
   ============================================ */

import { router } from './router.js';
import { dashboard } from './dashboard.js';
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
    this.setupEventListeners();
    this.setupNavigation();
    this.navigateToDashboard();

    this.initialized = true;
    console.log('AthletiQ app initialized');
  }

  /**
   * Setup all routes
   */
  setupRoutes() {
    router.register('dashboard', () => {
      this.updatePageTitle('Dashboard');
      dashboard.init();
    });

    router.register('timeline', () => {
      this.updatePageTitle('Timeline');
      this.showPlaceholder('Timeline view coming soon');
    });

    router.register('recovery', () => {
      this.updatePageTitle('Recovery');
      this.showPlaceholder('Recovery view coming soon');
    });

    router.register('regimen', () => {
      this.updatePageTitle('Regimen');
      this.showPlaceholder('Regimen view coming soon');
    });

    router.register('profile', () => {
      this.updatePageTitle('Profile');
      this.showPlaceholder('Profile view coming soon');
    });
  }

  /**
   * Setup global event listeners
   */
  setupEventListeners() {
    // Handle app visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        console.log('App backgrounded');
      } else {
        console.log('App foregrounded');
        // Refresh data on return
      }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      this.handleResize();
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
        if (route) {
          router.navigate(route);
          this.updateNavigation(route);
        }
      });
    });

    // Listen for route changes
    router.onChange((route) => {
      this.updateNavigation(route);
    });
  }

  /**
   * Update navigation active state
   */
  updateNavigation(route) {
    const navItems = document.querySelectorAll('.bottom-nav__item');
    navItems.forEach((item) => {
      const itemRoute = item.getAttribute('data-route');
      if (itemRoute === route) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  /**
   * Navigate to dashboard
   */
  navigateToDashboard() {
    router.navigate('dashboard');
    this.updateNavigation('dashboard');
  }

  /**
   * Update page title
   */
  updatePageTitle(title) {
    const header = document.querySelector('.app-header__title');
    if (header) {
      header.textContent = title;
    }
  }

  /**
   * Show placeholder for unimplemented views
   */
  showPlaceholder(message) {
    const contentArea = document.querySelector('.app-content__inner');
    if (contentArea) {
      contentArea.innerHTML = `
        <div class="empty-state" style="height: calc(100vh - 200px); display: flex; align-items: center;">
          <div class="empty-state__icon">🚀</div>
          <div class="empty-state__title">Coming Soon</div>
          <div class="empty-state__description">${message}</div>
        </div>
      `;
    }
  }

  /**
   * Handle window resize
   */
  handleResize() {
    const viewport = window.innerWidth;
    if (viewport < 375) {
      document.body.classList.add('small-device');
    } else {
      document.body.classList.remove('small-device');
    }
  }

  /**
   * Get current route
   */
  getCurrentRoute() {
    return router.getCurrentRoute();
  }
}

// Create and export app instance
export const app = new App();

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    app.init();
  });
} else {
  app.init();
}
