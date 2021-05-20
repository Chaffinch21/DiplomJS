import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PhotoItem from '../Pages/PhotoItem/PhotoItem';
import PhotoTape from '../Pages/PhotoTape/PhotoTape';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Authorization from '../Pages/Authorization/Authorization';
import { useToken } from '../hooks/useToken';

import './app.scss';

const App = () => {
  const [ isAuthorized, setIsAuthorized ] = useState(false);
  const [ token ] = useToken();

  useEffect(()=>{
    if(token !== '') {
      setIsAuthorized(true);
    }
  }, [token]);

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
              <Authorization isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized}/>
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