import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";

type MapStateRedirectPropsType = {
    isAuth: boolean
}
type MapDispatchRedirectPropsType = {}

const MapStateRedirectProps = (state: AppStateType): MapStateRedirectPropsType => ({
    isAuth: state.auth.isAuth
} as MapStateRedirectPropsType)

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>){

    const AuthRedirectComponent: React.FC<MapStateRedirectPropsType & MapDispatchRedirectPropsType> = (props) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'} />
        return <WrappedComponent {...restProps as WCP} />
    }
    const ConnectedAuthRedirectComponent = connect<MapStateRedirectPropsType, MapDispatchRedirectPropsType, WCP, AppStateType>(MapStateRedirectProps, {})(AuthRedirectComponent)
    return ConnectedAuthRedirectComponent
}