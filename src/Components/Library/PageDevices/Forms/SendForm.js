import React,{useState, useEffect} from 'react'
import axios from 'axios'

export const SendForm =({list})=>{

    const [supplierForm,setSupplierForm] = useState()

    useEffect(() => {
        const ActionRQ = {

            "data" :
               {

                    country: list.country, 
                    city: list.city,
                    accomType: list.accomType,
                    property_name: list.property_name,
                    owner_name: list.owner_name,
                    position: list.position,
                    amountRooms: list.amountRooms,
                    floorAmount: list.floorAmount,
                    renYear: list.renYear,
                    tel: list.tel,
                    address: list.address,
                    email: list.email,
                    website: list.website,
                    freeAccom: list.freeAccom,
                    freeAccomDays: list.freeAccomDays,
                    discAccom: list.discAccom,
                    discAccomDays: list.discAccomDays
               }
              };

            axios.post(`https://arkturdmc.com.ua/reg_form.php`, JSON.stringify({ActionRQ}))
            .then(response => setSupplierForm(response.data));

        }, []);

    return(
        <h2>Your application is sent. Our specialists will get back to you within 48 hours</h2>
    )
}