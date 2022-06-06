import React,{useState, useEffect} from 'react'
import axios from 'axios'

export const RefugeeSubmit =({list})=>{

    const [supplierForm,setSupplierForm] = useState()

    useEffect(() => {
        const ActionRQ = {

            "data" :
               {

                    city: list.city, //yes
                    accomType: list.accomType+' - legal status in Turkey', //yes,status
                    property_name: list.property_name+' - name', //yes, name
                    owner_name: list.owner_name+' - surname', //yes,surname
                    position: list.position+' - occupation',// yes, occupation
                    // amountRooms: list.amountRooms, 
                    // floorAmount: list.floorAmount,
                    renYear: list.renYear+' - arrival date to Turkey',//yes, arrival date
                    tel: list.tel,//yes, tel
                    address: list.address,//yes, adrress
                    // email: list.email,
                    website: list.website+' - email address', //yes, email
                    freeAccom: list.freeAccom+' - whether you want to be a part of Association',//whether you want to be a part of association
                    freeAccomDays: list.children+' - if children are travelling',
                    discAccom: list.discAccom,//whether you want to go to school
                    discAccomDays: list.childrenAmount+' - amount of children'
               }
              };

            axios.post(`https://arkturdmc.com.ua/reg_form.php`, JSON.stringify({ActionRQ}))
            .then(response => setSupplierForm(response.data));

        }, []);

    return(
        <h2>Your application is sent. Our specialists will get back to you within 48 hours</h2>
    )
}