import React from "react";
import axios from "axios";
import User from "./User/User";
import {UserType} from "../../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UserType>,
    setUsers: (users: Array<UserType>) => void
}

class Users extends React.Component<UsersPropsType, any>{
    constructor(props: UsersPropsType) {
        super(props);
    }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                const users = res.data.items
                this.props.setUsers(users)
            })
    }
    render() {
        return <div>
            {

                this.props.users.map((u: UserType) =>
                    <User name={u.name} key={u.id} photo={u.photos.small} status={u.status}/>
                )
            }
        </div>
    }
}

export default Users