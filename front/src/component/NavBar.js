import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const user = useSelector((state) => state.auth);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const renderNavLinks = () => (
    <List>
      <ListItem  component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem  component={Link} to="/register">
        <ListItemText primary="Register" />
      </ListItem>
      <ListItem  component={Link} to="/login">
        <ListItemText primary="Login" />
      </ListItem>
      <ListItem  component={Link} to="/bet">
        <ListItemText primary="Bet" />
      </ListItem>
    </List>
  );

  const renderDrawer = () => (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={toggleDrawer(false)}
    //   className={classes.drawer}
    >
      {renderNavLinks()}
    </Drawer>
  );

  return (
    <AppBar position="sticky" sx={{
        backgroundColor: 'black',
    }}>
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{
            color: 'white'
            }}
        >
          <MenuIcon />
        </IconButton>
        <div>
          <Link to="/" sx={{
            textDecoration: 'none',
            color: '#fff',
          }}>BeZeBet</Link>
        </div>
        {user && (
          <div>
            <Link to="/profile">{user.username}</Link>
          </div>
        )}
        {renderDrawer()}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
