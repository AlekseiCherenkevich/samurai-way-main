import {profileAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_NEW_POST = 'ADD_NEW_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

type InitialStateType = {
    newPostText: string
    posts: Array<PostType>
    idCounter: number
    profile: ProfileType
    isFetching: boolean
}
type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    aboutMe: string | null,
    contacts: ContactsType
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    photos: PhotosType
}
export type PostType = {
    id: number,
    avatarSrc: string,
    message: string,
    likesCount: number
}

const initialState: InitialStateType = {
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
    },
    isFetching: false
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: {
            return state
        }
    }
}

type UpdateNewPostText = {
    type: "UPDATE_NEW_POST_TEXT",
    text: string
}
type AddNewPostType = {
    type: "ADD_NEW_POST"
}
type DeletePostType = {
    type: "DELETE_POST"
    id: number
}
type SetUserProfileType = {
    type: "SET_USER_PROFILE"
    profile: ProfileType
}
type ToggleIsFetchingType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}

type ActionsType = UpdateNewPostText | AddNewPostType | DeletePostType | SetUserProfileType | ToggleIsFetchingType

export const updateNewPostText = (text: string): UpdateNewPostText => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const addNewPost = (): AddNewPostType => ({type: ADD_NEW_POST})
export const deletePost = (id: number): DeletePostType => ({type: DELETE_POST, id: id})
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getProfile = (userId: string): ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return (dispatch, getState) => {
        dispatch(toggleIsFetching(true))
        profileAPI.getProfile(userId)
            .then(res => {
                dispatch(setUserProfile(res))
                dispatch(toggleIsFetching(false))
            })
    }
}