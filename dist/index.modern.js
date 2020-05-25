import React from 'react';
import { Grid, Icon, Avatar, Typography, Card, CardActionArea, CardMedia, Box, Button, Link as Link$1, Container, Hidden, IconButton, Menu, MenuItem, AppBar, Toolbar } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Facebook, LinkedIn } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

let _ = t => t,
    _t;
const gray = '#858588';
const style = styled.div(_t || (_t = _`
  .contents {
    color: ${0};
  }
  .icon-list {
    vertical-align: middle;
  }
  .card {
    margin-top: 1em;
  }
`), gray);

const Division = props => {
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
    instagramId
  } = props;
  return /*#__PURE__*/React.createElement(style, null, (icon || avatar || title || rol) && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    align: "center"
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    fontSize: "large"
  }, icon), avatar && /*#__PURE__*/React.createElement(Avatar, {
    alt: title,
    src: avatar,
    sizes: "larger"
  }), title && /*#__PURE__*/React.createElement(Typography, {
    variant: isMain ? 'h4' : 'h5'
  }, title), image && /*#__PURE__*/React.createElement(Link, {
    to: path
  }, /*#__PURE__*/React.createElement(Card, {
    className: "card"
  }, /*#__PURE__*/React.createElement(CardActionArea, null, /*#__PURE__*/React.createElement(CardMedia, {
    component: "img",
    alt: title,
    height: "140",
    image: image,
    title: title
  })))), rol && /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1"
  }, rol)), (description || youtubeId || instagramId || items.length > 0) && /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 0,
    direction: "column",
    alignItems: "center",
    justify: "center"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    sm: isMain ? 8 : 12,
    className: "contents"
  }, description && /*#__PURE__*/React.createElement(Typography, {
    variant: isMain ? 'h5' : 'subtitle2',
    align: isMain ? 'center' : 'justify'
  }, description), youtubeId && /*#__PURE__*/React.createElement(Card, {
    className: "card"
  }, /*#__PURE__*/React.createElement(CardActionArea, null, /*#__PURE__*/React.createElement(CardMedia, {
    component: "iframe",
    title: "Video",
    height: isMain ? '480' : '240',
    src: `https://www.youtube.com/embed/${youtubeId}`
  }))), instagramId && /*#__PURE__*/React.createElement(Card, {
    className: "card"
  }, /*#__PURE__*/React.createElement(CardActionArea, null, /*#__PURE__*/React.createElement(CardMedia, {
    component: "iframe",
    title: "Video",
    height: isMain ? '800' : '400',
    src: `https://www.instagram.com/p/${instagramId}/embed`
  }))), items.length > 0 && items.map(item => /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle2",
    key: item.key,
    align: "justify"
  }, /*#__PURE__*/React.createElement(Icon, {
    fontSize: "small",
    className: "icon-list"
  }, "arrow_right"), `${item.description}`)))), path && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    mb: 3
  }, /*#__PURE__*/React.createElement(Button, {
    component: Link,
    variant: "contained",
    to: path,
    color: "primary",
    className: "button-more"
  }, textButton))), children);
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
  instagramId: ''
};
Division.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string,
  rol: PropTypes.node,
  path: PropTypes.string,
  items: PropTypes.array,
  isMain: PropTypes.bool,
  children: PropTypes.node,
  textButton: PropTypes.string,
  image: PropTypes.string,
  youtubeId: PropTypes.string,
  instagramId: PropTypes.string
};

const Left = ({
  facebookIframe
}) => /*#__PURE__*/React.createElement(Grid, {
  item: true,
  xs: 12,
  sm: 4,
  align: "left"
}, /*#__PURE__*/React.createElement("iframe", {
  key: "iframe",
  title: "iframe-facebook",
  src: facebookIframe,
  width: "340",
  height: "160",
  scrolling: "no",
  frameBorder: "0",
  allow: "encrypted-media"
}));

Left.defaultProps = {
  facebookIframe: ''
};
Left.propTypes = {
  facebookIframe: PropTypes.string
};

