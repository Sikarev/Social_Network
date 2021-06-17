import React from 'react';
import { Field } from 'redux-form';
import s from './FormControls.module.css'

const FormControl = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={s.horizontalFlex + " " + (hasError ? s.error : "")}>
            {props.children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}

export const createField = (component, name, placeholder, validate, props = {}) => {
    return (
        <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props} />
    )
}