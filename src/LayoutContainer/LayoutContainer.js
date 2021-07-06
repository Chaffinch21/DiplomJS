import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

const LayoutContainer = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <span>Main</span>
        </Route>
        <Route path={'/photo-item'}>
          <span>PhotoItem</span>
        </Route>
        <Route path={'/photos'}>
          <span>Photos</span>
        </Route>
        <Route path={'/auth'}>
          <span>Authorization</span>
        </Route>
        <Route path={'*'}>
          <span>Error</span>
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default LayoutContainer;