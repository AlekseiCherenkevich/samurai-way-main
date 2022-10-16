import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import Messages from "./Messages";
import {FriendType, MessageType, sendMessage, updateNewMessageText} from "../../../redux/messages-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import React from "react";

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

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {updateNewMessageText, sendMessage}),
    withAuthRedirect
)(Messages)
