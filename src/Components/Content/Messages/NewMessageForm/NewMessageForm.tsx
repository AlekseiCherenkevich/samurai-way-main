import {Field, reduxForm} from "redux-form";
import React from "react";

const NewMessageForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea' placeholder='Enter new message...' name='newMessageText'></Field>
        </div>
        <div>
            <button>ADD MESSAGE</button>
        </div>
    </form>
}

export default reduxForm({form: 'newMessage'})(NewMessageForm)