import { 
  API_AUTHORIZATION_URL, 
  API_GET_TOKEN_URL, 
  ACCESS_KEY, 
  SECRET_KEY, 
  CALLBACK_URL, 
  API_SCOPE 
} from './constants';

export default class UnsplashAPI {
  _autorizationParam = 'client_id='+ ACCESS_KEY + '&' +  
    'redirect_uri=' + CALLBACK_URL + '&' +
    'response_type=' + 'code' + '&' +
    'scope=' + API_SCOPE;
  
  getAuthorizationURL = () => {
    return (API_AUTHORIZATION_URL + '/?' + this._autorizationParam);
  }
};