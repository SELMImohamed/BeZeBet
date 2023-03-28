/* eslint-disable jsx-a11y/alt-text */
import "../../styles/Register.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Root() {
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
      <TextField label="Pseudonyme" color="error" focused />
      <TextField label="Email" color="error" focused />
      <TextField label="Password" color="error" focused type="password" />
      </div>
      
    </Box>
    </>
  );
}



