import axios from 'axios';

import {
  LIKE_PHOTO,
  LIKE_PHOTO_SUCCESS,
  LIKE_PHOTO_ERROR,
  UNLIKE_PHOTO,
  UNLIKE_PHOTO_SUCCESS,
  UNLIKE_PHOTO_ERROR
} from '../constant';

import {ACCESS_KEY, URL} from '../../services/constants';

const likePhoto = () => {
  return {
    type: LIKE_PHOTO
  }
}

const likePhotoSuccess = (photo) => {
  return {
    type: LIKE_PHOTO_SUCCESS,
    photo,
  }
}

const likePhotoError = (error) => {
  return {
    type: LIKE_PHOTO_ERROR,
    error,
  }
}

export const likePhotoAsync = (token, id) => (dispatch) => {
  dispatch(likePhoto());
  console.log('token', token);
  console.log('id', id);
  axios.post(`${URL}photos/${id}/like?client_id=${ACCESS_KEY}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((resp) => {
      console.log(resp);
    })
    .catch((error) => {console.log(error)})
}

const unlikePhoto = () => {
  return {
    type: UNLIKE_PHOTO
  }
}

const unlikePhotoSuccess = (photo) => {
  return {
    type: UNLIKE_PHOTO_SUCCESS,
    photo,
  }
}

const unlikePhotoError = (error) => {
  return {
    type: UNLIKE_PHOTO_ERROR,
    error,
  }
}

export const unlikePhotoAsync = () => {
  console.log(' delete like');
}