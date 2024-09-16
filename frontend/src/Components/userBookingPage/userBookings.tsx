import React from 'react';
import {bookings} from '../../MocData/bookings'; 

import Grid from '@mui/material/Grid2'; 
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
console.log(bookings); 


const columns: GridColDef[] = [
  {field: 'hotel', headerName: 'Hotel', width: 200}, 
  {field: 'from_date', headerName: 'Date From', width: 200}, 
  {field: 'to_date', headerName: 'Date To', width: 200}, 
  {field: 'cost', headerName: 'Cost', width: 200}, 
]

const Bookings: React.FC = () => {
  return (
    <Grid container
    spacing={0}
    alignItems="center"
    justifyContent="center">
      <Grid size={12}><h1>Your Bookings</h1></Grid>
      {//<p>Here you will find all your bookings.</p>
      }
      <Grid size={12}>
        <DataGrid
        rows={bookings}
        columns={columns}
        sx={{border:0}}/>
      </Grid>
    </Grid>
  );
};

export default Bookings;
