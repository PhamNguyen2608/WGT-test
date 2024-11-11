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
            console.log(page)
            // Render Header
            const header = new Header({ title: page.header.title });
            container.appendChild(header.render());

            // Render HeroSection
            const heroSection = new HeroSection({
                images: page.heroSection.images,
                content: page.heroSection.content,
            });
            container.appendChild(heroSection.render());

            // Render ContentSections
            if (Array.isArray(page.contentSections)) {
                page.contentSections.forEach((sectionData, index) => {
                    const contentSection = new ContentSection({
                        image: sectionData.image,
                        text: sectionData.text,
                        reverse: index % 2 === 1,
                    });
                    container.appendChild(contentSection.render());
                });
            } else {
                console.warn('Content sections are not an array:', page.contentSections);
            }
        } catch (error) {
            console.error('Error rendering LandingPage:', error);
            container.textContent = 'Failed to load content.';
        }

        return container;
    }
}
