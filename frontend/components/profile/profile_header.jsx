import React from "react"
import FriendRequestButtonContainer from "./friend_request_btn_container";


class ProfileHeader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photoFile: null,
            photoUrl: null
        }
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount () {
        this.props.fetchUser(this.props.profileId)
    }

    handleFile(field) {
        return (e) => {
        let file = e.currentTarget.files[0];
    
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: null });
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
        const formData = new FormData();
        formData.append(`user[${field}]`, file);
        this.props.updateUser(formData);
        }
    }

    render() {
        let coverPhoto;
        let profilePic;
        let updateBtn;
        let firstName;
        let lastName;
        let updateCover;
        let friendBtn;
        let profilePicUpdate;
        if (this.props.user) {
            coverPhoto = this.props.user.coverPhoto ? <img src={this.props.user.coverPhoto} className="cover-photo-img" /> : <div className="cover-photo-img" style={{ "background-color": "#1c1e21"}}></div> ;
             profilePic = this.props.user.profilePicture ? <img src={this.props.user.profilePicture} className="prof-photo-profile" />
                : <img src="https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png" className="prof-photo-profile" />;
            updateBtn = this.props.currentUser === this.props.user ? <button onClick={() => this.props.openModal("updateProfile")} className="edit-prof-btn">Update Profile</button>
                : null;
            firstName = this.props.user.firstName;
            lastName = this.props.user.lastName;
            updateCover = this.props.currentUser === this.props.user ? (<div className="outer-cover">
                        <label className="prof-up-label">
                        <i className="fas fa-camera cover" id="cover-camera"></i>
                            <div className="cover-photo-update" id="update-cover-pic">
                                <span>
                                    Update Cover Photo
                                    <input onChange={this.handleFile("coverPhoto")} type="file" className="prof-upload-input" id="cover-up" />
                                </span>
                            </div>
                        </label>
                    </div>) : null;
            profilePicUpdate = this.props.currentUser === this.props.user ? (<div className="prof-photo-update" id="update-prof-pic">
                                <form>
                                    <label className="prof-label">
                                        <i className="fas fa-camera"></i>
                                        <span>
                                            Update
                                                <input onChange={this.handleFile("profilePicture")} type="file" className="prof-upload-input" id="prof-up" />
                                        </span>
                                    </label>
                                </form>
                            </div>) : null
        friendBtn = this.props.user.id === this.props.currentUser.id ? null : <FriendRequestButtonContainer /> ;
        }
        return (
            <div className="prof-header-main">
                {coverPhoto}
                {profilePic}
                <h3 className="prof-name outline">{firstName} {lastName}</h3>
                {updateBtn}
                {profilePicUpdate}
                {updateCover}
                {friendBtn}
            </div>
        )
    }
}

export default ProfileHeader;