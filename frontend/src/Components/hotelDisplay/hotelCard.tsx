import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const HotelCard = () => {
  return (
    <Card
      sx={{
        height: { xs: "auto", sm: "52vh" },
        width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" }, 
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: { xs: "25vh", sm: "35vh" },
            width: "100%",
            objectFit: "cover"
          }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVBBG2nPwGQPO3qiCbizRb7Bu8MbjdHHCdg&s"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Stack Overflow Hotel
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Rooms are endless, but finding one is a bug! Enjoy infinite floors,
            recursive hallways, and answers like “It depends.” Stuck? Just
            restart your stay!
          </Typography>
          <Typography
            sx={{
              textAlign: "right",
              marginTop: "2vh",
              fontWeight: "bolder",
            }}
          >
            50$/Night
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HotelCard;
