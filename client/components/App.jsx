import React from 'react';
import Header from './Header';
import Categories from './Categories';
import Button from './Button';
import { Grid } from '@material-ui/core';

const App = () => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Categories />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
      <Grid item>
        <Button />
      </Grid>
    </Grid>
  );
};

export default App;
