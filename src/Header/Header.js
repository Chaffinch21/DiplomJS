import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo/Logo';
import UserLink from './UserLink/UserLink';

import './Header.scss';

const Header = ({ isAuthorized }) => {
  return (
    <header> 
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <UserLink isAuthorized={isAuthorized} />
        </div>
      </div>       
    </header>
  );
};

Header: PropTypes.exact({
  isAuthorized: PropTypes.bool,
})

export default Header;