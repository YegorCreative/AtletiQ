/* ============================================
   AtletiQ Dashboard — Elite Performance View
   ============================================ */

import {
  mockAthlete,
  mockDailyCheckin,
  mockDailyDirective,
  mockRequiredPlan,
  mockImprovementActions,
  mockTimelineEvents,
} from './data/mockData.js';

export const dashboard = {
  /**
   * Initialize dashboard
   */
  init() {
    this.render();
    this.updateHeader();
    this.attachEventListeners();
  },

  /**
   * Update header greeting and date
   */
  updateHeader() {
    const greetEl = document.getElementById('header-greeting');
    const dateEl = document.getElementById('header-date');
    const avatarEl = document.getElementById('profile-btn');

    if (greetEl) {
      greetEl.textContent = `${this.getGreeting()}, ${mockAthlete.name}`;
    }

    if (dateEl) {
      const now = new Date();
      dateEl.textContent = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
      });
    }

    if (avatarEl) {
      avatarEl.textContent = mockAthlete.name.charAt(0);
    }
  },

  /**
   * Render full dashboard
   */
  render() {
    const el = document.querySelector('.app-content__inner');
    if (!el) return;

    el.innerHTML = `
      <div class="dashboard">
        ${this.renderDailyDirective()}
        ${this.renderCheckinBanner()}
        ${this.renderRequiredPlan()}
        ${this.renderImprovementActions()}
        ${this.renderTimeline()}
      </div>
    `;
  },

  /**
   * Daily Directive Hero (Replacing Readiness Ring)
   */
  renderDailyDirective() {
    return `
      <div class="daily-directive animate-in">
        <div class="daily-directive__header" style="display:flex; align-items:center; gap:var(--space-2); margin-bottom:var(--space-3);">
          <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-primary); box-shadow: 0 0 8px var(--color-primary);"></div>
          <span style="font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-widest); color: var(--color-text-secondary);">Today's Focus</span>
        </div>
        <div class="daily-directive__text" style="font-size: var(--text-lg); font-weight: var(--weight-medium); line-height: 1.4; color: var(--color-text-primary);">
          ${mockDailyDirective}
        </div>
      </div>
    `;
  },

  /**
   * Check-in Banner
   */
  renderCheckinBanner() {
    if (mockDailyCheckin.completed) return '';

    return `
      <div class="checkin-banner animate-in" id="checkin-trigger" style="animation-delay: 0.1s; margin-top: var(--space-4);">
        <div class="checkin-banner__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <div class="checkin-banner__text">
          <div class="checkin-banner__title">Morning Check-in</div>
          <div class="checkin-banner__subtitle">Log sleep, soreness, and mood — takes 30 seconds</div>
        </div>
        <div class="checkin-banner__arrow">›</div>
      </div>
    `;
  },

  /**
   * Required Plan (Non-negotiable workouts)
   */
  renderRequiredPlan() {
    const completed = mockRequiredPlan.filter((a) => a.completed).length;
    const total = mockRequiredPlan.length;

    const cards = mockRequiredPlan
      .map(
        (a) => `
        <div class="action-card ${a.completed ? 'completed' : ''} action-required" data-action-id="${a.id}">
          <div class="action-card__check">
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div class="action-card__body">
            <div class="action-card__title">${a.title}</div>
            <div class="action-card__subtitle">${a.subtitle}</div>
          </div>
          <div class="action-card__icon">${a.icon}</div>
        </div>
      `
      )
      .join('');

    return `
      <div class="dash-actions" style="margin-top: var(--space-8);">
        <div class="section-header">
          <h2 class="section-title">The Required Plan</h2>
          <span class="section-action">${completed}/${total}</span>
        </div>
        <div class="actions-list stagger">
          ${cards}
        </div>
      </div>
    `;
  },

  /**
   * Improvement Actions (Prescriptive Recovery/Nutrition/Mental)
   */
  renderImprovementActions() {
    const completed = mockImprovementActions.filter((a) => a.completed).length;
    const total = mockImprovementActions.length;

    const cards = mockImprovementActions
      .map(
        (a) => `
        <div class="action-card ${a.completed ? 'completed' : ''} action-improvement" data-action-id="${a.id}">
          <div class="action-card__check">
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div class="action-card__body">
            <div class="action-card__title">${a.title}</div>
            <div class="action-card__subtitle">${a.subtitle}</div>
          </div>
          <div class="action-card__icon">${a.icon}</div>
        </div>
      `
      )
      .join('');

    return `
      <div class="dash-actions" style="margin-top: var(--space-6);">
        <div class="section-header">
          <h2 class="section-title">Actions for Improvement</h2>
          <span class="section-action">${completed}/${total}</span>
        </div>
        <div class="actions-list stagger">
          ${cards}
        </div>
      </div>
    `;
  },

  /**
   * Recent Timeline
   */
  renderTimeline() {
    const entries = mockTimelineEvents
      .slice(0, 4)
      .map(
        (e) => `
        <div class="timeline-entry">
          <div class="timeline-entry__icon">${e.icon}</div>
          <div class="timeline-entry__body">
            <div class="timeline-entry__title">${e.title}</div>
            <div class="timeline-entry__detail">${e.detail}</div>
          </div>
          <div class="timeline-entry__time">${e.time.split(',')[0]}</div>
        </div>
      `,
      )
      .join('');

    return `
      <div class="dash-timeline">
        <div class="section-header">
          <h2 class="section-title">Recent Activity</h2>
          <span class="section-action" id="timeline-view-all">View All →</span>
        </div>
        <div class="glass-card">
          <div class="timeline-list stagger">
            ${entries}
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Get time-appropriate greeting
   */
  getGreeting() {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 18) return 'Good afternoon';
    return 'Good evening';
  },

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    // Action card toggle
    document.querySelectorAll('.action-card').forEach((card) => {
      card.addEventListener('click', () => {
        if (card.dataset.actionId === 'action_3') {
          this.openReview();
        } else {
          card.classList.toggle('completed');
          // In a real app, update the mock data state here
          this.updateActionProgress(card);
        }
      });
    });

    // Listen for external completions
    document.addEventListener('athletiq:actionCompleted', () => {
      const card = document.querySelector('[data-action-id="action_3"]');
      if (card) this.updateActionProgress(card);
    });

    // Check-in banner
    const checkinTrigger = document.getElementById('checkin-trigger');
    if (checkinTrigger) {
      checkinTrigger.addEventListener('click', () => {
        this.openCheckin();
      });
    }

    // Timeline view all
    const viewAll = document.getElementById('timeline-view-all');
    if (viewAll) {
      viewAll.addEventListener('click', () => {
        const navItem = document.querySelector('[data-route="timeline"]');
        if (navItem) navItem.click();
      });
    }

    // FAB
    const fab = document.getElementById('fab-btn');
    if (fab) {
      fab.addEventListener('click', () => {
        const h = new Date().getHours();
        if (h >= 17) {
          this.openReview();
        } else {
          this.openCheckin();
        }
      });
    }
  },

  /**
   * Update action progress count for the specific section
   */
  updateActionProgress(card) {
    const section = card.closest('.dash-actions');
    if (section) {
      const cards = section.querySelectorAll('.action-card');
      const completed = section.querySelectorAll('.action-card.completed').length;
      const total = cards.length;
      const countLabel = section.querySelector('.section-action');
      if (countLabel) countLabel.textContent = `${completed}/${total}`;
    }
  },

  /**
   * Open check-in modal
   */
  openCheckin() {
    // Import and trigger check-in module
    import('./checkin.js')
      .then((module) => {
        module.checkin.open();
      })
      .catch(() => {
        console.log('Check-in module loading...');
      });
  },

  /**
   * Open review modal
   */
  openReview() {
    import('./review.js')
      .then((module) => {
        module.review.open();
      })
      .catch(() => {
        console.log('Review module loading...');
      });
  },
};
