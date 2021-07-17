import { initialState } from './rootReducer';

import {
  LIKE_PHOTO,
  LIKE_PHOTO_SUCCESS,
  LIKE_PHOTO_ERROR,
  UNLIKE_PHOTO,
  UNLIKE_PHOTO_SUCCESS,
  UNLIKE_PHOTO_ERROR
} from '../constant';

export const likeUnlikePhotoReducer = (state = initialState.listPhotos, action) => {
  switch(action.type) {
    case LIKE_PHOTO:
    case LIKE_PHOTO_SUCCESS:
    case LIKE_PHOTO_ERROR:
    case UNLIKE_PHOTO:
    case UNLIKE_PHOTO_SUCCESS:
    case UNLIKE_PHOTO_ERROR:
      return state;

    default:
      return state;
  }
}