import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useToken } from '../../hooks/useToken';
import {AUTHORIZATION_URL} from '../../services/constants';
import Loader from '../../Components/Loader';

const Authorization = () => {
  const token = useSelector(state => state.token);
  const { loading, valueToken, errorText } = token;

  useToken();
  return(
    <>
      {
        (!loading) && (valueToken !== '') &&
          <Redirect to={'/'} />
      }
      {
        (!loading) && (errorText !== '') &&
          <div>
            <span>Error{errorText}</span>
            <a href={AUTHORIZATION_URL}>Go To Authorization</a>
          </div>
      }
      {
        (loading) &&
          <Loader />
      }
    </>
  )
}

export default Authorization