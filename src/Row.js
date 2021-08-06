import React, { useState, useEffect } from "react";
import axios from "./Axios";
import "./Row.css";


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // A snipet of caode which runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      <div className="row_posters">
        {/* serveral row_poster(s) */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {/* container -> posters */}
    </div>
  );
}

export default Row;










// import React from 'react'
// import axios from "./Axios";
// import "./Row.css";
// import { useState, useEffect } from 'react';
// import requests from './Requests';

// function Row({title , fetchUrl , isLargeRow = false}) {
//     const [movies , setMovies] = useState([]);
    
//     const base_url = "https://image.tmdb.org/t/p/original/";

//     useEffect(() => {
//         async function fetchData (){
//             const request = await axios.get(fetchUrl);
//             setMovies(request.data.results);
//             return requests;
//         }
//         fetchData();
     
//     }, [fetchUrl])

//     return (
//         <div className = "row">
//             <h2>{title}</h2>
//             {movies.map(movie => (
//                 <img 
//                 src={`${base_url} ${
//                     isLargeRow ? movie.poster_path : movie.backdrop_path
//                 }`} 
//                 alt={movie.name} />
//             ))}

//         </div>
//     )
// }

// export default Row;
