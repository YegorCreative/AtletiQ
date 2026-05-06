/* ============================================
   AtletiQ Review Module
   Evening check-in and reflection flow
   ============================================ */

export const review = {
  /**
   * Open the review modal
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
    const existing = document.getElementById('review-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'review-overlay';

    const sheet = document.createElement('div');
    sheet.className = 'modal-sheet';
    sheet.id = 'review-modal';

    sheet.innerHTML = `
      <div class="modal-sheet__handle"></div>
      <div class="modal-sheet__header">
        <h2 class="modal-sheet__title">Evening Review</h2>
        <button class="modal-sheet__close" id="review-close" aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="modal-sheet__body" id="review-body">
        <div class="checkin-form stagger" style="display:flex;flex-direction:column;gap:var(--space-6);">

          <!-- Training Adherence -->
          <div class="input-group">
            <label>Training Adherence</label>
            <div class="chip-group" id="review-training">
              <div class="chip" data-value="crushed">Crushed it</div>
              <div class="chip" data-value="done">Got it done</div>
              <div class="chip" data-value="missed">Missed</div>
            </div>
          </div>

          <!-- Fueling -->
          <div class="slider-group">
            <div class="slider-group__label">
              <span>Fueling & Hydration</span>
              <span class="slider-group__value" id="fueling-val">3</span>
            </div>
            <input type="range" id="review-fueling" min="1" max="5" value="3" step="1" />
            <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-tertiary);">
              <span>Poor</span><span>Optimal</span>
            </div>
          </div>

          <!-- Stress -->
          <div class="slider-group">
            <div class="slider-group__label">
              <span>Current Stress</span>
              <span class="slider-group__value" id="stress-val">2</span>
            </div>
            <input type="range" id="review-stress" min="1" max="5" value="2" step="1" />
            <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-tertiary);">
              <span>Low</span><span>High</span>
            </div>
          </div>

          <!-- Momentum / Motivation -->
          <div class="slider-group">
            <div class="slider-group__label">
              <span>Motivation for Tomorrow</span>
              <span class="slider-group__value" id="momentum-val">4</span>
            </div>
            <input type="range" id="review-momentum" min="1" max="5" value="4" step="1" />
            <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-tertiary);">
              <span>Low</span><span>Fired up</span>
            </div>
          </div>

          <!-- Brief Reflection -->
          <div class="input-group">
            <label for="review-reflection">What went well today?</label>
            <textarea class="input-field textarea-field" id="review-reflection" rows="3" placeholder="Jot down a quick win..."></textarea>
          </div>

          <!-- Submit -->
          <button class="btn btn-primary btn-lg btn-block" id="review-submit" style="margin-top:var(--space-2);">
            Save & Close Day
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
    const close = document.getElementById('review-close');
    const overlay = document.getElementById('review-overlay');

    const closeModal = () => {
      const modal = document.getElementById('review-modal');
      const ov = document.getElementById('review-overlay');
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
    const chipGroup = document.getElementById('review-training');
    if (chipGroup) {
      chipGroup.querySelectorAll('.chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          chipGroup.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
          chip.classList.add('active');
        });
      });
    }

    // Slider updates
    const sliders = [
      { id: 'review-fueling', valId: 'fueling-val' },
      { id: 'review-stress', valId: 'stress-val' },
      { id: 'review-momentum', valId: 'momentum-val' }
    ];

    sliders.forEach(s => {
      const slider = document.getElementById(s.id);
      const val = document.getElementById(s.valId);
      if (slider && val) {
        slider.addEventListener('input', () => {
          val.textContent = slider.value;
        });
      }
    });

    // Submit
    const submit = document.getElementById('review-submit');
    if (submit) {
      submit.addEventListener('click', () => {
        this.save();
        this.showSuccessState(closeModal);
      });
    }
  },

  /**
   * Show a satisfying success state before closing
   */
  showSuccessState(onComplete) {
    const body = document.getElementById('review-body');
    if (!body) {
      onComplete();
      return;
    }

    // Replace form with success state
    body.innerHTML = `
      <div class="flex-center flex-col animate-in" style="height: 300px; text-align: center; gap: var(--space-4);">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--color-success-subtle); color: var(--color-success); display: flex; align-items: center; justify-content: center; animation: scaleIn 0.4s var(--ease-spring);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div>
          <h3 style="font-size: var(--text-lg); font-weight: var(--weight-semibold); color: var(--color-text-primary);">Day Closed</h3>
          <p style="font-size: var(--text-sm); color: var(--color-text-tertiary); margin-top: var(--space-2);">Your memory has been stored.</p>
        </div>
      </div>
    `;

    // Wait a moment so the user sees the success state, then close
    setTimeout(() => {
      onComplete();
    }, 1500);
  },

  /**
   * Save review data
   */
  save() {
    const data = {
      training: document.querySelector('#review-training .chip.active')?.dataset.value || null,
      fueling: parseInt(document.getElementById('review-fueling')?.value) || 3,
      stress: parseInt(document.getElementById('review-stress')?.value) || 2,
      momentum: parseInt(document.getElementById('review-momentum')?.value) || 4,
      reflection: document.getElementById('review-reflection')?.value || '',
      timestamp: new Date().toISOString(),
    };

    // Save to localStorage
    try {
      const key = `athletiq_review_${new Date().toISOString().split('T')[0]}`;
      localStorage.setItem(key, JSON.stringify(data));
      console.log('Evening Review saved:', data);
    } catch (e) {
      console.error('Failed to save review:', e);
    }

    // Optional: Auto-complete the reflection action card if it exists
    const actionCard = document.querySelector('[data-action-id="action_3"]');
    if (actionCard && !actionCard.classList.contains('completed')) {
      actionCard.classList.add('completed');
      // Trigger a custom event to update dashboard progress
      document.dispatchEvent(new Event('athletiq:actionCompleted'));
    }
  },
};
