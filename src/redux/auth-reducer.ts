import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"

type InitialStateType = {
    data: AuthDataType
    isAuth: boolean
}

export type AuthDataType = {
    email: string | null
    id: number | null
    login: string | null
}

const initialState: InitialStateType = {
    data: {
        email: null,
        id: null,
        login: null
    },
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                data: action.data,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }
}

type ActionType = {
    type: string
    data: AuthDataType
}

export const setAuthUserData = (data: AuthDataType): ActionType => ({type: SET_AUTH_USER_DATA, data})

export const getAuthUserData = (): ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch, getState) => {
    authAPI.getAuthUserData().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data))
        }
    })
}