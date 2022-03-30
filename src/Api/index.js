import axios from "axios";
const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
export const getPlacesdata = async (sw,se) =>{
     try {
         const  { data : {data}} = await axios.get(URL,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: se.lat,
            bl_longitude: sw.lng ,
            tr_longitude: se.lng
          },
          headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': 'f8a0a1e3b9mshffe048be7270be2p185255jsna0da8bcef0db'
          }
        });
         
         return data;
     } catch (error) {
         console.log(error)
     }
}