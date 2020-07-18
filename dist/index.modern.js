import React, { Fragment } from 'react';
import { Box, Icon, Avatar, Typography, Card, CardActionArea, CardMedia, Button, Grid, Link as Link$1, Container, Hidden, IconButton, Menu, MenuItem, AppBar, Toolbar } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Facebook, LinkedIn, Instagram } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

var gray = '#858588';
var useStyles = makeStyles({
  contents: {
    color: gray
  },
  iconList: {
    verticalAlign: 'middle'
  },
  mt: {
    marginTop: '.5em'
  },
  mb: {
    marginBottom: '.5em'
  },
  mainBox: {
    marginTop: '1em',
    marginBottom: '1em'
  }
});

var Division = function Division(props) {
  var icon = props.icon,
      title = props.title,
      avatar = props.avatar,
      description = props.description,
      descriptionAlign = props.descriptionAlign,
      subtitle = props.subtitle,
      path = props.path,
      items = props.items,
      isMain = props.isMain,
      children = props.children,
      textButton = props.textButton,
      image = props.image,
      youtubeId = props.youtubeId,
      instagramId = props.instagramId;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement(Fragment, null, (icon || avatar || title || subtitle || image) && /*#__PURE__*/React.createElement(Box, {
    align: "center",
    className: classes.mainBox
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
    className: classes.mt
  }, /*#__PURE__*/React.createElement(CardActionArea, null, /*#__PURE__*/React.createElement(CardMedia, {
    component: "img",
    alt: title,
    height: "140",
    image: image,
    title: title
  })))), subtitle && /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1"
  }, subtitle)), (description || youtubeId || instagramId || items.length > 0) && /*#__PURE__*/React.createElement(Box, {
    className: classes.contents
  }, description && /*#__PURE__*/React.createElement(Typography, {
    variant: isMain ? 'h5' : 'subtitle2',
    align: descriptionAlign || 'center'
  }, description), youtubeId && /*#__PURE__*/React.createElement(Card, {
    className: classes.card
  }, /*#__PURE__*/React.createElement(CardActionArea, null, /*#__PURE__*/React.createElement(CardMedia, {
    component: "iframe",
    title: "Video",
    height: isMain ? '480' : '240',
    src: "https://www.youtube.com/embed/" + youtubeId
  }))), instagramId && /*#__PURE__*/React.createElement(Card, {
    className: classes.card
  }, /*#__PURE__*/React.createElement(CardActionArea, null, /*#__PURE__*/React.createElement(CardMedia, {
    component: "iframe",
    title: "Video",
    height: isMain ? '800' : '400',
    src: "https://www.instagram.com/p/" + instagramId + "/embed"
  }))), items.length > 0 && items.map(function (item) {
    return /*#__PURE__*/React.createElement(Typography, {
      variant: "subtitle2",
      key: item.key,
      align: "justify"
    }, /*#__PURE__*/React.createElement(Icon, {
      fontSize: "small",
      className: classes.iconList
    }, "arrow_right"), "" + item.description);
  })), path && /*#__PURE__*/React.createElement(Box, {
    align: "center",
    mt: 1
  }, /*#__PURE__*/React.createElement(Button, {
    component: Link,
    variant: "contained",
    to: path,
    color: "primary",
    className: classes.buttonMore
  }, textButton)), children);
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
  instagramId: ''
};
Division.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string,
  descriptionAlign: PropTypes.string,
  subtitle: PropTypes.node,
  path: PropTypes.string,
  items: PropTypes.array,
  isMain: PropTypes.bool,
  children: PropTypes.node,
  textButton: PropTypes.string,
  image: PropTypes.string,
  youtubeId: PropTypes.string,
  instagramId: PropTypes.string
};

