import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { updatePost } from "../../actions/post_actions";
import { withRouter } from "react-router";
import UpdatePostForm from "./update_post_form";

const mSTP = ({ entities, session }, ownProps) => {
    return {
        post: entities.posts[ownProps.id],
        currentUser: entities.users[session.id]
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        updatePost: post => dispatch(updatePost(post))
    }
}

export default withRouter(connect(mSTP, mDTP)(UpdatePostForm))