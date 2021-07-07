import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setMeAsync } from '../store/actions/meActions';

export function useUserData() {
  const { valueToken } = useSelector(state=> state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (valueToken !== '') {
      dispatch(setMeAsync(valueToken));
    }
  }, [valueToken])

  return;
}