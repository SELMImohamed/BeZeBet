/* eslint-disable jsx-a11y/alt-text */
import "../../styles/Register.css";
import React,{useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {register} from '../../services/register';

export default function Root() {
  const [form, setForm] = useState({
    pseudo: "",
    email: "",
    password: "",
  });


  const onHandleButton = () =>{
    register(form);
  }

  return (
    <>
 <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display : 'flex',
        justifyContent: 'center',
        alignItems : 'center',
        marginTop : '13%',
      }}
      noValidate
      autoComplete="off"
    >
      <div className="texfield">
      <TextField label="Pseudonyme" color="error" focused
        onChange={(e) => setForm({ ...form, pseudo: e.target.value })} 
      />
      <TextField label="Email" color="error" focused 
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <TextField label="Password" color="error" focused type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })} 
      />
      </div>
      
    </Box>
    </>
  );
}



