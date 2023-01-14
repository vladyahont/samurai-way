import React, {useState} from 'react';

export type ProfileStatusType = {
    status: string
}
const ProfileStatus = (props: ProfileStatusType) => {

    const [status, setStatus] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)

    return editMode ? <input value={status} autoFocus
                             onChange={(e) => setStatus(e.currentTarget.value)}
                             onBlur={() => setEditMode(false)}/>
        : <span onDoubleClick={() => setEditMode(true)}>{status}</span>


};

export default ProfileStatus;