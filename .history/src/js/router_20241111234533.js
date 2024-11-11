export default class Router {
  constructor() {
    this.routes = {};
  }

  registerRoute(path, callback) {
    this.routes[path] = callback;
  }
  handleRouterChange(rootElement) {
    const path = window.location.hash.slice(1) || "/";
    const callback = this.routes[path];
    if (callback) {
      rootElement.innerHTML = "";
      rootElement.appendChild(callback());
    }
  }

  listen(rootElement) {
    window.addEventListener("hashchange", () =>
      this.handleRouterChange(rootElement)
    );
    this.handleRouterChange(rootElement);
  }
}
