
import React from 'react';
import { Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles( {
    toolbar : {
        display: 'flex',
        background: 'grey',
        justifyContent: 'center'
    }
})

const NavBar = () => {
    const classes=useStyles()
    return (
    <Toolbar className={classes.toolbar}>
        <h2>not Craig's List</h2>
        </Toolbar>
    )
}

export default NavBar;