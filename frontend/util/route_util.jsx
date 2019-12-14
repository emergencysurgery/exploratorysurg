import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => 
            !loggedIn ? <Component {...props} /> : <Redirect to="/feed" />
        }   
    />
);

const Pro = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const mSTP = state => {
    return {
        loggedIn: !!(state.session.id)
    }
}

export const AuthRoute = withRouter(connect(mSTP, null)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP, null)(Pro));