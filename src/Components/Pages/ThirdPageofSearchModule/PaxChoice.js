import React from 'react'

import {PlusOutlined, MinusOutlined} from '@ant-design/icons'
import {Pax} from '../../Library/Icons/pax.js'

import './TourDetailsCSS.css'
import 'antd/dist/antd.css'

console.log('[file]', 'src/Components/Pages/ThirdPageofSearchModule/PaxChoice.js');
export const PaxChoice =({MakeVisible, open}) =>{
    return(
        <div class='first'>
                 <div class='PaxChoice'>
                    <Pax />
                    <h4 onClick={MakeVisible}>Amount of People</h4>
                </div>
                  <div class={open === false? 'PopUpNotActive' : 'PopUpActive'}>
                    <div style={{display: 'grid',
                                 gridTemplateRows: 'repeat(3, 6vh)',
                                 rowGap: '3vh'}}>
                    <div style={{display: 'grid',
                                 gridTemplateColumns: '5vw 4vw 2vw 4vw 5vw'}}>
                        <h4>Adults</h4>
                        <MinusOutlined className='Minus'/>
                        <h4>2</h4>
                        <PlusOutlined className='Plus'/>
                        <span>12+ y.o.</span>
                    </div>

                    <div style={{display: 'grid',
                                 gridTemplateColumns: '5vw 4vw 2vw 4vw 5vw'}}>
                        <h4>Children</h4>
                        <MinusOutlined className='Minus'/>
                        <h4>0</h4>
                        <PlusOutlined className='Plus'/>
                        <span>2-11 y.o.</span>
                    </div>

                    <div style={{display: 'grid',
                                 gridTemplateColumns: '5vw 4vw 2vw 4vw 5vw'}}>
                        <h4>Infants</h4>
                        <MinusOutlined className='Minus'/>
                        <h4>0</h4>
                        <PlusOutlined className='Plus'/>
                        <span>0-2 y.o.</span>
                    </div>
                  </div>

                  <div>
                    <button class="PopUpButton">
                            Confirm
                    </button>
                  </div>

                 </div>
               </div>
    )
}
