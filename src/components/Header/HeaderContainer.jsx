import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUsersData, logout } from '../../redux/reducer/authReducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUsersData();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { getAuthUsersData, logout })(HeaderContainer);