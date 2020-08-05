import React from 'react';
import DisplayImageContainer from './displayImageContainer';
import meal1 from '../assets/images/IMG_0465.jpeg';
import meal2 from '../assets/images/IMG_0488.jpeg';
import meal3 from '../assets/images/IMG_0490.jpeg';
import meal4 from '../assets/images/IMG_0496.jpeg';
import meal5 from '../assets/images/IMG_0501.jpeg';
// import meal6 from '../assets/images/IMG_0502.jpeg';
import meal7 from '../assets/images/IMG_0503.jpeg';
import meal8 from '../assets/images/IMG_0504.jpeg';
import meal9 from '../assets/images/IMG_0505.jpeg';
import meal10 from '../assets/images/IMG_0506.jpeg';
import meal11 from '../assets/images/IMG_0507.jpeg';
// import meal12 from '../assets/images/IMG_0508.jpeg';

export default function Section3({

}){
    return(
        <div className="Section3">
            <div className="Inner">
                <h2>Heartwarming &amp; Delicious Meals</h2> 
                <p>We host a community kitchen three times a week attracting eager locals with a variety of foods catering to all tastes. The dishes are always different so be sure to visit and enjoy flavours you won't get anywhere else in Reefton. Our master nutritionist/chef boasts a fried chicken <b>World famous in Reefton</b></p>
            </div>
            <div className="DisplayImageContainer-wrapper">
                <DisplayImageContainer imgSrc={meal1} />
                <DisplayImageContainer imgSrc={meal2} />
                <DisplayImageContainer imgSrc={meal3} />
                <DisplayImageContainer imgSrc={meal4} />
                <DisplayImageContainer imgSrc={meal5} />
                {/* <DisplayImageContainer imgSrc={meal6} /> */}
                <DisplayImageContainer imgSrc={meal7} />
                <DisplayImageContainer imgSrc={meal8} />
                <DisplayImageContainer imgSrc={meal9} />
                <DisplayImageContainer imgSrc={meal10} />
                <DisplayImageContainer imgSrc={meal11} />
                {/* <DisplayImageContainer imgSrc={meal12} /> */}
            </div>

            <div className="Inner">
                <p>Don't just travel through, engage with locals, share stories, have a great meal.</p>
            </div>
        </div>
    );
}

//Relish
