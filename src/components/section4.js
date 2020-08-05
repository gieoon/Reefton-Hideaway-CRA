import React from 'react';
import ImageContainer from './imageContainer';
import destination1 from '../assets/images/IMG_0471.jpeg';
import destination2 from '../assets/images/IMG_0478.jpeg';
import destination3 from '../assets/images/IMG_0517.jpeg';
import destination4 from '../assets/images/IMG_0585.jpeg';
import destination5 from '../assets/images/arthurs_pass.jpg';
import destination6 from '../assets/images/inangahua.jpg';
import destination7 from '../assets/images/rapahoe.jpg';
import destination8 from '../assets/images/rotoiti.jpg';
import destination9 from '../assets/images/punakaiki.jpg';

export default function Section4({

}){
    return(
        <div className="Section4">
            <div className="Inner">
                <h2>Your Adventure: The Gateway to the West</h2>
                <p>Want to go hiking, kayaking, or get away from your busy life? Enjoy the pristine scenery Reefton and its surroundings has to offer.</p>
                <p>Reefton is the Gateway to the West Coast for its excellent location and proximity to exhilarating scenery. We know how to cater to everyone, cyclists, 4x4 drivers, backpackers, as well as organized tour groups with strict time requirements. We have secure bike storage and locker facilities as well as ample parking space.</p>
            </div>
            <div className="ImageContainer-wrapper">
                <ImageContainer imgSrc={destination1} labelTxt="Buller Gorge Swing Bridge" />
                <ImageContainer imgSrc={destination2} labelTxt="Reefton Town of Light" />
                <ImageContainer imgSrc={destination3} labelTxt="Scenic Reserve" />
                <ImageContainer imgSrc={destination4} labelTxt="Route to Greymouth" />
                <ImageContainer imgSrc={destination5} labelTxt="Crystal Waters of Arthur's Pass" />
                <ImageContainer imgSrc={destination6} labelTxt="Inangahua River" />
                <ImageContainer imgSrc={destination7} labelTxt="Relax on Rapahoe Coast" />
                <ImageContainer imgSrc={destination8} labelTxt="Nelson Lakes National Park" />
                <ImageContainer imgSrc={destination9} labelTxt="Pancake Rocks at Punakaiki" />
            </div>
        </div>
    )
}
