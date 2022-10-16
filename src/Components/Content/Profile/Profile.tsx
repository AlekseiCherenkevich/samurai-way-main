import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {ProfileType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps} from "react-router-dom";
import Preloader from "../../Common/Preloader/Preloader";

type PathParamsType = {
    userId: string
}

type ProfilePropsType = RouteComponentProps<PathParamsType> & {
    profile: ProfileType
    isFetching: boolean
    getProfile: (userId: string) => void
}

class Profile extends React.Component<ProfilePropsType, AppStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfile(userId)
    }
    render() {
        return(
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <>
                        <ProfileInfo profile={this.props.profile} />
                        <PostsContainer/>
                    </>
                }
            </>
        )
    }
}

export default Profile