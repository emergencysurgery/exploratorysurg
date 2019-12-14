import { logout, login, clearSessionErrors, fetchUsers } from "../../actions/session_actions"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import NavBar from "./nav_bar";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        loggedIn: !!state.session.id,
        errors: state.errors.session,
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearSessionErrors()),
    }
}

export default withRouter(connect(mSTP, mDTP)(NavBar));