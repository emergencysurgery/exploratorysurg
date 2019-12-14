import React from "react";
import { withRouter } from "react-router";

class UpdateUserForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            work: this.props.user.work,
            education: this.props.user.education,
            location: this.props.user.location,
            aboutMe: this.props.user.aboutMe,
            id: this.props.user.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelEnter = this.cancelEnter.bind(this);
    }

    handleChange(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault;

        const user = Object.assign({}, this.state, )
        this.props.updateUserInfo(user).then(this.props.closeModal)
    }

    cancelEnter (e) {
        if (e.charCode == 13) {
            e.preventDefault();
        }
    }

    render () {
        
        const { work, education, location, aboutMe, id } = this.props.user;
        const info = {work, education, location, aboutMe, id}; 
        const checkState = Object.assign({}, this.state);
        const disabled = JSON.stringify(checkState) === JSON.stringify(info) ? "disabled" : ""; 


        return (
            <div className="update-wide">
                <form onSubmit={this.handleSubmit} onKeyPress={this.cancelEnter} className="update-form">
                    <h3>Update Profile</h3>
                    <label><h4 className="about-me-modal">About Me:</h4>
                        <textarea onKeyPress={this.cancelEnter} onChange={this.handleChange("aboutMe")} id="update-TA" className="update-TA" value={this.state.aboutMe}></textarea>
                    </label>
                    <label ><h4>Location:</h4>
                        <input onKeyPress={this.cancelEnter} onChange={this.handleChange("location")} type="text" className="update-info loc" value={this.state.location}/>
                    </label>
                    <label ><h4>Work:</h4>
                        <input onKeyPress={this.cancelEnter} onChange={this.handleChange("work")} type="text" className="update-info works" value={this.state.work}/>
                    </label>
                    <label ><h4>Education:</h4>
                        <input onKeyPress={this.cancelEnter} onChange={this.handleChange("education")} type="text" className="update-info edu" value={this.state.education}/>
                    </label>
                    <input type="submit" className={`update-sub ${disabled}`} id="update-submit" value="Save"/>
                </form>
            </div>
        )
    }
}

export default withRouter(UpdateUserForm);