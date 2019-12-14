import { connect } from "react-redux";
import Sidebar from "./sidebar";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}



export default connect(mSTP)(Sidebar)