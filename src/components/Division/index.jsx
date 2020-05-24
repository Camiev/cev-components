import React from 'react';
import {
  Typography,
  Button,
  Grid,
  Icon,
  Box,
  Avatar,
  Card,
  CardActionArea,
  CardMedia,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Style from './style.css';

const Division = (props) => {
  const {
    icon,
    title,
    avatar,
    description,
    rol,
    path,
    items,
    isMain,
    children,
    textButton,
    image,
    youtubeId,
    instagramId,
  } = props;
  return (
    <Style>
      {(icon || avatar || title || rol) && (
        <Grid item xs={12} align="center">
          {icon && <Icon fontSize="large">{icon}</Icon>}
          {avatar && <Avatar alt={title} src={avatar} sizes="larger" />}
          {title && (
            <Typography variant={isMain ? 'h4' : 'h5'}>{title}</Typography>
          )}
          {image && (
            <Link to={path}>
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={title}
                    height="140"
                    image={image}
                    title={title}
                  />
                </CardActionArea>
              </Card>
            </Link>
          )}
          {rol && <Typography variant="subtitle1">{rol}</Typography>}
        </Grid>
      )}
      {(description || youtubeId || instagramId || items.length > 0) && (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12} sm={isMain ? 8 : 12} className="contents">
            {description && (
              <Typography
                variant={isMain ? 'h5' : 'subtitle2'}
                align={isMain ? 'center' : 'justify'}
              >
                {description}
              </Typography>
            )}

            {youtubeId && (
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    component="iframe"
                    title="Video"
                    height={isMain ? '480' : '240'}
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                  />
                </CardActionArea>
              </Card>
            )}

            {instagramId && (
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    component="iframe"
                    title="Video"
                    height={isMain ? '800' : '400'}
                    src={`https://www.instagram.com/p/${instagramId}/embed`}
                  />
                </CardActionArea>
              </Card>
            )}

            {items.length > 0 &&
              items.map((item) => (
                <Typography variant="subtitle2" key={item.key} align="justify">
                  <Icon fontSize="small" className="icon-list">
                    arrow_right
                  </Icon>
                  {`${item.description}`}
                </Typography>
              ))}
          </Grid>
        </Grid>
      )}
      {path && (
        <Grid item xs={12}>
          <Box align="center" mb={3}>
            <Button
              component={Link}
              variant="contained"
              to={path}
              color="primary"
              className="button-more"
            >
              {textButton}
            </Button>
          </Box>
        </Grid>
      )}
      {children}
    </Style>
  );
};

Division.defaultProps = {
  title: '',
  avatar: '',
  icon: '',
  description: '',
  rol: [],
  path: '',
  items: [],
  isMain: false,
  children: false,
  textButton: 'Ver más',
  image: '',
  youtubeId: '',
  instagramId: '',
};

Division.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string,
  rol: PropTypes.node,
  path: PropTypes.string,
  items: PropTypes.array, // eslint-disable-line
  isMain: PropTypes.bool,
  children: PropTypes.node,
  textButton: PropTypes.string,
  image: PropTypes.string,
  youtubeId: PropTypes.string,
  instagramId: PropTypes.string,
};

export default Division;