const SocialNetworkIcon = ({
  children
}) => {
  const items = [{
    component: /*#__PURE__*/React.createElement(Facebook, {
      color: "primary"
    }),
    name: 'facebook'
  }, {
    component: /*#__PURE__*/React.createElement(LinkedIn, {
      color: "primary"
    }),
    name: 'linkedin'
  }];
  return items.find(item => item.name === children).component || null;
};

const Right = ({
  texts,
  rrss
}) => {
  return /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    sm: 4,
    align: "right"
  }, texts.map(text => text.includes('@') ? /*#__PURE__*/React.createElement(Link$1, {
    href: `mailto:${text}`,
    color: "inherit",
    key: text
  }, /*#__PURE__*/React.createElement(Box, {
    mt: 1
  }, text)) : /*#__PURE__*/React.createElement(Box, {
    mt: 1,
    key: text
  }, text)), /*#__PURE__*/React.createElement(Box, {
    mt: 1
  }, rrss.map(item => /*#__PURE__*/React.createElement(Link$1, {
    key: item.name,
    href: item.link,
    target: "_blank",
    rel: "noopener noreferrer "
  }, /*#__PURE__*/React.createElement(SocialNetworkIcon, null, item.name)))));
};

Right.defaultProps = {
  texts: [],
  rrss: []
};
Right.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string),
  rrss: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string
  }))
};

var Style = makeStyles({
  footer: {
    backgroundColor: '#f2f2f2',
    textTransform: 'uppercase',
    marginTop: '2em',
    paddingTop: '2em'
  },
  downFooter: props => ({
    backgroundColor: props.downBackgroundColor,
    color: 'white'
  })
});

const Footer = props => {
  const {
    facebookIframe,
    name,
    description,
    texts,
    rrss,
    downBackgroundColor
  } = props;
  const classes = Style({
    downBackgroundColor
  });
  const currentYear = new Date().getFullYear();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: classes.footer
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    justify: "space-between"
  }, /*#__PURE__*/React.createElement(Left, {
    facebookIframe: facebookIframe
  }), /*#__PURE__*/React.createElement(Right, {
    rrss: rrss,
    texts: texts
  })))), /*#__PURE__*/React.createElement("div", {
    className: classes.downFooter
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    justify: "space-between"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    sm: 12,
    align: "center"
  }, `${name.toUpperCase()} ${description} | Todos los derechos reservados © ${currentYear}`))));
};

Footer.defaultProps = {
  facebookIframe: '',
  name: '',
  description: '',
  downBackgroundColor: '',
  texts: [],
  rrss: []
};
Footer.propTypes = {
  facebookIframe: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  downBackgroundColor: PropTypes.string,
  texts: PropTypes.arrayOf(PropTypes.string),
  rrss: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string
  }))
};

const MenuDesktop = ({
  menuItems
}) => {
  const {
    pathname
  } = useLocation();
  const initPathname = `/${pathname.split('/')[1]}` || null;
  return /*#__PURE__*/React.createElement(Hidden, {
    smDown: true
  }, menuItems.map(menu => /*#__PURE__*/React.createElement(Button, {
    color: "inherit",
    component: Link,
    to: menu.path,
    key: menu.key
  }, /*#__PURE__*/React.createElement(Icon, {
    className: "iconDesktop"
  }, menu.icon), /*#__PURE__*/React.createElement("span", null, menu.title, initPathname === menu.path && /*#__PURE__*/React.createElement("span", {
    className: "line-bottom"
  })))));
};

MenuDesktop.defaultProps = {
  menuItems: []
};
MenuDesktop.propTypes = {
  menuItems: PropTypes.array
};

