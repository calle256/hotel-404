import React from "react";
import hotel1 from "../../Images/hotel1.png";
import room1 from "../../Images/room1.png";
import hall1 from "../../Images/hall1.png";
import hall2 from "../../Images/hall2.png";
import bath1 from "../../Images/bath1.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "./HotelTemplate.css";

const itemData = [
  {
    img: hotel1,
    title: "Hotel Lá Bomba",
    rows: 2,
    cols: 1,
  },
  {
    img: room1,
    title: "Hotel Lá Bomba",

  },
  {
    img: hall1,
    title: "Hotel Lá Bomba",

  },
  {
    img: bath1,
    title: "Hotel Lá Bomba",


  },
  {
    img: hall2,
    title: "Hotel Lá Bomba",

  },
];



function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const HotelTemplate = () => {
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Box sx={{ width: 600, textAlign: "center", overflow: "hidden" }}>
        {/* Image Grid */}
        <ImageList
          sx={{
            width: "100%",
            height: "auto",
            gap: 8, 
            overflow: "hidden", 
          }}
          variant="quilted"
          cols={2}
          rowHeight={180}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 180, item.rows, item.cols)} 
                alt={item.title || "Hotel Image"}
                loading="lazy"
                style={{
                  borderRadius: "8px", //rounded corners (remove for sexy squares)
                  objectFit: "cover", 
                  width: "100%",
                  height: "100%",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/* Text/Description aligned with images */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ fontSize: "2rem" }}>
            Hotel Lá Bomba
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
            Welcome to Hotel Lá Bomba! A luxurious escape offering riverfront views, modern amenities, and an unforgettable experience.
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
export default HotelTemplate;
