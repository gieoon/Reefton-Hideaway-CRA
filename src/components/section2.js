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
                    <p>Select from our choice of accomodation</p>
                </div>
                <div className="ImageContainer-wrapper">
                    <ImageContainer imgSrc={single} labelTxt="Single Room" />
                    <ImageContainer imgSrc={twin} labelTxt="Twin/Double Room" />
                    <ImageContainer imgSrc={family} labelTxt="Family Room" />
                </div>

                <div>
                    <p>We also cater to large groups, inquire for more information</p>
                </div>
            </div>
        </div>
    )
}
