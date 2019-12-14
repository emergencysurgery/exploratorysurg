export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

import * as UserAPTUtil from "../util/user_api_util";
import * as SessionAPIUtil from "../util/session_api_util";

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

const receiveUsers = payload => {
    return {
        type: RECEIVE_USERS,
        payload
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    }
}

export const clearSessionErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS
    }
}

export const login = currentUser => dispatch => {
    return SessionAPIUtil.login(currentUser)
        .then( user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors)) )
}

export const signup = currentUser => dispatch => {
    return SessionAPIUtil.signup(currentUser)
        .then((user) => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors)) )
}

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()), errors => dispatch(receiveSessionErrors(errors)) )
}

export const updateUser = (user) => dispatch => {
    return SessionAPIUtil.update(user)
        .then( user => dispatch(receiveCurrentUser(user)))
}

export const updateUserInfo = user => dispatch => {
    return SessionAPIUtil.updateInfo(user)
        .then( user => dispatch(receiveCurrentUser(user)))
}

export const fetchUser = userId => dispatch => {
    return UserAPTUtil.fetchUser(userId)
        .then( user => dispatch(receiveUser(user)))
}

export const fetchUsers = () => dispatch => {
    return UserAPTUtil.fetchUsers()
        .then( payload => dispatch(receiveUsers(payload)))
}