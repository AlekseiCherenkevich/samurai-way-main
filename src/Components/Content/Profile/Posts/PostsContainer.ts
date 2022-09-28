import {connect} from "react-redux";
import Posts from "./Posts";
import {AppStateType} from "../../../../redux/redux-store";
import {deletePost, PostType} from "../../../../redux/profile-reducer";

type MapStatePropsType = {
    posts: Array<PostType>
}

type MapDispatchPropsType = {
    deletePost: (id: number) => void
}

type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    posts: state.profilePage['posts']
})

const PostsContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {deletePost})(Posts)

export default PostsContainer