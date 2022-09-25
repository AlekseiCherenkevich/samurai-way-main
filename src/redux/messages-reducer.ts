const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE"

type InitialStateType = {
    friends: Array<any>,
    messages: Array<any>,
    idCounter: number,
    newMessageText: string
}

export type FriendType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number,
    message: string
}

const initialState: InitialStateType = {
    friends: [
        {id: 1, name: "Vasya Pupkin"},
        {id: 2, name: "Krokodil Gena"},
        {id: 3, name: "Masha"},
        {id: 4, name: "Petya"}
    ],
    messages: [
        {id: 1, message: "hello"},
        {id: 2, message: "how are you?"},
        {id: 3, message: "im fine, thank you"},
        {id: 4, message: "when is ypur birthday?"}
    ],
    idCounter: 4,
    newMessageText: 'hiiii'
}

export const messagesReducer = (state: InitialStateType = initialState, action : ActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.text
            }
        }
        case SEND_MESSAGE: {
            return {
                ...state,
                idCounter: state.idCounter += 1,
                messages: [...state.messages, {id: state.idCounter, message: state.newMessageText}],
                newMessageText: ''
            }
        }
        default: {
            return state
        }
    }
}

type ActionType = {
    type: string,
    text?: string
}

export const updateNewMessageText = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})
export const sendMessage = () => ({type: SEND_MESSAGE})