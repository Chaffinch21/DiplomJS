import tokenReducer from './tokenReducer';
import meReducer from './meReducer';
import { listPhotosReducer } from './listPhotosReducer';
import { likeUnlikePhotoReducer } from './likeUnlikePhotoReducer';
import {
  SET_TOKEN,
  SET_TOKEN_SUCCESS,
  SET_TOKEN_ERROR,
  SET_ME,
  SET_ME_SUCCESS,
  SET_ME_ERROR,
  ADD_LIST_PHOTOS,
  ADD_LIST_PHOTOS_SUCCESS,
  ADD_LIST_PHOTOS_ERROR,
  LIKE_PHOTO,
  LIKE_PHOTO_SUCCESS,
  LIKE_PHOTO_ERROR,
  UNLIKE_PHOTO,
  UNLIKE_PHOTO_SUCCESS,
  UNLIKE_PHOTO_ERROR
} from '../constant';

export const initialState = {
  token: {
    valueToken: '',
    loading: false,
    errorText: ''
  },
  me: {
    valueMe: {
      username: '',
      userAvatar: '',
    },
    loadingMe: false,
    errorTextMe: '',
  },
  listPhotos: {
    data: [],
    loadingListPhotos: false,
    errorListPhotos: '',
  }
}

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
    case SET_TOKEN_SUCCESS:
    case SET_TOKEN_ERROR:
      return {
        ...state,
        token: tokenReducer(state.token, action),
      }

    case SET_ME:
    case SET_ME_SUCCESS:
    case SET_ME_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      }

    case ADD_LIST_PHOTOS:
    case ADD_LIST_PHOTOS_SUCCESS:
    case ADD_LIST_PHOTOS_ERROR:
      return {
        ... state,
        listPhotos: listPhotosReducer(state.listPhotos, action),
      }

    case LIKE_PHOTO:
    case LIKE_PHOTO_SUCCESS:
    case LIKE_PHOTO_ERROR:
    case UNLIKE_PHOTO:
    case UNLIKE_PHOTO_SUCCESS:
    case UNLIKE_PHOTO_ERROR:
      return {
        ...state,
        listPhotos: likeUnlikePhotoReducer(state.listPhotos, action),
      }

    default:
      return state;
  }
};

export default rootReducers;