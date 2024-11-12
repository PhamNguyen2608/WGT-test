// HeroSection.js

export default class HeroSection {
  constructor(props = {}) {
    const { title, images, content, events = {} } = props;
    this.props = { title, images, content };
    this.events = events;
  }

  createElement(tag, className = "", textContent = "", attributes = {}) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;

    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });

    return element;
  }

  createImageContainer(images) {
    const container = this.createElement("div", "hero-images");
    if (Array.isArray(images)) {
      images.forEach(({ src, alt }) => {
        const img = this.createElement("img", "", "", {
          src,
          alt: alt || "Image",
        });
        container.appendChild(img);
      });
    } else {
      console.warn('HeroSection: "images" is not an array', images);
      container.textContent = "No images available";
    }
    return container;
  }


  createContent(content) {
    const contentContainer = this.createElement("div", "hero-content");

    if (typeof content === "string") {
      const paragraphs = content.split('\n').filter(paragraph => paragraph.trim() !== '');

      paragraphs.forEach(paragraph => {
        const p = this.createElement("p", "hero-paragraph", paragraph.trim());
        contentContainer.appendChild(p);
      });
    } else {
      console.warn('HeroSection: "content" is not a string', content);
      contentContainer.textContent = "No content available";
    }

    return contentContainer;
  }

  render() {
    const { title, images, content } = this.props;

    const section = this.createElement("section", "hero-section");

    if (title) {
      const titleElement = this.createElement("h1", "hero-title", title);
      section.appendChild(titleElement);
    }

    const imageContainer = this.createImageContainer(images);
    section.appendChild(imageContainer);

    if (content) {
      const contentElement = this.createContent(content);
      section.appendChild(contentElement);
    } else {
      const placeholder = this.createElement(
        "p",
        "hero-content-placeholder",
        "No content available"
      );
      section.appendChild(placeholder);
    }

    return section;
  }
}
