import { EDIT_COMMENT, CLOSE_EDIT } from "../actions/edit_comment_actions";

const editReducer = (state = null, action) => {
    switch (action.type) {
        case EDIT_COMMENT:
            return action.commentId;
        case CLOSE_EDIT:
            return null;
        default:
            return state;
    }
}

export default editReducer;