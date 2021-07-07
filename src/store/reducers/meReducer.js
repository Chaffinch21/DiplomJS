import { initialState } from './rootReducer';
import {
  SET_ME,
  SET_ME_ERROR,
  SET_ME_SUCCESS
} from '../constant';

const meReducer = (state = initialState.me, action) => {
  switch (action.type) {
    case SET_ME:
      return {
        ...state,
        valueMe: {
          username: '',
          userAvatar: '',
        },
        loadingMe: true,
        errorTextMe: '',
      };

    case SET_ME_SUCCESS:
      const { username, userAvatar } = action.valueMe;
      return {
        ...state,
        valueMe: {
          username,
          userAvatar,
        },
        loadingMe: false,
        errorTextMe: '',
      };

    case SET_ME_ERROR:
      return {
        ...state,
        valueMe: {
          username: '',
          userAvatar: '',
        },
        loadingMe: false,
        errorTextMe: action.errorTextMe,
      };

    default:
      return state;
  }
}

export default meReducer;