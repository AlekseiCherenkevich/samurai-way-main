import classes from './Messages.module.css'
import React from "react";
import {FriendType, MessageType} from "../../../redux/messages-reducer";
import {NavLink} from 'react-router-dom';
import NewMessageForm from "./NewMessageForm/NewMessageForm";

type MessagesPropsType = {
    friends: Array<FriendType>,
    messages: Array<MessageType>,
    addNewMessage: (newMessageText: string) => void

}

const Messages: React.FC<MessagesPropsType> = (props) => {
    const addMessage = (formData: any) => {
        props.addNewMessage(formData.newMessageText)
    }
    return <div className={classes.messages}>
        <div className={classes.chat}>
            <div className={classes.friends}>
                {props.friends.map((f: FriendType) => <NavLink key={f.id} to={`/messages/${f.id}`} className={classes.friend}>{f.name}</NavLink>)}
            </div>
            <div className={classes.messages}>
                {props.messages.map((m: MessageType) => <div key={m.id} className={classes.message}>{m.message}</div>)}
            </div>
        </div>
        <NewMessageForm onSubmit={addMessage}/>
    </div>
}

export default Messages