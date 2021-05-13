import React from 'react';
import styles from './Users.module.css';
const DEFAULT_IMAGE = "http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 1, image: DEFAULT_IMAGE, followed: true, fullName: "Roma", status: "Learning React", location: { city: "Voronezh", country: "Russia" } },
                { id: 2, image: DEFAULT_IMAGE, followed: false, fullName: "Boris", status: "Why are you running?", location: { city: "Borisoglebsk", country: "Russia" } },
                { id: 3, image: DEFAULT_IMAGE, followed: true, fullName: "Katya", status: "Stable", location: { city: "Chernigov", country: "Ukraine" } },
                { id: 4, image: DEFAULT_IMAGE, followed: false, fullName: "Sara", status: "Just chilling", location: { city: "Salt Lake City", country: "USA" } }
            ]
        );
    }
    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.image} className={styles.userPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.city}</div>
                                <div>{u.location.country}</div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    )
}

export default Users;