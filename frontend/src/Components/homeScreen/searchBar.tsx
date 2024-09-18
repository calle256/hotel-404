import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { DatePicker} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [city, setCity] = useState<string>("");
  const [dateCheckIn, setDateCheckIn] = useState<Date |null> (null);
  const [dateCheckOut, setDateCheckOut] = useState<Date |null> (null);
  
  const handleSearch = () => {
    if (city && dateCheckIn && dateCheckOut) {

    } else {
      alert("Please select a city and date");
    }
  };

  return (

      <Box
        sx={{
          border: '2px solid #1976d2',
          padding: '10px',
          borderRadius: '8px',
          maxWidth: '900px',
          margin: 'auto',
          mt: 10
        }}
      >
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={1}>
            <SearchIcon color="primary"/>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Search for cities"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>

          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker 
                label='Check-in' 
                value={dateCheckIn}
                onChange={(value) => setDateCheckIn(value)}/>
            </LocalizationProvider>
          </Grid>

          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label='Check-out' 
                value={dateCheckOut}
                onChange={(value) => setDateCheckOut(value)}/>
            </LocalizationProvider>
          </Grid>

          <Grid item xs={2}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleSearch}>
              Search
            </Button>
          </Grid>
        </Grid>
        
          
             {/* <DateRangePicker
                value={dateRange}
                onChange={(newValue: React.SetStateAction<DateRange<Date>>) => setDateRange(newValue)}
                slots={{ textField: TextField}}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: 'outlined'
                  }
                }}
              />*/}
            


      </Box>

      
   
  );
};

export default SearchBar;

{/*<Button
              variant="outlined"
              onClick={handleDatePickerOpen}>
              <Dialog open={datePickerOpen} onClose={handleDatePickerClose}>
                <DialogTitle>Select Date Range</DialogTitle>
                <DialogContent>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid item xs={4}>
                      <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }}/>
                    </Grid>
                  </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleDatePickerClose}>Cancel</Button>
                  <Button onClick={handleDatePickerClose}>Done</Button>
                </DialogActions>
              </Dialog>
            </Button>*/}