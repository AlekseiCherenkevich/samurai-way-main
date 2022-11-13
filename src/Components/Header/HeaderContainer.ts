import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import Header from './Header'


type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getAuthUserData: (isAuth: boolean) => void
    logout: () => void
}

type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    login: state.auth.data.login,
    isAuth: state.auth.isAuth
})

const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    {getAuthUserData, logout})(Header)

export default HeaderContainer