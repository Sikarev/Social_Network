import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../utilities/validators/validator';
import { createField, Input } from '../commons/FromControls/FormControls';
import { login } from '../../redux/reducer/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, "email", "Login", [requiredField], { type: "email" })}
            {createField(Input, "password", "Password", [requiredField], { type: "password" })}
            <label>{createField("input", "rememberMe", "", [], { type: "checkbox" })}Remember me</label>
            <div className={styles.formError}>{error}</div>
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