import axios from 'axios';

const API_URL = 'https://tienda-microservicio-libro-api.onrender.com/api/autor';

export const getAutores = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching autores:', error);
        throw error;
    }
};

export const getAutorById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching autor with id ${id}:`, error);
        throw error;
    }
};

export const getAutorByNombre = async (nombre) => {
    try {
        const response = await axios.get(`${API_URL}/nombre?nombre=${nombre}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching autor with nombre ${nombre}:`, error);
        throw error;
    }
};

export const createAutor = async (autor) => {
    try {
        const response = await axios.post(API_URL, autor);
        return response.data;
    } catch (error) {
        console.error('Error creating autor:', error);
        throw error;
    }
};