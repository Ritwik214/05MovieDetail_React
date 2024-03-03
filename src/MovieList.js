import React, { useState, useEffect } from 'react';
import { getPopularMovies } from './api';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        };
        fetchPopularMovies();
    }, []);

    return (
       <div>
        <h2>Popular Movies</h2>
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>
       </div>
    );
};

export default MovieList;