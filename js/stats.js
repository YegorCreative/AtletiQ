/* ============================================
   AtletiQ Statistics View
   Detailed data and insights
   ============================================ */

import { mockReadiness, mockPillarInputs } from './data/mockData.js';
import { IntelligenceEngine } from './intelligence.js';

export const stats = {
  init() {
    this.render();
    this.attachListeners();
  },

  render() {
    const el = document.querySelector('.app-content__inner');
    if (!el) return;

    el.innerHTML = `
      <div class="stats-view page-enter">
        <div class="timeline-view__header">
          <h1 class="timeline-view__title">Statistics</h1>
          <p class="timeline-view__subtitle">Your underlying preparation data.</p>
        </div>
        
        ${this.renderHero()}
        ${this.renderInsight()}
        ${this.renderPreparation()}
      </div>
    `;
  },

  renderHero() {
    const { score, label } = mockReadiness;
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return `
      <div class="dash-hero animate-in" style="margin-top: var(--space-4);">
        <div class="dash-hero__header">
          <div class="dash-hero__ring">
            <div class="readiness-ring">
              <svg class="readiness-ring__svg" viewBox="0 0 120 120">
                <circle class="readiness-ring__bg" cx="60" cy="60" r="${radius}" />
                <circle
                  class="readiness-ring__progress"
                  cx="60" cy="60" r="${radius}"
                  stroke-dasharray="${circumference}"
                  stroke-dashoffset="${offset}"
                  style="--ring-circumference: ${circumference}; --ring-offset: ${offset};"
                />
              </svg>
              <div class="readiness-ring__center">
                <span class="readiness-ring__score">${score}</span>
                <span class="readiness-ring__label">READY</span>
              </div>
            </div>
          </div>
          <div class="dash-hero__info">
            <div class="dash-hero__status">
              <div class="status-dot green"></div>
              <span class="dash-hero__status-text">RECOVERY: ${label}</span>
            </div>
            <div class="dash-hero__subtitle">
              Based on sleep, load, and nervous system state.
            </div>
          </div>
        </div>
      </div>
    `;
  },

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
      `
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
      `
      )
      .join('');

    return `
      <div class="dash-insight" style="margin-top: var(--space-6);">
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

  renderPreparation() {
    const statusMap = {
      strong: 'Strong',
      good: 'Good',
      moderate: 'Moderate',
      low: 'Low',
    };

    const evaluatedPillars = IntelligenceEngine.evaluatePreparation(mockPillarInputs);

    const bars = evaluatedPillars
      .map((p) => {
        const opacityClass = (p.status === 'strong' || p.status === 'good') ? 'prep-bar--fade' : 'prep-bar--attention';
        
        return `
        <div class="prep-bar ${opacityClass} interactive" data-pillar="${p.id}">
          <div class="prep-bar__icon ${p.color}">${p.icon}</div>
          <div class="prep-bar__content">
            <div class="prep-bar__header">
              <span class="prep-bar__label">${p.label}</span>
              <span class="prep-bar__status ${p.color}">${statusMap[p.status] || p.status}</span>
            </div>
            <div class="prep-bar__track">
              <div class="prep-bar__fill ${p.color}" style="--bar-width: ${p.score}%; width: ${p.score}%;"></div>
            </div>
            <div class="prep-bar__reasoning" style="display: none; margin-top: 8px; font-size: var(--text-xs); color: var(--color-text-tertiary);">
              ${p.reasoning}
            </div>
          </div>
        </div>
      `;
      })
      .join('');

    return `
      <div class="dash-preparation" style="margin-top: var(--space-6);">
        <div class="section-header">
          <h2 class="section-title">Preparation Pillars</h2>
        </div>
        <div class="glass-card">
          <div class="prep-list stagger">
            ${bars}
          </div>
        </div>
      </div>
    `;
  },

  attachListeners() {
    document.querySelectorAll('.prep-bar.interactive').forEach((bar) => {
      bar.addEventListener('click', () => {
        const reasoningEl = bar.querySelector('.prep-bar__reasoning');
        if (reasoningEl) {
          if (reasoningEl.style.display === 'none') {
            reasoningEl.style.display = 'block';
            reasoningEl.style.animation = 'fadeInDown 0.2s ease forwards';
          } else {
            reasoningEl.style.display = 'none';
          }
        }
      });
    });
  }
};
