/* ============================================
   AtletiQ Fuel Lens
   The viral differentiator for athlete energy
   ============================================ */

export const fuel = {
  /**
   * Initialize the Fuel Lens view
   */
  init() {
    this.render();
  },

  /**
   * Render the Fuel Lens
   */
  render() {
    const el = document.querySelector('.app-content__inner');
    if (!el) return;

    // Simulated data
    const energyLevel = 68; // percentage
    const plannedExpenditure = 850; // kcal active
    const carbsCurrent = 180;
    const carbsTarget = 300;

    // Calculate ring offsets
    const radius = 90;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (energyLevel / 100) * circumference;

    el.innerHTML = `
      <div class="fuel-view page-enter">
        <div class="timeline-view__header">
          <h1 class="timeline-view__title">Fuel Lens</h1>
          <p class="timeline-view__subtitle">Your real-time energy availability.</p>
        </div>

        <!-- Energy Tank Hero -->
        <div class="fuel-hero">
          <div class="fuel-hero__gauge">
            <svg class="fuel-ring" viewBox="0 0 200 200">
              <circle class="fuel-ring__bg" cx="100" cy="100" r="${radius}" />
              <circle
                class="fuel-ring__progress glow"
                cx="100" cy="100" r="${radius}"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${offset}"
                style="--ring-circumference: ${circumference}; --ring-offset: ${offset};"
              />
            </svg>
            <div class="fuel-hero__center">
              <span class="fuel-hero__value">${energyLevel}%</span>
              <span class="fuel-hero__label">Tank Level</span>
            </div>
          </div>
          
          <div class="fuel-hero__status">
            <div class="status-dot yellow"></div>
            <span>Sub-optimal for afternoon track session</span>
          </div>
        </div>

        <!-- Actionable Insights -->
        <div class="section-header" style="margin-top: var(--space-6);">
          <h2 class="section-title">Fueling Action Plan</h2>
        </div>

        <div class="actions-list stagger">
          <div class="action-card">
            <div class="action-card__check" style="border-color: var(--color-warning);">
              <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" style="stroke: var(--color-warning); display: block;">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div class="action-card__body">
              <div class="action-card__title">Carb Deficit Detected</div>
              <div class="action-card__subtitle">Consume ${carbsTarget - carbsCurrent}g carbs before 3:00 PM.</div>
            </div>
            <div class="action-card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
          </div>

          <div class="action-card">
            <div class="action-card__check" style="border-color: var(--color-danger);">
              <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" style="stroke: var(--color-danger); display: block;">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div class="action-card__body">
              <div class="action-card__title">Hydration is Critical</div>
              <div class="action-card__subtitle">You are 2 liters behind schedule for today's heat.</div>
            </div>
            <div class="action-card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Data Breakdown -->
        <div class="section-header" style="margin-top: var(--space-6);">
          <h2 class="section-title">Planned vs Actual</h2>
        </div>
        
        <div class="glass-card stagger" style="padding: var(--space-4);">
          <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-2);">
            <span style="font-size: var(--text-sm); color: var(--color-text-secondary);">Expected Output</span>
            <span style="font-size: var(--text-sm); font-weight: var(--weight-bold); color: var(--color-danger);">${plannedExpenditure} kcal</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding-top: var(--space-2); border-top: 1px solid var(--color-border);">
            <span style="font-size: var(--text-sm); color: var(--color-text-secondary);">Fuel Ingested</span>
            <span style="font-size: var(--text-sm); font-weight: var(--weight-bold); color: var(--color-primary);">Approx 400 kcal</span>
          </div>
        </div>
      </div>
    `;
  }
};
