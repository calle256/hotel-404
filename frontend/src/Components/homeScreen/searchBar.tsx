import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [city, setCity] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);

  const handleDatePickerOpen = () => setDatePickerOpen(true);
  const handleDatePickerClose = () => setDatePickerOpen(false);

  const handleSearch = () => {
    if (city && selectedDate) {
    } else {
      alert("Please select a city and date");
    }
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={2}
        px={2}
      >
        <TextField
          label="Search for cities"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          sx={{ mr: 2, width: "300px" }}
        />
        <Button
          variant="outlined"
          onClick={handleDatePickerOpen}
          sx={{ mr: 2 }}
        >
          Select Date
        </Button>
        <Button variant="contained" color="primary" onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </Box>

      <Dialog open={datePickerOpen} onClose={handleDatePickerClose}>
        <DialogTitle>Select Date</DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              slotProps={{ textField: { variant: "outlined" } }}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDatePickerClose}>Cancel</Button>
          <Button onClick={handleDatePickerClose}>Done</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SearchBar;
