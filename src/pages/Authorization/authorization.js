import React, {useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import authorizationUrl from './getAuthorizationUrl.js';
import {
  BASE_URL,
  ACCESS_KEY,
  SECRET_KEY,
  REDIRECT_URI
} from '../../services/constants';

import './Authorization.scss';

const Authorization = ({ isAuthorized, setIsAuthorized }) => {
  const code = location.search.split('code=')[1];

  useEffect(() => {
    if (code) {
      axios.post(`${BASE_URL}token`, {
        
          client_id: ACCESS_KEY,
          client_secret: SECRET_KEY,
          redirect_uri: REDIRECT_URI,
          code,
          grant_type: 'authorization_code'
        } 
      )
        .then((resp) => {
          const token = resp.data.access_token;
          localStorage.setItem('tokenUnsplashApi', token);
          setIsAuthorized(true);
        })
        .catch(console.log)
    }
  }, []);  
  
  return(
    <>
      {
        (!code) && location.assign(authorizationUrl)
      }
      {
        (isAuthorized) && <Redirect to={"/"}/>
      }      
    </>    
  );
};

Authorization: PropTypes.exact({
  isAuthorized: PropTypes.bool.isRequired,
  setIsAuthorized: PropTypes.func.isRequired,
});

export default Authorization;