/* ============================================
   AtletiQ Dashboard — Elite Performance View
   ============================================ */

import {
  mockAthlete,
  mockReadiness,
  mockDailyCheckin,
  mockTodayActions,
  mockTimelineEvents,
  mockTodaysFocus,
  mockPreparationPillars,
  mockAthleteIQ,
  mockTodaysActions,
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

  appleWatchState: 'idle',

  appleWatchDemoData: {
    sleep: '7h 24m',
    hrv: '68 ms',
    restingHR: '48 bpm',
    workout: 'Tempo run · 5.2 mi · 38 min',
    steps: '11,832 steps',
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
        ${this.renderHero()}
        ${this.renderCheckinBanner()}
        ${this.renderInsight()}
        ${this.renderPreparation()}
        ${this.renderAthleteIQ()}
        ${this.renderDataImport()}
        ${this.renderActions()}
        ${this.renderTimeline()}
      </div>
    `;
    this.attachEventListeners();
  },

  /**
   * Today's Focus — Biggest opportunity
   */
  renderHero() {
    const { title, biggestOpportunity, supportingText, preparationStatus, recoveryStatus } = mockTodaysFocus;

    return `
      <div class="dash-hero animate-in">
        <div class="todays-focus-card">
          <div class="todays-focus-card__title">${title}</div>
          <div class="todays-focus-card__opportunity">${biggestOpportunity}</div>
          <div class="todays-focus-card__text">${supportingText}</div>
          <div class="todays-focus-card__status">
            <span class="status-badge">Preparation: ${preparationStatus}</span>
            <span class="status-badge">Recovery: ${recoveryStatus}</span>
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Check-in Banner (if not completed)
   */
  renderCheckinBanner() {
    if (mockDailyCheckin.completed) return '';

    return `
      <div class="checkin-banner animate-in" id="checkin-trigger" style="animation-delay: 0.1s;">
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
   * Insight — Causal explanation
   */
  renderInsight() {
    const { insight } = mockReadiness;
    if (!insight) return '';

    const reasons = insight.reasons
      .map(
        (r) => `
        <div class="insight-reason">
          <div class="insight-reason__dot negative"></div>
          <span class="insight-reason__text">${r.signal}</span>
          <span class="insight-reason__detail">${r.detail}</span>
        </div>
      `,
      )
      .join('');

    const positives = insight.positive
      .map(
        (r) => `
        <div class="insight-reason">
          <div class="insight-reason__dot positive"></div>
          <span class="insight-reason__text">${r.signal}</span>
          <span class="insight-reason__detail">${r.detail}</span>
        </div>
      `,
      )
      .join('');

    return `
      <div class="dash-insight">
        <div class="insight-card">
          <div class="insight-card__headline" style="font-size: var(--text-sm); color: var(--color-text-secondary); margin-bottom: var(--space-2); text-transform: uppercase; letter-spacing: var(--tracking-wide);">Intelligence</div>
          <div class="insight-card__headline" style="margin-bottom: var(--space-4);">${insight.headline}</div>
          <div class="insight-card__reasons">
            ${reasons}
            ${positives}
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Preparation Pillars — 6 Pillars
   */
  renderPreparation() {
    const bars = mockPreparationPillars
      .map(
        (p) => `
        <div class="prep-bar">
          <div class="prep-bar__icon ${p.status.toLowerCase()}">${p.name.charAt(0)}</div>
          <div class="prep-bar__content">
            <div class="prep-bar__header">
              <span class="prep-bar__label">${p.name}</span>
              <span class="prep-bar__status ${p.status.toLowerCase()}">${p.status}</span>
            </div>
            <div class="prep-bar__track">
              <div class="prep-bar__fill ${p.status.toLowerCase()}" style="--bar-width: ${p.progress}%; width: ${p.progress}%;"></div>
            </div>
            <div class="prep-bar__explanation">${p.explanation}</div>
          </div>
        </div>
      `,
      )
      .join('');

    return `
      <div class="dash-preparation">
        <div class="section-header">
          <h2 class="section-title">Preparation Pillars</h2>
          <span class="section-action">Details →</span>
        </div>
        <div class="glass-card">
          <div class="prep-list stagger">
            ${bars}
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Today's Actions
   */
  renderActions() {
    const { completed, total, actions } = mockTodaysActions;
    const pct = Math.round((completed / total) * 100);

    const cards = actions
      .map(
        (a) => `
        <div class="action-card ${a.completed ? 'completed' : ''}" data-action-id="${a.id}">
          <div class="action-card__check">
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div class="action-card__body">
            <div class="action-card__title">${a.title}</div>
            <div class="action-card__subtitle">${a.why}</div>
          </div>
          <div class="action-card__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
        </div>
      `,
      )
      .join('');

    return `
      <div class="dash-actions">
        <div class="section-header">
          <h2 class="section-title">Today's Actions</h2>
          <span class="section-action">${completed}/${total}</span>
        </div>
        <div class="actions-list stagger">
          ${cards}
        </div>
        <div class="actions-progress">
          <div class="progress actions-progress__bar">
            <div class="progress__bar" style="width: ${pct}%;"></div>
          </div>
          <span class="actions-progress__text">${pct}%</span>
        </div>
      </div>
    `;
  },

  /**
   * Athlete IQ — Education & Insights
   */
  renderAthleteIQ() {
    const cards = mockAthleteIQ
      .map(
        (iq) => `
        <div class="iq-card">
          <div class="iq-card__header">
            <div class="iq-card__pillar">${iq.pillar}</div>
            <div class="iq-card__opportunity ${iq.opportunity.toLowerCase()}">${iq.opportunity} Opportunity</div>
          </div>
          <div class="iq-card__content">
            <div class="iq-card__why">${iq.whyItMatters}</div>
            <div class="iq-card__elite">
              <strong>Elite Priority:</strong> ${iq.elitePriorities}
            </div>
            <div class="iq-card__you">
              <strong>Your Consistency:</strong> ${iq.yourConsistency}
            </div>
          </div>
        </div>
      `,
      )
      .join('');

    return `
      <div class="dash-athlete-iq">
        <div class="section-header">
          <h2 class="section-title">Athlete IQ</h2>
          <span class="section-action">Learn More →</span>
        </div>
        <div class="glass-card">
          <div class="iq-list stagger">
            ${cards}
          </div>
        </div>
      </div>
    `;
  },

  /**   * Apple Watch Connect prototype
   */
  renderDataImport() {
    const state = this.appleWatchState || 'idle';
    if (state === 'permission') return this.renderAppleWatchPermission();
    if (state === 'loading') return this.renderAppleWatchLoading();
    if (state === 'success') return this.renderAppleWatchSuccess();

    return `
      <div class="dash-data-import">
        <div class="section-header">
          <h2 class="section-title">Connect Apple Watch</h2>
          <span class="section-action">Demo mode</span>
        </div>
        <div class="glass-card watch-connect-card">
          <div class="watch-connect-copy">
            <div class="watch-connect-title">Sync your Watch for prep-ready insights</div>
            <div class="watch-connect-subtitle">This is a mock demo flow. No real Apple Health integration is connected yet.</div>
          </div>
          <button class="btn btn-primary" id="connect-apple-watch-btn">Connect Apple Watch</button>
        </div>
      </div>
    `;
  },

  renderAppleWatchPermission() {
    return `
      <div class="dash-data-import">
        <div class="section-header">
          <h2 class="section-title">Apple Watch Permission</h2>
          <span class="section-action">Demo only</span>
        </div>
        <div class="glass-card watch-connect-card">
          <div class="watch-connect-copy">
            <div class="watch-connect-title">Allow AthletiQ to read your activity data</div>
            <div class="watch-connect-subtitle">In a full app, this would request permission to read sleep, HRV, resting HR, steps, and workouts.</div>
          </div>
          <div class="watch-permission-actions">
            <button class="btn btn-secondary" id="cancel-apple-watch-btn">Cancel</button>
            <button class="btn btn-primary" id="allow-apple-watch-btn">Allow Demo Data</button>
          </div>
        </div>
      </div>
    `;
  },

  renderAppleWatchLoading() {
    return `
      <div class="dash-data-import">
        <div class="section-header">
          <h2 class="section-title">Connecting Apple Watch</h2>
          <span class="section-action">Demo in progress</span>
        </div>
        <div class="glass-card watch-connect-card">
          <div class="watch-loading">
            <div class="spinner"></div>
            <div class="watch-loading__text">Syncing demo health metrics…</div>
          </div>
        </div>
      </div>
    `;
  },

  renderAppleWatchSuccess() {
    const data = this.appleWatchDemoData;
    return `
      <div class="dash-data-import">
        <div class="section-header">
          <h2 class="section-title">Apple Watch Synced</h2>
          <span class="section-action">Demo data</span>
        </div>
        <div class="glass-card watch-connect-card">
          <div class="watch-sync-grid">
            <div class="watch-sync-item">
              <span class="watch-sync-label">Sleep</span>
              <strong>${data.sleep}</strong>
            </div>
            <div class="watch-sync-item">
              <span class="watch-sync-label">HRV</span>
              <strong>${data.hrv}</strong>
            </div>
            <div class="watch-sync-item">
              <span class="watch-sync-label">Resting HR</span>
              <strong>${data.restingHR}</strong>
            </div>
            <div class="watch-sync-item">
              <span class="watch-sync-label">Workout</span>
              <strong>${data.workout}</strong>
            </div>
            <div class="watch-sync-item watch-sync-full">
              <span class="watch-sync-label">Steps</span>
              <strong>${data.steps}</strong>
            </div>
          </div>
          <div class="demo-note">This is demo data for now. Apple Watch sync is a prototype experience.</div>
        </div>
      </div>
    `;
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
        card.classList.toggle('completed');
        this.updateActionProgress();
      });
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

    // Apple Watch connect prototype
    const connectBtn = document.getElementById('connect-apple-watch-btn');
    const allowBtn = document.getElementById('allow-apple-watch-btn');
    const cancelBtn = document.getElementById('cancel-apple-watch-btn');
    const manualBtn = document.getElementById('manual-entry-btn');
    const fab = document.getElementById('fab-btn');

    if (connectBtn) {
      connectBtn.addEventListener('click', () => {
        this.setAppleWatchState('permission');
      });
    }

    if (allowBtn) {
      allowBtn.addEventListener('click', () => {
        this.setAppleWatchState('loading');
        setTimeout(() => this.setAppleWatchState('success'), 1400);
      });
    }

    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        this.setAppleWatchState('idle');
      });
    }

    if (manualBtn) {
      manualBtn.addEventListener('click', () => {
        this.openManualEntry();
      });
    }

    if (fab) {
      fab.addEventListener('click', () => {
        this.openCheckin();
      });
    }
  },

  /**
   * Update action progress bar
   */
  updateActionProgress() {
    const cards = document.querySelectorAll('.action-card');
    const completed = document.querySelectorAll('.action-card.completed').length;
    const total = cards.length;
    const pct = Math.round((completed / total) * 100);

    const bar = document.querySelector('.actions-progress__bar .progress__bar');
    const text = document.querySelector('.actions-progress__text');
    const count = document.querySelector('.dash-actions .section-action');

    if (bar) bar.style.width = `${pct}%`;
    if (text) text.textContent = `${pct}%`;
    if (count) count.textContent = `${completed}/${total}`;
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
   * Set Apple Watch prototype state
   */
  setAppleWatchState(state) {
    this.appleWatchState = state;
    this.render();
  },
};
