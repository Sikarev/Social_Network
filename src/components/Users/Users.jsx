import React from 'react';
import styles from './Users.module.css';
import userPhoto from "../../assets/userImg.png"
import { NavLink } from 'react-router-dom';
import Paginator from '../commons/Paginator/Paginator';
import User from './User/User';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            {
                props.users.map(u => <User
                    user={u}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    followingInProgress={props.followingInProgress}
                    key={u.id} />)
            }
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
        </div>
    )
}

export default Users;