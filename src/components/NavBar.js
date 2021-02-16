
import React from 'react';
import { Link } from 'react-router-dom';

import { Appbar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import './specificStyles.css';

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        background: 'silver',
    }
})

const NavBar = () => {
    const classes = useStyles()
    return (
        <div>
            <Toolbar className={classes.toolbar}>
                
                <Link to='/'>
                    <h2 className='siteName'>not Craig's List</h2>
                </Link>

                <div>
                    <Link className='home' to='/'>                        
                            Home
                    </Link>
                </div>

                <div>
                    <Link className='linkLoginRegister' to='/login'>
                            Login / Register
                    </Link>
                </div>

            </Toolbar>
        </div>
    )
}
export default NavBar;