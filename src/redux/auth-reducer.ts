import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";
import { FormDataType } from "../Components/Login/Login";


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
                isAuth: action.isAuth
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
    isAuth: boolean
}

export const setAuthUserData = (data: AuthDataType, isAuth: boolean): ActionType => ({type: SET_AUTH_USER_DATA, data, isAuth})

export const getAuthUserData = (): ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch, getState) => {
    authAPI.getAuthUserData().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data, true))
        }
    })
}

export const login = (formData: FormDataType): ThunkAction<void, AppStateType, unknown, ActionType | FormAction>  => (dispatch, getState) => {
    authAPI.login(formData).then(res => {
        if (res.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            const message = res.message.length > 0 ? res.messages[0] : 'Some error...'
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}


export const logout = (): ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch, getState) => {
    authAPI.logout().then( res => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData({
                email: null,
                id: null,
                login: null
            }, false))
        } else {
            alert(res)
        }
    })
}