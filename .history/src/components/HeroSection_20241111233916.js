export default class HeroSection {
    constructor({ title = "123", images = [], content = "123" }) {
      this.title = title;
      this.images = images;
      this.content = content;
    }
  
  
    createElement(tag, className = "", textContent = "") {
      const element = document.createElement(tag);
      if (className) element.className = className;
      if (textContent) element.textContent = textContent;
      return element;
    }
  
  
    createImageContainer(images) {
      const container = this.createElement("div", "flex");
      images.forEach(({ src, alt }) => {
        const img = this.createElement("img");
        img.src = src;
        img.alt = alt;
        container.appendChild(img);
      });
      return container;
    }
  
    render() {
      const section = this.createElement("section", "hero-section");
      const titleElement = this.createElement("h1", "", this.title);
      const imageContainer = this.createImageContainer(this.images);
      const contentElement = this.createElement("p", "", this.content);
      section.append(titleElement, imageContainer, contentElement);
  
      return section;
    }
  }
  