import {profileAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_NEW_POST = 'ADD_NEW_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

type InitialStateType = {
    newPostText: string
    posts: Array<PostType>
    idCounter: number
    profile: ProfileType
    status: string
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
    userId: string
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
        userId: '2',
        photos: {
            small: null,
            large: null
        },
    },
    status: '',
    isFetching: false
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_POST: {
            return {
                ...state,
                idCounter: state.idCounter += 1,
                posts: [...state.posts,
                    {
                        id: state.idCounter,
                        avatarSrc: 'https://i0.wp.com/3.bp.blogspot.com/-xp5VzwYRB3E/XDmHGpWlBFI/AAAAAAAAEsY/IkRPJbHMDyc2wJsOcYiaccbqIUlfc_H5wCHMYCw/s1600/ian-ramnarine-thinglink.jpg',
                        message: action.newPostText,
                        likesCount: 0
                    }],
                newPostText: ''
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
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            return state
        }
    }
}

type AddNewPostType = {
    type: "ADD_NEW_POST",
    newPostText: string
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
type SetProfileStatusType = {
    type: 'SET_PROFILE_STATUS'
    status: string
}

type ActionsType = AddNewPostType | DeletePostType | SetUserProfileType | ToggleIsFetchingType | SetProfileStatusType

export const addNewPost = (newPostText: string): AddNewPostType => ({type: ADD_NEW_POST, newPostText})
export const deletePost = (id: number): DeletePostType => ({type: DELETE_POST, id: id})
const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
const setProfileStatus = (status: string): SetProfileStatusType => ({type: SET_PROFILE_STATUS, status})

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

export const getStatus = (userId: string): ThunkAction<void, AppStateType, unknown, ActionsType> => (dispatch, getState) => {
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setProfileStatus(res))
        })
}

export const updateStatus = (status: string): ThunkAction<void, AppStateType, unknown, ActionsType> => (dispatch, getState) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
    })
}