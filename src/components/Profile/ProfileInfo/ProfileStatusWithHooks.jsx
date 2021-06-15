import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let activateEditMode = () => {
        setEditMode(true);
    }
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    let [status, updateStatus] = useState(props.status);
    let onStatusChange = (e) => {
        updateStatus(e.currentTarget.value);
    }

    useEffect(() => {
        updateStatus(props.status)
    }, [props.status])

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "double click to set status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onBlur={deactivateEditMode} autoFocus={true} onChange={onStatusChange} value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;