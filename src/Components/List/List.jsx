import React , {useState} from 'react';
import { CircularProgress,Grid,Typography , InputLabel , MenuItem , FormControl , Select } from '@material-ui/core';
import useStyles from './style'
import Placedetail from '../Placedetails/Placedetail'

const List = ({places , child , loding , type , rating , settype ,setrating})=>{
    const classes = useStyles();
    
    console.log({child})

    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants,Hotels & Monuments</Typography>
            {loding ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem"/>
                </div>
            ):(
                <>
                <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=>settype(e.target.value)} >
                    <MenuItem value="restaurants" >Restaurnats</MenuItem>
                    <MenuItem value="hotels" >Hotels</MenuItem>
                    <MenuItem value="attractions" >Monuments</MenuItem>
                </Select>
                 </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e)=>setrating(e.target.value)} >
                    <MenuItem value={0} >ALL</MenuItem>
                    <MenuItem value={3} >ABOVE 3 STAR</MenuItem>
                    <MenuItem value={4} >ABOVE 4 STAR</MenuItem>
                    <MenuItem value={5} >ABOVE 5 STAR</MenuItem>
                  
                </Select>
                 </FormControl>
                <Grid container spacing={3} className={classes.list}>
                    {places ?.map((place,i)=>(
                        <Grid item key={i} xs={12}>
                            <Placedetail place={place}/>
                        </Grid>
                    ))}
                 </Grid> 
        </>
        )}
        </div>
        );

}

export default List;