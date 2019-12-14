import { connect } from "react-redux";
import PostFeedItem from "./post_feed_item";
import { openModal, closeModal } from "../../actions/modal_actions";
import { deletePost } from "../../actions/post_actions";
import { subscribeCommentsToItem, subscribeLikestoItem, isLiked } from "../../reducers/selectors";
import { createLike, deleteLike } from "../../actions/like_actions";


const mSTP = (state, ownProps) => {
    let post = state.entities.posts[ownProps.post.id];
    
    return {
        post: post,
        user: state.entities.users[ownProps.post.authorId],
        currentUser: state.entities.users[state.session.id],
        profile: state.entities.users[post.profileId],
        comments: subscribeCommentsToItem(state, post),
        likes: subscribeLikestoItem(state, post),
        isLiked: isLiked(state, post)
    }
}

const mDTP = dispatch => {
    return {
        openModal: (modal, id) => dispatch(openModal(modal, id)),
        closeModal: () => dispatch(closeModal()),
        deletePost: postId => dispatch(deletePost(postId)),
        likePost: like => dispatch(createLike(like)),
        unlikePost: like => dispatch(deleteLike(like))
    }
}

export default connect(mSTP, mDTP)(PostFeedItem);