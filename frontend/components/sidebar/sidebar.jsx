import React from "react";
import { Link } from "react-router-dom"

const Sidebar = (props) => {
    const photo = props.currentUser.profilePicture ? <img src={props.currentUser.profilePicture} className="profile-photo" />
        : <img src="https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png" className="profile-photo
        " /> 

    return (
        <div className="feed-side-main">
            <Link to={`/users/${props.currentUser.id}`} className="sidebar-prof" replace>
                {photo}  <span> {props.currentUser.firstName}  {props.currentUser.lastName}</span>
            </Link>
            <Link to="/feed" className="active-news-feed" replace>
                <span><i className="fas fa-newspaper"></i> News Feed</span>
            </Link>
            <div className="info-links">
                <a href="https://www.linkedin.com/in/erik-elliott/" target="_blank">
                    <span><i className="fab fa-linkedin-in"></i>    LinkedIn</span>
                </a>
                <a href="https://github.com/ErikElliott-ynp" target="_blank">
                    <span><i className="fab fa-github"></i>    Github</span>
                </a>
                <a href="https://github.com/ErikElliott-ynp/Patio-FSP" target="_blank">
                    <span><i className="fas fa-code-branch"></i>    Patio Repo</span>
                </a>

            </div>
            <p className="sidebar-footer">© 2019 Erik Elliott. <br/>
             Inspired by Facebook.</p>
        </div>
    )
}

export default Sidebar;