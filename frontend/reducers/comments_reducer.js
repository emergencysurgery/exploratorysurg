import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_POST, RECEIVE_POSTS } from "../actions/post_actions"
import  { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions"

const CommentsReducer = ( state = {}, action ) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    let comment;
    switch (action.type) {
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment;
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.comment.id];
            return nextState;
        case RECEIVE_POST:
            return Object.assign(nextState, action.comments)
        case RECEIVE_POSTS:
            return Object.assign(nextState, action.comments);
        case RECEIVE_LIKE:
            if (action.like.likeableType === 'Comment'){
                comment = nextState[action.like.likeableId]
                comment.likeIds.push(action.like.id)
            }
            return nextState;
        case REMOVE_LIKE:
            if (action.like.likeableType === 'Comment'){
                comment = nextState[action.like.likeableId]
                let likesArray = comment.likeIds;
                for (let i = 0; i < likesArray.length; i++) {
                    if (likesArray[i] === action.like.id) {
                        likesArray.splice(i, 1)
                    }
                }                
            }
            return nextState;
        default:
            return state;
    }
}

export default CommentsReducer;