import React,{useEffect} from 'react'
import NavBar from '../../component/NavBar'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { useNavigate } from 'react-router-dom';

export default function Profil() {

    let navigate = useNavigate();

    const modifyAccount = () => {
        let path = "/modifyAccount";
        navigate(path);
    }

    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        console.log(auth.user.name);
    }, [auth.user]);
  return (

    // Account informations
    <Box sx={{ flexGrow: 1, padding: 3, marginTop: "20%"}}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Avatar sx={{ width: 120, height: 120 }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {auth.user.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {auth.user.coins}
          </Typography>
          <Typography variant="body1">
            {auth.user.email}
          </Typography>
          <Typography variant="body1">
            {auth.user.created_at}
          </Typography>
        </Grid>
      </Grid>
      {/* Modify account */}
    <Stack direction="row" spacing={2}>
        <IconButton aria-label="fingerprint" color="success" onClick={modifyAccount}>
            <Fingerprint />
        </IconButton>
    </Stack>
    </Box>
  );
}
