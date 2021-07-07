import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  ACCESS_KEY,
  URL
} from '../services/constants';

export function useLocalStorage() {
  const [ tokenLS, setTokenLS] = useState('');

  useEffect(()=> {
    const token = localStorage.getItem('unspalashApiToken');
    axios.get(`${URL}me?client_id=${ACCESS_KEY}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((resp) => {
        if(resp.status === 200) {
          setTokenLS(token);
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }, []);

  return [ tokenLS ];
}