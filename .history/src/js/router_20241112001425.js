export default class Router {
    constructor() {
        this.routes = {};
    }

    registerRoute(path, callback) {
        this.routes[path] = callback;
    }

    async handleRouteChange(rootElement) {
        const path = window.location.hash.slice(1) || '/';
        const renderCallback = this.routes[path];

        if (renderCallback) {
            rootElement.innerHTML = ''; 
            try {
                const content = await renderCallback(); 
                if (content instanceof Node) {
                    rootElement.appendChild(content);
                } else {
                    throw new Error('Render callback did not return a Node');
                }
            } catch (error) {
                console.error('Error rendering route:', error);
                rootElement.innerHTML = '<h1>Failed to load route content</h1>';
            }
        } else {
            rootElement.innerHTML = '<h1>404 - Page Not Found</h1>';
        }
    }

    listen(rootElement) {
        window.addEventListener('hashchange', () => this.handleRouteChange(rootElement));
        this.handleRouteChange(rootElement);
    }
}
