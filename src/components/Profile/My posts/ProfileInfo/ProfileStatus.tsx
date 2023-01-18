import React, {ChangeEvent, useState} from 'react';

export type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}
const ProfileStatus = (props: ProfileStatusType) => {

    //const [status, setStatus] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateStatus(e.currentTarget.value)
        //setStatus(e.currentTarget.value)
    }

    return editMode ? <input value={props.status} autoFocus
                             onChange={onStatusChange}
                             onBlur={() => setEditMode(false)}/>
        : <span onDoubleClick={() => setEditMode(true)}>{props.status}</span>


};

export default ProfileStatus;