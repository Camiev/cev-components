import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ image, alt, classes, resizeToolbar }) => (
  <Typography variant="h6" className={classes.title}>
    <Link to="/">
      {image && (
        <img
          src={image}
          alt={alt}
          className={resizeToolbar ? classes.imageSmaller : classes.image}
        />
      )}
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
  classes: PropTypes.obj,
  resizeToolbar: PropTypes.bool,
};

export default Logo;
