import React from 'react';
import { Button, Hidden, Icon } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuDesktop = ({ menuItems, classes }) => {
  const { pathname } = useLocation();
  const initPathname = `/${pathname.split('/')[1]}` || null;

  return (
    <Hidden smDown>
      {menuItems.map((menu) => (
        <Button color="inherit" component={Link} to={menu.path} key={menu.key}>
          <Icon className={classes.iconDesktop}>{menu.icon}</Icon>
          <span>
            {menu.title}
            {initPathname === menu.path && (
              <span className={classes.lineBottom} />
            )}
          </span>
        </Button>
      ))}
    </Hidden>
  );
};

MenuDesktop.defaultProps = {
  menuItems: [],
};

MenuDesktop.propTypes = {
  menuItems: PropTypes.array,
  classes: PropTypes.obj,
};

export default MenuDesktop;
