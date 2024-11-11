import HeroSection from './HeroSection.js';

export default class LandingPage {
    render(){
        const heroSection = new HeroSection({
            title: "Hero Section",
            images: [],
            content: "Hero Section Content"
        });
        return heroSection.render();
    }
}       