import React from "react";
import NavBarContainer from "./nav/nav_bar_container";
import { Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupContainer from "./signup/signup_container";
import ProfileContainer from "./profile_container";
import NewsFeed from "./news_feed";
import Modal from "./modal/modal";

const App = () => {

    return (
        <div id="app">
            <Modal />
            <NavBarContainer />
                <AuthRoute path="/login" component={SignupContainer} />       
                <AuthRoute path="/signup" component={SignupContainer} />       
            <Switch>
                <ProtectedRoute path="/users/:userId" component={ProfileContainer}/>
                <ProtectedRoute path="/feed" component={NewsFeed} />
                <AuthRoute exact path="/" component={SignupContainer} />
                <Redirect to="/feed" />
            </Switch>
            
        </div>
    )
}

export default App;