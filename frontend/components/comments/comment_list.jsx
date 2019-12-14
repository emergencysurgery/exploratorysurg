import React from "react";
import CommentContainer from "./comment_container"

class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: this.props.comments
        }
    }



    render() {
        let commentsCont;
        if (this.props.comments) {
            commentsCont = this.props.comments.map( (comment,i) => {
                return <CommentContainer 
                    comment={comment} 
                    key={i}
                />
            })

        }

        return (
            <div className="comment-list-wide">
                {commentsCont}
            </div>
        )
    }
}

export default CommentList;