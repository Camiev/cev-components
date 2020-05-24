import React from 'react';
import { Grid, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import Left from './Left';
import Right from './Right';
import Style from './style.css';

const Footer = (props) => {
  const {
    facebookIframe,
    name,
    description,
    texts,
    rrss,
    downBackgroundColor,
  } = props;
  const classes = Style({ downBackgroundColor });

  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className={classes.footer}>
        <Container>
          <Grid container direction="row" justify="space-between">
            <Left facebookIframe={facebookIframe} />
            <Right rrss={rrss} texts={texts} />
          </Grid>
        </Container>
      </div>
      <div className={classes.downFooter}>
        <Grid container direction="row" justify="space-between">
          <Grid item sm={12} align="center">
            {`${name.toUpperCase()} ${description} | Todos los derechos reservados © ${currentYear}`}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  facebookIframe: '',
  name: '',
  description: '',
  downBackgroundColor: '',
  texts: [],
  rrss: [],
};

Footer.propTypes = {
  facebookIframe: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  downBackgroundColor: PropTypes.string,
  texts: PropTypes.arrayOf(PropTypes.string),
  rrss: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default Footer;
