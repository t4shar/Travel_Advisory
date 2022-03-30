import React,{useEffect , useState} from 'react';
import { CssBaseline,Grid } from '@material-ui/core';
import Header from './Components/Header/Header';
import List from './Components/List/List'
import Map from './Components/Maps/Map'
import { getPlacesdata } from './Api/index';
function App() {
  
  const [places, setplaces] = useState([])
  const [coordinates, setcoordinates] = useState({ lat:0,lng:0})
  const [bonds, setbonds] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords : {latitude,longitude}})=>{
        setcoordinates({lat:latitude , lng:longitude})
        // console.log( latitude , "I am in ", longitude)
    })
  }, []);
  

  useEffect(() => {
    // console.log(coordinates,bonds)
    getPlacesdata(bonds.sw,bonds.ne)
    .then((data)=>{
      console.log(data);
      setplaces(data)
    })
  }, [coordinates,bonds])
  
  return(
    <>
        <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{width : '100%'}}>
          <Grid item xs={12} md={4}>
            <List places={places}/>
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
            coordinates={coordinates}
            setbonds={setbonds}
            setcoordinates={setcoordinates}
            />
          </Grid>
        </Grid>
    </>
  );
}

export default App;
