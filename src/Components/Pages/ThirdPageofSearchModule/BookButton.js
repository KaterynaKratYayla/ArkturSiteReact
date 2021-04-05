import React, {useState, useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPax} from "../../../Redux/actions/paxchoice"
import axios from "axios"

export const BookButton = ({room_id,value}) =>{

    const paxAmount1 = useSelector(state => state.paxchoice.pax)
    const dispatch = useDispatch();

    useEffect ( () => {
        dispatch (getPax ());
        },[]);

    const AddToBasket = () =>{
        console.log(paxAmount1)
    }
        
    // console.log('paxAmount_pax', paxAmount)
    // console.log('paxAmount_value',value)
    // console.log('paxAmount_room_id',room_id)


    return(
        <button class='BookButton' onClick={AddToBasket}>Add to Basket</button>
    )
}