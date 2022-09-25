import classes from './Messages.module.css'
import {createRef} from "react";
import {FriendType, MessageType} from "../../../redux/messages-reducer";



type MessagesPropsType = {
    friends: Array<FriendType>,
    messages: Array<MessageType>
}

function Messages(props: MessagesPropsType) {
    const textArea = createRef()
    const updateNewMessageText = () => {
        console.log('changed')
    }
    const sendMessage = () => {
        console.log('send')
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
            <textarea onChange={updateNewMessageText}></textarea>
            <button onClick={sendMessage}>ADD MESSAGE</button>
        </div>
    </div>
}

export default Messages