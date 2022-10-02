import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {usersReducer} from "./users-reducer"
import {authReducer} from "./auth-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(rootReducer)

export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export default store