export default class Header {
    constructor({ title }) {
        this.title = title;
    }

    render() {
        const header = document.createElement('header');
        header.className = 'header';

        const h1 = document.createElement('h1');
        h1.className = 'header__title'; 
        h1.textContent = this.title;

        header.appendChild(h1);

        return header;
    }
}
