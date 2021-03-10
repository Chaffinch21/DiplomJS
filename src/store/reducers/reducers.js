const initialState = {
  auth: {
    loading: false,
    error: false,
    isAuthorized: false 
  }
};

function reducers (state = initialState, action) {
  switch (action.type) {
    case 'WELCOME': 
      console.log('welcome in application!');
      return state;
    default: 
    return state;
  }
}

export default reducers;