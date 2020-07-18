import React from 'react';
import { IconButton, Hidden, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuMobile = ({ menuItems, anchorEl, setAnchorEl, classes }) => {
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Hidden mdUp>
      <IconButton
        edge="end"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((menu) => (
          <MenuItem
            component={Link}
            to={menu.path}
            onClick={handleClose}
            key={menu.key}
          >
            {menu.title}
          </MenuItem>
        ))}
      </Menu>
    </Hidden>
  );
};

MenuMobile.defaultProps = {
  menuItems: [],
};

MenuMobile.propTypes = {
  menuItems: PropTypes.array,
  anchorEl: PropTypes.obj,
  setAnchorEl: PropTypes.func,
  classes: PropTypes.obj,
};

export default MenuMobile;
