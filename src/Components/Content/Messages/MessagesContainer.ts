import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import Messages from "./Messages";
import {FriendType, MessageType, sendMessage, updateNewMessageText} from "../../../redux/messages-reducer";

type MapStatePropsType = {
    friends: Array<FriendType>,
    messages: Array<MessageType>,
    newMessageText: string
    isAuth: boolean
}

type MapDispatchPropsType = {
    updateNewMessageText: (text: string) => void,
    sendMessage: () => void
}

type OwnPropsType = {}


const mapStateToProps = (state: AppStateType) : MapStatePropsType => ({
    friends: state.messagesPage.friends,
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText,
    isAuth: state.auth.isAuth
})

const MessagesContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {updateNewMessageText, sendMessage})(Messages)

export default MessagesContainer