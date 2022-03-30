import React from 'react';
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlinedIcon } from '@material-ui/icons/LocalActivityOutlined';
import Rating from '@material-ui/lab';

import useStyles from './style';

const Map = (props)=>{
    
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width : 600px)');
    // console.log(props.coordinates);
    const coordinates  = { lat:29.6857,lng:76.9905}
    return (
        
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyB6POaB5bEGttOTc7k-HdgCwyA26YIbqlc'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50 ,50 ,50 ,50]}
                onChange={(e)=>{
                    // console.log( "Hssllls",props.coordinates);
                    // console.log("I am now in e target")
                    // console.log(e); 
                    
                    props.setcoordinates({ lat: e.center.lat , lng: e.center.lng})
                    props.setbonds({ ne : e.marginBounds.ne , sw : e.marginBounds.sw})
                }}
                ></GoogleMapReact>
        </div>
    );
    
}

export default Map