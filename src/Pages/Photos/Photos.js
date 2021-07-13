import React from 'react';
import { useSelector } from 'react-redux';

import {AUTHORIZATION_URL} from '../../services/constants';
import { useListData } from '../../hooks/useListData';
import Loader from '../../Components/Loader';
import PhotosListItem from '../../Components/PhotosListItem';

const Photos = () => {
  const { valueToken } = useSelector(state => state.token);
  const { loadingListPhotos, data, errorListPhotos } = useSelector(state => state.listPhotos);
  useListData();

  return (
    <div className='container'>
      <div className='photos'>
          {
            (valueToken === '') &&
            <div>
              <span>For view a list of photos, please</span>
              <a href={AUTHORIZATION_URL}>Go To Authorization</a>
            </div>
          }
          {
            (valueToken !== '') && (loadingListPhotos) &&
            <Loader />
          }
          {
            (valueToken !== '') && (!loadingListPhotos) && (errorListPhotos === '') && (data.length !== 0) &&
            data.map(item => (
              <PhotosListItem
                key={item.id}
                item={item}
              />
            ))
          }
      </div>

    </div>
  );
};

export default Photos;