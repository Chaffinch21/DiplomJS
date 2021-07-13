import React from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { EIcon } from '../../enums/EIcon';

import './Like.scss';

const Like = ({photoId, countLikes, mode='dark'}) => {
  const toggleLike = (event) => {
    event.preventDefault();
    alert(`Toggle Like ${photoId}`);
  }

  const classes = className(
    'like',
    `mode-${mode}`
  );

  return(
    <div className={classes}>
      <button
        className='like__btn'
        onClick={toggleLike}
      >
        <Icon iconName={EIcon.likeButton} size={20} />
      </button>
      <span className='like__count'>
          {countLikes}
        </span>
    </div>
  );
};

Like.PropTypes = {
  mode: PropTypes.oneOf(['dark', 'white']),
  photoId: PropTypes.string.require,
}

export default Like;