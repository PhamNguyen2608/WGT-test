export default class GetDataService {
    constructor(){
        this.endpoint = './data/data.json';
    }
    async getData(){
        const response = await fetch(this.endpoint);
        return response.json();
    }
}

