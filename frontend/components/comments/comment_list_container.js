import { connect } from "react-redux"; 
import { selectCommentsForPost } from "../../reducers/selectors";
import CommentList from "./comment_list"

const mSTP = (state, ownProps) => {
    return {
        comments: selectCommentsForPost(state, ownProps.post)
    }
} 

export default connect(mSTP)(CommentList)