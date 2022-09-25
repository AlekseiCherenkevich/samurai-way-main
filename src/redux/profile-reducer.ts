const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_NEW_POST = "ADD-NEW-POST"

type InitialStateType = {
    newPostText: any,
    posts: Array<PostType>
}

export type PostType = {
    id: number,
    avatarSrc: string,
    message: string
}

const initialState = {
    newPostText: '',
    posts: [
        {
            id: 1,
            avatarSrc: 'https://i0.wp.com/3.bp.blogspot.com/-xp5VzwYRB3E/XDmHGpWlBFI/AAAAAAAAEsY/IkRPJbHMDyc2wJsOcYiaccbqIUlfc_H5wCHMYCw/s1600/ian-ramnarine-thinglink.jpg',
            message: 'yo man'
        },
        {
            id: 2,
            avatarSrc: 'https://i0.wp.com/3.bp.blogspot.com/-xp5VzwYRB3E/XDmHGpWlBFI/AAAAAAAAEsY/IkRPJbHMDyc2wJsOcYiaccbqIUlfc_H5wCHMYCw/s1600/ian-ramnarine-thinglink.jpg',
            message: 'hiiii'
        }
    ]
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state, newPostText: action.text
            }
        }
        case ADD_NEW_POST: {
            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: 3,
                        avatarSrc: 'https://i0.wp.com/3.bp.blogspot.com/-xp5VzwYRB3E/XDmHGpWlBFI/AAAAAAAAEsY/IkRPJbHMDyc2wJsOcYiaccbqIUlfc_H5wCHMYCw/s1600/ian-ramnarine-thinglink.jpg',
                        message: state.newPostText
                    }],
                newPostText: ''
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

export const updateNewPostText = (text: string) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const addNewPost = () => ({type: ADD_NEW_POST})