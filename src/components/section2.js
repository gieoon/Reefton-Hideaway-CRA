import React from 'react';
import single from '../assets/images/single_room.jpg';
import twin from '../assets/images/twin_room.jpg';
import family from '../assets/images/family_room.jpg';
import ImageContainer from './imageContainer';

export default function Section2({

}){
    return(
        <div className="Section2">
            <div className="Inner">
                <div>
                    <h2>Accomodation offers</h2>
                    <p>Our room choices for your stay in Reefton.</p>
                </div>
                <div className="ImageContainer-wrapper">
                    <ImageContainer 
                        imgSrc={single} 
                        labelTxt="Single Room" 
                        price="$50 first night, $25 - 35 for subsequent nights."
                        description="King-single bed"
                        height="250px"
                    />
                    <ImageContainer 
                        imgSrc={twin} 
                        labelTxt="Twin / Double Room" 
                        price="$45 one night, per person"
                        description="King-single beds"
                        height="250px"
                    />
                    <ImageContainer 
                        imgSrc={family} 
                        labelTxt="Family Room" 
                        price="$120 per night"
                        description="King-single beds"
                        height="250px"
                    />
                </div>

                <div>
                    <p>We also cater to large groups or long term residents and provide catering services/function rooms. Inquire for more information</p>
                </div>
            </div>
        </div>
    )
}
