import React,{useEffect , useState} from 'react';
import { CssBaseline,Grid } from '@material-ui/core';
import Header from './Components/Header/Header';
import List from './Components/List/List'
import Map from './Components/Maps/Map'
import { getPlacesdata } from './Api/index';
function App() {
  
  const [places, setplaces] = useState([])
  const [coordinates, setcoordinates] = useState({ lat:29.6857,lng:76.9905})
  const [bonds, setbonds] = useState(null)
  useEffect(() => {
    console.log(coordinates,bonds)
    getPlacesdata()
    .then((data)=>{
      setplaces(data)
      // console.log("hellooncksksks");
      // console.log({data});
    })
  }, [coordinates,bonds])
  
  return(
    <>
        <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{width : '100%'}}>
          <Grid item xs={12} md={4}>
            <List/>
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
