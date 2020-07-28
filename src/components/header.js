import React from 'react';
import logo from '../assets/logo.png';

export default function Header({

}){
    return (
        <div className="Header">
            <div className="logo-wrapper">
                <img src={logo} alt="" />
            </div>
            <div className="links-wrapper">
                <a href="#about">Who are we</a>
                <a href="#contact">Contact us</a>
                <a href="#availability">Check Availability</a>
                
            </div>
        </div>
    )
};
