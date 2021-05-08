import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div>
            {"friend" + props.id}
        </div>
    )
}

export default Friend;