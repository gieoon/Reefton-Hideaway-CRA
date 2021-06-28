import React, {useState} from 'react';
import logo from '../assets/logo.png';
import restaurant from '../assets/restaurant_black_24dp.svg';
import chat from '../assets/chat_black_24dp.svg';
import about from '../assets/info_black_24dp.svg';
import contact from '../assets/contact_support_black_24dp.svg';

export default function Header({

}){
    const [isShowingHamburger, setIsShowingHamburger] = useState(false);
    
    return (
        <div className="Header">
            <div className="logo-wrapper">
                <img src={logo} alt="" />
            </div>
            <div className="links-wrapper">
                {/* <a className="hideForMobile" href="#availability">Request a room</a> */}
                { window.innerWidth > 769 
                    ? <>
                        <a href="/review">
                            <img src={restaurant} alt="Dining at Reefton Hideaway's Community kitchen" />
                            Review Us</a>
                        <a href="/community">
                            <img src={chat} alt="Chat message and leave a review for Reefton Hideaway" />
                            Community Kitchen</a>
                        <a className="hideForMobile" href="#about">
                            <img src={about} alt="About Reefton Hideaway" />
                            About</a>
                        <a className="hideForMobile" href="#contact">
                            <img src={contact} alt="Contact Reefton Hideaway" />
                            Contact</a>
                    </>
                    : <div className={"hamburger hamburger--slider " + (isShowingHamburger ? "is-active" : "")} 
                        onClick={()=>{setIsShowingHamburger(!isShowingHamburger)}}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                }
                {/* <a href="" target="_blank">Blog</a> */}
            </div>
            <div className={"mobile-menu " + (isShowingHamburger ? "showing" : "")}>
                <div className="wrapper">
                    <a href="/review" onClick={()=>{setIsShowingHamburger(!isShowingHamburger)}}>
                        <img src={restaurant} alt="Dining at Reefton Hideaway's Community kitchen" />
                        Review Us</a>
                    <a href="/community" onClick={()=>{setIsShowingHamburger(!isShowingHamburger)}}>
                        <img src={chat} alt="Chat message and leave a review for Reefton Hideaway" />
                        Community Kitchen</a>
                    <a className="hideForMobile" href="#about" onClick={()=>{setIsShowingHamburger(!isShowingHamburger)}}>
                        <img src={about} alt="About Reefton Hideaway" />
                        About</a>
                    <a className="hideForMobile" href="#contact" onClick={()=>{setIsShowingHamburger(!isShowingHamburger)}}>
                        <img src={contact} alt="Contact Reefton Hideaway" />
                        Contact</a>
                </div>
            </div>
        </div>
    )
};
