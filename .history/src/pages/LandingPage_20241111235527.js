import HeroSection from '../components/HeroSection.js';
import GetDataService from '../services/getDataService.js';
export default class LandingPage {
    constructor(){
        this.getDataService = new GetDataService();
    }
    async render(){
        const data = await this.getDataService.getData();
        const heroSection = new HeroSection({
            title: data.top.title,
            images: data.top.images,
            content: data.top.content
        });
        return heroSection.render();
    }
}       