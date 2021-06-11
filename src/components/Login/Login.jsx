import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../utilities/validators/validator';
import { Input } from '../commons/FromControls/FormControls';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[requiredField]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[requiredField]} />
            </div>
            <div>
                <label><Field type={"checkbox"} name={"rememberMe"} value={"Remember me"} component={"input"} />Remember me</label>
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div>
            <h1>Authorization</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

export default Login;