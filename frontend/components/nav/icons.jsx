import React from "react";
import NavFriendRequestContainer from "./nav_friend_request_container";

class Icons extends React.Component {
    constructor(props) {
        super(props)
        this.handleIcons = this.handleIcons.bind(this);
        this.handleFriendNotificiations = this.handleFriendNotificiations.bind(this);
    }

    handleIcons(elementId, iconId) {
        let ele = document.getElementById(elementId)
        let classArray = Array.from(ele.classList);
        let icon = document.getElementById(iconId);
        if (classArray.includes("hidden")) {
            ele.classList.remove('hidden');
            icon.style.color = 'white';
        } else {
            ele.classList.add('hidden');
            icon.style.color = "rgb(58, 56, 56)"
        }
    }

    handleFriendNotificiations() {
        let notifications = document.getElementById("notifs-friends")
        let icon = document.getElementById("icon-friend")
        if (!notifications) return true;
        if (this.props.friendRequests.length > 0) {
            notifications.classList.remove('hidden');
            // icon.style.color = "rgb(239, 239, 239)"
        } else if (this.props.friendRequests.length === 0) {
            notifications.classList.add('hidden');
            // icon.style.color = "rgb(58, 56, 56)"
        }
    }

    
    
    render () {
        let requests = this.props.friendRequests.map( (request, i) => {
            return <NavFriendRequestContainer request={request} key={i}/>
        });
        let newFriendRequests = this.props.friendRequests.length > 0 ? requests : <h4>No New Friend Requests</h4>;
        let friendNotifications = this.props.friendRequests.length;
        this.handleFriendNotificiations();
        return (
            <div className="icons-cont">
                <i onClick={() => this.handleIcons('friend-box', 'icon-friend')} className="fas fa-user-friends gray" id="icon-friend"></i>
                <i className="fab fa-facebook-messenger gray" onClick={() => this.handleIcons('msg-box', 'icon-msg')} id="icon-msg"></i>
                <i className="fas fa-bell gray" onClick={() => this.handleIcons('note-box', 'icon-note')} id="icon-note"></i>
                <div className="request-wrapper hidden down" id="friend-box">
                    <ul>
                        <section id="reqs">
                            Friend Requests   
                        </section>
                        {newFriendRequests}
                    </ul>
                    
                </div>
                <div className="msg-wrapper hidden down" id="msg-box" >
                    <ul>
                        <section id="msgs">
                            Messages
                        </section>
                    </ul>
                <h4>There's nothing here</h4>
                </div>
                <div className="note-wrapper hidden down" id="note-box" >
                    <ul>
                        <section id="notes">
                            Notifications
                        </section>
                    </ul>
                <h4>You're all caught up!</h4>
                </div>
                <div className="friend-notifs hidden" id="notifs-friends">
                    {friendNotifications}
                </div>
            </div>
        )
    }
}

Icons.defaultProps = {
    friendRequests: []
}

export default Icons;