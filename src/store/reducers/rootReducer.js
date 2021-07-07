import tokenReducer from './tokenReducer';
import meReducer from './meReducer';
import {
  SET_TOKEN,
  SET_TOKEN_SUCCESS,
  SET_TOKEN_ERROR,
  SET_ME,
  SET_ME_SUCCESS,
  SET_ME_ERROR,
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

    default:
      return state;
  }
};

export default rootReducers;