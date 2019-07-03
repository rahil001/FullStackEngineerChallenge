import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
    render () {
        const auth = this.props.auth;
        return (
            <nav>
                <div className="nav-wrapper blue-grey">
                    <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Performance Review App</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    { auth.success ? <li>{`welcome ${auth.name}`}</li> : <li><Link to="/login">Sign In</Link></li> }
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps (state) {
    return {
        auth: state.auth || {}
    }
}
export default connect(mapStateToProps, null)(Header);

