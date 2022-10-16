import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../../redux/redux-store";
import {follow, getUsers, unfollow, UserType} from "../../../redux/users-reducer";
import {compose} from "redux";

type MapStatePropsType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    getUsers: (pageSize: number, currentPage: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}
type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
})

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {getUsers, follow, unfollow})
)(Users)
