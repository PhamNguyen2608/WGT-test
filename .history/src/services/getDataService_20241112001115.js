export default class GetDataService {
    async getData() {
        try {
            const response = await fetch('../data/data.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();

            if (!data.top) {
                throw new Error('Missing "top" section in data');
            }

            return data.top; 
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}
