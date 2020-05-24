import React from 'react';
import { Grid, Box, Link } from '@material-ui/core';
import {
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
} from '@material-ui/icons';
import PropTypes from 'prop-types';

const SocialNetworkIcon = ({ children }) => {
  const items = [
    { component: <FacebookIcon color="primary" />, name: 'facebook' },
    { component: <LinkedInIcon color="primary" />, name: 'linkedin' },
  ];
  return items.find((item) => item.name === children).component || null;
};

const Right = ({ texts, rrss }) => {
  return (
    <Grid item xs={12} sm={4} align="right">
      {texts.map((text) =>
        text.includes('@') ? (
          <Link href={`mailto:${text}`} color="inherit" key={text}>
            <Box mt={1}>{text}</Box>
          </Link>
        ) : (
          <Box mt={1} key={text}>
            {text}
          </Box>
        )
      )}
      <Box mt={1}>
        {rrss.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer "
          >
            <SocialNetworkIcon>{item.name}</SocialNetworkIcon>
          </Link>
        ))}
      </Box>
    </Grid>
  );
};

Right.defaultProps = {
  texts: [],
  rrss: [],
};

Right.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string),
  rrss: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default Right;
