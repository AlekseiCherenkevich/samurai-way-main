const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_NEW_POST = "ADD-NEW-POST"
const DELETE_POST = "DELETE-POST"

type InitialStateType = {
    newPostText: any,
    posts: Array<PostType>,
    idCounter: number
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
    ],
    idCounter: 3
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state, newPostText: action.text
            }
        }
        case ADD_NEW_POST: {
            if (state.newPostText.length > 0) {
                return {
                    ...state,
                    idCounter: state.idCounter += 1,
                    posts: [...state.posts,
                        {
                            id: state.idCounter,
                            avatarSrc: 'https://i0.wp.com/3.bp.blogspot.com/-xp5VzwYRB3E/XDmHGpWlBFI/AAAAAAAAEsY/IkRPJbHMDyc2wJsOcYiaccbqIUlfc_H5wCHMYCw/s1600/ian-ramnarine-thinglink.jpg',
                            message: state.newPostText
                        }],
                    newPostText: ''
                }
            } else {
                return state
            }

        }
        case DELETE_POST: {
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.id)]
            }
        }
        default: {
            return state
        }
    }
}

type ActionType = {
    type: string,
    text?: string,
    id?: number
}

export const updateNewPostText = (text: string) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const addNewPost = () => ({type: ADD_NEW_POST})
export const deletePost = (id: number) => ({type: DELETE_POST, id: id})