/* eslint-disable jsx-a11y/alt-text */
import "../../styles/Register.css";
import React, { useState, useEffect } from "react";
import { register } from "../../services/register";
import "../../styles/Register.css";
import NavBar from "../../component/NavBar";
import Box from '@mui/material/Box';
import Logo from "../../ressources/img/BeZebet.png"
import TextField from '@mui/material/TextField';

export default function Register() {
  const [form, setForm] = useState({
    pseudo: "",
    email: "",
    password: "",
    confirm_password:""
  });

  const onHandleButton = () => {
    if (form.password === form.confirm_password){
      register(form);
    }else{
      alert("Les mots de passe ne correspondent pas");
    }
  };

  return (
    <>
      <NavBar />
      <form onSubmit={onHandleButton} className="form">
          <br />
        <Box
            sx={{
              width: 400,
              height: 640,
                marginTop: "5%",
                backgroundColor: '#2C2C2B',
                borderRadius: "20px",
            }}
        >
            <img src={Logo} alt="logo" className="logo" />
            <h3 className="title">Inscrivez-vous</h3>

            <div className="text">
                <TextField
                    id="outlined-error"
                    className="textfield"
                    label="E-mail"
                />
                <br/>
                <TextField
                    id="outlined-error"
                    className="textfield"
                    label="Username"
                />
                <br/>
                <TextField
                    id="outlined-error"
                    className="textfield"
                    label="Password"
                />
                <br/>
                <TextField
                    id="outlined-error"
                    className="textfield"
                    label="Confirm Password"
                />
            </div>
        </Box>
      </form>
    </>
  );
}
