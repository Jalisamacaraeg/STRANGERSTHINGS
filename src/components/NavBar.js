import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Appbar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import "./specificStyles.css";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    background: "silver",
    width: "100vw",
  },
  // siteName: {
  //     display: 'flex',
  //     alignItems: 'flex-start',
  //     color: 'blue',
  //     textDecoration: 'none',
  //     fontFamily: 'Roboto',
  //     fontSize: '24px',
  //     fontWeight: 'bold',
  //   },
});

const NavBar = ({ setToken, userData, setUserData }) => {

  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

  const logOut = () => {
    localStorage.clear();
    setUserData({});
    setToken("");
  };

  const classes = useStyles();
  return (
    <div>
      <Toolbar className={classes.toolbar}>
        <div>
          <Link className="siteName" to="/">
            not Craig's List
          </Link>
        </div>

        <div>
          <Link className="linkLoginRegister" to="/login">
            Log In / Register            
          </Link>
        </div>

        <div>
          <Link
            className="logOut" to="/" onClick={() => {
                {logOut(userData);}
                {logOut ? showResults : false}
            }}            
          >
            Log Out
          </Link>
        </div>
      </Toolbar>
    </div>
  );
};
export default NavBar;
