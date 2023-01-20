import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../../../App.css';
import { Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  
  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    color: 'orange',
    marginRight: '10px',
    '&:hover': {
      color: theme.palette.warning.main,
    },
  },
  menuButton: {
    color: 'black',
    marginRight: '10px',
    backgroundColor: theme.palette.warning.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <header >
      <AppBar position="static">
        <Toolbar className={classes.menu}>
          <Typography variant="h6" className={classes.menuItem}>
            <Link to="/" className={classes.menuItem}>Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            <Link to="/edittenant" className={classes.menuItem}>Edit Tenant</Link>
          </Typography>
          <Button className={classes.menuButton}>
            <Link to="/signin" className={classes.menuButton}>Sign In</Link>
          </Button>
          <Button className={classes.menuButton}>
            <Link to="/signup" className={classes.menuButton}>Sign Up</Link>
          </Button>

          <Button className={classes.menuButton}>Sign Out</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export const Home = () => {
  return (
    <Box >
      
    </Box>
  )
}

export default Navbar;
