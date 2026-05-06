/* ============================================
   AthletiQ Dashboard Module
   Dashboard view and functionality
   ============================================ */

import {
  mockAthlete,
  mockDailyReadiness,
  mockPerformanceMetrics,
  mockTimelineEvents,
  mockRecoveryAreas,
  mockActionItems,
} from './data/mockData.js';

export const dashboard = {
  /**
   * Initialize dashboard
   */
  init() {
    this.render();
    this.attachEventListeners();
  },

  /**
   * Render dashboard UI
   */
  render() {
    const contentArea = document.querySelector('.app-content__inner');
    if (!contentArea) return;

    contentArea.innerHTML = `
      <div class="dashboard">
        ${this.renderWelcome()}
        ${this.renderDailyReadiness()}
        ${this.renderPerformanceMetrics()}
        ${this.renderTimelinePreview()}
        ${this.renderRecovery()}
        ${this.renderActionButtons()}
      </div>
    `;
  },

  /**
   * Render welcome section
   */
  renderWelcome() {
    const now = new Date();
    const greeting = this.getGreeting();
    const dateStr = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });

    return `
      <div class="dashboard__welcome animate-fade-in-up">
        <div class="welcome-card">
          <div class="welcome-card__greeting">${greeting}, ${mockAthlete.name}</div>
          <div class="welcome-card__status">
            <div class="welcome-card__status-indicator"></div>
            <span>Ready to train</span>
          </div>
          <div style="color: var(--color-text-tertiary); font-size: var(--font-size-sm);">
            ${dateStr}
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Render daily readiness section
   */
  renderDailyReadiness() {
    const { score, factors } = mockDailyReadiness;

    return `
      <div class="daily-readiness animate-fade-in-up">
        <h2 class="daily-readiness__title">Daily Readiness</h2>
        <div class="daily-readiness__score">
          <div class="readiness-score">
            <div class="readiness-score__value">${score}</div>
            <div class="readiness-score__label">Readiness Score</div>
          </div>
        </div>
        <div class="readiness-factors">
          ${Object.values(factors)
            .map(
              (factor) => `
            <div class="readiness-factor ${factor.status}">
              <div class="readiness-factor__label">${factor.emoji} ${factor.label}</div>
              <div class="readiness-factor__value">${factor.value}</div>
              <div class="readiness-factor__status">${factor.detail}</div>
            </div>
          `,
            )
            .join('')}
        </div>
      </div>
    `;
  },

  /**
   * Render performance metrics
   */
  renderPerformanceMetrics() {
    return `
      <div class="performance-metrics animate-fade-in-up">
        <h2 class="performance-metrics__title">Performance Metrics</h2>
        <div class="metrics-grid">
          ${mockPerformanceMetrics
            .map(
              (metric) => `
            <div class="metric-card hover-lift">
              <div class="metric-card__icon">${metric.icon}</div>
              <div class="metric-card__label">${metric.label}</div>
              <div class="metric-card__value">${metric.value}<span style="font-size: var(--font-size-lg);">${metric.unit}</span></div>
              <div class="metric-card__detail">${metric.detail}</div>
            </div>
          `,
            )
            .join('')}
        </div>
      </div>
    `;
  },

  /**
   * Render timeline preview
   */
  renderTimelinePreview() {
    return `
      <div class="timeline-preview animate-fade-in-up">
        <h2 class="timeline-preview__title">Recent Activity</h2>
        <div class="timeline-preview__list">
          ${mockTimelineEvents
            .slice(0, 3)
            .map(
              (event) => `
            <div class="timeline-event ${event.type === 'alert' ? 'warning' : ''} hover-lift">
              <div style="display: flex; align-items: center; gap: var(--spacing-sm);">
                <span style="font-size: 20px;">${event.emoji}</span>
                <div>
                  <div class="timeline-event__title">${event.title}</div>
                  <div class="timeline-event__meta">${event.meta}</div>
                </div>
              </div>
              <div class="timeline-event__description">${event.description}</div>
            </div>
          `,
            )
            .join('')}
        </div>
      </div>
    `;
  },

  /**
   * Render recovery section
   */
  renderRecovery() {
    return `
      <div class="recovery-section animate-fade-in-up">
        <div class="recovery-header">
          <h2 class="recovery-header__title">Recovery Focus</h2>
          <span class="recovery-header__action">View All →</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: var(--spacing-md);">
          ${mockRecoveryAreas
            .slice(0, 3)
            .map(
              (area) => `
            <div class="recovery-card hover-lift">
              <div class="recovery-card__info">
                <div style="display: flex; align-items: center; gap: var(--spacing-sm);">
                  <span style="font-size: 20px;">${area.emoji}</span>
                  <div>
                    <div class="recovery-card__title">${area.title}</div>
                    <div class="recovery-card__detail">${area.detail}</div>
                  </div>
                </div>
              </div>
              <div class="recovery-card__arrow">›</div>
            </div>
          `,
            )
            .join('')}
        </div>
      </div>
    `;
  },

  /**
   * Render action buttons
   */
  renderActionButtons() {
    return `
      <div class="action-buttons animate-fade-in-up">
        <h2 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold); color: var(--color-text-primary); margin-bottom: var(--spacing-md);">Quick Actions</h2>
        ${mockActionItems
          .map(
            (action) => `
          <div class="action-button hover-lift">
            <div class="action-button__content">
              <div class="action-button__title">${action.title}</div>
              <div class="action-button__description">${action.description}</div>
            </div>
            <div class="action-button__icon">${action.icon}</div>
          </div>
        `,
          )
          .join('')}
      </div>
    `;
  },

  /**
   * Get appropriate greeting based on time of day
   */
  getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  },

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    const recoveryHeader = document.querySelector('.recovery-header__action');
    if (recoveryHeader) {
      recoveryHeader.addEventListener('click', () => {
        console.log('Navigate to recovery view');
      });
    }

    const actionButtons = document.querySelectorAll('.action-button');
    actionButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        console.log(`Action button ${index + 1} clicked`);
      });
    });

    const recoveryCards = document.querySelectorAll('.recovery-card');
    recoveryCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        console.log(`Recovery card ${index + 1} clicked`);
      });
    });
  },
};