var Left = function Left(_ref) {
  var facebookIframe = _ref.facebookIframe;
  return /*#__PURE__*/React.createElement(Grid, {
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
};

Left.defaultProps = {
  facebookIframe: ''
};
Left.propTypes = {
  facebookIframe: PropTypes.string
};

var SocialNetworkIcon = function SocialNetworkIcon(_ref) {
  var children = _ref.children;
  var items = [{
    component: /*#__PURE__*/React.createElement(Facebook, {
      color: "secondary"
    }),
    name: 'facebook'
  }, {
    component: /*#__PURE__*/React.createElement(LinkedIn, {
      color: "secondary"
    }),
    name: 'linkedin'
  }, {
    component: /*#__PURE__*/React.createElement(Instagram, {
      color: "secondary"
    }),
    name: 'instagram'
  }];
  return items.find(function (item) {
    return item.name === children;
  }).component || null;
};

var Right = function Right(_ref2) {
  var texts = _ref2.texts,
      rrss = _ref2.rrss;
  return /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    sm: 4,
    align: "right"
  }, texts.map(function (text) {
    return text.includes('@') ? /*#__PURE__*/React.createElement(Link$1, {
      href: "mailto:" + text,
      color: "inherit",
      key: text
    }, /*#__PURE__*/React.createElement(Box, {
      mt: 1
    }, text)) : /*#__PURE__*/React.createElement(Box, {
      mt: 1,
      key: text
    }, text);
  }), /*#__PURE__*/React.createElement(Box, {
    mt: 1
  }, rrss.map(function (item) {
    return /*#__PURE__*/React.createElement(Link$1, {
      key: item.name,
      href: item.link,
      target: "_blank",
      rel: "noopener noreferrer "
    }, /*#__PURE__*/React.createElement(SocialNetworkIcon, null, item.name));
  })));
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
  downFooter: function downFooter(props) {
    return {
      backgroundColor: props.downBackgroundColor,
      color: 'white'
    };
  }
});

var Footer = function Footer(props) {
  var facebookIframe = props.facebookIframe,
      name = props.name,
      description = props.description,
      texts = props.texts,
      rrss = props.rrss,
      downBackgroundColor = props.downBackgroundColor;
  var classes = Style({
    downBackgroundColor: downBackgroundColor
  });
  var currentYear = new Date().getFullYear();
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
  }, name.toUpperCase() + " " + description + " | Todos los derechos reservados \xA9 " + currentYear))));
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

var MenuDesktop = function MenuDesktop(_ref) {
  var menuItems = _ref.menuItems,
      classes = _ref.classes;

  var _useLocation = useLocation(),
      pathname = _useLocation.pathname;

  var initPathname = "/" + pathname.split('/')[1] || null;
  return /*#__PURE__*/React.createElement(Hidden, {
    smDown: true
  }, menuItems.map(function (menu) {
    return /*#__PURE__*/React.createElement(Button, {
      color: "inherit",
      component: Link,
      to: menu.path,
      key: menu.key
    }, /*#__PURE__*/React.createElement(Icon, {
      className: classes.iconDesktop
    }, menu.icon), /*#__PURE__*/React.createElement("span", null, menu.title, initPathname === menu.path && /*#__PURE__*/React.createElement("span", {
      className: classes.lineBottom
    })));
  }));
};

MenuDesktop.defaultProps = {
  menuItems: []
};
MenuDesktop.propTypes = {
  menuItems: PropTypes.array,
  classes: PropTypes.obj
};

var MenuMobile = function MenuMobile(_ref) {
  var menuItems = _ref.menuItems,
      anchorEl = _ref.anchorEl,
      setAnchorEl = _ref.setAnchorEl,
      classes = _ref.classes;

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/React.createElement(Hidden, {
    mdUp: true
  }, /*#__PURE__*/React.createElement(IconButton, {
    edge: "end",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(MenuIcon, null)), /*#__PURE__*/React.createElement(Menu, {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, menuItems.map(function (menu) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      component: Link,
      to: menu.path,
      onClick: handleClose,
      key: menu.key
    }, menu.title);
  })));
};

MenuMobile.defaultProps = {
  menuItems: []
};
MenuMobile.propTypes = {
  menuItems: PropTypes.array,
  anchorEl: PropTypes.obj,
  setAnchorEl: PropTypes.func,
  classes: PropTypes.obj
};

var Logo = function Logo(_ref) {
  var image = _ref.image,
      alt = _ref.alt,
      classes = _ref.classes,
      resizeToolbar = _ref.resizeToolbar;
  return /*#__PURE__*/React.createElement(Typography, {
    variant: "h6",
    className: classes.title
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    className: resizeToolbar ? classes.imageSmaller : classes.image
  })));
};

Logo.defaultProps = {
  image: '',
  alt: ''
};
Logo.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  classes: PropTypes.obj,
  resizeToolbar: PropTypes.bool
};

