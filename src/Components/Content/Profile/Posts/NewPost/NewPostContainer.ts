import NewPost from "./NewPost";
import {connect} from 'react-redux'
import {DispatchType, StateType} from "../../../../../redux/redux-store";
import {addNewPost, updateNewPostText} from "../../../../../redux/profile-reducer";


const mapStateToProps = (state: StateType) => ({
    newPostText: state.profilePage.newPostText
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
    updateNewPostText: (text: string) => {
        dispatch(updateNewPostText(text))
    },
    addNewPost: () => {
        dispatch(addNewPost())
    }
})

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer