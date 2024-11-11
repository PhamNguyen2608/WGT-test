export default class ContentSection {
    constructor({ image, text, reverse = false }) {
        this.image = image;
        this.text = text;
        this.reverse = reverse; // Xác định layout (đảo vị trí ảnh và text)
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

        const descriptions = this.text.descriptions.map((description) => {
            const p = document.createElement('p');
            p.className = 'content-description';
            p.textContent = description;
            return p;
        });

        textContainer.appendChild(titleElement);
        descriptions.forEach((desc) => textContainer.appendChild(desc));
        section.appendChild(imageElement);
        section.appendChild(textContainer);

        return section;
    }
}
