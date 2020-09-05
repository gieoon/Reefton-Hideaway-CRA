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
                <p>
                    The Hideaway is located just ten minutes’ walk from the heart of Reefton, making it easy to enjoy the town, along with the nearby walks. There is so much beauty to see, 
                    There are cycle trails too, including the Old Ghost Road and the Paparoa track. 
                    <br/><br/>
                    The Hideaway offers has secure storage for bikes, so that you can enjoy the trails to your hearts’ content.
                    For a small town, Reefton offers a surprising number of things to see and do. Biking, fishing, tramping, and swimming in the rivers are all popular activities, along with simply taking in the sights and all the history. 
                    <br/><br/>
                    Nearby Lewis Pass is a fantastic destination for skiiers. Other travelers find that Reefton is the ideal stopping place. A chance to slow down away from the hustle and bustle of larger cities.
                </p>
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

/*
<p>Want to go hiking, kayaking, or get away from your busy life? Enjoy the pristine scenery Reefton and its surroundings has to offer.</p>
                <p>Reefton is the Gateway to the West Coast for its excellent location and proximity to exhilarating scenery. We know how to cater to everyone, cyclists, 4x4 drivers, backpackers, as well as organized tour groups with strict time requirements. We have secure bike storage and locker facilities as well as ample parking space.</p>
*/