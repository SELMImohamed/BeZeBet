/* eslint-disable jsx-a11y/alt-text */
import "../../styles/Register.css";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { register } from "../../services/register";
import "../../styles/Register.css";
import NavBar from "../../component/NavBar";

import {register} from '../../services/register';

export default function Root() {
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
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "70%",
          margin: "0 auto",
        }}
      >
        <Grid item xs={12}>
          <TextField
            variant="filled"
            required
            fullWidth
            label="Username"
            name="username"
            autoComplete="username"
            color="error"
            sx={{backgroundColor: '#7a1a14'}}
            onChange={(e) => setForm({ ...form, pseudo: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="filled"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            color="error"
            sx={{backgroundColor: '#7a1a14'}}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="filled"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="new-password"
            color="error"
            sx={{backgroundColor: '#7a1a14'}}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sx={{
          display: "flex",
          justifyContent:"flex-end",
        }}>
          <Button type="submit" variant="contained" color="error">
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
    </>
    // <>
    //   <Box
    //     component="form"
    //     sx={{
    //       "& .MuiTextField-root": { m: 1, width: "25ch" },
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       marginTop: "13%",
    //     }}
    //     noValidate
    //     autoComplete="off"
    //   >
    //     <Box className="texfield">
    //       <TextField
    //         label="Pseudonyme"
    //         color="error"
    //         focused
    //         onChange={(e) => setForm({ ...form, pseudo: e.target.value })}
    //       />
    //       <TextField
    //         label="Email"
    //         color="error"
    //         focused
    //         onChange={(e) => setForm({ ...form, email: e.target.value })}
    //       />
    //       <TextField
    //         label="Password"
    //         color="error"
    //         focused
    //         type="password"
    //         onChange={(e) => setForm({ ...form, password: e.target.value })}
    //       />
    //     </Box>
    //   </Box>
    // </>

  );
}
