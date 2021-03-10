import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

import './welcome.scss';

const Welcome = () => {
  const { isAuthorized } = useSelector(state =>state.auth);
  console.log('>>>> isAuthorized in Welcome Component >>>> ', isAuthorized);

  return(
    <div className="container">
      <h1>Save Moment</h1>
      <p>Добро пожаловать!</p>
      {!isAuthorized && <Link to="/auth">Авторизоваться</Link>}
      {isAuthorized && <Link to="/tape">Лента новостей</Link>}
    </div>    
  );
}

export default Welcome;