import React, {ChangeEvent, useEffect, useState} from 'react';

export type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}
const ProfileStatus = (props: ProfileStatusType) => {

    const [status, setStatus] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }


    return editMode ? <input value={status} autoFocus
                             onChange={onStatusChange}
                             onBlur={() => {
                                 props.updateStatus(status)
                                 setEditMode(false)
                             }}/>
        : <span onDoubleClick={() => setEditMode(true)}>{props.status}</span>


};

export default ProfileStatus;