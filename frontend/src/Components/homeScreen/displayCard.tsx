import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";

const DisplayCard = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card 
          sx={{
            height: { xs: "auto", sm: "55vh" },
            width: { xs: "auto", sm: "40vh" }
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
              {/* Price at the bottom-right */}
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
      </Grid>
    </Grid>
  );
};

export default DisplayCard;
