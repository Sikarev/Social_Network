import MyPosts from './MyPosts';
import { addPost } from '../../../redux/reducer/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    }
}

const MyPostsContainer = connect(mapStateToProps,
    {
        addPost
    })(MyPosts);

export default MyPostsContainer;