import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducers from '../store/reducers/rootReducer';
import LayoutContainer from '../LayoutContainer';

const store = createStore(rootReducers, applyMiddleware(thunk));

const App = () => {
  return(
    <Provider store={store}>
      <LayoutContainer />
    </Provider>
  );
}

export default App;