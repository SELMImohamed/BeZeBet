/* eslint-disable jsx-a11y/alt-text */
import "../../styles/Auth.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Logo from "../../ressources/img/BeZebet.png";
import NavBar from "../../component/NavBar";
import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from "@mui/icons-material";

import setAuth from '../../redux/slices/auth';
import { useDispatch } from 'react-redux';
import { login } from "../../services/login";

export default function Login() {

    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enter in handleSubmit");
    if (form.email === "" || form.password === "") {
      alert("Veuillez remplir tous les champs");
      return;
    }
    const user = login(form);
    dispatch(setAuth(user));
    // if (user) {
    //   HomePage();
    // }
  };

  return (
    <>
      <NavBar />
      <form className="form">
        <Box
          sx={{
            width: 400,
            height: 500,
            marginTop: "5%",
            backgroundColor: "#2C2C2B",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="logo" className="logo" />
          <h3 className="title">Connectez-vous</h3>

          <Box
            sx={{
              width: 200,
              height: 150,
              marginTop: "5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
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
              label="E-mail"
              onChange={
                (e) => setForm({ ...form, email: e.target.value })
              }
            />
            <TextField
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
              label="Mot de passe"
              onChange={
                (e) => setForm({ ...form, password: e.target.value })
              }
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Button
            sx={{
              borderRadius: 2,
              p: 1,
              minWidth: 100,
              color: "#FBCF0A",
            }}
            color="inherit"
            variant="outlined"
            onClick={handleSubmit}
          >
            Login In !
          </Button>
        </Box>
      </form>
    </>
  );
}
