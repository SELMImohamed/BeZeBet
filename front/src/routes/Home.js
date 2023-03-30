import React , {useEffect} from 'react';
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import NavBar from '../component/NavBar';

export default function Home() {

  useEffect(() => {
    console.log("Root mounted");
    return () => {
      console.log("Root unmounted");
    };
  }, []);

  return (
    <>
      <NavBar />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap');
      </style>

      <Box align="center">
        <h1 className="titre">BE ZEBET</h1>
        <h3>Paris entre amis ?</h3>
        <Button
          sx={{
            borderRadius: 2,
            p: 2,
            minWidth: 300,
            color: "red",
          }}
          color="error"
          variant="outlined"
        >
          Get Start
        </Button>
      </Box>
    </>
  );
}
