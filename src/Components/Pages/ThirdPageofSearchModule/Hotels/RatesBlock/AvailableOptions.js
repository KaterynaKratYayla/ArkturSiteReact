import React , {useState, useEffect} from 'react';
import { useSelector,useDispatch} from 'react-redux'
import {BookButtonHotel} from '../BookButtonHotel'
import { OccupancyTypes } from '../../../../Library/StaticJsonData/OccupancyTypes'
import {getOccupancySearch} from '../../../../../Redux/actions/hotelsearchdata'

import { Select } from 'antd';

import './RatesBlockCSS.css'


export const AvailableOptions = (props) =>{

    const {currency,index,rooms,room_id,room_name,sum,tariff_id,availability,occupancy,contract_id} = props;
    
    console.log('PROPS', props)

    const [selectedAvailability, setSelectedAvailability] = useState(parseInt(rooms,10))
    const [totalsum,setTotalSum] = useState(selectedAvailability*sum)

    const { Option } = Select;

    const dispatch = useDispatch();

    const SelectRooms = (value) => {
        setSelectedAvailability(value)
        setTotalSum(value*sum)
        // setPicked(true)
        // dispatch(getAvail(value,index))
    }

    useEffect(()=>{
      dispatch(getOccupancySearch(selectedAvailability,occupancy))
    },[])

    let empty_array = [];

    for (let i=1; empty_array.length<availability;i++){
      empty_array.push(i)
    }

    console.log('AVAILABILITY', selectedAvailability, empty_array)
   
    return(
    <>

      <h5 style={{
               fontSize: '17px',
               color: '#102D69',
               fontFamily:'Arial',
               fontWeight:'bold',
               display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:'white'}}>
                  {currency} {sum*selectedAvailability}
      </h5> 

      <h5 style={{display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:'white'}}>
       <Select 
           defaultValue={selectedAvailability}
           onChange={SelectRooms}
           bordered={true}
           size='middle'> 
             <>
               {
                empty_array&&empty_array.map((item)=>{
                  return (
                    <Option  
                       className='AvailableOptions' 
                       value={item}
                       key={item}> 
                              {item} 
                    </Option>  
                   )    
                 })
               }
            </>
      </Select>
     </h5>
    
    <h5 style={{display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'middle',
                    backgroundColor:'white'}}>
      <BookButtonHotel 
        selectedAvailability={selectedAvailability}
        room_id={room_id}
        room_name={room_name}
        totalsum={totalsum}
        tariff_id={tariff_id}
        contract_id={contract_id}
        occupancy={occupancy}
      />
      </h5>
  </>
 )
}
