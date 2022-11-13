import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Redirect } from 'react-router-dom';
import {Input} from "../Common/FormControls/FormControls";


export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component={Input}
                name={'login'}
                placeholder={'Enter login'}/>
        </div>
        <div>
            <Field
                component={Input}
                type={'password'}
                name={'password'}
                placeholder={'Enter password'}/>
        </div>
        <div>
            <Field
                component={Input}
                type={'checkbox'} n
                ame={'rememberMe'}/>Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData)
    }

    return props.isAuth
        ? <Redirect to={'/profile'}/>
        : <>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
};

type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = ({
    login: (formData: FormDataType) => void
})
type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {login})(Login);