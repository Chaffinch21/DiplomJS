const initialState = {
  token: {
    valueToken: '',
    loading: false,
    error: ''
  },
}

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducers;