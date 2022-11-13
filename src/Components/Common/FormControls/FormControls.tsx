import React from 'react';
import cl from './FormControls.module.css'

const FormControl: React.FC<any>  = (props) => {
    const {meta, children} = props
    const hasError = meta.error && meta.touched
    return (
        <div>
            <div className={hasError ? cl.errorWrapper : ''}>
                {children}
            </div>
            {hasError && <span className={cl.errorMessage}>{meta.error}</span>}
        </div>
    );
};


export const Textarea:React.FC<any> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input:React.FC<any> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
