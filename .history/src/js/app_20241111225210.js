export default class App {
    constructor(rootElement, routes, components) {
        this.rootElement = rootElement;
        this.routes = routes;
        this.components = components;
        console.log('App initialized');
    }
}