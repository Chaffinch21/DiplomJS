import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PhotoItem from '../Pages/PhotoItem/PhotoItem';
import PhotoTape from '../Pages/PhotoTape/PhotoTape';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Authorization from '../Pages/Authorization/Authorization';

import './app.scss';

const App = () => {
  const [ isAuthorized, setIsAuthorized ] = useState(false);
  const [ token, setToken] = useState('');

  return(
    <Router>
      <div className="appGrid">
        <Header isAuthorized={isAuthorized}/>
        <div className="mainContent">
          <Switch>
            <Route exact path={"/"}>
              <PhotoTape isAuthorized={isAuthorized}/>
            </Route>
            <Route path={"/photo-item"}>
              <PhotoItem />
            </Route>
            <Route path={"/auth"}>
              <Authorization />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;