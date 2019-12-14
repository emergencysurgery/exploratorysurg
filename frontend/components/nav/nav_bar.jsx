import React from "react";
import { Link } from "react-router-dom";
import Icons from "./icons"

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            search: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.resetState = this.resetState.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        const errorBoxes = Array.from(document.getElementsByClassName('i'));
        errorBoxes.map(box => box.classList.add('hidden'))


        this.props.clearErrors();
        this.props.login(this.state).then(() => this.props.history.push(`/feed`)).then(() => this.setState({
            email: "",
            password: ""
        }))
    }

    hideErrors() {
        document.getElementsByClassName('errors')[0].classList.add('hidden');
    }

    handleChange(field) {
        return (e) => this.setState( { [field]: e.target.value })
    }


    demoLogin(email, password) {
        if (email.length > 0) {
            this.setState( {
                email: this.state.email + email.shift()
            }, () =>  window.setTimeout(() => this.demoLogin(email, password), 100)
            )
        } else if (password.length > 0) {
            this.setState({
                password: this.state.password + password.shift()
            }, () => window.setTimeout(() => this.demoLogin(email, password), 100)
            )
        } else {
            this.props.login(this.state).then(() => this.setState({
                email: "",
                password: ""
            }));
        }
    }

    resetState() {
        this.setState({
            email: "",
            password: "",
            search: ""
        });
    }

    handleDemo() {
        let email = "DemoUser@demo.io".split("");
        let password = "mountain".split("");
        this.setState( { email: "", password: "" }, () => (
            this.demoLogin(email, password)
        ) );

    }

    handleSearch (e) {
        this.setState({
            search: e.currentTarget.value 
        })
    }

    handleLogout() {
        this.props.logout()
            .then(document.getElementById('demo').classList.remove('hidden') )
    }

    componentDidMount () {
        if (this.props.loggedIn) {
            const el = document.getElementById('demo');
            if (el) el.classList.add('hidden');
            let eleNav = document.getElementById('navigation');
            eleNav.style.height = "45px";
        }
    }


    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.resetState();
        }
    }
    



    render () {
        const errors = this.props.errors.map( error => {
            return error;
        });
        if (this.props.errors[0] === "Invalid Username or Password") {
            const navErrorsBox = document.getElementsByClassName('errors')[0];
            if (navErrorsBox) navErrorsBox.classList.remove('hidden');
        } else {
            const navErrorsBox = document.getElementsByClassName('errors')[0];
            if (navErrorsBox) navErrorsBox.classList.add('hidden');
        }

        if (this.props.loggedIn) {
            const el = document.getElementById('demo');
            if (el) el.classList.add('hidden');
        }

        if (this.props.loggedIn) {
            let ele = document.getElementById('navigation');

            if (ele) ele.style.height = "45px";
        } else {
            let ele = document.getElementById('navigation')
            if (ele) ele.style.height = "80px";

        }
        let photo;
        if (this.props.currentUser) {
            photo = this.props.currentUser.profilePicture ? <img src={this.props.currentUser.profilePicture} className="profile-photo" /> 
                : <img src="https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png" className="profile-photo" />
        }
       
        return (
            <div>
                <button onClick={() => this.handleDemo()} className="sign-up-button demo" id="demo">Demo User</button>
           
                <div className="nav-bar" id="navigation">
                    <div className="nav-flex">
                        {
                            this.props.loggedIn ? (
                                <div className="logged-in-bar">
                                    <div className="left-logged-in">
                                        <Link to="/feed" replace>
                                            <div className="logo-logged-in">
                                                <h2 className="the-p">P</h2>
                                            </div>
                                        </Link>
                                        <input className="search-bar" type="text" onChange={(e) => this.handleSearch(e)} value={this.state.search} placeholder="Search"/>
                                        <i className="fa fa-search"></i>
                                    </div>
                                    <div className="right-logged-in clearfix">
                                        <Link to={`/users/${this.props.currentUser.id}`} className="info-blip-a" replace>
                                            <div className="info-blip">
                                                {photo}
                                                <p>
                                                    {this.props.currentUser.firstName}
                                                </p>
                                            </div>
                                        </Link>
                                        <Link to="/feed" className="home-a" replace>
                                            <div className="home">
                                                Home
                                            </div>
                                        </Link>
                                        <Icons friendRequests={this.props.currentUser.friendRequesterIds}/>

                                        <button onClick={this.handleLogout} className="action-button logout clearfix">Log Out</button>
                                    </div>
                                </div>
                                
                            ) : (
                                <div className="login-bar">
                                    
                                    <div className="logo-box clearfix">
                                        <Link onClick={this.resetState} to="/" replace><h1 className="logo clearfix" >Patio</h1></Link>
                                    </div>
                                    <div className="submission-form clearfix">
                                        <form onSubmit={this.handleSubmit}>
                                            <div>
                                                    <span className="signin-text outline">Email</span>
                                                    <span className="pass-text outline">Password</span>
                                            </div>
                                            <div className="signin-inputs-cont clearfix">
                                                    <div className="errors hidden">
                                                        <p>{errors}</p>
                                                    </div>
                                                <input className="signin-input-box" onChange={this.handleChange('email')} type="text" value={this.state.email}/>
                                                <input className="signin-input-box" onChange={this.handleChange('password')} type="password" value={this.state.password}/>                    
                                                <input className="action-button" type="submit" value="Log In"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;