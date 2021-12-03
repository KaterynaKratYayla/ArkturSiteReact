import React from 'react';
import {useIntl} from 'react-intl'

export const PlaceHolderStrings = () =>{

    const {messages} = useIntl();

    let feature1;
    let feature2;
    let feature3;

      messages&&messages.forEach((item)=>{
          if (item.sitepage_region_id ===8&&item.sitepage_type_id === 27){
           item.title.forEach((item1)=>{
            feature1 = item1.text
           })} 
          else if (item.sitepage_region_id ===8 &&item.sitepage_type_id === 28){
            item.title.forEach((item1)=>{
              feature2 = item1.text
             }) 
          }
          else if (item.sitepage_region_id ===8 &&item.sitepage_type_id === 29){
            item.title.forEach((item1)=>{
              feature3 = item1.text
             }) 
          }
        }
      )

    const object = {
                    placeHolderString:feature1,
                    placeHolderStartDate:feature2,
                    placeHolderEndDate:feature3
                }

      return object;
    }