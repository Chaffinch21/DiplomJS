import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from '../Header';
import Welcome from '../Pages/Welcome';
import Authorization from '../Pages/Authorization';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { setTokenSuccess } from '../store/actions/tokenActions';

const LayoutContainer = () => {
  const token = useSelector(state => state.token);
  const { valueToken } = token;
  const [ tokenLS ] = useLocalStorage();
  const dispatch = useDispatch();

  useEffect(()=> {
    if (tokenLS !== '' && typeof tokenLS === 'string' && valueToken === '') {
      dispatch(setTokenSuccess(tokenLS));
    }
  }, [tokenLS]);

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