import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PhotoTape.scss';

const PhotoTape = ({ isAuthorized }) => {
  return(
    <div className="photoTape">
      <div className="container">
        {
          (!isAuthorized) && 
            <p>Для просмотра фотографий, необходимо 
              <Link to={"/auth"}>авторизоваться</Link>
            </p> ||
          (isAuthorized) && <span>PHOTO TAPE</span>
        }
      </div>
    </div>
  );
};

PhotoTape: PropTypes.exact({
  isAuthorized: PropTypes.bool,
})

export default PhotoTape;