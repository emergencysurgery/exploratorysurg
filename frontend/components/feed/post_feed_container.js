import { connect } from 'react-redux';
import { fetchPosts } from "../../actions/post_actions";
import { fetchUsers, fetchUser } from "../../actions/session_actions";
import PostFeed from "./post_feed";
import { withRouter } from "react-router"
 
const mSTP = (state, ownProps) => {
    let id = ownProps.params.userId;
    let profileId = state.session.id;
    if (id) {
        profileId = id;
    }

    return {
        posts: Object.values(state.entities.posts),
        errors: state.errors.posts,
        currentUserId: state.session.id,
        profileId: profileId
    }
}

const mDTP = dispatch => {
    return {
        fetchPosts: (profileId) => dispatch(fetchPosts(profileId)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default withRouter(connect(mSTP, mDTP)(PostFeed));