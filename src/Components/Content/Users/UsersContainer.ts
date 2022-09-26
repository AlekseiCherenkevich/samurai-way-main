import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../../redux/redux-store";
import {setUsers, UserType} from "../../../redux/users-reducer";

type MapStatePropsType = {
    users: Array<UserType>
}

type MapDispatchPropsType = {
    setUsers: (users: Array<UserType>) => void
}

type OwnPropsType = {}


const mapStateToProps = (state: AppStateType) => ({
    users: state.usersPage.users
})

const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {setUsers})(Users)

export default UsersContainer