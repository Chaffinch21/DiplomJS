import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

import UnsplashAPI from '../../services/unsplashAPI';
import { fetchAuthorization } from '../../store/actions/actions';

import './authorization.scss';

const passAuthorization = () => {
  const unsplash = new UnsplashAPI();
  
  const code = location.search.split('code=')[1];

  if (code) {
    const dispatch = useDispatch();
    alert('Внимание запрос!');
    dispatch(fetchAuthorization(code, unsplash, dispatch));
    alert('Внимание после запроса!');
  } else {
    const url  = unsplash.getAuthorizationURL();
    document.location.assign(url);
  }
}

const Authorization = () => {
  const {isAuthorized} = useSelector(state => state.auth);
  console.log('>>>> isAuthorized in authPage >>>>', isAuthorized);

  return(
    <div>
      {isAuthorized && <Redirect to="/" />}
      {!isAuthorized && passAuthorization()}
    </div>
  );
}

export default Authorization;