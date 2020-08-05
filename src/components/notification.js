import React, {useState} from 'react';
import close from '../assets/close_white.svg';
export default Notification = ({}) => {

    const [showing, setShowing] = useState(true);

    return(
        <div className="Notification">
            { showing 
            ? <>
                <p>
                    <a href="https://www.facebook.com/reeftonhideaway" target="_blank">Join our popular Community Kitchen every Tuesday, Wednesday, and Thursday evenings. 6pm to 6:30pm right at our doorstep.</a>
                </p>
                <img src={close} alt="" onClick={()=>{setShowing(false)}}/>
                </>
                : <></>
            }
        </div>
    );
}
