import {connect} from "react-redux";
import {getProfile, getStatus, ProfileType, updateStatus} from '../../../redux/profile-reducer'
import {AppStateType} from "../../../redux/redux-store";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType
    isFetching: boolean
    status: string
}
type MapDispatchPropsType = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
        {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(Profile)
