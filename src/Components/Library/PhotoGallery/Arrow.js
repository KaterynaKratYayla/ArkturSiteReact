import React from 'react'
import './PhotoGalleryCSS.css'

console.log('[file]', 'src/Components/Library/PhotoGallery/Arrow.js');
console.log('[file]:export const ArrowGallery', 'src/Components/Library/PhotoGallery/Arrow.js');
export const ArrowGallery = ({ direction, photoClick }) => (
    // console.log(direction),

    <div onClick={photoClick}>
         {direction === 'right' ?
                <div><a className="prevGallery">&#10094;</a></div>
                         :
                <div><a className="nextGallery">&#10095;</a></div>
        }
    </div>
    )
