import React from 'react'
import {css, jsx} from '@emotion/react'
import './SliderCss.css'
import {useWindowWidthAndHeight} from '../../Pages/Helpers/WindowResizeHook'


// const Slide = (props) => { 
//     const {name} = props;
//       return(
//      <div>{name}</div>
//   )
// }

const Slide = ({content}) => {
// console.log(content)

const [width, height] = useWindowWidthAndHeight()

console.log('HEIGHT',height)

return (

    <div    
 
    style={{
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'}}

    ><img 
         style={{width: '100%',
                 margin: `${width>1000?'-55px 0 0 0':'0'}`,
                //  margin: '-105 0 0 0',
                height:`${width>1000? height*0.92 : width > 786? height/1.5 : height/2}px`
        }} 
         src={content}/> </div>
 )
}

// const Slide = ({content}) => (

//     <div css={css`
//       height: 100;
//       width: 100%;
//       background-image: url(${content});
//       background-size: cover;
//       background-repeat: no-repeat;
//       background-position: center;
//     `}
// />
// )


// console.log(Slide)
  export default Slide;