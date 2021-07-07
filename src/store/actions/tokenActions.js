import axios from 'axios';

import {
  SET_TOKEN,
  SET_TOKEN_ERROR,
  SET_TOKEN_SUCCESS
} from '../constant';

import {
  POST_TOKEN_URL,
  REDIRECT_URI,
  ACCESS_KEY,
  SECRET_KEY
} from '../../services/constants';

const setToken = () => {
  return {
    type: SET_TOKEN,
  }
}

export const setTokenSuccess = (valueToken) => {
  return {
    type: SET_TOKEN_SUCCESS,
    valueToken,
  }
}

const setTokenError = (errorText) => {
  return {
    type: SET_TOKEN_ERROR,
    errorText,
  }
}

export const setTokenAsync = (code) => (dispatch) => {
  dispatch(setToken());
  axios.post(`${POST_TOKEN_URL}`,
    `redirect_uri=${REDIRECT_URI}&code=${code}&grant_type=authorization_code`,
        {
          auth: {
            username: `${ACCESS_KEY}`,
            password: `${SECRET_KEY}`
          },
          headers: {'Content-type': 'application/x-www-form-urlencoded'}
        }
  )
  .then((resp) => {
    const token = resp.data.access_token;
    dispatch(setTokenSuccess(token));
    if (token !== '' && typeof token === 'string') {
      localStorage.setItem('unspalashApiToken', token);
    }
  })
  . catch((error) => {
    dispatch(setTokenError(String(error)));
  })
};