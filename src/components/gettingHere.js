import React from 'react';

export default function GettingHere({}){
    return(
        <div className="GettingHere">
            <div className="Inner">
                <h2>Getting Here</h2>
                <p>
                    If arriving by public transport,  
                    <a  rel="noopener noreferrer"
                        href="https://www.eastwestcoaches.co.nz/East-West%20Coaches" target="_blank"> East-West Coaches </a>
                     departs from Christchurch at 1:45pm and arrives at Reefton Hideaway at 5:45pm. $60 for the trip, airport pickup can be arranged for an additional $25 ($85 total). The service travels as far as Westport, and is ideal for passengers coming from Christchurch and going on to Punakaiki in a few days. A return service departs 9am, Saturday to Friday.
                </p>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2959.6823983613726!2d171.8596601624267!3d-42.114272392953474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2567fa5c776f97%3A0xce1dd1b7d00bf356!2s20%20Crampton%20Road%2C%20Reefton%207830!5e0!3m2!1sen!2snz!4v1583943751105!5m2!1sen!2snz" 
                    title="Google Map"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{border:"0"}}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                >
                </iframe>
            </div>
        </div>
    )
}