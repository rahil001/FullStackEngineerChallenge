/**
 * Created by Terry on 2016-12-20.
 */
import React, { Component } from 'react';
import Login from '../components/Login';
import { connect } from 'react-redux';
import { loginAction } from '../actions';
import {store} from '../index';

class LoginContainer extends Component {

    render() {
        return (
            <div>
                <Login login={this.props.login}/>
                {this.props.error ? <h3 className="text-center">{this.props.error}</h3> : undefined }
            </div>
        )
    }
}

function mapDispatchToprops (dispatch) {
    const login = async (e) => {
        e.preventDefault();
        let state = store.getState();
        let userInfo = state.form.loginForm && state.form.loginForm.values;
        let name = userInfo.username;
        let password = userInfo.pwd;
        dispatch(loginAction(name, password));
    };

    return {
        login
    }
}
function mapStateToProps(state) {
    const auth = state.auth || {};
    return {
        error: ( !auth && !auth.success)
    };
}

export default connect(mapStateToProps, mapDispatchToprops)(LoginContainer);