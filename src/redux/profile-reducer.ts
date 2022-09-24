const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_NEW_POST = "ADD-NEW-POST"

type InitialStateType = {
    newPostText: string,
    posts: Array<PostType>
}

export type PostType = {
    id: number,
    avatarSrc: string,
    status: string,
    location: string
}

const initialState = {
    newPostText: 'hello Man',
    posts: [
        {
            id: 1,
            avatarSrc: 'https://i0.wp.com/3.bp.blogspot.com/-xp5VzwYRB3E/XDmHGpWlBFI/AAAAAAAAEsY/IkRPJbHMDyc2wJsOcYiaccbqIUlfc_H5wCHMYCw/s1600/ian-ramnarine-thinglink.jpg',
            status: 'yo man',
            location: 'Minsk'
        },
        {
            id: 2,
            avatarSrc: 'https://i0.wp.com/3.bp.blogspot.com/-xp5VzwYRB3E/XDmHGpWlBFI/AAAAAAAAEsY/IkRPJbHMDyc2wJsOcYiaccbqIUlfc_H5wCHMYCw/s1600/ian-ramnarine-thinglink.jpg',
            status: 'hiiii',
            location: 'Homel'
        },
    ]
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionType) => {
    return state
}

type ActionType = {
    type: string,
    text?: string
}

const updateNewPostText = (text: string) => ({type: UPDATE_NEW_POST_TEXT, text: text})