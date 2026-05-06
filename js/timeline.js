/* ============================================
   AtletiQ Timeline — Unified Record
   ============================================ */

import { mockTimelineEvents } from './data/mockData.js';

export const timeline = {
  currentFilter: 'all',

  /**
   * Initialize timeline view
   */
  init() {
    this.render();
    this.attachListeners();
  },

  /**
   * Render full timeline
   */
  render() {
    const el = document.querySelector('.app-content__inner');
    if (!el) return;

    // Filter events
    const filteredEvents = mockTimelineEvents.filter(e => {
      if (this.currentFilter === 'all') return true;
      if (this.currentFilter === 'milestones') return e.type === 'milestone';
      if (this.currentFilter === 'reflections') return e.type === 'reflection';
      return true;
    });

    // Group by date dynamically
    const grouped = filteredEvents.reduce((acc, event) => {
      if (!acc[event.date]) acc[event.date] = [];
      acc[event.date].push(event);
      return acc;
    }, {});

    const daysHtml = Object.keys(grouped)
      .map(dateLabel => this.renderDay(dateLabel, grouped[dateLabel]))
      .join('');

    // Only set outer HTML on first load to preserve scroll/state, or just replace entirely.
    el.innerHTML = `
      <div class="timeline-view page-enter">
        <div class="timeline-view__header">
          <h1 class="timeline-view__title">Athlete Memory</h1>
          <p class="timeline-view__subtitle">The story of becoming great.</p>
          
          <div class="timeline-filter">
            <button class="timeline-filter__btn ${this.currentFilter === 'all' ? 'active' : ''}" data-filter="all">All Activity</button>
            <button class="timeline-filter__btn ${this.currentFilter === 'milestones' ? 'active' : ''}" data-filter="milestones">Milestones</button>
            <button class="timeline-filter__btn ${this.currentFilter === 'reflections' ? 'active' : ''}" data-filter="reflections">Reflections</button>
          </div>
        </div>

        <div id="timeline-feed">
          ${daysHtml || '<div class="empty-state"><div class="empty-state__title">No memories found</div></div>'}
        </div>
      </div>
    `;

    this.attachListeners();
  },

  /**
   * Render a day group
   */
  renderDay(label, events) {
    if (!events.length) return '';

    const entries = events
      .map(e => this.renderEntry(e))
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

  /**
   * Render individual entry based on type
   */
  renderEntry(e) {
    let modifierClass = '';
    let extraContent = '';

    if (e.type === 'milestone') {
      modifierClass = 'timeline-entry--milestone';
      if (e.highlight) {
        extraContent = `<div class="timeline-entry__highlight">${e.highlight}</div>`;
      }
    } else if (e.type === 'reflection') {
      modifierClass = 'timeline-entry--reflection';
      if (e.quote) {
        extraContent = `<div class="timeline-entry__quote">${e.quote}</div>`;
      }
    } else if (e.type === 'insight') {
      modifierClass = 'timeline-entry--insight';
    }

    return `
      <div class="timeline-entry ${modifierClass}">
        <div class="timeline-entry__icon">${e.icon}</div>
        <div class="timeline-entry__body">
          ${extraContent}
          <div class="timeline-entry__title">${e.title}</div>
          <div class="timeline-entry__detail">${e.detail}</div>
        </div>
        <div class="timeline-entry__time">${e.time.split(', ').pop() || ''}</div>
      </div>
    `;
  },

  /**
   * Attach interactions
   */
  attachListeners() {
    document.querySelectorAll('.timeline-filter__btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter;
        if (filter && filter !== this.currentFilter) {
          this.currentFilter = filter;
          this.render(); // Re-render with new filter
        }
      });
    });
  }
};
