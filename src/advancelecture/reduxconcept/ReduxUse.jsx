import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import AuthActions from "redux/auth/actions";
import AuthSagaActions from "redux/authSaga/actions";

const { login, logout } = AuthActions;
const { loginSaga, logoutSaga } = AuthSagaActions;

const ReduxUse = (props) => {

    console.log('isLogin', props.isLogin)

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

            <div className="an-18 bluecolor--text bold-text text-center py10 myclass">
                With Saga
            </div>
            <div className="text-center pa10 ma10 dark light--text">
                <button onClick={ () =>  props.loginSaga() }>Login</button>
            </div>
            <div className="text-center pa10 ma10 redcolor light--text">
                <button onClick={ () =>  props.logoutSaga() }>Logout</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin
    }
}

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        { 
            login, 
            logout,
            loginSaga,
            logoutSaga
        }
    )
)(ReduxUse);