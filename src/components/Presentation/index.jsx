import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Style from './style.css';

const Presentation = ({ title, image }) => {
  return (
    <div>
     <Style backgroundImage={image}>
      <Grid className="backgroundImage" align="center">
        <Grid item xs={10}>
          <Typography variant="h2" className="title">
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Style>
    </div>
  );
};

Presentation.defaultProps = {
  title: '',
  image: '',
};

Presentation.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Presentation;
