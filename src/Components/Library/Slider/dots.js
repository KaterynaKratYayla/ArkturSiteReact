import React from 'react'
import {css,jsx} from '@emotion/react'

console.log('[file]', 'src/Components/Library/Slider/dots.js');

const Dot = ({ active }) => (
    <span
      css={css`
        padding: 10px;
        margin-right: 5px;
        cursor: pointer;
        border-radius: 50%;
        background: ${active ? 'black' : 'white'};
      `}
    />
  )

  const Dots = ({ slides, activeIndex }) => (
    <div
      css={css`
        position: absolute;
        bottom: 25px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeIndex === i} />
      ))}
    </div>
  )

  export default Dots;
