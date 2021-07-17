import React from 'react';
import className from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { EIcon } from '../../enums/EIcon';
import { likePhotoAsync, unlikePhotoAsync } from '../../store/actions/likeUnlikePhotoActions';

import './Like.scss';

const Like = ({photoId, countLikes, likedByUser, mode='dark'}) => {
  const { valueToken } = useSelector(state => state.token);
  const dispatch = useDispatch();

  const toggleLike = (event) => {
    event.preventDefault();
    alert(`Toggle Like ${photoId}`);
    if(likedByUser) {
      dispatch(unlikePhotoAsync())``
    } else {
      dispatch(likePhotoAsync(valueToken, photoId));
    }
  }

  const classes = className(
    'like',
    `mode-${mode}`,
    { 'likeByUser': likedByUser }
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
  countLikes: PropTypes.number.require,
  likedByUser: PropTypes.bool.require,
}

export default Like;