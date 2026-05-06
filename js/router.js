/* ============================================
   AtletiQ Router — Client-side Navigation
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

    const prev = this.currentRoute;
    this.currentRoute = route;

    // Execute route handler
    const handler = this.routes.get(route);
    if (handler) handler();

    // Notify listeners
    this.notifyListeners(route, prev);
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
   * Notify all listeners
   */
  notifyListeners(route, prev) {
    this.listeners.forEach((listener) => listener(route, prev));
  }
}

export const router = new Router();
