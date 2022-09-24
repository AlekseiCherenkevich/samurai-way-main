import {connect} from "react-redux";
import Posts from "./Posts";
import {DispatchType, StateType} from "../../../../redux/redux-store";

const mapStateToProps = (state: StateType) => ({
    posts: state.profilePage.posts
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    deletePost: () => {}
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer