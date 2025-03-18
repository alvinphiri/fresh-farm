import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Submit form data
export const submitForm = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/submit`, data);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            throw new Error(error.response.data.error);
        }
        throw new Error('An unexpected error occurred');
    }
};


// Fetch all submissions
export const getSubmissions = async () => {
    try {
        const response = await axios.get(`${API_URL}/submissions`);
        return response.data;
    } catch (error) {
        console.error('Error fetching submissions:', error.response.data);
        throw error;
    }
};
