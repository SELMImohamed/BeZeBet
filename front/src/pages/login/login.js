import React,{useEffect, useState} from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Logo from "../../ressources/img/BeZebet.png";
import NavBar from "../../component/NavBar";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from "@mui/icons-material";

import "../../styles/Auth.css";

import {setAuth} from '../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../services/login";

export default function Login() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

  useEffect(() => {
    console.log(auth.user)
    if (auth.user !== null){
      console.log('ok')
      let path = "/";
      navigate(path);
    }
  },[navigate, auth])



  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.email === "" || form.password === "") {
      alert("Veuillez remplir tous les champs");
      return;
    }
    login(form).then(response =>{  //the fonction for the login endpoint
        dispatch(setAuth(response.data.user)); // using the redux to stock my user to make it Session
        console.log(dispatch(setAuth(response.data.user)))
        if (response.status === 200) {
          let path = "/";
          navigate(path);
        }
    })
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
