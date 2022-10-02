import React from "react";
import axios from "axios";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {ProfileType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";

type ProfilePropsType = {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
}

class Profile extends React.Component<ProfilePropsType, AppStateType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/8')
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