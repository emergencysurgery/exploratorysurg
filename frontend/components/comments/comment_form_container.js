import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mSTP = (state, ownProps) => {
    return {
        post: state.entities.posts[ownProps.postId],
        user: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment))
    }
}

export default connect(mSTP, mDTP)(CommentForm)
