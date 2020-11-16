import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";

import covidImage from "../../images/logo-250.png";

import styles from "./Navbar.module.css";



const Navbar = () => {
  return (
    <div className={styles.root}>
      <AppBar className={styles.appbar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={styles.title}>
            C
            <span>
              <img className={styles.image} alt="CovidWatch" src={covidImage} />
            </span>
            VIDWATCH
          </Typography>
            <Box mx="auto">
              <ButtonGroup>
                <Button variant="contained" color="disabled">Login</Button> 
                <Button variant="contained" color="secondary">Dashboard</Button>
                <Button variant="contained" color="disabled">Signup</Button>
              </ButtonGroup>
            </Box>
          </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
