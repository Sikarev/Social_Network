import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getProfile } from '../../redux/reducer/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 17231;
        this.props.getProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let withUrlProfileContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { getProfile })(withUrlProfileContainerComponent);