import {connect} from "react-redux";
import {ProfileType, setUserProfile} from '../../../redux/profile-reducer'
import {AppStateType} from "../../../redux/redux-store";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";

type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type OwnPropsType = {}

const mapStateToProps = (state: AppStateType) : MapStatePropsType => ({
    profile: state.profilePage['profile']
})

const WithUrlDataComponent = withRouter(Profile)

const ProfileContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    {setUserProfile})(WithUrlDataComponent)

export default ProfileContainer