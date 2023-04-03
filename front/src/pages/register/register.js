/* eslint-disable jsx-a11y/alt-text */
import "../../styles/Register.css";
import React, { useState, useEffect } from "react";
import NavBar from "../../component/NavBar";
import Box from '@mui/material/Box';
import Logo from "../../ressources/img/BeZebet.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password:""
  });


  const onHandleButton = () => {
    console.log("test")
    if (form.password == form.confirm_password){
      // register(form);
      console.log(form.password);
      console.log(form.confirm_password);
      HomePage();
    }else{
      alert("Les mots de passe ne correspondent pas");
      console.log(form.password);
      console.log(form.confirm_password);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enter in handleSubmit");
    axios.post("http://localhost:8000/api/register", form)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
    console.log("end handleSubmit");
  }

  let navigate = useNavigate();
  const HomePage = () => {
    let path = "/home"
    navigate(path)
  }

  return (
    <>
      <NavBar />
      <form className="form">
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
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                <br/>
                <TextField
                    id="outlined-error"
                    className="textfield"
                    label="Username"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <br/>
                <TextField
                    id="outlined-error"
                    className="textfield"
                    label="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <br/>
                <TextField
                    id="outlined-error"
                    className="textfield"
                    label="Confirm Password"
                    value={form.confirm_password}
                    onChange={(e) => setForm({ ...form, confirm_password: e.target.value })}
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
              onClick={
                (event) => {
                  onHandleButton();
                  handleSubmit(event);
                }
              }
            >
              Register
            </Button>
        </Box>
      </form>
    </>
  );
}
