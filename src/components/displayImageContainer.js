import React from 'react';

export default function ImageContainer({
    imgSrc
}){
    return(
        <div className="DisplayImageContainer">
            <button style={{backgroundImage:`url(${imgSrc})`}}>
            </button>
        </div>
    )
}
