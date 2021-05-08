import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className="container">
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs' activeClassName={classes.activeLink} > Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news' activeClassName={classes.activeLink} > News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/music' activeClassName={classes.activeLink} > Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/settings' activeClassName={classes.activeLink} > Settings</NavLink>
                </div>
                <div className={classes.item + ' ' + classes.friendsBlock}>
                    <NavLink className={classes.friendsLink} to='/friends' activeClassName={classes.activeLink} > Friends</NavLink>
                    <div className={classes.shortList}>
                        <NavLink className={classes.friendLink} to='/friend1' activeClassName={classes.activeLink} >
                            <img src="http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png" className={classes.avaIcon} alt="photo" />
                            <div className={classes.friendName}>name</div>
                        </NavLink>
                        <NavLink className={classes.friendLink} to='/friend2' activeClassName={classes.activeLink} >
                            <img src="http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png" className={classes.avaIcon} alt="photo" />
                            <div className={classes.friendName}>name</div>
                        </NavLink>
                        <NavLink className={classes.friendLink} to='/friend3' activeClassName={classes.activeLink} >
                            <img src="http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png" className={classes.avaIcon} alt="photo" />
                            <div className={classes.friendName}>name</div>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;