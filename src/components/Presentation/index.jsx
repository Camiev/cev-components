import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Style from './style.css';

const Presentation = ({ title, image }) => {
  const classes = Style({ image });
  return (
    <div>
      <div className={classes.background}>
        <Grid align="center">
          <Grid item xs={10}>
            <Typography variant="h2" className="title">
              {title}
            </Typography>
          </Grid>
        </Grid>
      </div>
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
