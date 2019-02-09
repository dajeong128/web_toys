import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';


const image = (props) => {
    return (
        <LazyLoadImage
        alt={image.alt}
        src={props.src} 
        effect={props.effect}
        />
    )
}

export default image