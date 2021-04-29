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
                {/* <a className="hideForMobile" href="#availability">Request a room</a> */}
                <a href="/review">Leave a review</a>
                <a href="/community">Community Kitchen</a>
                <a className="hideForMobile" href="#about">About</a>
                <a className="hideForMobile" href="#contact">Contact</a>
                {/* <a href="" target="_blank">Blog</a> */}
            </div>
        </div>
    )
};
