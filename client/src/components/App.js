import React from 'react';
import { Route, Router } from 'react-router-dom';

import Header from './Header';
import Login from '../containers/Login';
import Admin from '../containers/Admin';
import history from '../history';

class App extends React.Component {
    
    render () {
        return (
            <div className="container">
                <Router history={history}>
                    <Header />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/admin" component={Admin} />
                </Router>
            </div>
        );
    }
};
export default App;