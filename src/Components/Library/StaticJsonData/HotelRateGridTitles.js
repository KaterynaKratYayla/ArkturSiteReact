export const HotelRateGridTitles = (locale) =>{
    
    const obj = {
       en:['Room Type','Pax','Tariff','Total Rate','Availability','Book'],
       uk:['Тип номеру',"Містк.","Тариф",'Заг. Вартість',"Наявність","Забронювати"],
       ru:["Тип номера","Вмест.","Тариф","Общая цена","Наличие мест","Забронировать"],
       tr:["Oda Tipi","Kişi Sayısı",'Fiyat','Toplam Fiyatı','Müsayitlik','Seç']
    }
  
    for(let key in obj){
        if(key === locale)
          return obj[key]
    }
    // console.log('AAA_KATE_KATE',obj)

}
