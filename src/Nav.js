import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }else {
            handleShow(false);
        }
        
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => 
            window.removeEventListener("scroll", transitionNavBar);
    }, []);


    return (
        <div className= {`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <img 
            className= "nav__logo"
            src= "https://pngpress.com/wp-content/uploads/2020/04/Netflix-logo.png" 
            alt=""
            />


            <img 
            className = "nav__avatar"
            src= "http://www.sjuhawknews.com/wp-content/uploads/2020/06/A70106FB-AB28-4911-BCE4-5CE7F10C717D-810x526.png"
             alt=""
             /> 

            </div>
            
        </div>
    )
}

export default Nav
