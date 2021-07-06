import { useState, useEffect } from 'react';

export function useLocalStorage() {
  const [ tokenLS, setTokenLS] = useState('');

  useEffect(()=> {
    const token = localStorage.getItem('unspalashApiToken');
    setTokenLS(token);
  }, []);

  return [ tokenLS ];
}