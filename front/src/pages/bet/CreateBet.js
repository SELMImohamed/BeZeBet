import React from 'react'
import TextField from '@mui/material/TextField';
// import {Button} from '@mui/material';
import {Box} from '@mui/system';
import NavBar from '../../component/NavBar'
import '../../styles/CreateBet.css'

export default function CreateBet() {
    return (
        <Box>
            <NavBar/>
            <h2>CREATE YOUR <span>BET</span></h2>

            <Box
                className="textfield_container"
                sx={{
                    width: 300,
                    height: 400,
                    borderRadius: 10,
                    backgroundColor: 'primary.dark',
                }}
            >
                <TextField className='tf' label="Nom du paris" variant="filled" sx={{
                    backgroundColor: "#D9B611",
                    borderRadius: 2
                }} /> <br/>
                <TextField className='tf' label="Description du paris" variant="filled" sx={{
                    backgroundColor: "#D9B611",
                    borderRadius: 2,
                }} /> <br/>
                <TextField className='tf' label="Mise de départ" variant="filled" sx={{
                    backgroundColor: "#D9B611",
                    borderRadius: 2,
                }} /> <br/>
                <TextField className='tf' label="Récompense en cas de victoire" variant="filled" sx={{
                    backgroundColor: "#D9B611",
                    borderRadius: 2,
                }} /> <br/>
            </Box>
        </Box>
    )
}