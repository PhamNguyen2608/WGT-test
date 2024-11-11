export default class GetDataService {
    constructor(){
        this.endpoint = '../data/data.json';
    }
    async getData() {
        try {
            const response = await fetch(this.endpoint);
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

