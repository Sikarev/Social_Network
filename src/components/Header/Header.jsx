import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return <header className={classes.header}>
        <div className={classes.logo}>Not a facebook</div>
        <NavLink to='/login' className={classes.loginBlock}>
            <div>
                {props.isAuth ? props.login : "Login"}
            </div>
        </NavLink>
    </header>
}

export default Header;