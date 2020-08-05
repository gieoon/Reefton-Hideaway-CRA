import React from 'react';

export default function ImageContainer({
    imgSrc,
    labelTxt,
}){
    return(
        <div className="ImageContainer">
            <button style={{backgroundImage:`url(${imgSrc})`}}>
                <span>{labelTxt}</span>
            </button>
        </div>
    )
}
