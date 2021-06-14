import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Social Network</div>
            <div className={classes.loginMenu}>
                <NavLink to='/login' className={classes.loginBlock}>
                    <div>
                        {props.isAuth ? props.login : "Login"}
                    </div>
                </NavLink>
                {props.isAuth && <button onClick={props.logout} className={classes.loginBlock}>Logout</button>}
            </div>
        </header>
    );
}

export default Header;