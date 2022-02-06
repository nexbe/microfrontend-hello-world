import React from 'react';
import { Route, Switch, Router, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HelloVueApp from './components/HelloVueApp';
import HelloReactApp from './components/HelloReactApp';
import KycApp from './components/KycApp';

const history = createBrowserHistory();

const Header = () => (
  <div>
    <Link to='/react'>React</Link>
    <br />
    <Link to='/kyc'>Kyc</Link>
    <br />
    <Link to='/vue'>use vue</Link>
  </div>
);

export default () => {
  return (
    <Router history={history}>
      <Header />
      <hr />
      <Switch>
        <Route path='/react' component={HelloReactApp} />
        <Route path='/kyc' component={KycApp} />
        <Route path='/vue' component={HelloVueApp} />
      </Switch>
    </Router>
  );
};
