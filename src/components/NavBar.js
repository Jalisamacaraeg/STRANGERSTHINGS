
import React from 'react';

import { Appbar, Toolbar, Typography, makeStyles, Link } from '@material-ui/core';
import './specificStyles.css';

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        background: 'silver',
    }
})

const NavBar = () => {
    const classes = useStyles()
    return (
        <Toolbar className={classes.toolbar}>
            <h2 className='siteName'>not Craig's List</h2>
            {/* if (path = login || path = register){
                <Button />.hide()
            } */}
            <Link className='linkLoginRegister'>
                Login / Register
            </Link>
        </Toolbar>
    )
}
export default NavBar;