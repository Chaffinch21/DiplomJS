import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addListAsync } from '../store/actions/listPhotosActions';

export const useListData = () => {
  const dispatch = useDispatch();
  const { valueToken } = useSelector(state => state.token);

  useEffect(() => {
    if (valueToken !== '') {
      dispatch(addListAsync(valueToken));
    }
  }, [valueToken]);

  return;
};
