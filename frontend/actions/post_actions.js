export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
import * as PostAPIUtil from "../util/post_api_util";

const receivePosts = ({posts, comments, likes}) => {
    return {
        type: RECEIVE_POSTS,
        posts,
        comments,
        likes
    }
}

const receivePost = ({post, comments, likes}) => {
    return {
        type: RECEIVE_POST,
        post,
        comments,
        likes
    }
}

const removePost = postId => {
    return {
        type: REMOVE_POST,
        postId
    }
}

const receivePostErrors = errors => {
    return { 
        type: RECEIVE_POST_ERRORS,
        errors
    }
}

export const fetchPosts = (profileId) => dispatch => {
    return PostAPIUtil.fetchPosts(profileId)
        .then( payload => dispatch(receivePosts(payload)),
            errors => dispatch(receivePostErrors(errors)))
}

export const fetchPost = postId => dispatch => {
    return PostAPIUtil.fetchPost(postId)
        .then( payload => dispatch(receivePost(payload)),
            errors => dispatch(receivePostErrors(errors)))
}

export const createPost = postForm => dispatch => {
    return PostAPIUtil.createPost(postForm)
        .then( post => dispatch(receivePost(post)),
            errors => dispatch(receivePostErrors(errors)) )
}

export const updatePost = oldPost => dispatch => {
    return PostAPIUtil.updatePost(oldPost)
        .then( post => dispatch(receivePost(post)),
            errors => dispatch(receivePostErrors(errors)))
}

export const deletePost = postId => dispatch => {
    return PostAPIUtil.deletePost(postId)
        .then( () => dispatch(removePost(postId)),
            errors => dispatch(receivePostErrors(errors)))
}
