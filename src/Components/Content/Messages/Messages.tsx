import classes from './Messages.module.css'
import {createRef} from "react";
import {FriendType, MessageType} from "../../../redux/messages-reducer";
import { NavLink } from 'react-router-dom';



type MessagesPropsType = {
    friends: Array<FriendType>,
    messages: Array<MessageType>,
    newMessageText: string,
    updateNewMessageText: (text: string) => void,
    sendMessage: () => void
}

function Messages(props: MessagesPropsType) {
    const textAreaRef: any = createRef()
    const updateNewMessageText = () => {
        props.updateNewMessageText(textAreaRef.current.value)
    }
    const sendMessage = () => {
        props.sendMessage()
    }
    return <div className={classes.messages}>
        <div className={classes.chat}>
            <div className={classes.friends}>
                {props.friends.map((f: any) => <NavLink to={`/messages/${f.id}`} className={classes.friend}>{f.name}</NavLink>)}
            </div>
            <div className={classes.messages}>
                {props.messages.map((m: any) => <div className={classes.message}>{m.message}</div>)}
            </div>
        </div>
        <div className={classes.new_message}>
            <textarea ref={textAreaRef} onChange={updateNewMessageText} value={props.newMessageText}></textarea>
            <button onClick={sendMessage}>ADD MESSAGE</button>
        </div>
    </div>
}

export default Messages