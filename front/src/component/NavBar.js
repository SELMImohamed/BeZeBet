import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

import Logo from "../ressources/img/BeZebet.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(auth.user);
  }, [auth]);
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const renderNavLinks = () => (
    <List>
      <ListItem component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      {auth.user == null ? (
        <>
          <ListItem component={Link} to="/register">
            <ListItemText primary="Register" />
          </ListItem>
          <ListItem component={Link} to="/login">
            <ListItemText primary="Login" />
          </ListItem>
        </>
      ) : (
        <ListItem component={Link} to="/profile">
          <ListItemText primary="Profile" />
        </ListItem>
      )}
      <ListItem component={Link} to="/bet">
        <ListItemText primary="Every Bet" />
      </ListItem>
    </List>
  );

  const renderDrawer = () => (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
      {renderNavLinks()}
    </Drawer>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "black",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{
            color: "white",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: "1",
            "& a": {
              color: "inherit",
              textDecoration: "none",
            },
          }}
          underline="none"
        >
          <Link
            to="/"
            sx={{
              fontFamily: "Poppins, sans-serif",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Be Ze<span style={{ color: "#FBCF0A" }}>Bet</span>
          </Link>
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              style={{
                width: "100px",
                height: "100px",
                marginLeft: "10px",
              }}
            />
          </Link>
        </Box>
        {auth.user != null ? (
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              marginLeft: "auto",
            }}
          >
            Vous êtes connecté
          </div>
        ) : (
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              marginLeft: "auto",
            }}
          >
            Vous n'êtes pas connecté
          </div>
        )}
        {renderDrawer()}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
