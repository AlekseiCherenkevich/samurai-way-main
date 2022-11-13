import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../../Common/FormControls/FormControls";
import {maxLength, required} from "../../../../utils/validators";



const maxLength10 = maxLength(10)

const NewMessageForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component={Textarea}
                placeholder='Enter new message...'
                name='newMessageText'
                validate={[required, maxLength10]}
            ></Field>
        </div>
        <div>
            <button>ADD MESSAGE</button>
        </div>
    </form>
}

export default reduxForm({form: 'newMessage'})(NewMessageForm)