var Style$1 = makeStyles({
  init: function init(props) {
    return {
      flexGrow: 0,
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0,
      backgroundColor: props.color,
      zIndex: 2
    };
  },
  lineBottom: {
    left: 'calc(50%)',
    width: '22px',
    bottom: '8px',
    height: '1px',
    position: 'absolute',
    transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: '#fff'
  },
  iconDesktop: {
    paddingRight: '1.1em'
  },
  iconMobile: {
    paddingRight: '1.2em'
  },
  title: {
    flexGrow: '1',
    lineHeight: '1em'
  },
  toolbar: {
    minHeight: '6.5em',
    transition: 'min-height 0.25s ease-out'
  },
  image: {
    maxHeight: '2.8em',
    transition: 'max-height 0.25s ease-out',
    marginLeft: '1em'
  },
  toolbarSmaller: {
    minHeight: '4.5em',
    transition: 'min-height 0.25s ease-out'
  },
  imageSmaller: {
    maxHeight: '2.2em',
    transition: 'max-height 0.25s ease-out',
    marginLeft: '1em'
  }
});

var Header = function Header(props) {
  var headerLogo = props.headerLogo,
      menuItems = props.menuItems,
      name = props.name,
      backgroundColor = props.backgroundColor,
      anchor = props.anchor,
      resize = props.resize;
  var anchorEl = anchor[0],
      setAnchorEl = anchor[1];
  var resizeToolbar = resize[0],
      setResizeToolbar = resize[1];
  var shrinkOn = 150;
  var classes = Style$1({
    color: backgroundColor
  });

  var resizeHeaderOnScroll = function resizeHeaderOnScroll() {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;

    if (distanceY >= shrinkOn) {
      setResizeToolbar(true);
    } else {
      setResizeToolbar(false);
    }
  };

  window.addEventListener('scroll', resizeHeaderOnScroll);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.init
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(AppBar, {
    position: "static",
    elevation: 0,
    title: /*#__PURE__*/React.createElement("img", {
      src: headerLogo,
      alt: name
    })
  }, /*#__PURE__*/React.createElement(Toolbar, {
    className: resizeToolbar ? classes.toolbarSmaller : classes.toolbar,
    disableGutters: true
  }, menuItems.length > 0 && /*#__PURE__*/React.createElement(MenuMobile, {
    menuItems: menuItems,
    anchorEl: anchorEl,
    setAnchorEl: setAnchorEl,
    classes: classes
  }), /*#__PURE__*/React.createElement(Logo, {
    image: headerLogo,
    classes: classes,
    resizeToolbar: resizeToolbar
  }), menuItems.length > 0 && /*#__PURE__*/React.createElement(MenuDesktop, {
    menuItems: menuItems,
    classes: classes
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
  menuItems: PropTypes.array,
  anchor: PropTypes.array,
  resize: PropTypes.array
};

var Style$2 = makeStyles({
  title: {
    fontWeight: 600
  },
  background: function background(props) {
    return {
      color: 'white',
      backgroundImage: "url(" + props.image + ")",
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      paddingTop: '9em',
      paddingBottom: '9em',
      maxWidth: '100%',
      position: 'relative',
      zIndex: 1,
      '&::after': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
        zIndex: -1
      }
    };
  }
});

var Presentation = function Presentation(_ref) {
  var title = _ref.title,
      image = _ref.image;
  var classes = Style$2({
    image: image
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: classes.background
  }, /*#__PURE__*/React.createElement(Grid, {
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

var CevMuiTheme = function CevMuiTheme(props) {
  if (props === void 0) {
    props = {};
  }

  var font = props.font || '"Open sans", "Helvetica", "Arial", sans-serif';
  var colorPrimary = props.colorPrimary || '#6200ee';
  var colorSecondary = props.colorSecondary || '#03dac6';
  return createMuiTheme({
    typography: {
      fontFamily: font
    },
    palette: {
      primary: {
        main: colorPrimary
      },
      secondary: {
        main: colorSecondary
      }
    },
    overrides: {
      MuiButton: {
        root: {
          textAlign: 'center',
          position: 'inherit',
          borderRadius: '1em'
        },
        label: {
          alignItems: 'flex-start'
        }
      },
      MuiTypography: {
        root: {
          whiteSpace: 'pre-wrap'
        },
        h4: {
          fontWeight: 600,
          textTransform: 'uppercase',
          paddingTop: '0.5em'
        },
        subtitle1: {
          fontWeight: 600,
          color: colorPrimary
        },
        subtitle2: {
          fontSize: '1.1em'
        }
      },
      MuiGrid: {
        container: {
          paddingTop: '1em',
          paddingBottom: '1em'
        }
      },
      MuiAvatar: {
        root: {
          width: '10em',
          height: '10em',
          margin: '1em'
        }
      }
    }
  });
};

export { CevMuiTheme, Division, Footer, Header, Presentation };
//# sourceMappingURL=index.modern.js.map
