import {
  BASE_URL,
  ACCESS_KEY,
  SCOPE,
  REDIRECT_URI
} from '../../services/constants';

const authorizationUrl = `${BASE_URL}authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;

export default authorizationUrl;