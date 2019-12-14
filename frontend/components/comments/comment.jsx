import React from "react";
import { Link } from "react-router-dom";
import Like from "../like/like";

class Comment extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.comment
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    handleDropDown() {
        let ele = document.getElementById(`comm-acts-${this.props.comment.id}`);
        let classArray = Array.from(ele.classList);
        let ellipse = document.getElementById('...');
        if (classArray.includes('hidden')) {
            ele.classList.remove('hidden');
            ellipse.style.opacity = "1.0";
        } else {
            ele.classList.add('hidden');
            ellipse.style.opacity = "0";
        }
    }

    handleChange () {
        return (e) => this.setState({
            body: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const comment = this.state
        this.props.updateComment(comment).then( () => this.props.closeEdit());
    }

    handleEnter(e) {
        if (e.charCode == 13) {
            e.preventDefault();
            this.handleSubmit(e);
        }
    }

    handleLike() {
        let newLike = {
            likeableType: "Comment",
            likeableId: this.props.comment.id
        };
        let liked = false;
        this.props.likes.forEach(like => {
            if (like.userId === this.props.currentUser.id) {
                liked = true;
                newLike = like;
            }
        })
        if (liked) {
            this.props.unlikeComment(newLike)
        } else {
            this.props.likeComment(newLike)
        }
    }

    render () {
        if (!this.props.comment) return null;
        let owner = this.props.owner;
        let name;
        let pic;
        let id;
        let deleteComm;
        let text;
        if (owner) {
            name = <span> <Link className="user-name-comm" to={`/users/${owner.id}`} replace><span>{`${owner.firstName} ${owner.lastName}`}</span></Link></span>;
            pic = owner.profilePicture ? <img src={owner.profilePicture} className="comm-pic" />
                : <img src="https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png" className="comm-pic" />
            id = owner.id;
            if (id === this.props.currentUser.id) {
              deleteComm = <i className="fas fa-ellipsis-h" id="..." onClick={this.handleDropDown} >
                    <div className="comment-actions hidden" id={`comm-acts-${this.props.comment.id}`}>
                        <p onClick={() => this.props.deleteComment(this.props.comment)} >Delete Comment</p>
                        <p id="edit-comm-btn" onClick={() => this.props.editComment(this.props.comment.id)}>Edit Comment</p>
                    </div>
                </i>
            };
            
        }
        let div = <div className="comment-body">
            <span className="comm-span"> {name}<span className="comm-body-text">{this.props.comment.body}</span></span>
                {deleteComm}
            </div>;
        let form = <div className="comment-body">
                <form className="edit-form-comm"  onKeyPress={this.handleEnter} >
                    <textarea 
                        className="edit-textarea" 
                        onChange={this.handleChange()}
                         id="edit-text"
                          value={this.state.body}>
                    </textarea>
                </form>
                <p id="cancel" onClick={() => this.props.closeEdit()}>cancel</p>
            </div>

        text = this.props.editId === this.props.comment.id ? form : div;
        let isLiked = this.props.isLiked ? "liked-comm" : "";
        let likes = this.props.likes.length > 0 && (this.props.editId !== this.props.comment.id) ?
            <Like
            likes={this.props.likes}
            isLiked={this.props.isLiked}
            currentUser={this.props.currentUser} /> : null;
        let likeBtn = this.props.editId === this.props.comment.id ? null :
            <p onClick={this.handleLike} className={`like-btn ${isLiked}`}>Like</p>;
        return (
            <div className="comment-wide">
                <div className="comm-user-pic">
                    <Link to={`/users/${id}`}replace>{pic}</Link>
                </div>
                <div className="comm-text-likes">
                    {text}
                    <div className="comm-likes-cont">
                        {likes}
                    </div>
                </div>
                {likeBtn}
            </div>
        )

    }
}

export default Comment;