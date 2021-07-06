import {
  SET_TOKEN,
  SET_TOKEN_ERROR,
  SET_TOKEN_SUCCESS
} from '../constant';

const tokenReducer = (state, action) => {
  switch(action.type) {
    case SET_TOKEN:
      return {
        ...state,
        loading: true,
        valueToken: '',
        errorText: '',
      }

    case SET_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        valueToken: action.valueToken,
        errorText: '',
      }

    case SET_TOKEN_ERROR:
      return {
        ...state,
        loading: false,
        valueToken: '',
        errorText: action.errorText
      }

    default:
      return state;
  }
};

export default tokenReducer;