import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/reducer/authReducer'
import { auth } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        auth().then(data => {
            if (data.resultCode === 0) {//если успешно залогинились
                let { id, email, login } = data.data;
                this.props.setAuthUserData(id, email, login);//здесь первая data - стандарт axios, а вторая отностся к серверу (так её назвал разработчик)
            }
        });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);