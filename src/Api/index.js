import axios from "axios";
export const getPlacesdata = async (type,sw,se) =>{
     try {
         const  { data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: se.lat,
            bl_longitude: sw.lng ,
            tr_longitude: se.lng
          },
          headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': '9ee12c8018mshb3f92b0be079976p14d960jsn190f44351ace'
          }
        });
         
         return data;
     } catch (error) {
         console.log(error)
     }
}