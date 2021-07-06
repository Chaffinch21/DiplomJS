import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducers from '../store/reducers/rootReducer';
import LayoutContainer from '../LayoutContainer';

import '../style.global.scss';

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
  return(
    <Provider store={store}>
      <LayoutContainer />
    </Provider>
  );
}

export default App;