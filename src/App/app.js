import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header/header';
import Welcome from '../pages/Welcome/welcome';
import ErrorPage from '../pages/ErorrPage/error-page';
import Tape from '../pages/Tape/tape';
import PhotoItem from '../pages/PhotoItem/photo-item';
import Authorization from '../pages/Authorization/authorization';

import './app.scss';

const App = () => {
  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/auth" component={Authorization} />
        <Route path="/tape"  component={Tape} />
        <Route path="/photo-item" component={PhotoItem} />
        <Route component={ErrorPage} />
      </Switch>      
    </Router>
  );
}

export default App;