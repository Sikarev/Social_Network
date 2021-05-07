import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://static-cse.canva.com/blob/185563/56.-Sunkissed-Village.f8ebc04e.png' />
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;