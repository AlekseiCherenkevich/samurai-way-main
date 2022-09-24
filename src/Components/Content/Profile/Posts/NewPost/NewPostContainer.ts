import NewPost from "./NewPost";
import {connect} from 'react-redux'
import {DispatchType, StateType} from "../../../../../redux/redux-store";


const mapStateToProps = (state: StateType) => ({
    newPostText: state.profilePage.newPostText
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    updateNewPostText: () => {}
})

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer