import axios from 'axios'

const API_KEY = 'YOUR_API_KEY'
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
    try {
        const response= await axios.get(`${BASE_URL}/movie/popular`,{
            params: {
                api_key: API_KEY,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching popular movies', error);
        
    }
};

export const getMovieDetails =  async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}`,{
        params: {
            api_key: API_KEY,
        },
    });
    return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
};