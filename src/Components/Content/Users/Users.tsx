import React from "react";
import User from "./User/User";
import {UserType} from "../../../redux/users-reducer";
import classes from './Users.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import {AppStateType} from "../../../redux/redux-store";

type UsersPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>
    follow: (id: number) => void
    unfollow: (id: number) => void
    getUsers: (pageSize: number, currentPage: number) => void
}

class Users extends React.Component<UsersPropsType, AppStateType> {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onCurrentPageChange = (currentPage: number) => {
        this.props.getUsers(this.props.pageSize, currentPage)
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <div>
                    {pages.map(p => <span
                        className={p === this.props.currentPage ? classes.selected_page : classes.unselected_page}
                        onClick={() => this.onCurrentPageChange(p)}> {p} </span>)}
                    {
                        this.props.users.map((u: UserType) =>
                            <User
                                followed={u.followed}
                                name={u.name}
                                key={u.id}
                                id={u.id}
                                photo={u.photos.small}
                                status={u.status}
                                followingInProgress={this.props.followingInProgress}
                                unfollow={this.props.unfollow}
                                follow={this.props.follow}
                            />
                        )
                    }
                </div>
            }
        </>
    }
}

export default Users