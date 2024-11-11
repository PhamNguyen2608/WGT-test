export default class HeroSection {
    constructor(props) {
        this.props = props; 
    }
  
    createElement(tag, className = '', textContent = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (textContent) element.textContent = textContent;
        return element;
    }

    createImageContainer(images) {
        const container = this.createElement('div', 'hero-images');
        images.forEach(({ src, alt }) => {
            const img = this.createElement('img');
            img.src = src;
            img.alt = alt;
            container.appendChild(img);
        });
        return container;
    }
  
    render() {
        const { title, images, content } = this.props;
        const section = this.createElement('section', 'hero-section');
        const titleElement = this.createElement('h1', 'hero-title', title);
        const imageContainer = this.createImageContainer(images);
        const contentElement = this.createElement('p', 'hero-content', content);
        section.append(titleElement, imageContainer, contentElement);

        return section;
    }
  }
  