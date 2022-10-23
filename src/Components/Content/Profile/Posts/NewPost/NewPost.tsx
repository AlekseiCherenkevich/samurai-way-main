import classes from './NewPost.module.css'
import NewPostForm from './NewPostForm/NewPostForm'

type NewPostPropsType = {
    // newPostText: string,
    // updateNewPostText: (text: string) => void,
    addNewPost: (newPostText: string) => void
}

const NewPost: React.FC<NewPostPropsType> = (props) => {
    const addNewPost = (formData: any) => {
        props.addNewPost(formData.newPostText)
    }
    return <div className={classes.new_post}>
        <h2 className={classes.title}>NEW POST</h2>
        <NewPostForm onSubmit={addNewPost}/>
    </div>
}

export default NewPost