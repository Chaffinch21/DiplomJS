import { 
  RECEIVE_TOKEN,
  REQUEST_TOKEN,
  FAILED_TOKEN  
} from '../types';

const initialState = {
  auth: {
    token: null,
    loading: false,
    error: false,
    isAuthorized: false 
  }
};

function reducers (state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOKEN: 
      console.log('>>>> ТОКЕН ЖДЕМ >>>>');
      return state;

    case RECEIVE_TOKEN: 
      console.log('>>>> ТОКЕН ПОЛУЧЕН >>>> ');
      const stateWithToken = Object.assign(
            {}, 
            state, 
            {auth: {
              token: action.token,
              isAuthorized: true,
              error: false,
              loading: false
            }}
          )
      return stateWithToken;

    case FAILED_TOKEN: 
      console.log('>>>> ОШИБКА!!!! ТОКЕН НЕ ПОЛУЧЕН >>>>');
      return state;
    default: 
    return state;
  }
}

export default reducers;