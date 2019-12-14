import React from 'react';
import FriendIcon from "./friend_icon";

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            work: null,
            education: null,
            aboutMe: null
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.profileId)
            .then( () => this.setState({
                work: this.props.profile.work,
                education: this.props.profile.education,
                aboutMe: this.props.profile.aboutMe
                }) 
            )
    }
    

    render() {
        let aboutMeBtn;
        let home; 
        let work; 
        let education;
        let bio;
        let friend0; 
        let friend1; 
        let friend2; 
        let friend3; 

        if (this.props.profile && this.props.friends) {
            aboutMeBtn = this.props.profile === this.props.currentUser ? 
                <div className="bio-basic" id="bio-basic">
                    Add a short bio to tell people about yourself
                </div> : null;

            home = this.props.profile.location ? <div className="location"><i className="fas fa-home"></i> <p>Lives in {this.props.profile.location}</p></div> : null;
            work = this.props.profile.work ? <div className="work"><i className="fas fa-briefcase"></i> <p> Works at {this.props.profile.work}</p></div> : null;
            education = this.props.profile.education ? <div className="education"><i className="fas fa-graduation-cap"></i> <p>Went to school at {this.props.profile.education}</p></div> : null;   


            bio = this.props.profile.aboutMe ? 
                <div className="bio-div">
                    <p className="bio-p">{this.props.profile.aboutMe}</p> 
                </div> : aboutMeBtn;
        
            friend0 = <FriendIcon user={this.props.friends[0]} />;
            friend1 = <FriendIcon user={this.props.friends[1]} />;
            friend2 = <FriendIcon user={this.props.friends[2]} />;
            friend3 = <FriendIcon user={this.props.friends[3]} />;
        }
        
        return (
            <div className="prof-info-main">
                <div className="prof-info">
                    <div className="prof-info-header">
                        <i className="fas fa-globe-americas"></i>
                        <h3> Intro </h3>
                    </div>
                    <div className="about-me-bio" id="add-bio">
                        <h3>About Me:</h3>
                        {bio}
                    </div>
                    <div className="loc-work-ed">
                        {home}
                        {work}
                        {education}
                    </div>

                </div>
                <div className="friends">
                    <h3>Friends:</h3>
                    <div className="friends-list">
                        {friend0}
                        {friend1}
                        {friend2}
                        {friend3}
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default ProfileInfo;