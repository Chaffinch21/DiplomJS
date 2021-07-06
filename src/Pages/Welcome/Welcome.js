import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AUTHORIZATION_URL } from '../../services/constants';

import './Welcome.scss';

const Welcome = () => {
  const token = useSelector(state => state.token);
  const { valueToken } = token;
  console.log(valueToken);

  return (
    <div className='container'>
      {
        (valueToken === '') &&
        <div className='welcome__content'>
          <p>Hello! Welcome in App</p>
          <a href={AUTHORIZATION_URL}>Go to Authorization</a>
        </div>
      }
      {
        (valueToken !== '') &&
        <div className='welcome__content'>
          <Link to={'photos'}>
            View photos
          </Link>
        </div>
      }
    </div>
  )
}

export default Welcome;