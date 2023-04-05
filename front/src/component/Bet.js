import React from "react";
import Card from "@mui/material/Card";
// import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
// import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import { Link } from "react-router-dom";

const BetCard = ({ index, description, userId, oddsFor, oddsAgainst, end }) => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: 2,
      }}
    >
        <CardContent
          sx={{
            width: 400,
            height: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "white",
                fontSize: 20,
                marginBottom: 1
              }}
            >
              Voici le pari #{index + 1}:
            </Typography>
            <Typography
              gutterBottom
              sx={{
                color: "white",
                fontFamily: "Poppins, sans-serif",
                fontSize: 30,
              }}
            >
              {description}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              fontFamily: "Poppins, sans-serif",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                width: "100%",
                fontFamily: "Poppins, sans-serif",
                color: "#FBCF0A",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Les mises du pari :
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: "white",
                  fontSize: "1.7em",
                }}
                component="p"
              >
                Pour : {oddsFor}
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#FBCF0A",
                  alignItems: "center",
                  fontSize: "1.7em",
                }}
              >
                vs
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: "white",
                  fontSize: "1.7em",
                }}
                component="p"
              >
                Contre : {oddsAgainst}
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins, sans-serif",
              color: "white",
            }}
          >
            Fin : {end}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins, sans-serif",
              color: "white",
              margin: 2,
            }}
          >
            Créateur : {userId}
          </Typography>
          <CardActions>
            <Button size="small" sx={{
              fontFamily: "Poppins, sans-serif",
              color: "white",
              backgroundColor: "#FF5733",
              "&:hover": {
                backgroundColor: "#FF8A65",
              },
            }}>
              Parier
            </Button>
          </CardActions>
        </CardContent>
    </Card>
  );
};

export default BetCard;
