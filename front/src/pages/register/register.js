/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Logo from "../../ressources/img/BeZebet.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { Visibility, VisibilityOff } from "@mui/icons-material"
import NavBar from "../../component/NavBar";

import { register } from "../../services/register";
import "../../styles/Auth.css";


export default function Register() {
  const auth = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_cfg: "",
  });

  useEffect(() => {
    console.log(auth.user)
    if (auth.user !== null) {
      let path = "/";
      navigate(path);
    }
  }, [navigate, auth]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enter in handleSubmit");
    if (
      form.name === "" ||
      form.email === "" ||
      form.password === "" ||
      form.password_cfg === ""
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    if (form.password !== form.password_cfg) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    const user = register(form);
    if(user){
      let path = "/";
      navigate(path);
    };
  };

  return (
    <>
      <NavBar />
      <form className="form">
        <Box
          sx={{
            width: 400,
            height: 640,
            marginTop: "5%",
            backgroundColor: "#2C2C2B",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="logo" className="logo" />
          <h3 className="title">Inscrivez-vous</h3>

          <Box
            sx={{
              width: 300,
              height: 300,
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
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
              label="Username"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
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
              label="Password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
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
                "& .MuiInputLabel-outlined.Mui-focused": {
                  transform: "translate(14px, -6px) scale(0.75)",
                },
              }}
              type={showPassword ? "text" : "password"}
              label="Confirmez Mot De Passe"
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
              onChange={(e) =>
                setForm({ ...form, password_cfg: e.target.value })
              }
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
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            Register
          </Button>
        </Box>
      </form>
    </>
  );
}
