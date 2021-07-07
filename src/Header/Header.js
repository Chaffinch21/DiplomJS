import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {AUTHORIZATION_URL} from '../services/constants';
import {useUserData} from '../hooks/useUserData';

import './Header.scss';

const Header = () => {
  const token = useSelector(state=> state.token);
  const { valueMe, loadingMe, errorTextMe } = useSelector(state => state.me);
  const { valueToken, loading } = token;
  const { username, userAvatar } = valueMe;
  useUserData();

  const exitApp = () => {
    alert('Exit');
  }

  return(
    <div className={'container'}>
      <div className={'header__content'}>
        <Link to={'/'}>
          Save Moment
        </Link>
        <div className={'header__action'}>
          {
            (valueToken === '') && (!loading) &&
              <a href={AUTHORIZATION_URL}>
                img Anonim Anonim Text
              </a>
          }
          {
            (valueToken !== '') &&
              <button
                datatooltip={'Exit'}
                onClick={exitApp}>
                <img src={userAvatar}/>
                {
                  loadingMe ? (
                    <span>Loading...</span>
                  ) : (
                    <span>{username || 'Anonim'}</span>
                  )
                }
              </button>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;