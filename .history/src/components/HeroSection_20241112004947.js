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
      const contentElement = this.createElement("p", "hero-content", content);
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
