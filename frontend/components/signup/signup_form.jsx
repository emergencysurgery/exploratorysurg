import React from "react";



class SignupForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            dateOfBirth: "",
            sex: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadio = this.handleRadio.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors()
        this.hideErrors();
        this.props.signup(this.state).then( () => this.props.history.push("/feed"))
    }

    componentWillUnmount() {
        this.props.fetchUsers();
        this.setState({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            sex: "",
        });
        
    }


    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleRadio(e) {
        this.setState( { 'sex': e.target.value } )
    }

    hideErrors() {
        const errorBoxes = Array.from(document.getElementsByClassName('i'));
        errorBoxes.map( box => box.classList.add('hidden'))

    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.errors.length !== this.props.errors
    }


    render(){
        const errors = this.props.errors

        errors.forEach( error => {
            const words = error.split(" ");
            const htmlEle = document.getElementsByClassName(words[0])[0];
            if (htmlEle) {
                let kids = Array.from(htmlEle.children);
                kids[0].innerHTML = error;
                htmlEle.classList.remove('hidden');
            }
        }
            )
        return (
            <div className="signup-max">
                <div className="left-side">
                    <h2 className="outline">Your Friends are all here</h2>
                    <h3 className="tagline outline">Connect with friends and family on Patio</h3>
                    <h3 className="outline hook"><strong>See Photos and Updates </strong>in your NewsFeed</h3>
                    <h3 className="outline hook"><strong>Share what's new </strong>in your life</h3>
                </div>
                <div className="signup-info">
                   

                    <div className="names signup-errors i First hidden" id="signup-names">
                        <p>First Name can't be blank</p>
                    </div>
                    <div className="lname signup-errors-left i Last hidden" id="lname">
                        <p>Last Name can't be blank</p>
                    </div>
                    <div className="Email signup-errors i hidden" id="email">
                        <p>Email can't be blank</p>
                    </div>
                    <div className="p-word Password signup-errors i hidden" id="p-word">
                        <p>Password must be at least 6 characters</p>
                    </div>
                    <div className="Sex signup-errors i hidden" id="sex">
                        <p>Please Select a Sex</p>
                    </div>
                    <h2 className="outline">Sign Up</h2>
                    <p className="outline">It's quick and easy</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="signup-names">
                           
                                
                                <input className="fn-input-box" onChange={this.handleChange('firstName')} type="text" placeholder="   First Name" value={this.state.firstName}/>
                                <input className="ln-input-box" onChange={this.handleChange('lastName')} type="text" placeholder="   Last Name" value={this.state.lastName}/>

                        </div>
                        <input className="email-input-box" onChange={this.handleChange('email')} type="email" placeholder="   Email" value={this.state.email}/>
                        <input className="pw-input-box" onChange={this.handleChange('password')} type="password" placeholder="   New Password" value={this.state.password}/>
                        <label className="bday-text"><h4 className="outline">Birthday</h4>
                            <input onChange={this.handleChange('dateOfBirth')} value={this.state.dateOfBirth} min="1905-01-01" max="2006-11-04" type="date" id="bday" className="bday-box" required/>
                        </label>
                        <div className="gender-buttons">
                            <h4 className="outline">Sex:</h4>
                            <input onClick={this.handleRadio} name="gender" type="radio" value="male" /><p className="outline">Male</p><br/>
                            <input onClick={this.handleRadio} name="gender" type="radio" value="female" /><p className="outline">Female</p><br/>
                            <input onClick={this.handleRadio} name="gender" type="radio" value="other" /><p className="outline">Other</p>
                        </div>
                        <input className="sign-up-button" type="submit" value="Sign Up!"/>
                    </form>
                </div>
            </div>
        )
    }
}



export default SignupForm;