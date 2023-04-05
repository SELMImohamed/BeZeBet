import React, { useEffect } from "react";
import "../../styles/Home.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Coins from "../home/—Pngtree—gold coin map_4006641.png";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import NavBar from "../../component/NavBar";

export const HomePage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(auth.user);
  }, [dispatch]);
  let navigate = useNavigate();

  const betPage = () => {
    if (auth.user !== null) {
      let path = "/bet";
      navigate(path);
    } else {
      let path = "/register";
      navigate(path);
    }
  };

  return (
    <>
      <NavBar />
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontFamily: "Poppins, sans-serif",
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
          "@media (max-width: 960px)": {
            fontSize: "2rem",
            marginBottom: 2,
          },
        }}
      >
        <span style={{color: "white"}}>Bienvenue sur Be Ze</span><span style={{ color: "#FBCF0A" }}>Bet</span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 64px)",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            "@media (max-width: 960px)": {
              flexDirection: "column",
              justifyContent: "center",
            },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              "@media (max-width: 960px)": {
                flexDirection: "column",
              },
            }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "3rem",
                fontWeight: 800,
                color: "#fff",
                marginLeft: 2,
                
                "@media (max-width: 960px)": {
                  fontSize: "2rem",
                },
                "@media (max-width: 1600px)": {
                  fontSize: "2.5rem",
                },
              }}
            >
              Tu veux créer ton propre{" "}
              <span style={{ color: "#FBCF0A" }}>Pari</span> ?<br />
              Inviter tes <span style={{ color: "#FBCF0A" }}>amis</span> ?{" "}
              <br />
              Miser <span style={{ color: "#FBCF0A" }}>Pour</span> ou{" "}
              <span style={{ color: "#FBCF0A" }}>Contre</span> ? <br />
              Et remporter toutes leurs{" "}
              <span style={{ color: "#FBCF0A" }}>mises</span> ? <br />
              <br />
              Créer ton compte et lance toi !<br />
              Des paris <span style={{ color: "#FBCF0A" }}>infinis</span>{" "}
              t'attendent !<br />
              Lance maintenant ton propre{" "}
              <span style={{ color: "#FBCF0A" }}>Pari</span> !<br />
            </Typography>
            {auth.user == null ? (
              <Button
                className="button"
                onClick={betPage}
                sx={{
                  borderRadius: 2,
                  marginTop: 2,
                  p: 1,
                  minWidth: 300,
                  minHeight: 90,
                  color: "#FBCF0A",
                }}
                color="inherit"
                variant="outlined"
              >
                Inscrivez-Vous
              </Button>
            ) : (
              <Button
                className="button"
                onClick={betPage}
                sx={{
                  borderRadius: 2,
                  marginTop: 2,
                  p: 1,
                  minWidth: 300,
                  minHeight: 90,
                  color: "#FBCF0A",
                }}
                color="inherit"
                variant="outlined"
              >
                C'est parti mon kiki !!
              </Button>
            )}
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <img src={Coins} alt="logo" className="logo_home" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
