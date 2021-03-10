import { 
  RECEIVE_TOKEN,
  REQUEST_TOKEN,
  FAILED_TOKEN 
} from '../types';

const tokenRecieved = (token) => {
  return {
    type: RECEIVE_TOKEN,
    payload: token
  }
};

const tokenRequested = () => {
  return {
    type: REQUEST_TOKEN
  }
};

const tokenFailed = (error) => {
  return {
    type: FAILED_TOKEN,
    payload: error    
  }
};

const fetchAuthorization = (code, unsplash, dispatch) => () =>{
  alert('>>>> Dispatchim action >>>>');
  dispatch(tokenRequested());
  alert('>>>> TOKEN TOKEN TOKEN >>>>');
  unsplash.getToken(code)
      .then((token) => {
          alert('то что получили ' + token);
          sessionStorage.setItem('tokenUnsplashAPI', token);
          dispatch(tokenRecieved(token));
        });
}

export {
  fetchAuthorization
};