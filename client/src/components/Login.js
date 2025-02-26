import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class Login extends Component {

    render() {
        return (
            <div>
                <form className="form-container" onSubmit={this.props.login}>
                    <div className="form-group">
                        <label>Username</label>
                        <Field type="text" className="form-control" id="username" placeholder="Username" name="username"
                               component="input"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <Field type="password" className="form-control" id="pwd" placeholder="Password" name="pwd"
                               component="input"/>
                    </div>
                    <button type="submit" className="btn button text-center">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'loginForm'
})(Login);