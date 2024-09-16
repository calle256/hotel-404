import * as React from "react";
import Grid from "@mui/material/Grid";
import HotelCard from "./hotelCard"; 

const DisplayHotel = () => {
  return (
    <Grid container spacing={4} style={{marginTop:2}}> 
      {[1, 2, 3, 4,5].map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={item}>
          <HotelCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default DisplayHotel;
