import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../utilities/validators/validator';
import { Input } from '../commons/FromControls/FormControls';
import { login } from '../../redux/reducer/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"} type={"email"} component={Input} validate={[requiredField]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[requiredField]} />
            </div>
            <div>
                <label><Field type={"checkbox"} name={"rememberMe"} value={"Remember me"} component={"input"} />Remember me</label>
            </div>
            <div className={styles.formError}>{props.error}</div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Authorization</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);