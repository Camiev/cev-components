import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const Left = ({ facebookIframe }) => (
  <Grid item xs={12} sm={4} align="left">
    <iframe
      key="iframe"
      title="iframe-facebook"
      src={facebookIframe}
      width="340"
      height="160"
      scrolling="no"
      frameBorder="0"
      allow="encrypted-media"
    />
  </Grid>
);

Left.defaultProps = {
  facebookIframe: '',
};

Left.propTypes = {
  facebookIframe: PropTypes.string,
};

export default Left;
