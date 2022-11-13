import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../../../utils/validators";
import { Textarea } from "../../../../../Common/FormControls/FormControls";

const maxLength10 = maxLength(10)

const NewPostForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component={Textarea}
                name={'newPostText'}
                placeholder={'Enter new message...'}
                validate={[required, maxLength10]}
            ></Field>
        </div>
        <div>
            <button>ADD POST</button>
        </div>
    </form>
}

export default reduxForm({form: 'newPost'})(NewPostForm)