import axios from 'axios';

import {
  ADD_LIST_PHOTOS,
  ADD_LIST_PHOTOS_SUCCESS,
  ADD_LIST_PHOTOS_ERROR
} from '../constant';
import { URL, ACCESS_KEY} from '../../services/constants';
import { formatItemPhotosList } from '../../helpers/formatItemPhotosList';

const addListPhotos = () => {
  return {
    type: ADD_LIST_PHOTOS,
  }
}

const addListPhotosSuccess = (photos) => {
  return {
    type: ADD_LIST_PHOTOS_SUCCESS,
    photos,
  }
}

const addListPhotosError = (error) => {
  return{
    type: ADD_LIST_PHOTOS_ERROR,
    error,
  }
}

export const addListAsync = (token) => (dispatch) => {
  dispatch(addListPhotos());
  axios.get(`${URL}photos?client_id=${ACCESS_KEY}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((resp) => {
      const photos = resp.data.map(
        (item) => {
          return formatItemPhotosList(item);
        }
      );
      dispatch(addListPhotosSuccess(photos));
    })
    .catch((error) => {
      dispatch(addListPhotosError(String(error)))
  })
}