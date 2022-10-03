import React from "react";
import User from "./User/User";
import {UserType} from "../../../redux/users-reducer";
import classes from './Users.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import {AppStateType} from "../../../redux/redux-store";
import API from "../../../api/api";

type UsersPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class Users extends React.Component<UsersPropsType, AppStateType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        API.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                const users = data.items
                this.props.setUsers(users)
                const totalUsersCount = data.totalCount
                this.props.setTotalUsersCount(totalUsersCount)
            })
        this.props.toggleIsFetching(false)
    }

    onCurrentPageChange = (currentPage: number) => {
        this.props.toggleIsFetching(true)
        API.getUsers(this.props.pageSize, currentPage)
            .then(data => {
                const users = data.items
                this.props.setUsers(users)
                this.props.setCurrentPage(currentPage)
            })
        this.props.toggleIsFetching(false)
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
                                unfollow={this.props.unfollow}
                                follow={this.props.follow}
                                followed={u.followed}
                                name={u.name}
                                key={u.id}
                                id={u.id}
                                photo={u.photos.small}
                                status={u.status}
                            />
                        )
                    }
                </div>
            }
        </>
    }
}

export default Users