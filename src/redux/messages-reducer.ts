const ADD_MESSAGE = "SEND-MESSAGE"

type InitialStateType = {
    friends: Array<FriendType>,
    messages: Array<MessageType>,
    idCount: number
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
    idCount: 4
}

export const messagesReducer = (state: InitialStateType = initialState, action : ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                idCounter: state.idCount += 1,
                messages: [
                    ...state.messages,
                    {id: state.idCount, message: action.newMessageText}
                ]
            }
        }
        default: {
            return state
        }
    }
}

type ActionType = {
    type: string,
    newMessageText: string
}

export const addNewMessage = (newMessageText: string): ActionType => ({type: ADD_MESSAGE, newMessageText})