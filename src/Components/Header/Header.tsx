import classes from './Header.module.css'
import React from "react";
import axios from "axios";
import {AuthDataType} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    setAuthUserData: (data: AuthDataType) => void
}

class Header extends React.Component<HeaderPropsType, AppStateType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    const data = res.data.data
                    this.props.setAuthUserData(data)
                }
            })
    }
    render() {
        return <div className={classes.header}>
            <div className={classes.logo}></div>
            {this.props.isAuth
                ? <h2>{this.props.login}</h2>
                : <h2>Login</h2>
            }
        </div>
    }
}

export default Header