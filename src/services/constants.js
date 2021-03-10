const ACCESS_KEY = 'QGavZrwJlOUI5KBN1Y5Goqg01ZPVC0K5TaOllL0B9H8';
const SECRET_KEY = 'yzxt8yxYd2ooTNtUpuuJKJmcr3jAsDGgrQfBlLqkMAY';
const CALLBACK_URL = 'http://localhost:3000/auth';

const API_BASE = 'https://unsplash.com';
const API_AUTHORIZATION_URL = API_BASE + '/oauth/authorize';
const API_GET_TOKEN_URL = API_BASE + '/oauth/token/';

const API_SCOPE = 'public+read_user+write_likes';

export { 
  ACCESS_KEY, 
  SECRET_KEY, 
  CALLBACK_URL, 
  API_AUTHORIZATION_URL,
  API_GET_TOKEN_URL,
  API_SCOPE
};