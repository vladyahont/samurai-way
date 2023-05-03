import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from "redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type DialogsType = {
    messagesPage: DialogsPageType
    sendMessage: (newMessageText: string) => void
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    const addNewMessage = (values: FormForMessageDataType) => {
        props.sendMessage(values.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.messagesPage.dialogs && props.messagesPage.dialogs.map((d, index) =>
                    <DialogItem key={index} name={d.name} id={d.id} avatar={d.avatar}/>)}
            </div>
            <div className={s.messages}>
                {props.messagesPage.messages && props.messagesPage.messages.map((m, index) =>
                    <Message key={index} message={m.message}/>)}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

type FormForMessageDataType = {
    newMessageText: string
}
export const AddMessageForm: React.FC<InjectedFormProps<FormForMessageDataType>> = (props) => {


    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'}
                   name={'newMessageText'}
                   placeholder={'Enter your message'}></Field>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>
}
const AddMessageFormRedux = reduxForm<FormForMessageDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)