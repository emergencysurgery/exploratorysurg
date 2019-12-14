import React from "react";
import PostFeedItemContainer from "./post_feed_item_container";


class PostFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: this.props.posts
        }
    }

    componentDidMount () {
        let id = this.props.profileId;
        if (this.props.match.url === "/feed") {
            id = "all";
        }
        this.props.fetchPosts(id)
    }

    shouldComponentUpdate(nextProps, _nextState) {
        if (this.props.posts.length !== nextProps.posts.length 
            || this.props.location !== nextProps.location) {
            return true;
        }  else {
            return false;
        }
    }


    render () {
        let items;
        if (this.props.posts) {
            items = this.props.posts.reverse().map( post => {
                if (this.props.match.url === "/feed" || 
                post.profileId == this.props.match.params.userId
                || post.authorId == this.props.match.params.userId) {
                    return <PostFeedItemContainer 
                                post={post}
                                key={post.id}
                            />
                }
            })
        }
        let postsList = items ? items : null;

        return (
            <div className="posts-feed">
                <ul className="posts-list">
                    {postsList}
                </ul>
            </div>
        ) 
    }
}

export default PostFeed;