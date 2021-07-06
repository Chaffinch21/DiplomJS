import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return(
    <div className={'container'}>
      <div className={'header__content'}>
        <Link to={'/'}>
          Save Moment
        </Link>
        <div className={'header__action'}>
          Action
        </div>
      </div>
    </div>
  );
};

export default Header;