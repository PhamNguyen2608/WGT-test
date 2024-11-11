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

            // Render Header
            const header = new Header({ title: pageData.header.title });
            container.appendChild(header.render());

            // Render HeroSection
            const heroSection = new HeroSection({
                images: pageData.heroSection.images,
                content: pageData.heroSection.content,
            });
            container.appendChild(heroSection.render());

            if (Array.isArray(pageData.contentSections)) {
                pageData.contentSections.forEach((sectionData, index) => {
                    const contentSection = new ContentSection({
                        image: sectionData.image,
                        text: sectionData.text,
                        reverse: index % 2 === 1, 
                    });
                    container.appendChild(contentSection.render());
                });
            } else {
                console.warn('Content sections are not an array:', pageData.contentSections);
            }
        } catch (error) {
            console.error('Error rendering LandingPage:', error);
            container.textContent = 'Failed to load content.';
        }

        return container;
    }
}
