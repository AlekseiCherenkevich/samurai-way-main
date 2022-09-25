import {connect} from "react-redux";
import Posts from "./Posts";
import {DispatchType, StateType} from "../../../../redux/redux-store";
import {deletePost} from "../../../../redux/profile-reducer";

const mapStateToProps = (state: StateType) => ({
    posts: state.profilePage.posts
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    deletePost: (id:number) => {
        dispatch(deletePost(id))
    }
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer