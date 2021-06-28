import React, {useState} from 'react';
import close from '../assets/close_white.svg';
export default function Notification(){

    const [showing, setShowing] = useState(true);

    return(
        <div className="Notification" style={{opacity: showing ? "1" : "0"}}>
            <p>
                <a  rel="noopener noreferrer"
                    href="https://www.facebook.com/reeftonhideaway" target="_blank">Join our popular Community Kitchen every Tuesday, Wednesday, and Thursday evenings. 6pm to 6:30pm at our doorstep.</a>
            </p>
            <img src={close} alt="" onClick={()=>{setShowing(false)}}/>
        </div>
    );
}
