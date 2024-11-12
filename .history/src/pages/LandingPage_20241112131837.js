import Header from '../components/Header.js';
import HeroSection from '../components/HeroSection.js';
import ContentSection from '../components/ContentSection.js';
import GetDataService from '../services/getDataService.js';

export default class LandingPage {
    constructor() {
        this.getDataService = new GetDataService(); 
    }

    async render() {
        const container = document.createElement('div');
        container.className = 'landing-page';

        try {
            const pageData = await this.getDataService.getData();
            const page = pageData.page;

            // Render Header (if needed)
            const header = new Header({ title: page.header.title });
            container.appendChild(header.render());

            // Render HeroSection (if needed)
            const heroSection = new HeroSection({
                images: page.heroSection.images,
                content: page.heroSection.content,
            });
            container.appendChild(heroSection.render());

            // Create container for content sections
            const contentSectionsContainer = document.createElement('div');
            contentSectionsContainer.className = 'content-sections-container';

            // Render ContentSections in grid
            if (Array.isArray(page.contentSections)) {
                page.contentSections.forEach((sectionData, index) => {
                    const contentSection = new ContentSection({
                        image: sectionData.image,
                        text: sectionData.text,
                        reverse: index % 2 === 1,
                    });
                    contentSectionsContainer.appendChild(contentSection.render());
                });
            }

            container.appendChild(contentSectionsContainer);
        } catch (error) {
            console.error('Error rendering LandingPage:', error);
            container.textContent = 'Failed to load content.';
        }

        return container;
    }
}
