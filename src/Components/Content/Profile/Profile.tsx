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
    status: string
    userId: number
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

class Profile extends React.Component<ProfilePropsType, AppStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.userId)
        }
        this.props.getProfile(userId)
        this.props.getStatus((userId))
    }
    render() {
        return(
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <>
                        <ProfileInfo updateStatus={this.props.updateStatus} status={this.props.status} profile={this.props.profile} />
                        <PostsContainer/>
                    </>
                }
            </>
        )
    }
}

export default Profile