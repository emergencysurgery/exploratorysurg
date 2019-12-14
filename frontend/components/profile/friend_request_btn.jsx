import React from "react";

const FriendRequestButton = props => {
    
    let deleteFriendBtn = <button onClick={() => props.removeFriend(props.friendship)} className="friend-btn">Remove Friend</button>;
    let requestedBtn = <button onClick={() => props.denyFriendRequest(props.friendRequest)} className="friend-btn">Cancel Friend Request</button>;
    let addFriendBtn = <button onClick={() => props.createFriendRequest({ friend_id: props.user.id })} className="friend-btn">Add Friend</button>;
    let acceptRequestBtn = <button onClick={() => props.acceptFriendRequest(props.friendRequest)} className="friend-btn">Accept Request</button> ;
    let pendingBtn = props.pendingRequest ? requestedBtn : props.friendRequested ? acceptRequestBtn : addFriendBtn;
    let visibileBtn = props.isFriend ? deleteFriendBtn : pendingBtn;
    return (
        <div className="friend-btn-cont">
            {visibileBtn}
        </div>
    )
}

export default FriendRequestButton;