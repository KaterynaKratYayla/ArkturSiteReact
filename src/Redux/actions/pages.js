import axios from '../helpers/public.axios';

import { GET_PAGES_REQ, GET_PAGES_RES, GET_PAGES_ERR} from '../constants';
import { GET_PurePage_REQ, GET_PurePage_RES, GET_PurePage_ERR} from '../constants';
import { GET_PageTYPE_REQ, GET_PageTYPE_RES, GET_PageTYPE_ERR} from '../constants';
import { GET_PageREGION_REQ, GET_PageREGION_RES, GET_PageREGION_ERR} from '../constants';
import { GET_hotelPAGESfooter_REQ, GET_hotelPAGESfooter_RES, GET_hotelPAGESfooter_ERR} from '../constants';
import { GET_PhotoGalleryPage_REQ, GET_PhotoGalleryPage_RES, GET_PhotoGalleryPage_ERR} from '../constants';


export const pagesResponse = ( res ) => ({
    type: GET_PAGES_RES,
    payload: res
});

export const getPages = (lang) => ( dispatch, getState ) => {

    dispatch({ type: GET_PAGES_REQ });
    console.log('REDUX_LOCALE:',lang)

    axios.get(`https://hotels-ua.biz/interface/classifier?classifier=sitepage&language=${lang}`,  {
    }) 
        .then( res => {
                  
            console.log('[PAGES_INFO] : ' , res.data)
            localStorage.setItem(`${lang}_page_titles`,JSON.stringify(res.data))
            dispatch(pagesResponse(res.data))
        })
        .catch( err => {
            dispatch({ type: GET_PAGES_ERR, error: err });
        })
    }

export const purePageResponse = ( res ) => ({
        type: GET_PurePage_RES,
        payload: res
    });
    
export const getPurePage = (id,lang) => ( dispatch, getState ) => {
    
     dispatch({ type: GET_PurePage_REQ });
    
  axios.get(`https://hotels-ua.biz/interface/sitepagecontent?id=${id}&language=${lang}`,  {
     }) 
         .then( res => {
                      
             console.log('[PURE_PAGE_INFO] : ' , res.data)
             dispatch(purePageResponse(res.data))
          })
          .catch( err => {
            dispatch({ type: GET_PurePage_ERR, error: err });
          })
      }
    


      export const sitePageTypeResponse = ( res ) => ({
        type: GET_PageTYPE_RES,
        payload: res
    });
    
    export const getSitePageType = () => ( dispatch, getState ) => {
    
        dispatch({ type: GET_PageTYPE_REQ });
    
        axios.get('https://hotels-ua.biz/interface/classifier?classifier=sitepage&language=en',  {
        }) 
            .then( res => {
                      
                const arraynew = res.data.filter((item,index,array) =>{
                    if(item.sitepage_type_id!==null){
                       return array.findIndex(t => t.sitepage_type_id === item.sitepage_type_id )===index 
                    }
                }).map((item1)=>{
                    return {"sitepage_type_id": item1.sitepage_type_id,
                            "sitepage_type_name":item1.sitepage_type_name,
                            "sitepage_region_id": item1.sitepage_region_id,
                            "sitepage_region_name": item1.sitepage_region_name,}
                })

                dispatch(sitePageTypeResponse(arraynew))

                console.log('[TYPE_OF_SITEPAGE] : ' , arraynew)
            })
            .catch( err => {
                dispatch({ type: GET_PageTYPE_ERR, error: err });
            })
        }


        export const sitePageRegionResponse = ( res ) => ({
            type: GET_PageREGION_RES,
            payload: res
        });

        export const getSitePageRegion = () => ( dispatch, getState ) => {
    
            dispatch({ type: GET_PageREGION_REQ });
        
            axios.get('https://hotels-ua.biz/interface/classifier?classifier=sitepage&language=en',  {
            }) 
                .then( res => {
                          
                    const arraynew2 = res.data.filter((item,index,array) =>{
                        if(item.sitepage_region_id!==null){
                           return array.findIndex(t => t.sitepage_region_id === item.sitepage_region_id )===index 
                        }
                    }).map((item1)=>{
                        return {"sitepage_region_id": item1.sitepage_region_id,
                                "sitepage_region_name":item1.sitepage_region_name}
                    })
    
                    dispatch(sitePageRegionResponse(arraynew2))
    
                    console.log('[REGION_OF_SITEPAGE] : ' , arraynew2)
                })
                .catch( err => {
                    dispatch({ type: GET_PageREGION_ERR, error: err });
                })
            }

            export const hotelPagesFooterResponse = ( res ) => ({
                type: GET_hotelPAGESfooter_RES,
                payload: res
            });
            
            export const getHotelPagesFooter = () => ( dispatch, getState ) => {
            
                dispatch({ type: GET_hotelPAGESfooter_REQ });
            
                axios.get('https://hotels-ua.biz/interface/classifier?classifier=sitepage&language=en',  {
                }) 
                    .then( res => {
                              
                        console.log('[PAGES_INFO_FOOTER] : ' , res.data)

                        const filtered = res.data.filter((item)=>{
                            return (item.name.includes("Hotels"))
                        })

                        dispatch(hotelPagesFooterResponse(filtered))
                    })
                    .catch( err => {
                        dispatch({ type: GET_hotelPAGESfooter_ERR, error: err });
                    })
                }


 export const photoGalleryPageResponse = ( res ) => ({
                    type: GET_PhotoGalleryPage_RES,
                    payload: res
                });
               
 export const getPhotoGalleryPage = (id,lang) => ( dispatch, getState ) => {
            
    // console.log('AAAaa',id)
                 dispatch({ type: GET_PhotoGalleryPage_REQ });
                
              axios.get(`https://hotels-ua.biz/interface/sitepagecontent?id=${id}&language=${lang}`,  {
                 }) 
                     .then( res => {
                        //  console.log('[AAA_GALLERY] : ' , res.data)
                         dispatch(photoGalleryPageResponse(res.data))
                      })
                      .catch( err => {
                        dispatch({ type: GET_PhotoGalleryPage_ERR, error: err });
                      })
                  }
                