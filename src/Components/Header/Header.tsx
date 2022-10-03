import classes from './Header.module.css'
import React from "react";
import {AuthDataType} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import API from "../../api/api";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    setAuthUserData: (data: AuthDataType) => void
}

class Header extends React.Component<HeaderPropsType, AppStateType> {
    componentDidMount() {
        API.getAuthUserData().then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data)
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