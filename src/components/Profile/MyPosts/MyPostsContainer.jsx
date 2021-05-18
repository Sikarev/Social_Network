import MyPosts from './MyPosts';
import { addPost, updateNewPostText } from '../../../redux/reducer/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps,
    {
        addPost,
        updateNewPostText
    })(MyPosts);

export default MyPostsContainer;