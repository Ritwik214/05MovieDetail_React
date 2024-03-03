import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from './api';

const MovieDetail = () => {
    const { movieId } = useParams();
    const [movie, setMovie ]= useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const details = await getMovieDetails(movieId);
            setMovie(details);
        };
        fetchMovieDetails();
    },
    [movieId]);
    if (!movie) {
        return<p>Loading...</p>
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>     
        </div>
    );
};
export default MovieDetail; 