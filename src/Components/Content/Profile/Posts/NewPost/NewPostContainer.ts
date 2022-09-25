import NewPost from "./NewPost";
import {connect} from 'react-redux'
import {AppStateType} from "../../../../../redux/redux-store";
import {addNewPost, updateNewPostText} from "../../../../../redux/profile-reducer";

type MapStatePropsType = {
    newPostText: string
}

type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void,
    addNewPost: () => void
}

type OwnPropsType = {}

const mapStateToProps = (state: AppStateType) => ({
    newPostText: state.profilePage.newPostText
})

const NewPostContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {updateNewPostText, addNewPost})(NewPost)

export default NewPostContainer