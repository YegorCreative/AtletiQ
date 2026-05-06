/* ============================================
   AthletiQ Router
   Client-side navigation
   ============================================ */

export class Router {
  constructor() {
    this.currentRoute = 'dashboard';
    this.routes = new Map();
    this.listeners = [];
  }

  /**
   * Register a route handler
   */
  register(route, handler) {
    this.routes.set(route, handler);
    return this;
  }

  /**
   * Navigate to a route
   */
  navigate(route) {
    if (!this.routes.has(route)) {
      console.warn(`Route not registered: ${route}`);
      return;
    }

    this.currentRoute = route;
    this.notifyListeners();
  }

  /**
   * Get current route
   */
  getCurrentRoute() {
    return this.currentRoute;
  }

  /**
   * Listen for route changes
   */
  onChange(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  /**
   * Notify all listeners of route change
   */
  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.currentRoute));
  }
}

/**
 * Create and export router instance
 */
export const router = new Router();
