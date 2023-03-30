/* eslint-disable jsx-a11y/alt-text */
import "../../styles/Login.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Logo from "../../ressources/img/BeZebet.png";
import NavBar from "../../component/NavBar";
import {useState} from "react";
import {register} from "../../services/register";

export default function Login() {
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
            <Box
                sx={{
                    width: 400,
                    height: 500,
                    marginTop: "5%",
                    backgroundColor: '#2C2C2B',
                    borderRadius: "20px",
                }}
            >
                <img src={Logo} alt="logo" className="logo" />
                <h3 className="title">Connectez-vous</h3>

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
                </div>
            </Box>
        </form>
    </>
  );
}