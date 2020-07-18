import React from 'react';
import { AppBar, Toolbar, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import Logo from './Logo';
import Style from './style.css';

const Header = (props) => {
  const {
    headerLogo,
    menuItems,
    name,
    backgroundColor,
    anchor,
    resize,
  } = props;
  const [anchorEl, setAnchorEl] = anchor;
  const [resizeToolbar, setResizeToolbar] = resize;
  const shrinkOn = 150;
  const classes = Style({ color: backgroundColor });

  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    if (distanceY >= shrinkOn) {
      setResizeToolbar(true);
    } else {
      setResizeToolbar(false);
    }
  };
  window.addEventListener('scroll', resizeHeaderOnScroll);

  return (
    <div className={classes.init}>
      <Container>
        <AppBar
          position="static"
          elevation={0}
          title={<img src={headerLogo} alt={name} />}
        >
          <Toolbar
            className={resizeToolbar ? classes.toolbarSmaller : classes.toolbar}
            disableGutters
          >
            {menuItems.length > 0 && (
              <MenuMobile
                menuItems={menuItems}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                classes={classes}
              />
            )}
            <Logo
              image={headerLogo}
              classes={classes}
              resizeToolbar={resizeToolbar}
            />
            {menuItems.length > 0 && (
              <MenuDesktop menuItems={menuItems} classes={classes} />
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
};

Header.defaultProps = {
  headerLogo: '',
  name: '',
  backgroundColor: '',
  menuItems: [],
};

Header.propTypes = {
  headerLogo: PropTypes.string,
  name: PropTypes.string,
  backgroundColor: PropTypes.string,
  menuItems: PropTypes.array,
  anchor: PropTypes.array,
  resize: PropTypes.array,
};

export default Header;
