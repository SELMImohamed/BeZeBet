import { Box } from '@mui/material'
import React, { Component } from 'react'
import NavBar from '../../component/NavBar'

export default function Tutoriel() {
  return(
    <>
        <NavBar/>
        <h2>Tutoriel</h2>
        <Box
            sx={{
                width: 300,
                height: 400,
                borderRadius: 10,
                backgroundColor: 'primary.dark',
            }}
        >
        </Box>
    </>
  )
}
