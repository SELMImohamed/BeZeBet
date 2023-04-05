import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../../component/NavBar";
import Bet from "../../component/Bet";
import { useSelector } from "react-redux";
import { getAllBet } from "../../services/bet";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import  Typography  from "@mui/material/Typography";

const Game = () => {
  const navigate = useNavigate();
  const [allBet, setAllBet] = useState({});
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAllBet = async () => {
      await getAllBet().then((response) => {
        setAllBet(response.data);
        // console.log(response.data);
      });
    };
    fetchAllBet();
    // console.log(allBet);
  }, []);

  const goToCreateBet = ()=>{
    if (auth.user){
      let path = "/bet/createBet";
      navigate(path);
    }else{
      let path = "/register";
      navigate(path);
    }
  }
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            fontFamily: "Poppins, sans-serif",
            margin: 2,
            backgroundColor: "#FBCF0A",
            "& a": {
              color: "black",
              textDecoration: "none",
            },
          }}
          onClick={goToCreateBet}
        >
          <Link >Créer un pari</Link>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: 2,
        }}
      >
        {Array.isArray(allBet) && allBet.length > 0 ? (
          allBet.map((bet, key) => (
            <Bet
              key={key}
              description={bet.text}
              oddsFor={bet.odds_for}
              oddsAgainst={bet.odds_against}
              index={key}
              end={bet.end}
              userId={bet.creator.name}
            />
          ))
        ) : (
          <Typography sx={{
            fontFamily: "Poppins, sans-serif",
            color:'white',
            fontSize: '4rem',
            margin: 2,
          }}>Pas de pari trouvé</Typography>
        )}
      </Box>
    </>
  );
};

export default Game;
