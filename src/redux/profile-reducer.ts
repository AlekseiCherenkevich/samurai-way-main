const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_NEW_POST = 'ADD_NEW_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

type InitialStateType = {
    newPostText: string
    posts: Array<PostType>
    idCounter: number
    profile: ProfileType | null
}

export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    photos: {
        small: string | null
        large: string | null
    }
}

export type PostType = {
    id: number,
    avatarSrc: string,
    message: string,
    likesCount: number
}

const initialState = {
    newPostText: '',
    posts: [
        {
            id: 1,
            avatarSrc: 'https://i0.wp.com/3.bp.blogspot.com/-xp5VzwYRB3E/XDmHGpWlBFI/AAAAAAAAEsY/IkRPJbHMDyc2wJsOcYiaccbqIUlfc_H5wCHMYCw/s1600/ian-ramnarine-thinglink.jpg',
            message: 'yo man',
            likesCount: 12
        },
        {
            id: 2,
            avatarSrc: 'https://i0.wp.com/3.bp.blogspot.com/-xp5VzwYRB3E/XDmHGpWlBFI/AAAAAAAAEsY/IkRPJbHMDyc2wJsOcYiaccbqIUlfc_H5wCHMYCw/s1600/ian-ramnarine-thinglink.jpg',
            message: 'hiiii',
            likesCount: 3
        }
    ],
    idCounter: 3,
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: {
            small: null,
            large: null
        }
    }
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
                            message: state.newPostText,
                            likesCount: 0
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: {...action.profile}
                }
            }
        default: {
            return state
        }
    }
}

type ActionType = {
    type: string
    text?: string
    id?: number
    profile?: ProfileType
}

export const updateNewPostText = (text: string) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const addNewPost = () => ({type: ADD_NEW_POST})
export const deletePost = (id: number) => ({type: DELETE_POST, id: id})
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile})