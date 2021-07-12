import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../utilities/validators/validator';
import { createField, Input } from '../commons/FromControls/FormControls';
import { login } from '../../redux/reducer/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginForm = ({ handleSubmit, error, captchaURL }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, "email", "Login", [requiredField], { type: "email" })}
            {createField(Input, "password", "Password", [requiredField], { type: "password" })}
            <label>{createField("input", "rememberMe", "", [], { type: "checkbox" })}Remember me</label>

            {captchaURL && <img src={captchaURL} />}
            {captchaURL && createField(Input, "captcha", "Symbols from image", [requiredField], {})}

            <div className={styles.formError}>{error}</div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Authorization</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL
})

export default connect(mapStateToProps, { login })(Login);