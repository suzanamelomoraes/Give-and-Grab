import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h4' className={classes.typographyStyles}>
          Give & Grab
        </Typography>
        <FavoriteIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
