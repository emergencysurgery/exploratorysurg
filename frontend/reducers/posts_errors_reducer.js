import { RECEIVE_POST_ERRORS, RECEIVE_POST, RECEIVE_POSTS } from "../actions/post_actions"


const PostsErrorsReducer = (state = [], action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_POST_ERRORS:
            return Object.assign([], action.errors);
        case RECEIVE_POST:
            return [];
        case RECEIVE_POSTS:
            return [];
        default:
            return [];
    }
}

export default PostsErrorsReducer;