const MenuMobile = ({
  menuItems,
  anchorEl,
  setAnchorEl
}) => {
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return /*#__PURE__*/React.createElement(Hidden, {
    mdUp: true
  }, /*#__PURE__*/React.createElement(IconButton, {
    edge: "end",
    className: "menuButton",
    color: "inherit",
    "aria-label": "menu",
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(MenuIcon, null)), /*#__PURE__*/React.createElement(Menu, {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, menuItems.map(menu => /*#__PURE__*/React.createElement(MenuItem, {
    component: Link,
    to: menu.path,
    onClick: handleClose,
    key: menu.key
  }, menu.title))));
};

MenuMobile.defaultProps = {
  menuItems: []
};
MenuMobile.propTypes = {
  menuItems: PropTypes.array
};

const Logo = ({
  image,
  alt
}) => /*#__PURE__*/React.createElement(Typography, {
  variant: "h6",
  className: "title"
}, /*#__PURE__*/React.createElement(Link, {
  to: "/"
}, image && /*#__PURE__*/React.createElement("img", {
  src: image,
  alt: alt,
  className: "image"
})));

Logo.defaultProps = {
  image: '',
  alt: ''
};
Logo.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string
};

let _$1 = t => t,
    _t$1;
const Style$1 = styled.div.attrs(props => ({
  backgroundColor: props.backgroundColor
}))(_t$1 || (_t$1 = _$1`
   {
    flex-grow: 0;
    position: sticky;
    top: 0;
    left: auto;
    right: 0;
    background-color: ${0};
    z-index: 2;
  }
  .line-bottom {
    left: calc(50%);
    width: 22px;
    bottom: 8px;
    height: 1px;
    position: absolute;
    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
  }
  .iconDesktop {
    padding-right: 1.1em;
  }
  .iconMobile {
    padding-right: 1.2em;
  }
  .title {
    flex-grow: 1;
    line-height: 1em;
  }
  .image {
    max-height: 2.5em;
    margin-left: 1em;
  }
  .toolbar {
    min-height: 5.5em;
  }
`), props => props.backgroundColor);

const Header = props => {
  const {
    headerLogo,
    menuItems,
    name,
    backgroundColor,
    anchor
  } = props;
  const [anchorEl, setAnchorEl] = anchor;
  return /*#__PURE__*/React.createElement(Style$1, {
    backgroundColor: backgroundColor
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(AppBar, {
    position: "static",
    elevation: 0,
    title: /*#__PURE__*/React.createElement("img", {
      src: headerLogo,
      alt: name
    })
  }, /*#__PURE__*/React.createElement(Toolbar, {
    className: "toolbar",
    disableGutters: true
  }, menuItems.length > 0 && /*#__PURE__*/React.createElement(MenuMobile, {
    menuItems: menuItems,
    anchorEl: anchorEl,
    setAnchorEl: setAnchorEl
  }), /*#__PURE__*/React.createElement(Logo, {
    image: headerLogo
  }), menuItems.length > 0 && /*#__PURE__*/React.createElement(MenuDesktop, {
    menuItems: menuItems
  })))));
};

Header.defaultProps = {
  headerLogo: '',
  name: '',
  backgroundColor: '',
  menuItems: []
};
Header.propTypes = {
  headerLogo: PropTypes.string,
  name: PropTypes.string,
  backgroundColor: PropTypes.string,
  menuItems: PropTypes.array
};

let _$2 = t => t,
    _t$2;
const Style$2 = styled.div.attrs(props => ({
  backgroundImage: props.backgroundImage
}))(_t$2 || (_t$2 = _$2`
  .backgroundImage {
    background-image:url('${0}');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    padding-top: 9em;
    padding-bottom: 9em;
    max-width: 100%;
    position: relative;
    color: white;
    z-index: 1;
  }
  .title {
    font-weight: 600;
  }
  .backgroundImage::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
`), props => props.backgroundImage);

const Presentation = ({
  title,
  image
}) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Style$2, {
    backgroundImage: image
  }, /*#__PURE__*/React.createElement(Grid, {
    className: "backgroundImage",
    align: "center"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 10
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h2",
    className: "title"
  }, title)))));
};

Presentation.defaultProps = {
  title: '',
  image: ''
};
Presentation.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
};

export { Division, Footer, Header, Presentation };
//# sourceMappingURL=index.modern.js.map
