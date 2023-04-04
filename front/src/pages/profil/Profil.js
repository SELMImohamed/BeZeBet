import React from 'react'
import NavBar from '../../component/NavBar'
import { Box } from '@mui/material'

export default function Profil() {
    return (
        <>
            <NavBar/>
            <Box
                sx={{
                    width: 300,
                    height: 400,
                    borderRadius: 10,
                    backgroundColor: 'primary.dark',
                }}
            >
            <h2>Profil</h2>
            </Box>
        </>
    )
}
