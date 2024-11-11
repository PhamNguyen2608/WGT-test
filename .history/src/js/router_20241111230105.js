export default class Router {
    constructor(routes) {
        this.routes = routes;
    }

    register(path, callback) {
        this.routes[path] = callback;
    }
}