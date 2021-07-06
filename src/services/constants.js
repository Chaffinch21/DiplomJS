const BASE_URL = 'https://unsplash.com/oauth/';

const ACCESS_KEY = 'QGavZrwJlOUI5KBN1Y5Goqg01ZPVC0K5TaOllL0B9H8';
const SECRET_KEY = 'yzxt8yxYd2ooTNtUpuuJKJmcr3jAsDGgrQfBlLqkMAY';
const REDIRECT_URI = 'http://localhost:3000/auth';
const SCOPE = 'public+read_user+write_likes';

const AUTHORIZATION_URL = `${BASE_URL}authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;
const POST_TOKEN_URL = `${BASE_URL}token`;

export {
  BASE_URL,
  ACCESS_KEY,
  SECRET_KEY,
  REDIRECT_URI,
  SCOPE,
  AUTHORIZATION_URL,
  POST_TOKEN_URL
};