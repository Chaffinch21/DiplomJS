import React from 'react';
import PropTypes from 'prop-types';

import getIcon from './getIcon';

const Icon = ({typeIcon}) => {
  return(
    <>
      {getIcon(typeIcon)}
    </>
  );
};

Icon: PropTypes.exact ({
  typeIcon: PropTypes.string.isRequired,
});

export default Icon;