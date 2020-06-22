import React from 'react';
import { AppBar, Toolbar, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import Logo from './Logo';
import Style from './style.css';

const Header = (props) => {
  const { headerLogo, menuItems, name, backgroundColor, anchor, resize } = props;
  const [anchorEl, setAnchorEl] = anchor;
  const [resizeToolbar, setResizeToolbar] = resize;
  const shrinkOn = 150;

  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    if (distanceY > shrinkOn) {
      setResizeToolbar('toolbar smaller')
    } else {
      setResizeToolbar('toolbar')
    }
  };
  window.addEventListener('scroll', resizeHeaderOnScroll);

  return (
    <Style backgroundColor={backgroundColor}>
      <Container>
        <AppBar
          position="static"
          elevation={0}
          title={<img src={headerLogo} alt={name} />}
        >
          <Toolbar className={resizeToolbar || 'toolbar'} disableGutters>
            {menuItems.length > 0 && <MenuMobile menuItems={menuItems} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />}
            <Logo image={headerLogo} />
            {menuItems.length > 0 && <MenuDesktop menuItems={menuItems} />}
          </Toolbar>
        </AppBar>
      </Container>
    </Style>
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
  menuItems: PropTypes.array, // eslint-disable-line
};

export default Header;
