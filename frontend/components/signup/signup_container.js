import React from "react";
import { connect } from "react-redux";
import { signup, clearSessionErrors, fetchUsers } from "../../actions/session_actions";
import SignupFrom from "./signup_form";


const mSTP = state => {
    return {
        errors: state.errors.session
    }
}

const mDTP = dispatch => {
    return {
        signup: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearSessionErrors()),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mSTP, mDTP)(SignupFrom);