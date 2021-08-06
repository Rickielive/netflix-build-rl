import React from 'react'
import './Banner.css';
import axios from "./axios";
import requests from "./Requests";
import { useState, useEffect } from 'react';



function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length -1)
                ]
            );
            
            return request;
        }
        fetchData();

    }, []);

    console.log(movie);



    function truncate (string , n){
        return string && string.length > n ? string.substr(0, n - 1) + "..." : string;
    }



    return (
        <header className= "banner" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://w7.pngwing.com/pngs/275/820/png-transparent-trend-pattern-background-textured-textures-black-texture-poster-banner.png")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents"> 
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My list</button>
                </div>
                <h1 className= 'banner__description'>{truncate (`This is a test description`, 10)}</h1>
            </div>
            <div className="banner__fadeBottom"/>  
            {/* Gives that nice fade at the end */}


        </header>
    );
}

export default Banner
