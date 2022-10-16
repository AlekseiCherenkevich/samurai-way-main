import {connect} from "react-redux";
import {getProfile, ProfileType} from '../../../redux/profile-reducer'
import {AppStateType} from "../../../redux/redux-store";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType
    isFetching: boolean
}
type MapDispatchPropsType = {
    getProfile: (userId: string) => void
}
type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
})

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
        {getProfile}),
    withRouter,
    withAuthRedirect
)(Profile)
