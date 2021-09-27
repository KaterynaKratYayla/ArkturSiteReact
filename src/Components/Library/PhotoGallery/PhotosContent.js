import React from 'react'
import styled from'@emotion/styled'

const GalleryContent = styled.div`
    transform: translateX(-${props => props.translate}px); 
    width: ${props => props.width}px; 
    display: flex; 
`
//transition: transform ease-out ${props => props.transition}s; 

console.log(GalleryContent)
export default GalleryContent;
 