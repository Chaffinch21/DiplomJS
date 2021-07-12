import React from 'react';

import './PhotosListItem.scss';
import { formatCreatedAt } from '../../helpers/fotmatCreatedAt';

const PhotosListItem = ({item}) => {
  const {
    id,
    previewImageUrl,
    altDescription,
    countLikes,
    createdAt,
    author,
  } = item;

  const {
    authorProfileLink,
    authorAvatar,
    authorName,
  } = author;

  const toggleLike = () => {
    alert('Toggle Like');
  }

  return(
    <div className='photosListItem'>
      <img className='photosListItem__preview' src={previewImageUrl} alt={altDescription}/>
      <span className='photosListItem__created'>
        {
          formatCreatedAt(createdAt)
        }
      </span>
      <div className='photosListItem__like'>
        <button
          className='photosListItem__like-btn'
          onClick={toggleLike}
        >
          Like
        </button>
        <span className='photosListItem__like-count'>
          {countLikes}
        </span>
      </div>

      <a className='photosListItem__userLink'
        href={authorProfileLink}
        target='_blank'
      >
        <div className='photosListItem__avatar'>
          <img className='photosListItem__avatar-img'
          src={authorAvatar}
          alt='Avatar of Author' />
        </div>
        <span className='photosListItem__name'>
          {authorName}
        </span>
      </a>
    </div>
  );
}

export default PhotosListItem;