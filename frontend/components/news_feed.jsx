import React from "react";
import PostFormContainer from "./posts/post_form_container";
import PostFeedContainer from "./feed/post_feed_container";
import SidebarContainer from "./sidebar/sidebar_container";

const NewsFeed = (props) => {
    let margin = props.location.pathname === "/feed" ? "news-margin" : "";
    return (
        <div className="news-feed-main">
            <div className="left-side-info">
                <SidebarContainer />
            </div>
            <div className={`scroll-feed ${margin}`} >
                <div className="post-form-primary">
                    <PostFormContainer params={props.match.params}/>
                </div>
                <div className="feed-primary">
                    <PostFeedContainer params={props.match.params}/>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed;