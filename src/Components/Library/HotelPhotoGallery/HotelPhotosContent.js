import React from 'react'
import styled from'@emotion/styled'

console.log('[file]', 'src/Components/Library/HotelPhotoGallery/HotelPhotosContent.js');
const GalleryContent = styled.div`
    transform: translateX(-${props => props.translate}px); 
    height: 100%; 
    width: ${props => props.width}px; 
    display: flex; 
`
//transition: transform ease-out ${props => props.transition}s;

console.log(GalleryContent)
console.log('[file]:export default GalleryContent', 'src/Components/Library/HotelPhotoGallery/HotelPhotosContent.js');
export default GalleryContent;
