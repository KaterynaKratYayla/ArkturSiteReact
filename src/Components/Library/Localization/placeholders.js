import React from 'react';
import {useIntl} from 'react-intl'

export const PlaceHolderStrings = () =>{

    const {messages} = useIntl();

    let feature1;
    let feature2;
    let feature3;
    let feature4;
    let feature5;
    let feature6;
    let feature7;
    let feature8;
    let feature9;
    let feature10;
    let feature11;
    let feature12;
    let feature13;
    let feature14;
    let feature15;
    let feature16;

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
          else if (item.sitepage_region_id ===8 &&item.sitepage_type_id === 41){
            item.title.forEach((item1)=>{
              feature4 = item1.text
             }) 
          }
          else if (item.sitepage_region_id ===8 &&item.sitepage_type_id === 42){
            item.title.forEach((item1)=>{
              feature5 = item1.text
             }) 
          }
          else if (item.id === 93){
            item.title.forEach((item1)=>{
              feature6 = item1.text
             }) 
          }  
          else if (item.id === 94){
            item.title.forEach((item1)=>{
              feature7 = item1.text
             }) 
          }
          else if (item.id === 149){
            item.title.forEach((item1)=>{
              feature8 = item1.text
             }) 
          }
          else if (item.id === 95){
            item.title.forEach((item1)=>{
              feature9 = item1.text
             }) 
          }
          else if (item.id === 169){
            item.title.forEach((item1)=>{
              feature10 = item1.text
             }) 
          }
          else if (item.id === 170){
            item.title.forEach((item1)=>{
              feature11 = item1.text
             }) 
          }
          else if (item.id === 172){
            item.title.forEach((item1)=>{
              feature12 = item1.text
             }) 
          }
          else if (item.id === 153){
            item.title.forEach((item1)=>{
              feature13 = item1.text
             }) 
          }
          else if (item.id === 154){
            item.title.forEach((item1)=>{
              feature14 = item1.text
             }) 
          }
          else if (item.id === 188){
            item.title.forEach((item1)=>{
              feature15 = item1.text
             }) 
          }
          else if (item.id === 189){
            item.title.forEach((item1)=>{
              feature16 = item1.text
             }) 
          }

        }
      )

    const object = {
                    placeHolderString:feature1,
                    placeHolderStartDate:feature2,
                    placeHolderEndDate:feature3,
                    placeHolderTour:feature4,
                    placeHolderMonth:feature5,
                    placeHolderName:feature6,
                    placeHolderSurname:feature7,
                    placeHolderPhone:feature8,
                    placeHolderEmail:feature9,
                    placeHolderCountry:feature10,
                    placeHolderCity:feature11,
                    placeHolderSelect:feature12,
                    placeHolderYes:feature13,
                    placeHolderNo:feature14,
                    placeHolderNotsure:feature15,
                    placeHolderDateTurkey:feature16
                    
                }

      return object;
    }