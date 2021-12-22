import React from 'react' 

import './yearanimationCSS.css'

const YearAnimation = () =>{ 
return(
<div class="svgContainer"><svg class="digit" height="200" viewBox="-30 -30 150 220" width="100"> <circle cx="50" cy="50" fill="none" pathLength="1" r="50" stroke="rgb(128, 115, 202)" stroke-width="20"></circle> <path class="path" d="M0 50 
    C 0 0, 50 0, 50 0 
    C 100 0, 100 50, 100 50
    L 0 200
    L 200 200" fill="none" pathlenght="1" stroke="rgb(128, 115, 202)" stroke-width="20"> </path> </svg> <svg class="digit" height="200" viewBox="-30 -30 150 220" width="100"> <circle cx="50" cy="150" fill="none" pathLength="1" r="50" stroke="rgb(89, 75, 172)" stroke-dasharray="1 1" stroke-dashoffset="0" stroke-width="20"></circle> <path class="path" d="M 100 150
 C 100 200, 50 200, 50 200
 C 0 200, 0 150, 0 150
 L 0 50
 C 0 0, 50 0, 50 0
 C 100 0, 100 50, 100 50
 L 100 150" fill="none" pathlenght="1" stroke="rgb(89, 75, 172)" stroke-width="20"> </path> </svg> 
 
 <svg class="digit" height="200" viewBox="-30 -30 150 220" width="100"> <circle cx="50" cy="50" fill="none" pathLength="1" r="50" stroke="rgb(57, 43, 139)" stroke-dasharray="1 1" stroke-dashoffset="0" stroke-width="20"></circle> <path class="path" d="M0 50 
    C 0 0, 50 0, 50 0 
    C 100 0, 100 50, 100 50
    L 0 200
    L 200 200" fill="none" pathlenght="1" stroke="rgb(57, 43, 139)" stroke-width="20"> </path> </svg> 
    
<svg class="digit" height="200" viewBox="-30 -30 150 220" width="100"> <circle cx="50" cy="150" fill="none" pathLength="1" r="50" stroke="rgb(18, 9, 66)" stroke-dasharray="1 1" stroke-dashoffset="0" stroke-width="20"></circle> <path class="path" d="M 100 150
 C 100 200, 50 200, 50 200
 C 0 200, 0 150, 0 150
 L 0 50
 C 0 0, 50 0, 50 0
 C 100 0, 100 50, 100 50
 L 100 150" fill="none" pathlenght="1" stroke="rgb(18, 9, 66)" stroke-width="20"> </path> </svg>
 </div>
   )
}

export default YearAnimation;