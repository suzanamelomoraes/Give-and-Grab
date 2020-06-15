import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography>Give & Grab</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
