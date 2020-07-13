import React, { Fragment } from 'react';
import {
  Typography,
  Button,
  Icon,
  Box,
  Avatar,
  Card,
  CardActionArea,
  CardMedia,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const gray = '#858588';
const useStyles = makeStyles({
  contents: {
    color: gray,
  },
  iconList: {
    verticalAlign: 'middle',
  },
  mt: {
    marginTop: '.5em',
  },
  mb: {
    marginBottom: '.5em',
  },
  mainBox: {
    marginTop: '1em',
    marginBottom: '1em',
  },
});

const Division = (props) => {
  const {
    icon,
    title,
    avatar,
    description,
    descriptionAlign,
    subtitle,
    path,
    items,
    isMain,
    children,
    textButton,
    image,
    youtubeId,
    instagramId,
  } = props;
  const classes = useStyles();
  return (
    <Fragment>
      {(icon || avatar || title || subtitle || image) && (
        <Box align="center" className={classes.mainBox}>
          {icon && <Icon fontSize="large">{icon}</Icon>}
          {avatar && <Avatar alt={title} src={avatar} sizes="larger" />}
          {title && (
            <Typography variant={isMain ? 'h4' : 'h5'}>{title}</Typography>
          )}
          {image && (
            <Link to={path}>
              <Card className={classes.mt}>
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
          {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
        </Box>
      )}
      {(description || youtubeId || instagramId || items.length > 0) && (
        <Box className={classes.contents}>
          {description && (
            <Typography
              variant={isMain ? 'h5' : 'subtitle2'}
              align={descriptionAlign || 'center'}
            >
              {description}
            </Typography>
          )}

          {youtubeId && (
            <Card className={classes.card}>
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
            <Card className={classes.card}>
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
                <Icon fontSize="small" className={classes.iconList}>
                  arrow_right
                </Icon>
                {`${item.description}`}
              </Typography>
            ))}
        </Box>
      )}
      {path && (
        <Box align="center" mt={1}>
          <Button
            component={Link}
            variant="contained"
            to={path}
            color="primary"
            className={classes.buttonMore}
          >
            {textButton}
          </Button>
        </Box>
      )}
      {children}
    </Fragment>
  );
};

Division.defaultProps = {
  title: '',
  avatar: '',
  icon: '',
  description: '',
  descriptionAlign: '',
  subtitle: [],
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
  descriptionAlign: PropTypes.string,
  subtitle: PropTypes.node,
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
