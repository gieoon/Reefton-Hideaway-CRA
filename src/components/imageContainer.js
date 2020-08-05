import React from 'react';

export default function ImageContainer({
    imgSrc,
    labelTxt,
    price,
    description,
    height,
}){
    return(
        <div className="ImageContainer">
            <button style={{backgroundImage:`url(${imgSrc})`,height: height}}>
                <span>{labelTxt}</span>

                <p className="price">{price}</p>
                <p className="description">{description}</p>
            </button>
        </div>
    )
}
