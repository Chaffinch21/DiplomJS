import React from 'react';
import { useSelector } from 'react-redux';

import {AUTHORIZATION_URL} from '../../services/constants';

const Photos = () => {
  const { valueToken } = useSelector(state => state.token);
  console.log(valueToken);

  return (
    <div>
      {
        (valueToken === '') &&
        <div>
          <span>For view a list of photos, please</span>
          <a href={AUTHORIZATION_URL}>Go To Authorization</a>
        </div>
      }
      {
        (valueToken !== '') &&
          <span>Loading...</span>
      }
    </div>
  );
};

export default Photos;