import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import Header from './Header'


type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    login: state.auth.data.login,
    isAuth: state.auth.isAuth
})

const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    {getAuthUserData})(Header)

export default HeaderContainer