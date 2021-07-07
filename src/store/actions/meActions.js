import axios from 'axios';

import {
  SET_ME,
  SET_ME_SUCCESS,
  SET_ME_ERROR
} from '../constant';
import {
  ACCESS_KEY,
  URL
} from '../../services/constants';

const setMe = () => {
  return {
    type: SET_ME,
  }
}

const setMeSuccess = (username, userAvatar) => {
  return {
    type: SET_ME_SUCCESS,
    valueMe: {
      username,
      userAvatar,
    }
  }
}

const setMeError = (errorTextMe) => {
  return {
    type: SET_ME_ERROR,
    errorTextMe
  }
}

export const setMeAsync = (token) => (dispatch) => {
  dispatch(setMe());
  axios.get(`${URL}me?client_id=${ACCESS_KEY}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((resp) => {
      dispatch(setMeSuccess(resp.data.name, resp.data.profile_image.medium));
    })
    .catch((error) => {
      dispatch(setMeError(String(error)));
    })
}