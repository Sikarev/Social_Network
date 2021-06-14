import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers } from '../../redux/reducer/usersReducer';
import Users from './Users';
import Prealoader from '../commons/Preloader/Preloader';
import { compose } from 'redux';
import { currentPageSelector, followingInProgressSelector, isFetchingSelector, pageSizeSelector, totalUsersCountSelector, usersSelector } from '../../redux/selectors/usersSelector';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize);
    }

    render() {
        console.log("RENDER")
        return <>
            {this.props.isFetching ? <Prealoader /> :
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress} />}

        </>
    }
}

let mapStateToProps = (state) => {
    console.log("MSTP");
    return {
        users: usersSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isFetching: isFetchingSelector(state),
        followingInProgress: followingInProgressSelector(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            getUsers
        })
)(UsersContainer);