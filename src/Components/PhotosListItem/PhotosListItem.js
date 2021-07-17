import React from 'react';
import { Link } from 'react-router-dom';

import { formatCreatedAt } from '../../helpers/fotmatCreatedAt';
import Like from '../Like';

import './PhotosListItem.scss';


const PhotosListItem = ({item}) => {
  const {
    id,
    previewImageUrl,
    altDescription,
    countLikes,
    createdAt,
    author,
    likedByUser,
  } = item;

  const {
    authorProfileLink,
    authorAvatar,
    authorName,
  } = author;

  return(
    <Link className='photosListItem' to={`/photo-item?id=${id}`}>
      <img className='photosListItem__preview' src={previewImageUrl} alt={altDescription}/>
      <span className='photosListItem__created'>
        {
          formatCreatedAt(createdAt)
        }
      </span>

      <Like countLikes={countLikes} mode={'white'} photoId={id} likedByUser={likedByUser}/>

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
    </Link>
  );
}

export default PhotosListItem;