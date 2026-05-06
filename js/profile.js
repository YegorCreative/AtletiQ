/* ============================================
   AtletiQ Athlete Evolution (Profile)
   Long-term growth and capability record
   ============================================ */

import { mockAthlete } from './data/mockData.js';

export const profile = {
  /**
   * Initialize profile view
   */
  init() {
    this.render();
    this.attachListeners();
  },

  /**
   * Render the Athlete Evolution view
   */
  render() {
    const el = document.querySelector('.app-content__inner');
    if (!el) return;

    el.innerHTML = `
      <div class="evolution-view page-enter">
        <div class="timeline-view__header">
          <h1 class="timeline-view__title">Evolution</h1>
          <p class="timeline-view__subtitle">Your long-term capability record.</p>
        </div>

        <!-- Athlete Identity Hero -->
        <div class="evolution-hero stagger">
          <div class="evolution-hero__avatar">
            ${mockAthlete.name.charAt(0)}
          </div>
          <div class="evolution-hero__info">
            <h2 class="evolution-hero__name">${mockAthlete.fullName}</h2>
            <p class="evolution-hero__role">
              ${mockAthlete.level} 
              <select class="sport-select" id="profile-sport-select" style="background: transparent; border: none; color: inherit; font: inherit; font-weight: var(--weight-medium); cursor: pointer; text-decoration: underline; text-decoration-color: rgba(16, 185, 129, 0.5); text-underline-offset: 4px; padding: 0;">
                <option value="800m / 1500m" ${mockAthlete.event === '800m / 1500m' ? 'selected' : ''}>800m / 1500m</option>
                <option value="5K / 10K" ${mockAthlete.event === '5K / 10K' ? 'selected' : ''}>5K / 10K</option>
                <option value="Marathon" ${mockAthlete.event === 'Marathon' ? 'selected' : ''}>Marathon</option>
                <option value="Triathlon" ${mockAthlete.event === 'Triathlon' ? 'selected' : ''}>Triathlon</option>
                <option value="Cycling" ${mockAthlete.event === 'Cycling' ? 'selected' : ''}>Cycling</option>
                <option value="CrossFit" ${mockAthlete.event === 'CrossFit' ? 'selected' : ''}>CrossFit</option>
              </select>
            </p>
          </div>
          <div class="evolution-hero__phase">
            <span class="evolution-hero__phase-label">Current Block</span>
            <span class="evolution-hero__phase-value">Base Building</span>
          </div>
        </div>

        <!-- Capability Matrix -->
        <div class="section-header" style="margin-top: var(--space-6);">
          <h2 class="section-title">Capability Matrix</h2>
        </div>
        
        <div class="capability-card stagger">
          ${this.renderCapabilityBar('Aerobic Base', 85, 'Increasing')}
          ${this.renderCapabilityBar('Top End Speed', 60, 'Maintaining')}
          ${this.renderCapabilityBar('Durability', 90, 'Peak')}
          ${this.renderCapabilityBar('Mental Resilience', 75, 'Increasing')}
        </div>

        <!-- The Vault (PRs) -->
        <div class="section-header" style="margin-top: var(--space-6);">
          <h2 class="section-title">The Vault</h2>
        </div>

        <div class="vault-list stagger">
          <div class="vault-entry">
            <div class="vault-entry__event">1500m</div>
            <div class="vault-entry__time">3:56.1</div>
            <div class="vault-entry__date">May 2025</div>
          </div>
          <div class="vault-entry">
            <div class="vault-entry__event">800m</div>
            <div class="vault-entry__time">1:52.4</div>
            <div class="vault-entry__date">June 2025</div>
          </div>
          <div class="vault-entry">
            <div class="vault-entry__event">5K (XC)</div>
            <div class="vault-entry__time">14:48.0</div>
            <div class="vault-entry__date">Oct 2024</div>
          </div>
        </div>

        <!-- Consistency Map (Mocked) -->
        <div class="section-header" style="margin-top: var(--space-6);">
          <h2 class="section-title">Consistency (90 Days)</h2>
        </div>
        
        <div class="consistency-card stagger">
          <div class="consistency-grid">
            ${this.generateConsistencyGrid()}
          </div>
          <div class="consistency-legend">
            <span>Missed</span>
            <div class="consistency-legend__scale">
              <span style="background: var(--color-bg-tertiary)"></span>
              <span style="background: rgba(16, 185, 129, 0.4)"></span>
              <span style="background: rgba(16, 185, 129, 0.7)"></span>
              <span style="background: rgba(16, 185, 129, 1)"></span>
            </div>
            <span>Nailed</span>
          </div>
        </div>

      </div>
    `;
  },

  /**
   * Render a capability progress bar
   */
  renderCapabilityBar(label, value, trend) {
    return `
      <div class="capability-row">
        <div class="capability-row__header">
          <span class="capability-row__label">${label}</span>
          <span class="capability-row__trend">${trend}</span>
        </div>
        <div class="capability-row__track">
          <div class="capability-row__fill" style="width: ${value}%;"></div>
        </div>
      </div>
    `;
  },

  /**
   * Generate a mock consistency grid (GitHub style)
   */
  generateConsistencyGrid() {
    let html = '';
    // Generate 12 columns of 7 days (84 days)
    for (let c = 0; c < 12; c++) {
      html += '<div class="consistency-col">';
      for (let r = 0; r < 7; r++) {
        // Randomly assign a tier (0 to 3) for the mock data, heavily weighted to success (3)
        const rand = Math.random();
        let tier = 3;
        if (rand < 0.1) tier = 0;
        else if (rand < 0.2) tier = 1;
        else if (rand < 0.4) tier = 2;
        
        html += `<div class="consistency-cell tier-${tier}"></div>`;
      }
      html += '</div>';
    }
    return html;
  },

  /**
   * Attach event listeners
   */
  attachListeners() {
    const sportSelect = document.getElementById('profile-sport-select');
    if (sportSelect) {
      sportSelect.addEventListener('change', (e) => {
        mockAthlete.event = e.target.value;
        // The mock object is updated. In a real app, you would save this to a database.
        console.log('Sport updated to:', mockAthlete.event);
      });
    }
  }
};
