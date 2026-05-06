/* ============================================
   AtletiQ Check-in Module
   Daily 6-signal check-in flow
   ============================================ */

export const checkin = {
  /**
   * Open the check-in modal
   */
  open() {
    this.createModal();
    this.attachModalListeners();
  },

  /**
   * Create modal DOM
   */
  createModal() {
    // Remove existing
    const existing = document.getElementById('checkin-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'checkin-overlay';

    const sheet = document.createElement('div');
    sheet.className = 'modal-sheet';
    sheet.id = 'checkin-modal';

    sheet.innerHTML = `
      <div class="modal-sheet__handle"></div>
      <div class="modal-sheet__header">
        <h2 class="modal-sheet__title">Morning Check-in</h2>
        <button class="modal-sheet__close" id="checkin-close" aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="modal-sheet__body">
        <div class="checkin-form stagger" style="display:flex;flex-direction:column;gap:var(--space-6);">

          <!-- Sleep -->
          <div class="input-group">
            <label for="checkin-sleep">Sleep Duration</label>
            <div style="display:flex;gap:var(--space-2);align-items:center;">
              <input class="input-field" type="number" id="checkin-sleep" placeholder="8" min="0" max="14" step="0.5" style="flex:1;" />
              <span style="color:var(--color-text-tertiary);font-size:var(--text-sm);">hours</span>
            </div>
          </div>

          <!-- Resting HR -->
          <div class="input-group">
            <label for="checkin-hr">Resting Heart Rate</label>
            <div style="display:flex;gap:var(--space-2);align-items:center;">
              <input class="input-field" type="number" id="checkin-hr" placeholder="52" min="30" max="120" style="flex:1;" />
              <span style="color:var(--color-text-tertiary);font-size:var(--text-sm);">bpm</span>
            </div>
          </div>

          <!-- Weight -->
          <div class="input-group">
            <label for="checkin-weight">Body Weight</label>
            <div style="display:flex;gap:var(--space-2);align-items:center;">
              <input class="input-field" type="number" id="checkin-weight" placeholder="156" min="50" max="400" step="0.1" style="flex:1;" />
              <span style="color:var(--color-text-tertiary);font-size:var(--text-sm);">lbs</span>
            </div>
          </div>

          <!-- Training Load -->
          <div class="input-group">
            <label>Training Load (yesterday)</label>
            <div class="chip-group" id="checkin-training">
              <div class="chip" data-value="rest">Rest</div>
              <div class="chip" data-value="easy">Easy</div>
              <div class="chip" data-value="medium">Medium</div>
              <div class="chip" data-value="hard">Hard</div>
            </div>
          </div>

          <!-- Soreness -->
          <div class="slider-group">
            <div class="slider-group__label">
              <span>Muscle Soreness</span>
              <span class="slider-group__value" id="soreness-val">3</span>
            </div>
            <input type="range" id="checkin-soreness" min="1" max="5" value="3" step="1" />
            <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-tertiary);">
              <span>None</span><span>Severe</span>
            </div>
          </div>

          <!-- Mood -->
          <div class="slider-group">
            <div class="slider-group__label">
              <span>Mood / Stress</span>
              <span class="slider-group__value" id="mood-val">4</span>
            </div>
            <input type="range" id="checkin-mood" min="1" max="5" value="4" step="1" />
            <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-tertiary);">
              <span>Stressed</span><span>Great</span>
            </div>
          </div>

          <!-- Submit -->
          <button class="btn btn-primary btn-lg btn-block" id="checkin-submit" style="margin-top:var(--space-2);">
            Save Check-in
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(sheet);
  },

  /**
   * Attach modal event listeners
   */
  attachModalListeners() {
    // Close
    const close = document.getElementById('checkin-close');
    const overlay = document.getElementById('checkin-overlay');

    const closeModal = () => {
      const modal = document.getElementById('checkin-modal');
      const ov = document.getElementById('checkin-overlay');
      if (modal) {
        modal.style.animation = 'slideDown 0.25s var(--ease-out) forwards';
        setTimeout(() => modal.remove(), 250);
      }
      if (ov) {
        ov.style.opacity = '0';
        ov.style.transition = 'opacity 0.25s';
        setTimeout(() => ov.remove(), 250);
      }
    };

    if (close) close.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    // Chip selection
    const chipGroup = document.getElementById('checkin-training');
    if (chipGroup) {
      chipGroup.querySelectorAll('.chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          chipGroup.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
          chip.classList.add('active');
        });
      });
    }

    // Slider updates
    const sorenessSlider = document.getElementById('checkin-soreness');
    const sorenessVal = document.getElementById('soreness-val');
    if (sorenessSlider && sorenessVal) {
      sorenessSlider.addEventListener('input', () => {
        sorenessVal.textContent = sorenessSlider.value;
      });
    }

    const moodSlider = document.getElementById('checkin-mood');
    const moodVal = document.getElementById('mood-val');
    if (moodSlider && moodVal) {
      moodSlider.addEventListener('input', () => {
        moodVal.textContent = moodSlider.value;
      });
    }

    // Submit
    const submit = document.getElementById('checkin-submit');
    if (submit) {
      submit.addEventListener('click', () => {
        this.save();
        closeModal();
      });
    }
  },

  /**
   * Save check-in data
   */
  save() {
    const data = {
      sleep: parseFloat(document.getElementById('checkin-sleep')?.value) || null,
      restingHR: parseInt(document.getElementById('checkin-hr')?.value) || null,
      weight: parseFloat(document.getElementById('checkin-weight')?.value) || null,
      training: document.querySelector('#checkin-training .chip.active')?.dataset.value || null,
      soreness: parseInt(document.getElementById('checkin-soreness')?.value) || 3,
      mood: parseInt(document.getElementById('checkin-mood')?.value) || 4,
      timestamp: new Date().toISOString(),
    };

    // Save to localStorage
    try {
      const key = `athletiq_checkin_${new Date().toISOString().split('T')[0]}`;
      localStorage.setItem(key, JSON.stringify(data));
      console.log('Check-in saved:', data);
    } catch (e) {
      console.error('Failed to save check-in:', e);
    }

    // Remove banner if it exists
    const banner = document.getElementById('checkin-trigger');
    if (banner) {
      banner.style.opacity = '0';
      banner.style.transform = 'scale(0.95)';
      banner.style.transition = 'all 0.3s';
      setTimeout(() => banner.remove(), 300);
    }
  },
};
