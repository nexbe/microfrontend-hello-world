import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom';

const kyc = () => <div>Hello Kyc!</div>;
const other = () => <div>Hello other!</div>;

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path='/kyc/page1' component={kyc} />
          <Route path='/kyc/page2' component={other} />
        </Switch>
        <br />
        <Link to='/kyc/page1'>Say hello to KYC!</Link>
        <br />
        <Link to='/kyc/page2'>Say hello to the other!</Link>
      </Router>
    </div>
  );
};
