import tokenReducer from './tokenReducer';
import {
  SET_TOKEN,
  SET_TOKEN_SUCCESS,
  SET_TOKEN_ERROR,
} from '../constant';

const initialState = {
  token: {
    valueToken: '',
    loading: false,
    errorText: ''
  },
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

    default:
      return state;
  }
};

export default rootReducers;