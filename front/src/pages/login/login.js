/* eslint-disable jsx-a11y/alt-text */
import "../../styles/Login.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Logo from "../../ressources/img/BeZebet.png";
import NavBar from "../../component/NavBar";
import {useState} from "react";
import Button from '@mui/material/Button';
import axios from "axios";

export default function Login() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("enter in handleSubmit");

        axios.post("http://localhost:8000/login", form)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
        console.log("end handleSubmit");
    }

  return (
    <>
        <NavBar />
        <form className="form">
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
                <br/>
                <Button
                    sx={{
                        borderRadius: 2,
                        p: 1,
                        minWidth: 100,
                        color: "#FBCF0A",
                        marginLeft: "35%",
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