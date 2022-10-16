import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import Messages from "./Messages";
import {FriendType, MessageType, sendMessage, updateNewMessageText} from "../../../redux/messages-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

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
    friends: state.messagesPage.friends,
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText
})

const AuthRedirectComponent = withAuthRedirect(Messages)

const MessagesContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {updateNewMessageText, sendMessage})(AuthRedirectComponent)

export default MessagesContainer