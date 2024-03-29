import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './Components/Header/Header';
import List from './Components/List/List'
import Map from './Components/Maps/Map'
import { getPlacesdata } from './Api/index';
function App() {

  const [type, settype] = useState('restaurants');
  const [rating, setrating] = useState('');

  const [filterplaces, setfilterplaces] = useState([])

  const [places, setplaces] = useState([])
  const [coordinates, setcoordinates] = useState({})
  const [bonds, setbonds] = useState({})
  const [child, setchild] = useState(null)
  const [loding, setloding] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setcoordinates({ lat: latitude, lng: longitude })
      // console.log( latitude , "I am in ", longitude)
    })
  }, []);

  useEffect(() => {
    const filterplaces = places.filter((place) => place.rating > rating);
    setfilterplaces(filterplaces);
  }, [rating])


  useEffect(() => {
    setloding(true);
    getPlacesdata(type, bonds.sw, bonds.ne)
      .then((data) => {
        console.log(data);
        setplaces(data)
        setfilterplaces([])
        setloding(false);
      })
  }, [type, coordinates, bonds])

  return (
    <>
      <CssBaseline />
      <Header setcoordinates={setcoordinates} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={ filterplaces.length ? filterplaces :  places} child={child} loding={loding}
            type={type}
            settype={settype}

            rating={rating}
            setrating={setrating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setbonds={setbonds}
            setcoordinates={setcoordinates}
            places={ filterplaces.length ? filterplaces :  places}
            setchild={setchild}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
