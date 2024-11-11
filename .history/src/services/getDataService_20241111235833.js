export default class GetDataService {
    constructor(){
        this.endpoint = '../data/data.json';
    }
    getData(){
        return fetch(this.endpoint)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
    }
}

