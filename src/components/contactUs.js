import React from 'react';
import email from '../assets/email.svg';
import phone from '../assets/phone.svg';
import location from '../assets/location.svg';

export default function ContactUs({}){
    return(
        <div className="ContactUs" id="contact">
            <div className="Inner">
                <div>
                    <h2>Contact Us</h2>
                    <p>Please feel free to ask us any questions. We're friendly.</p>
                    <div className="contact-wrapper">
                        <div>
                            <img src={location} alt="" />
                            <span>20 Crampton Road, Reefton, 7830, New Zealand</span>
                        </div>
                        <div>
                            <img src={phone} alt="" />
                            <span>Ramu: (+64) 223580668</span>
                        </div>
                        <div>
                            <img src={email} alt="" />
                            {/* <a href="mailto:hello@reeftonhideaway.com">hello@reeftonhideaway.com</a> */}
                            <a href="mailto:reeftonhideaway@gmail.com">reeftonhideaway@gmail.com</a>
                        </div>
                        <div>
                            <img src={email} alt="" />
                            <a href="mailto:ramu.sannyasi@gmail.com">ramu.sannyasi@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
