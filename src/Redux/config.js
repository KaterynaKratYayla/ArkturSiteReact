const supportedLangs = "EN|UK|RU|TR";

/*let supportedLangs = fetch('http://smartbooker.biz/interface/classifier?classifier=language')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log('supportedLangs: ', data);
        let str = data[0].name;
        const languagesCount = data.length;
        if (languagesCount > 1) {
            for(let i = 1; i < languagesCount; i++){
                str += "|" + data[i].name;
            }
        }
        console.log('supportedLangs: ', str);
        return str;
    })*/

// console.log('supportedLangs3: ', supportedLangs);

export default {
    // apiUrl:"https://next.json-generator.com/api/json/get/V1TbDaNiK"
    // apiUrl:"https://jsonplaceholder.typicode.com/"
    apiUrl: "http://smartbooker.biz/interface/",
    defaultLocale: "en",
    supportedLangs: supportedLangs,
}
