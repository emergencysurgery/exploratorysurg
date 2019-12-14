import React from "react";
import { Link } from "react-router-dom"


class FriendIcon extends React.Component {
    constructor(props) {
        super(props)
    }
   render () {
       let photo;
       let name;
       if (this.props.user) {
           photo = this.props.user.profilePicture ? <img src={this.props.user.profilePicture} className="friend-square" />
               : <img src="https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png" className="friend-square" />
           name = <Link to={`/users/${this.props.user.id}`}>
                       <p className="friends-list-name">{this.props.user.firstName} {this.props.user.lastName}</p>
               </Link>
       }
       return (
           <div className="friend">
              {photo}
              {name}
           </div>
       )
   }
}

export default FriendIcon;