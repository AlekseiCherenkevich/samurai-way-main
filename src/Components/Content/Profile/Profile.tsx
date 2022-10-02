import React from "react";
import axios from "axios";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {ProfileType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type ProfilePropsType = RouteComponentProps<PathParamsType> & {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
}

class Profile extends React.Component<ProfilePropsType, AppStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(res => {
                const response = res.data
                this.props.setUserProfile(response)
            })
    }
    render() {
        return(
            <>
                <ProfileInfo profile={this.props.profile} />
                <PostsContainer/>
            </>
        )
    }
}

export default Profile