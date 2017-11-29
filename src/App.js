import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './views/Home';
import Login from './views/Login';
import Protected from './views/Protected';

const config = {
  issuer: 'https://dev-383752.oktapreview.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oad26ft8vtbqV4wQ0h7'
}

function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer='https://dev-383752.oktapreview.com/oauth2/default'
                  client_id='0oad26ft8vtbqV4wQ0h7'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
          <Route path='/' exact={true} component={Home} />
          <SecureRoute path='/protected' component={Protected} />
          <Route path='/login' render={() => <Login baseUrl='https://dev-383752.oktapreview.com' />} />
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>
      </Router>
    );
  }
}

export default App;
