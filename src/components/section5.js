import React from 'react';
import ImageContainer from './imageContainer';
// import cabins from '../assets/images/marketing1.jpg';
// import lounge from '../assets/images/marketing6.jpg';
// import mainhall from '../assets/images/marketing17.jpg';
import cabins from '../assets/images_anita/cabin_inner.jpg';
import lounge from '../assets/images_anita/fireplace.jpg';
import mainhall from '../assets/images_anita/main_hall_bright.jpg';

export default function Section5({}){
    return(
        <div className="Section5">
            <div className="Inner">
                <h2>Venues for hire</h2>
                {/* <p>If you are looking for a place to host a meeting or multi-day function, youth camps, community gatherings, or long term accomodation; we have venues for hire.</p> */}
                <p>Reefton Hideaway is the perfect place for groups to meet, for multi-day functions, community gatherings, and much more. We have venues to hire that can suit your needs, whatever they happen to be.</p>
            </div>

            <div className="ImageContainer-wrapper">
                <ImageContainer 
                    imgSrc={cabins} 
                    labelTxt="Self contained cabins" 
                    // price="$150 per week. $50 per night." 
                    // Including all expenses
                    description="$150 per week. $50 per night including all expenses. King-single bed, attached kitchenette and bathroom." 
                    // Double beds available with prior arrangement at additional cost.
                    height="300px"
                />
                <ImageContainer 
                    imgSrc={lounge} 
                    labelTxt="Quiet & Cosy Lounge" 
                    description="Enjoy a comfortable, quiet, secluded fireplace." 
                    //after an exhausting excursion
                    height="300px"
                />
                <ImageContainer 
                    imgSrc={mainhall} 
                    labelTxt="Meeting Rooms" 
                    description="Ensure you have ample space to host your next party or function." 
                    height="300px"
                />
            </div>
        </div>
    );
}
