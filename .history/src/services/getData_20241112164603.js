export default class GetData {
    async getData() {
        try {
            const response = await fetch('https://phamnguyen2608.github.io/WGT-test/src/data/data.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json(); 
            console.log(data)
                                                                                                    
            return data; 
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}
