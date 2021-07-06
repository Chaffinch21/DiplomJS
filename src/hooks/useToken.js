import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {setTokenAsync} from '../store/actions/tokenActions';

export function useToken() {
  const dispatch = useDispatch();

  useEffect(() => {
    const code = location.search.split('code=')[1];
    if (code) {
      dispatch(setTokenAsync(code));
    }
  }, [])

  return;
}