import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {AuthDataType, setAuthUserData} from "../../redux/auth-reducer";
import Header from './Header'


type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setAuthUserData: (data: AuthDataType) => void
}

type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    login: state.auth.data.login,
    isAuth: state.auth.isAuth
})

const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    {setAuthUserData})(Header)

export default HeaderContainer