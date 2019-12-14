import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { updateUserInfo } from "../../actions/session_actions";
import UpdateUserForm from "./update_user_form";
import { withRouter } from "react-router";


const mSTP = ({ entities, session }) => {
    return {
        user: entities.users[session.id]
    }
}

const mDTP = dispatch => {
    return {
        updateUserInfo: user => dispatch(updateUserInfo(user)),
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mSTP, mDTP)(UpdateUserForm))