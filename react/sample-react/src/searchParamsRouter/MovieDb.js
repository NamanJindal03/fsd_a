import React, { useEffect, useState } from 'react'
import {movieData} from './constants/movieData.js';
import { useSearchParams, createSearchParams, useLocation } from 'react-router-dom';
export default function MovieDb() {
    const movieGenres = [...new Set(movieData.map(movie => movie.genre) )]
    console.log(movieGenres);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    console.log(location);

    const [moviesToDisplay, setMoviesToDisplay] = useState([]);
    useEffect(()=>{
        const genre = searchParams.get("genre");
        const temp = searchParams.get("abcd");
        console.log(temp)
        const filteredMovies = movieData.filter((movies)=> {return movies.genre == genre});
        // const filteredMovies = movieData.filter((movies)=> console.log(movies.genre));
        console.log(filteredMovies);
    }, [])
  return (
    <>
        {movieGenres.map((category)=>{
            return (
                <span 
                    style={{border: '1px solid black', padding:'3px 5px'}}
                    onClick={() => setSearchParams(createSearchParams({genre: category}))}
                >
                    {category}
                </span>
            )
        })}
    </>
  )
}
