import classes from './NewPost.module.css'
import {createRef} from "react";

type NewPostPropsType = {
    newPostText: string,
    updateNewPostText: (text: string) => void,
    addNewPost: () => void
}

function NewPost(props: NewPostPropsType) {
    const textareaRef: any = createRef()
    const onNewPostTextUpdate = () => {
        props.updateNewPostText(textareaRef.current.value)
    }
    const onNewPostAdd = () => {
        props.addNewPost()
    }
    return <div className={classes.new_post}>
        <div className={classes.title}>NEW POST</div>
        <div className={classes.wrapper}>
            <textarea ref={textareaRef} onChange={onNewPostTextUpdate} value={props.newPostText}></textarea>
            <button onClick={onNewPostAdd}>ADD POST</button>
        </div>
    </div>
}

export default NewPost