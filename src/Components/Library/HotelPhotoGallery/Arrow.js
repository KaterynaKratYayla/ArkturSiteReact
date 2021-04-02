import React from 'react'
import './GalleryCss.css'

console.log('[file]', 'src/Components/Library/HotelPhotoGallery/Arrow.js');
console.log('[file]:export const ArrowGallery', 'src/Components/Library/Basket/Reservation.js');
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
