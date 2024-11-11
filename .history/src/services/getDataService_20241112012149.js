export default class GetDataService {
    async getData() {
        try {
            const response = await fetch('src/data/data.json'); 
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json(); 

          

            return data; 
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}
