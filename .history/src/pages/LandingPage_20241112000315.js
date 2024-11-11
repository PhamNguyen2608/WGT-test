import HeroSection from '../components/HeroSection.js';
import GetDataService from '../services/getDataService.js';
export default class LandingPage {
    constructor(){
        this.getDataService = new GetDataService();
    }
    async render(){
        const data = await this.getDataService.getData();
        const heroSection = new HeroSection({
            title: data.title,
            images: data.images,
            content: data.content
        });
        container.appendChild(heroSection.render());
        return container;
    }
}       