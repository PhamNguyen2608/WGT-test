export default class ContentSection {
    constructor({ image, text }) {
        this.image = image;
        this.text = text;
    }

    createElement(tag, className, textContent = '') {
        const element = document.createElement(tag);
        element.className = className;
        element.textContent = textContent;
        return element;
    }

    render() {
        const section = this.createElement('div', 'content-section');

        const imageElement = this.createElement('img', 'content-image');
        imageElement.src = this.image.src;
        imageElement.alt = this.image.alt;

        const textContainer = this.createElement('div', 'content-text');
        const title = this.createElement('h2', 'content-title', this.text.title);
        const content = this.createElement('p', 'content-description', this.text.content);

        textContainer.append(title, content);
        section.append(imageElement, textContainer);

        return section;
    }
}
