import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ image, alt }) => (
  <Typography variant="h6" className="title">
    <Link to="/">
      {image && <img src={image} alt={alt} className="image" />}
    </Link>
  </Typography>
);

Logo.defaultProps = {
  image: '',
  alt: '',
};

Logo.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default Logo;
