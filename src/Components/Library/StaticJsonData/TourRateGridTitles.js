export const TourRateGridTitles = (locale) =>{
    
    const obj = {
       en:['Tour Name','Tour Type','Cost per person','','Amount of travellers','','Total Cost',''],
       uk:['Назва Туру',"Тип Туру","Вартість за особу",'','К-сть осіб','','Загальна Вартість',''],
       ru:["Название Тура","Тип Тура",'Стоимость за чел.','',"К-во чел.",'',"Общая Сумма",''],
       tr:["Tur Ismi",'Tur Tipi','Kişi Fiyatı','',"Kişi Sayısı",'','Toplam Fiyatı','']
    }
  
    for(let key in obj){
        if(key === locale)
          return obj[key]
    }
    // console.log('AAA_KATE_KATE',obj)

}
