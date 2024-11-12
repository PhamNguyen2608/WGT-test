export default class ContentSection {
    constructor({ image, text, reverse = false }) {
        this.image = image;
        this.text = text;
        this.reverse = reverse;
    }

    render() {
        const section = document.createElement('div');
        section.className = 'content-section';
        if (this.reverse) {
            section.classList.add('reverse');
        }

        const imageElement = document.createElement('img');
        imageElement.src = this.image.src;
        imageElement.alt = this.image.alt || 'Content Image';
        imageElement.className = 'content-image';

        const textContainer = document.createElement('div');
        textContainer.className = 'content-text';

        const titleElement = document.createElement('h2');
        titleElement.className = 'content-title';
        titleElement.textContent = this.text.title;

        textContainer.appendChild(titleElement);

        if (Array.isArray(this.text.subsections)) {
            this.text.subsections.forEach((subsection) => {
                const subtitleElement = document.createElement('h3');
                subtitleElement.className = 'content-subtitle';
                subtitleElement.textContent = subsection.subtitle;

                const contentElement = document.createElement('p');
                contentElement.className = 'content-description';
                contentElement.textContent = subsection.content;

                textContainer.appendChild(subtitleElement);
                textContainer.appendChild(contentElement);
            });
        } else if (this.text.content) {
            const contentElement = document.createElement('p');
            contentElement.className = 'content-description';
            contentElement.textContent = this.text.content;
            textContainer.appendChild(contentElement);
        }

        section.appendChild(imageElement);
        section.appendChild(textContainer);

        return section;
    }
}
