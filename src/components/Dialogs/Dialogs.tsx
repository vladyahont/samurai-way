import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from "../../redux/store";


type DialogsType = {
    updateNewMessageText: (newMessage: string) => void
    messagePage: DialogsPageType
    sendMessage: () => void
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElements = props.messagePage.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesElements = props.messagePage.messages.map(m =>
        <Message message={m.message}/>)
    let newMessageText = props.messagePage.newMessageText

    const onSendMessageClick = () => {
        props.sendMessage()

    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewMessageText(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea value={newMessageText}
                              onChange={onNewMessageChange}
                              placeholder={'Enter your message'}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>

                </div>
            </div>
        </div>
    )

}