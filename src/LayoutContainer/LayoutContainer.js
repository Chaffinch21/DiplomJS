import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from '../Header';
import Welcome from '../Pages/Welcome';
import Authorization from '../Pages/Authorization';

const LayoutContainer = () => {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={'/'}>
          <Welcome />
        </Route>
        <Route path={'/photo-item'}>
          <span>PhotoItem</span>
        </Route>
        <Route path={'/photos'}>
          <span>Photos</span>
        </Route>
        <Route path={'/auth'}>
          <Authorization />
        </Route>
        <Route path={'*'}>
          <span>Error</span>
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default LayoutContainer;