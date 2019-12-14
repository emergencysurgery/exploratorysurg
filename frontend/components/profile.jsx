import React from "react";
import PostFeedContainer from "./feed/post_feed_container";
import PostFormContainer from "./posts/post_form_container";
import ProfileInfoContainer from "./profile/profile_info_container";
import ProfileHeaderContainer from "./profile/profile_header_container";

const Profile = (props) => {
    let notFriends = props.isFriend || props.self ? "" : "not-friends";
    return (
        <div className="profile-main">
            <ProfileHeaderContainer params={props.match.params}/>
            <div className="prof-under">
                <ProfileInfoContainer params={props.match.params} />
                <div className={`scroll-feed`} id={`${notFriends}`}>
                    <PostFormContainer params={props.match.params}/>
                    <PostFeedContainer params={props.match.params}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;