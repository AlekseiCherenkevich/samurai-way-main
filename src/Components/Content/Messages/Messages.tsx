import classes from './Messages.module.css'
import React, {createRef} from "react";
import {FriendType, MessageType} from "../../../redux/messages-reducer";
import { NavLink } from 'react-router-dom';



type MessagesPropsType = {
    friends: Array<FriendType>,
    messages: Array<MessageType>,
    newMessageText: string,
    updateNewMessageText: (text: string) => void,
    sendMessage: () => void
}

const Messages: React.FC<MessagesPropsType> = (props) => {
    const textAreaRef: any = createRef()
    const onNewMessageUpdate = () => {
        props.updateNewMessageText(textAreaRef.current.value)
    }
    const onMessageUpdate = () => {
        props.sendMessage()
    }
    return <div className={classes.messages}>
        <div className={classes.chat}>
            <div className={classes.friends}>
                {props.friends.map((f: FriendType) => <NavLink to={`/messages/${f.id}`} className={classes.friend}>{f.name}</NavLink>)}
            </div>
            <div className={classes.messages}>
                {props.messages.map((m: MessageType) => <div className={classes.message}>{m.message}</div>)}
            </div>
        </div>
        <div className={classes.new_message}>
            <textarea ref={textAreaRef} onChange={onNewMessageUpdate} value={props.newMessageText}></textarea>
            <button onClick={onMessageUpdate}>ADD MESSAGE</button>
        </div>
    </div>
}

export default Messages