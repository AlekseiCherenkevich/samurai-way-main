import NewPost from "./NewPost";
import {connect} from 'react-redux'
import {AppStateType} from "../../../../../redux/redux-store";
import {addNewPost} from "../../../../../redux/profile-reducer";

type MapStatePropsType = {}

type MapDispatchPropsType = {
    addNewPost: (newPostText: string) => void
}

type OwnPropsType = {}

const mapStateToProps = (state: AppStateType) => ({})

const NewPostContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {addNewPost})(NewPost)

export default NewPostContainer