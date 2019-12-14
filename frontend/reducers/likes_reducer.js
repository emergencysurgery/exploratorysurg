import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_POST, RECEIVE_POSTS } from "../actions/post_actions";

const LikesReducer = ( state = {}, action ) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like;
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.like.id];
            return nextState;
        case RECEIVE_POST:
            return Object.assign(nextState, action.likes)
        case RECEIVE_POSTS:
            return Object.assign({}, action.likes)
        default:
            return state;
    }
}

export default LikesReducer;