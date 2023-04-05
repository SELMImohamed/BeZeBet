import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Logo from "../../ressources/img/BeZebet.png";
import { Box } from "@mui/system";
import NavBar from "../../component/NavBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import { createBet } from "../../services/bet";

export default function CreateBet() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [betForm, setBetForm] = useState({
    user_id: auth.user.id || null,
    text: "",
    end: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(betForm);
    if (betForm.text === "" || betForm.end === "") {
      alert("Veuillez remplir tous les champs");
      return;
    } else {
      createBet(betForm);
      let path = "/bet";
      navigate(path);
    }
  };

  useEffect(() => {
    if (auth.user === null) {
      let path = "/";
      navigate(path);
    }
    console.log(auth.user.id);
  }, [navigate, auth]);

  return (
    <Box>
      <NavBar />
      <Typography
        sx={{
          fontFamily: "Poppins, sans-serif",
          color: "white",
          fontSize: "2em",
          margin: 2,
          textAlign: "center",
        }}
      >
        Créer ton pari
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#2C2C2B",
            borderRadius: "20px",
            marginTop: "5%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3em",
          }}
        >
          <img src={Logo} alt="logo" className="logo" />
          <label>
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "white",
                fontSize: "1em",
                margin: 2,
                textAlign: "center",
              }}
            >
              Description du pari
            </Typography>
          </label>
          <TextField
            fullWidth
            required
            label="Description"
            variant="outlined"
            onChange={(e) => {
              setBetForm({ ...betForm, text: e.target.value });
            }}
            multiline
            InputProps={{
              style: {
                maxHeight: 200,
                overflowY: "auto",
              },
            }}
            sx={{
              width: 300,
              borderRadius: 5,
              backgroundColor: "#FFFFFF",
              border: "2px solid black",
              marginBottom: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: 5,
                "& fieldset": {
                  borderStyle: "solid",
                },
              },
            }}
            margin="normal"
          />
          <label>
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "white",
                fontSize: "1em",
                margin: 2,
                textAlign: "center",
              }}
            >
              Date de fin du pari
            </Typography>
          </label>
          <TextField
            fullWidth
            required
            label="End date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(e) => {
              setBetForm({ ...betForm, end: e.target.value });
            }}
            sx={{
              width: 300,
              borderRadius: 5,
              backgroundColor: "#FFFFFF",
              border: "2px solid black",
              marginBottom: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: 5,
                "& fieldset": {
                  borderStyle: "solid",
                },
              },
            }}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Create Bet
          </Button>
        </Box>
      </form>
    </Box>
  );
}
