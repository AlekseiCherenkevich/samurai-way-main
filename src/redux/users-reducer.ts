import {userAPI} from "../api/api";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const SET_USERS = "SET_USERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

type InitialStateType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: InitialStateType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export type UserType = {
    name: string | null,
    id: number,
    uniqueUrlName: any,
    photos: {
        small: string | null,
        large: string | null
    },
    status: string | null,
    followed: boolean
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    } else {
                        return u
                    }
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    } else {
                        return u
                    }
                })
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            if (action.isFetching) {
                console.log(action.id)
                return {...state, followingInProgress: [action.id]}
            } else {
                return {...state, followingInProgress: state.followingInProgress.filter(id => id !== action.id)}
            }
        }
        default: {
            return state
        }
    }
}

export type SetUsersType = {
    type: 'SET_USERS'
    users: Array<UserType>
}
export type FollowAcceptType = {
    type: 'FOLLOW'
    id: number
}
export type UnfollowAcceptType = {
    type: "UNFOLLOW"
    id: number
}
export type SetTotalUsersCountType = {
    type: "SET_TOTAL_USERS_COUNT"
    totalUsersCount: number
}
export type SetCurrentPageType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
export type ToggleIsFetchingType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}
export type ToggleFollowingProgressType = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS"
    isFetching: boolean
    id: number
}

type ActionsType =
    SetUsersType
    | FollowAcceptType
    | UnfollowAcceptType
    | SetTotalUsersCountType
    | SetCurrentPageType
    | ToggleIsFetchingType
    | ToggleFollowingProgressType

export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users})
export const followAccept = (id: number): FollowAcceptType => ({type: FOLLOW, id})
export const unfollowAccept = (id: number): UnfollowAcceptType => ({type: UNFOLLOW, id})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, id: number): ToggleFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    id
})

export const getUsers = (pageSize: number, currentPage: number): ThunkAction<void, AppStateType, unknown, ActionsType> => (dispatch, getState) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    userAPI.getUsers(pageSize, currentPage)
        .then(data => {
            const users = data.items
            dispatch(setUsers(users))
            const totalUsersCount = data.totalCount
            dispatch(setTotalUsersCount(totalUsersCount))
        })
    dispatch(toggleIsFetching(false))
}

export const follow = (id: number): ThunkAction<void, AppStateType, unknown, ActionsType> => (dispatch, getState) => {
    dispatch(toggleFollowingProgress(true, id))
    userAPI.follow(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(followAccept(id))
        }
        dispatch(toggleFollowingProgress(false, id))
    })
}

export const unfollow = (id: number): ThunkAction<void, AppStateType, unknown, ActionsType> => (dispatch, getState) => {
    dispatch(toggleFollowingProgress(true, id))
    userAPI.unfollow(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowAccept(id))
        }
        dispatch(toggleFollowingProgress(false, id))
    })
}