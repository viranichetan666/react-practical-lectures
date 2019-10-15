import React,{ useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import authActions from 'redux/auth/actions';
import sagaActions from 'redux/authSaga/actions';

const { login, logout } = authActions;
const { loginSaga, logoutSaga } = sagaActions;

const ReduxHooks = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.auth.isLogin);
    
    console.log('login', isLogin)
    const handleLogin = useCallback(
        () => {
            const data = {
                token: "YOURLOGINTOKEN"
            };
            dispatch(login(data))
        },
        [dispatch]
    )

    const handleLogout = useCallback(
        () => {
            dispatch(logout())
        },
        [dispatch]
    )

    const handleSagaLogin = useCallback(
        () => {
            dispatch(loginSaga())
        },
        [dispatch]
    )

    const handleSagaLogout = useCallback(
        () => {
            dispatch(logoutSaga())
        },
        [dispatch]
    )

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
                <button onClick={ handleSagaLogin }>Login</button>
            </div>
            <div className="text-center pa10 ma10 redcolor light--text">
                <button onClick={ handleSagaLogout }>Logout</button>
            </div>
        </div>
    );
};

export default ReduxHooks;