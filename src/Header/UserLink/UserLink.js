import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './UserLink.scss';

const UserLink = ({ isAuthorized }) => {
  return(
    <div className="userLink">
      {
        (!isAuthorized) && 
          <Link to={"/auth"}>
            LINK TO AUTHORIZATION
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