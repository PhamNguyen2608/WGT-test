import App from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('app');
    const app = new App(rootElement);
    app.render();
});
