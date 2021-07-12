import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from '../Header';
import Welcome from '../Pages/Welcome';
import Authorization from '../Pages/Authorization';
import Photos from '../Pages/Photos';
import PhotoItem from '../Pages/PhotoItem';
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
          <PhotoItem />
        </Route>
        <Route path={'/photos'}>
          <Photos />
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