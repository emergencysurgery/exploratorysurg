import { updateComment, deleteComment } from "../../actions/comment_actions";
import { connect } from "react-redux";
import Comment from "./comment";
import { editComment, closeEdit } from "../../actions/edit_comment_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import { subscribeLikestoItem, isLiked } from "../../reducers/selectors";

const mSTP = (state, ownProps) => {
    if (!ownProps.comment) return null;
    let post = state.entities.posts[ownProps.comment.postId];
    let comment = ownProps.comment;
    return {
        comment: comment,
        currentUser: state.entities.users[state.session.id],
        owner: state.entities.users[ownProps.comment.authorId],
        post: post,
        editId: state.ui.edit,
        likes: subscribeLikestoItem(state, comment),
        isLiked: isLiked(state, comment)
    }
}

const mDTP = dispatch => {
    return {
        updateComment: comment => dispatch(updateComment(comment)),
        deleteComment: comment => dispatch(deleteComment(comment)),
        editComment: (commentId) => dispatch(editComment(commentId)),
        closeEdit: () => dispatch(closeEdit()),
        likeComment: like => dispatch(createLike(like)),
        unlikeComment: like => dispatch(deleteLike(like))
    }
}

export default connect(mSTP, mDTP)(Comment)