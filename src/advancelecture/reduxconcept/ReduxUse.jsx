import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import AuthActions from "redux/auth/actions";

const { login, logout } = AuthActions;

const ReduxUse = (props) => {

    const handleLogin = () => {
            const data = {
                token: "YOURLOGINTOKEN"
            };
            props.login(data);
    };

    const handleLogout = () => {
        props.logout();
    }

    return (
        <div className="pt100">
            <div className="an-18 bluecolor--text bold-text text-center py10 myclass">
                Redux Use
            </div>
            <div className="text-center pa10 ma10 dark light--text">
                <button onClick={ handleLogin }>Login</button>
            </div>
            <div className="text-center pa10 ma10 redcolor light--text">
                <button onClick={ handleLogout }>Logout</button>
            </div>
        </div>
    );
};

export default compose(
    withRouter,
    connect(
        null,
        { 
            login, 
            logout 
        }
    )
)(ReduxUse);