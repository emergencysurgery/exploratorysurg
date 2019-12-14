import React from "react";

class CommentForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: "",
            postId: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleChange () {
        return (e) => this.setState({
            body: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const comment = Object.assign({}, this.state)
        comment.postId = this.props.post.id
        
        this.props.createComment(comment).then( () => this.setState({ body: "" }))
    }


    render() {
        let id = this.props.post.id;
        let profilePic;
        if (this.props.user) {
            profilePic = this.props.user.profilePicture ? <img src={this.props.user.profilePicture} className="comm-form-pic" />
                : <img src="https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png" className="comm-form-pic" />
        }
        return (
            <div className="comment-form-wide">
                {profilePic}
                <form onSubmit={this.handleSubmit} className="comm-form">
                    <input type="text" onChange={this.handleChange()} placeholder="Write a comment..." className="comm-form-text" id={`comm-form-in-${id}`} value={this.state.body}/>
                </form>
            </div>
        )
    }
}

export default CommentForm;