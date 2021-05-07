import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Katya
                </div>
                <div className={s.dialog}>
                    Mark
                </div>
                <div className={s.dialog}>
                    John
                </div>
                <div className={s.dialog}>
                    Sara
                </div>
                <div className={s.dialog}>
                    Michael
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How your doing?</div>
                <div className={s.message}>Send nudes pls</div>
            </div>
        </div>
    )
}

export default Dialogs;