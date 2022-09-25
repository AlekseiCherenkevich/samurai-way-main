import classes from './Messages.module.css'
import {createRef} from "react";
import {FriendType, MessageType, sendMessage, updateNewMessageText} from "../../../redux/messages-reducer";



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
                {props.friends.map((f: any) => <div>{f.name}</div>)}
            </div>
            <div className={classes.messages}>
                {props.messages.map((m: any) => <div>{m.message}</div>)}
            </div>
        </div>
        <div className={classes.new_message}>
            <textarea ref={textAreaRef} onChange={updateNewMessageText} value={props.newMessageText}></textarea>
            <button onClick={sendMessage}>ADD MESSAGE</button>
        </div>
    </div>
}

export default Messages