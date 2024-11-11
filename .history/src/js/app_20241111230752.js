import Router from './router.js';


export default class App {
    constructor(rootElement, routes, components) {
        this.rootElement = rootElement;
        this.routes = routes;
        this.components = components;
        this.router = new Router();
        console.log('App initialized');
    }

    setupRouter(){
        this.router.registerRoute("/", () => new LandingPage().render());
        this.router.listen(this.rootElement);
    }
    render(){  
        this.setupRouter();
        this.components.forEach(component => {
            this.rootElement.appendChild(component.render());
        });
    }
}