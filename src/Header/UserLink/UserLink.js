import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { EIcon } from '../../enums';
import Icon from '../../components/Icon/Icon';

import './UserLink.scss';

const UserLink = ({ isAuthorized }) => {

  return(
    <div className="userLink">
      {
        (!isAuthorized) && 
          <Link className="userLink__link" to={"/auth"}>
            <span className="userLink__icon">
              <Icon typeIcon={`${EIcon.userIcon}`}/>
            </span>
            <span className="userLink__text">
              Авторизоваться
            </span>            
          </Link> ||
        (isAuthorized) &&
          <>
            <span>AVATAR AND USERNAME</span>
            <span>EXIT</span>
          </>
      }
    </div>        
  );
};

UserLink: PropTypes.exact({
  isAuthorized: PropTypes.bool
})

export default UserLink;