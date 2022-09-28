import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../../redux/redux-store";
import {setUsers, follow, unfollow, setTotalUsersCount, setCurrentPage, UserType} from "../../../redux/users-reducer";

type MapStatePropsType = {
    users: Array<UserType>,
    totalUsersCount: number,
    currentPage: number,
    pageSize: number
}

type MapDispatchPropsType = {
    setUsers: (users: Array<UserType>) => void,
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    setCurrentPage: (currentPage: number) => void
}

type OwnPropsType = {}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.usersPage['users'],
    totalUsersCount: state.usersPage['totalUsersCount'],
    currentPage: state.usersPage['currentPage'],
    pageSize: state.usersPage['pageSize']
})

const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {setUsers, follow, unfollow, setTotalUsersCount, setCurrentPage})(Users)

export default UsersContainer