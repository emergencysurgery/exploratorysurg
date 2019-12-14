import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import { fetchUsers } from "../../actions/session_actions";
import PostForm from "./post_form";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    let profileId = state.session.id;
    if (ownProps.params.userId) {
        profileId = ownProps.params.userId
    }
    return {
        user: state.entities.users[state.session.id],
        errors: state.errors.posts,
        profile: profileId
    }
}

const mDTP = dispatch => {
    return {
        createPost: post => dispatch(createPost(post)),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default withRouter(connect(mSTP, mDTP)(PostForm));