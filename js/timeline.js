/* ============================================
   AtletiQ Timeline — Unified Record
   ============================================ */

import { mockTimelineEvents } from './data/mockData.js';

export const timeline = {
  /**
   * Initialize timeline view
   */
  init() {
    this.render();
  },

  /**
   * Render full timeline
   */
  render() {
    const el = document.querySelector('.app-content__inner');
    if (!el) return;

    // Group events by day
    const today = mockTimelineEvents.filter(
      (e) => e.time.includes('Today') || e.time.includes('Last night'),
    );
    const yesterday = mockTimelineEvents.filter((e) => e.time.includes('Yesterday'));

    el.innerHTML = `
      <div class="timeline-view page-enter">
        <div class="timeline-view__header">
          <h1 class="timeline-view__title">Timeline</h1>
          <p class="timeline-view__subtitle">One record. Everything connected.</p>
        </div>

        ${this.renderDay('Today', today)}
        ${this.renderDay('Yesterday', yesterday)}
      </div>
    `;
  },

  /**
   * Render a day group
   */
  renderDay(label, events) {
    if (!events.length) return '';

    const entries = events
      .map(
        (e) => `
        <div class="timeline-entry">
          <div class="timeline-entry__icon">${e.icon}</div>
          <div class="timeline-entry__body">
            <div class="timeline-entry__title">${e.title}</div>
            <div class="timeline-entry__detail">${e.detail}</div>
          </div>
          <div class="timeline-entry__time">${e.time.split(', ').pop() || ''}</div>
        </div>
      `,
      )
      .join('');

    return `
      <div class="timeline-day">
        <div class="timeline-day__label">${label}</div>
        <div class="timeline-day__entries stagger">
          ${entries}
        </div>
      </div>
    `;
  },
};
