import React     from "react";
import { Link } from "react-router-dom";


const NavFriendRequest = props => {


    let pic = props.user.profilePicture?  <img src={props.user.profilePicture} className="comm-pic"/> :
        <img src="https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png" className="comm-pic" />;
    let name = <p className="nav-friend-names"> <span className="req-fname">{props.user.firstName}</span> <span className="req-lname">{props.user.lastName}</span></p>;
    let accept = <button className="nav-btn req-btn" onClick={() => props.accept(props.friendRequest)}>Confirm</button>;
    let remove = <button className="nav-remove-btn req-btn" onClick={() => props.deny(props.friendRequest)}>Delete</button>;
    return (
        <li className="nav-frnd-req-item">
            <div className="nav-req">
                <div className="nav-req-user">
                    <Link to={`/users/${props.user.id}`} replace>
                        {pic}
                    </Link>
                    <Link to={`/users/${props.user.id}`} replace>
                        {name}
                    </Link>
                </div> 
                <div className="nav-req-btns">
                    {accept}
                    {remove}
                </div>
            </div>
        </li>
    )
}

NavFriendRequest.defaultProps = {
    user: {}
}

export default NavFriendRequest;