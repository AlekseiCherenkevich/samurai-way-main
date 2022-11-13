import classes from './Header.module.css'
import React from "react";
import {AppStateType} from "../../redux/redux-store";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    getAuthUserData: (isAuth: boolean) => void
    logout: () => void
}

class Header extends React.Component<HeaderPropsType, AppStateType> {
    componentDidMount() {
        this.props.getAuthUserData(true)
    }
    render() {
        return <div className={classes.header}>
            <div className={classes.logo}></div>
            {this.props.isAuth
                ? <div><h2>{this.props.login}</h2>
                  <button onClick={this.props.logout}>Logout</button></div>
                : <h2>Login</h2>
            }
        </div>
    }
}

export default Header