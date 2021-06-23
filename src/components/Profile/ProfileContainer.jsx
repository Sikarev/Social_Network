import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getProfile, getStatus, updateStatus, savePhoto } from '../../redux/reducer/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authoizedUserId;
            if (!userId) {
                userId = this.props.history.push("/login");
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) this.refreshProfile();
    }

    render() {
        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authoizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    withRouter,
    connect(mapStateToProps,
        {
            getProfile,
            getStatus,
            updateStatus,
            savePhoto
        })
)(ProfileContainer)

// export default connect(mapStateToProps, { getProfile })(withUrlAuthRedirectComponent);