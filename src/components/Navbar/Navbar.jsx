import { TextField } from '@mui/material';
import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <img src="https://axenix.pro/wp-content/themes/axenix/img/svg/logo-header.svg" alt="" />
            </div>
            <TextField className='navbar__search' id="outlined" variant="filled" placeholder="Поиск..."/>
        </div>
    );
}

