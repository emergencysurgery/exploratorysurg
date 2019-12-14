export const EDIT_COMMENT = "EDIT_COMMENT";
export const CLOSE_EDIT = "CLOSE_EDIT";

export const editComment = (commentId) => {
    return {
        type: EDIT_COMMENT,
        commentId
    }
}

export const closeEdit = () => {
    return {
        type: CLOSE_EDIT
    }
}

