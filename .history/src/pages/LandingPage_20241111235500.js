import HeroSection from '../components/HeroSection.js';
import GetDataService from '../services/getDataService.js';
export default class LandingPage {
    constructor(){
        this.getDataService = new GetDataService();
    }
    render(){
        const heroSection = new HeroSection({
            title: "Hero Section",
            images: [],
            content: "Hero Section Content"
        });
        return heroSection.render();
    }
}       