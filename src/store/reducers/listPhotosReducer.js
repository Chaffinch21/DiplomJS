import {
  ADD_LIST_PHOTOS,
  ADD_LIST_PHOTOS_ERROR,
  ADD_LIST_PHOTOS_SUCCESS
} from '../constant';
import { initialState } from './rootReducer';

export const listPhotosReducer = (state = initialState.listPhotos, action) => {
  switch(action.type) {
    case ADD_LIST_PHOTOS:
      return {
        ...state,
        loadingListPhotos: true,
        errorListPhotos: ''
      }

    case ADD_LIST_PHOTOS_SUCCESS:
      return {
        ...state,
        loadingListPhotos: false,
        errorListPhotos: '',
        data: [... action.photos],
      }

    case ADD_LIST_PHOTOS_ERROR:
      return {...state,
        loadingListPhotos: false,
        errorListPhotos: action.error,
      };

    default:
      return state;
  }
}