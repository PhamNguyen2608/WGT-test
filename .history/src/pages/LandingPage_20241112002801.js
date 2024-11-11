import Header from '../components/Header.js';
import HeroSection from '../components/HeroSection.js';
import ContentSection from '../components/ContentSection.js';
import ApiService from '../services/ApiService.js';

export default class LandingPage {
    constructor(apiService) {
        this.apiService = apiService || new ApiService();
    }

    async render() {
        const container = document.createElement('div');
        container.className = 'landing-page';

        try {
            const data = await this.apiService.getData();

            // Header
            const header = new Header({ title: data.top.title });
            container.appendChild(header.render());

            // Hero Section
            const heroSection = new HeroSection({
                images: data.top.images,
                content: data.top.content,
            });
            container.appendChild(heroSection.render());

            // Content Sections
            data.bottom.sections.forEach((sectionData) => {
                const contentSection = new ContentSection({
                    image: sectionData.image,
                    text: sectionData.text,
                });
                container.appendChild(contentSection.render());
            });
        } catch (error) {
            console.error('Error rendering LandingPage:', error);
            container.textContent = 'Failed to load content.';
        }

        return container;
    }
}
