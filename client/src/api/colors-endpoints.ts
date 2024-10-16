import api from './api';

const getAllColors = async () => {
    try {
        const response = await api.get('/colors');
        return response.data;
    } catch (error) {
        console.error('Error fetching colors:', error);
        throw new Error('Failed to fetch colors');
    }
}

export {
    getAllColors
}