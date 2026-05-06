/* ============================================
   AthletiQ Storage Management
   Local storage utilities
   ============================================ */

const STORAGE_PREFIX = 'athletiq_';

export const storage = {
  /**
   * Get item from local storage
   */
  get(key) {
    try {
      const item = localStorage.getItem(`${STORAGE_PREFIX}${key}`);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading storage for key: ${key}`, error);
      return null;
    }
  },

  /**
   * Set item in local storage
   */
  set(key, value) {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error writing storage for key: ${key}`, error);
      return false;
    }
  },

  /**
   * Remove item from local storage
   */
  remove(key) {
    try {
      localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
      return true;
    } catch (error) {
      console.error(`Error removing storage for key: ${key}`, error);
      return false;
    }
  },

  /**
   * Clear all AthletiQ storage
   */
  clear() {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        if (key.startsWith(STORAGE_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
      return true;
    } catch (error) {
      console.error('Error clearing storage', error);
      return false;
    }
  },

  /**
   * Get all AthletiQ storage
   */
  getAll() {
    const all = {};
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.startsWith(STORAGE_PREFIX)) {
        const cleanKey = key.replace(STORAGE_PREFIX, '');
        try {
          all[cleanKey] = JSON.parse(localStorage.getItem(key));
        } catch (error) {
          all[cleanKey] = localStorage.getItem(key);
        }
      }
    });
    return all;
  },
};
