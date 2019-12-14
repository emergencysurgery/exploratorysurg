import React from "react";
import { Link } from "react-router-dom";
import CommentFormContainer from "../comments/comment_form_container";
import CommentListContainer from "../comments/comment_list_container";
import Like from "../like/like";
    
class PostFeedItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = this.props.post

        this.setFocus = this.setFocus.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    handleOpenModal() {
        return setTimeout(() => this.props.openModal("updatePost", this.props.post.id), 200 )
    }

    setFocus() {
        let ele = document.getElementById(`comm-form-in-${this.props.post.id}`);
        ele.focus()
    }

    handleLike() {
        let newLike = {
            likeableType: "Post",
            likeableId: this.props.post.id
        };
        let liked = false;
        this.props.likes.forEach( like => {
            if (like.userId === this.props.currentUser.id) {
                liked = true;
                newLike = like;
            } 
        })
        if (liked) {
            this.props.unlikePost(newLike)
        } else {
            this.props.likePost(newLike)
        }
    }

    render() {

        const photo = this.props.post.photoUrl ? <img className="post-photo" src={this.props.post.photoUrl} alt="" /> : null
        let profilePic;
        let profile;
        let firstName;
        let lastName;
        let id;
        let location;
        let likes = this.props.likes.length > 0 ? <Like 
            likes={this.props.likes}
            isLiked={this.props.isLiked}
            currentUser={this.props.currentUser}/> : null;
        if (this.props.user && this.props.profile) {
            profilePic = this.props.user.profilePicture ? <img src={this.props.user.profilePicture} className="post-item-pic" />
                : <img src="https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png" className="post-item-pic" />
            firstName = this.props.user.firstName;
            lastName = this.props.user.lastName;
            id = this.props.user.id;
            profile = this.props.profile;
            if (profile.id !== this.props.user.id) {
                location = <div className="prof-loc-arrow">
                    <i className="fas fa-caret-right"></i>
                    <Link className="comment-name-link" to={`/users/${profile.id}`} replace>{profile.firstName} {profile.lastName}</Link>
                </div>
            }
        };
        let commentList = this.props.post && this.props.post.commentIds.length > 0 ? <CommentListContainer post={this.props.post} /> : null;
        let commentFormCont = this.props.post && this.props.user ? <CommentFormContainer postId={this.props.post.id} /> : null;
        let isLiked =  this.props.isLiked ? "liked" : ""; 
        return (
            <div className="post-item-wide">
                <li className="list-item-post"> 
                    <div className="post-item-img">
                        <Link to={`/users/${id}`} replace>
                            <div className="full-name">
                                {profilePic}
                                <span className="item-username">{firstName}  {lastName}</span>
                            </div> 
                        </Link>
                        {location}
                    </div>

                    { this.props.user === this.props.currentUser ? (
                        <div className="post-delete-button clearfix">
                            <button onClick={() => this.props.deletePost(this.props.post.id)}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                            <i className="fas fa-edit" onClick={() => this.handleOpenModal()}></i>
                        </div>
                        
                        ) : ( <script></script>)
                    }
                    <p className="post-body">{this.props.post.body}</p>
                   {photo}
                   <div className="post-like-cont">
                        {likes}
                   </div>
                    <p className="line"></p>
                    <div className="post-item-footer">
                        <div onClick={() => this.handleLike()} className="post-item-like">
                            <i className={`fas fa-thumbs-up`} id={isLiked}><strong>Like</strong></i>
                        </div>
                        <div className="post-item-comment">
                            <i onClick={this.setFocus} className="fas fa-comment-alt hover-comm"> <strong>Comment</strong></i>
                        </div>
                    </div>
                </li>
                    {commentList}
                    {commentFormCont}
            </div>
        )
    }
}


export default PostFeedItem;