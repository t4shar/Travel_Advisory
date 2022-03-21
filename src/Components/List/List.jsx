import React , {useState} from 'react';
import { CircularProgress,Grid,Typography , InputLabel , MenuItem , FormControl , Select } from '@material-ui/core';
import useStyles from './style'
const List = ()=>{
    const classes = useStyles();
    const [type, settype] = useState('restaurants');
    const [rating, setrating] = useState('restaurants');
    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants,Hotels & Monuments</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=>settype(e.target.value)} >
                    <MenuItem value="restaurants" >Restaurnats</MenuItem>
                    <MenuItem value="Hotels" >Hotels</MenuItem>
                    <MenuItem value="Monuments" >Monuments</MenuItem>
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

        </div>
    );

}

export default List;