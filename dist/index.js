function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var reactRouterDom = require('react-router-dom');
var PropTypes = _interopDefault(require('prop-types'));
var styles = require('@material-ui/core/styles');
var icons = require('@material-ui/icons');
var MenuIcon = _interopDefault(require('@material-ui/icons/Menu'));
var styled = _interopDefault(require('styled-components'));

var gray = '#858588';
var useStyles = styles.makeStyles({
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
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, (icon || avatar || title || subtitle || image) && /*#__PURE__*/React__default.createElement(core.Box, {
    align: "center",
    className: classes.mainBox
  }, icon && /*#__PURE__*/React__default.createElement(core.Icon, {
    fontSize: "large"
  }, icon), avatar && /*#__PURE__*/React__default.createElement(core.Avatar, {
    alt: title,
    src: avatar,
    sizes: "larger"
  }), title && /*#__PURE__*/React__default.createElement(core.Typography, {
    variant: isMain ? 'h4' : 'h5'
  }, title), image && /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
    to: path
  }, /*#__PURE__*/React__default.createElement(core.Card, {
    className: classes.mt
  }, /*#__PURE__*/React__default.createElement(core.CardActionArea, null, /*#__PURE__*/React__default.createElement(core.CardMedia, {
    component: "img",
    alt: title,
    height: "140",
    image: image,
    title: title
  })))), subtitle && /*#__PURE__*/React__default.createElement(core.Typography, {
    variant: "subtitle1"
  }, subtitle)), (description || youtubeId || instagramId || items.length > 0) && /*#__PURE__*/React__default.createElement(core.Box, {
    className: classes.contents
  }, description && /*#__PURE__*/React__default.createElement(core.Typography, {
    variant: isMain ? 'h5' : 'subtitle2',
    align: descriptionAlign || 'center'
  }, description), youtubeId && /*#__PURE__*/React__default.createElement(core.Card, {
    className: classes.card
  }, /*#__PURE__*/React__default.createElement(core.CardActionArea, null, /*#__PURE__*/React__default.createElement(core.CardMedia, {
    component: "iframe",
    title: "Video",
    height: isMain ? '480' : '240',
    src: "https://www.youtube.com/embed/" + youtubeId
  }))), instagramId && /*#__PURE__*/React__default.createElement(core.Card, {
    className: classes.card
  }, /*#__PURE__*/React__default.createElement(core.CardActionArea, null, /*#__PURE__*/React__default.createElement(core.CardMedia, {
    component: "iframe",
    title: "Video",
    height: isMain ? '800' : '400',
    src: "https://www.instagram.com/p/" + instagramId + "/embed"
  }))), items.length > 0 && items.map(function (item) {
    return /*#__PURE__*/React__default.createElement(core.Typography, {
      variant: "subtitle2",
      key: item.key,
      align: "justify"
    }, /*#__PURE__*/React__default.createElement(core.Icon, {
      fontSize: "small",
      className: classes.iconList
    }, "arrow_right"), "" + item.description);
  })), path && /*#__PURE__*/React__default.createElement(core.Box, {
    align: "center",
    mt: 1
  }, /*#__PURE__*/React__default.createElement(core.Button, {
    component: reactRouterDom.Link,
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
  return /*#__PURE__*/React__default.createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 4,
    align: "left"
  }, /*#__PURE__*/React__default.createElement("iframe", {
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
    component: /*#__PURE__*/React__default.createElement(icons.Facebook, {
      color: "secondary"
    }),
    name: 'facebook'
  }, {
    component: /*#__PURE__*/React__default.createElement(icons.LinkedIn, {
      color: "secondary"
    }),
    name: 'linkedin'
  }, {
    component: /*#__PURE__*/React__default.createElement(icons.Instagram, {
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
  return /*#__PURE__*/React__default.createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 4,
    align: "right"
  }, texts.map(function (text) {
    return text.includes('@') ? /*#__PURE__*/React__default.createElement(core.Link, {
      href: "mailto:" + text,
      color: "inherit",
      key: text
    }, /*#__PURE__*/React__default.createElement(core.Box, {
      mt: 1
    }, text)) : /*#__PURE__*/React__default.createElement(core.Box, {
      mt: 1,
      key: text
    }, text);
  }), /*#__PURE__*/React__default.createElement(core.Box, {
    mt: 1
  }, rrss.map(function (item) {
    return /*#__PURE__*/React__default.createElement(core.Link, {
      key: item.name,
      href: item.link,
      target: "_blank",
      rel: "noopener noreferrer "
    }, /*#__PURE__*/React__default.createElement(SocialNetworkIcon, null, item.name));
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

var Style = styles.makeStyles({
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
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
    className: classes.footer
  }, /*#__PURE__*/React__default.createElement(core.Container, null, /*#__PURE__*/React__default.createElement(core.Grid, {
    container: true,
    direction: "row",
    justify: "space-between"
  }, /*#__PURE__*/React__default.createElement(Left, {
    facebookIframe: facebookIframe
  }), /*#__PURE__*/React__default.createElement(Right, {
    rrss: rrss,
    texts: texts
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: classes.downFooter
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
    container: true,
    direction: "row",
    justify: "space-between"
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
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
  var menuItems = _ref.menuItems;

  var _useLocation = reactRouterDom.useLocation(),
      pathname = _useLocation.pathname;

  var initPathname = "/" + pathname.split('/')[1] || null;
  return /*#__PURE__*/React__default.createElement(core.Hidden, {
    smDown: true
  }, menuItems.map(function (menu) {
    return /*#__PURE__*/React__default.createElement(core.Button, {
      color: "inherit",
      component: reactRouterDom.Link,
      to: menu.path,
      key: menu.key
    }, /*#__PURE__*/React__default.createElement(core.Icon, {
      className: "iconDesktop"
    }, menu.icon), /*#__PURE__*/React__default.createElement("span", null, menu.title, initPathname === menu.path && /*#__PURE__*/React__default.createElement("span", {
      className: "line-bottom"
    })));
  }));
};

MenuDesktop.defaultProps = {
  menuItems: []
};
MenuDesktop.propTypes = {
  menuItems: PropTypes.array
};

var MenuMobile = function MenuMobile(_ref) {
  var menuItems = _ref.menuItems,
      anchorEl = _ref.anchorEl,
      setAnchorEl = _ref.setAnchorEl;

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/React__default.createElement(core.Hidden, {
    mdUp: true
  }, /*#__PURE__*/React__default.createElement(core.IconButton, {
    edge: "end",
    className: "menuButton",
    color: "inherit",
    "aria-label": "menu",
    onClick: handleClick
  }, /*#__PURE__*/React__default.createElement(MenuIcon, null)), /*#__PURE__*/React__default.createElement(core.Menu, {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, menuItems.map(function (menu) {
    return /*#__PURE__*/React__default.createElement(core.MenuItem, {
      component: reactRouterDom.Link,
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
  menuItems: PropTypes.array
};

var Logo = function Logo(_ref) {
  var image = _ref.image,
      alt = _ref.alt;
  return /*#__PURE__*/React__default.createElement(core.Typography, {
    variant: "h6",
    className: "title"
  }, /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
    to: "/"
  }, image && /*#__PURE__*/React__default.createElement("img", {
    src: image,
    alt: alt,
    className: "image"
  })));
};

Logo.defaultProps = {
  image: '',
  alt: ''
};
Logo.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string
};

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n   {\n    flex-grow: 0;\n    position: sticky;\n    top: 0;\n    left: auto;\n    right: 0;\n    background-color: ", ";\n    z-index: 2;\n  }\n  .line-bottom {\n    left: calc(50%);\n    width: 22px;\n    bottom: 8px;\n    height: 1px;\n    position: absolute;\n    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    background-color: #fff;\n  }\n  .iconDesktop {\n    padding-right: 1.1em;\n  }\n  .iconMobile {\n    padding-right: 1.2em;\n  }\n  .title {\n    flex-grow: 1;\n    line-height: 1em;\n  }\n  .toolbar {\n    min-height: 6.5em;\n    transition: min-height 0.25s ease-out;\n  }\n  .toolbar .image {\n    max-height: 2.8em;\n    transition: max-height 0.25s ease-out;\n    margin-left: 1em;\n  }\n  .toolbar.smaller {\n    min-height: 4.5em;\n    transition: min-height 0.25s ease-out;\n  }\n  .toolbar.smaller .image {\n    max-height: 2.2em;\n    transition: max-height 0.25s ease-out;\n    margin-left: 1em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Style$1 = styled.div.attrs(function (props) {
  return {
    backgroundColor: props.backgroundColor
  };
})(_templateObject(), function (props) {
  return props.backgroundColor;
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

  var resizeHeaderOnScroll = function resizeHeaderOnScroll() {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;

    if (distanceY > shrinkOn) {
      setResizeToolbar('toolbar smaller');
    } else {
      setResizeToolbar('toolbar');
    }
  };

  window.addEventListener('scroll', resizeHeaderOnScroll);
  return /*#__PURE__*/React__default.createElement(Style$1, {
    backgroundColor: backgroundColor
  }, /*#__PURE__*/React__default.createElement(core.Container, null, /*#__PURE__*/React__default.createElement(core.AppBar, {
    position: "static",
    elevation: 0,
    title: /*#__PURE__*/React__default.createElement("img", {
      src: headerLogo,
      alt: name
    })
  }, /*#__PURE__*/React__default.createElement(core.Toolbar, {
    className: resizeToolbar || 'toolbar',
    disableGutters: true
  }, menuItems.length > 0 && /*#__PURE__*/React__default.createElement(MenuMobile, {
    menuItems: menuItems,
    anchorEl: anchorEl,
    setAnchorEl: setAnchorEl
  }), /*#__PURE__*/React__default.createElement(Logo, {
    image: headerLogo
  }), menuItems.length > 0 && /*#__PURE__*/React__default.createElement(MenuDesktop, {
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

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  .backgroundImage {\n    background-image:url('", "');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    padding-top: 9em;\n    padding-bottom: 9em;\n    max-width: 100%;\n    position: relative;\n    color: white;\n    z-index: 1;\n  }\n  .title {\n    font-weight: 600;\n  }\n  .backgroundImage::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: -1;\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Style$2 = styled.div.attrs(function (props) {
  return {
    backgroundImage: props.backgroundImage
  };
})(_templateObject$1(), function (props) {
  return props.backgroundImage;
});

var Presentation = function Presentation(_ref) {
  var title = _ref.title,
      image = _ref.image;
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Style$2, {
    backgroundImage: image
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
    className: "backgroundImage",
    align: "center"
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
    item: true,
    xs: 10
  }, /*#__PURE__*/React__default.createElement(core.Typography, {
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
  return styles.createMuiTheme({
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

exports.CevMuiTheme = CevMuiTheme;
exports.Division = Division;
exports.Footer = Footer;
exports.Header = Header;
exports.Presentation = Presentation;
//# sourceMappingURL=index.js.map
