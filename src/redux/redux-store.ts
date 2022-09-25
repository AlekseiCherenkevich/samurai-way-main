import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";

const reducers = combineReducers({
    profilePage: profileReducer
})

const store = createStore(reducers)

export type DispatchType = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>

export default store