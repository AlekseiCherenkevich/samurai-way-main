import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import Messages from "./Messages";
import {FriendType, MessageType, sendMessage, updateNewMessageText} from "../../../redux/messages-reducer";

type MapStatePropsType = {
    friends: Array<FriendType>,
    messages: Array<MessageType>,
    newMessageText: string
}

type MapDispatchPropsType = {
    updateNewMessageText: (text: string) => void,
    sendMessage: () => void
}

type OwnPropsType = {}


const mapStateToProps = (state: AppStateType) : MapStatePropsType => ({
    // @ts-ignore
    friends: state.messagesPage.friends,
    // @ts-ignore
    messages: state.messagesPage.messages,
    // @ts-ignore
    newMessageText: state.messagesPage.newMessageText
})

const MessagesContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {updateNewMessageText, sendMessage})(Messages)

export default MessagesContainer