import classes from './Header.module.css'
import React from "react";
import {AppStateType} from "../../redux/redux-store";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    getAuthUserData: () => void
}

class Header extends React.Component<HeaderPropsType, AppStateType> {
    componentDidMount() {
        this.props.getAuthUserData()
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