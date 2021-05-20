import { useState, useEffect } from 'react';

export function useToken () {
  const [ token, setToken ] = useState('');

  useEffect(() => {
    if (localStorage.getItem('tokenUnsplashApi')) {
      setToken(localStorage.getItem('tokenUnsplashApi'));
    }
  }, []);

  return [token];
};