import {Field, reduxForm} from "redux-form";

const NewPostForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'newPostText'} placeholder={'Enter new message...'}></Field>
        </div>
        <div>
            <button>ADD POST</button>
        </div>
    </form>
}

export default reduxForm({form: 'newPost'})(NewPostForm)