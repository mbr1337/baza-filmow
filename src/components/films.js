import '../styles/filmStyle.scss'
import React, { useState, useEffect } from "react";
import Filmcard from './filmCard';
import axios from 'axios';

const Films = () => {
    const [movies, setMovies] = useState([]);

    const generateRandomNumber = () => {
        const min = 1;
        const max = 10;
        const newRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return newRandomNumber;
    }
    useEffect(() => {
        axios.get('https://at.usermd.net/api/movies')
            .then(response => {
                if (response.data.length) {
                    setMovies(response.data);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // useEffect(() => {
    //     axios.delete('https://at.usermd.net/api/movie/63d64eb8d3af3f39a23b1c71')
    // }, []);


    return (
        <div className="container">
            <div>
                {movies.length ? movies.map(movie => (
                    <Filmcard
                        key={movie.id}
                        IsCardOpen={false}
                        ImgSrc={movie.image}
                        Alt="alt nie podano"
                        Title={movie.title}
                        Author="Autora nie podano"
                        Summary={movie.content}
                        CurrentRating={generateRandomNumber()}
                        MaxRating={10}
                        movieid={movie.id}
                    />
                )) : <div>No Movies Found</div>}
            </div>
        </div>
    );
}
export default Films;
