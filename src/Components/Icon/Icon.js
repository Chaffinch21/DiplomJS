import React from 'react';
import className from 'classnames';

import {getIcon} from './getIcon';

import './Icon.scss';

const Icon = ({iconName, size}) => {

  const classes = className(
    'icon',
    `icon__s${size}`
  )

  return(
    <span className={classes}>
      {getIcon(iconName)}
    </span>
  );
};

export default Icon;