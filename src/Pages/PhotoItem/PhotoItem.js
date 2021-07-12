import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import { formatCreatedAt } from '../../helpers/fotmatCreatedAt';

import './PhotoItem.scss';

const PhotoItem = () => {
  const { search } = useLocation();
  const id = search.split('id=')[1];
  const { data } = useSelector(state => state.listPhotos);
  const item = (data.filter((photo) => (photo.id === id)))[0];
  const {
    fullImageUrl,
    altDescription,
    createdAt,
    countLikes,
    likedByUser,
    author: {
      authorProfileLink,
      authorAvatar,
      authorName
    }
  } = item;
  
  const toggleLike = () => {
    alert('toggle Like');
  };

  return(
    <div className='container'>
      <Link
        className='photoItem__back-btn'
        to={'/photos'}
        >
          Назад
      </Link>
      <a
        className='photoItem__UserLink'
        href={authorProfileLink}
      >
        <div className='photoItem__avatar'>
          <img className='photoItem__avatar-img' src={authorAvatar} alt='Avatar of The Author' />
        </div>
        <span>
          {authorName}
        </span>
      </a>
      <span className='photoItem__created'>
        { formatCreatedAt(createdAt) }
      </span>
      <div>
        <button
          onClick={toggleLike}
        >
          LIKE
        </button>
        <span>
          {countLikes}
        </span>
      </div>
      <img src={fullImageUrl} alt={altDescription}/>
    </div>
  );
};

export default PhotoItem;