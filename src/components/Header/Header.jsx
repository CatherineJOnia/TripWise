import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = () => {

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography varient='h5' className={classes.title}>
          TripWise
        </Typography>
        <Box display='flex'>
          <Typography varient='h6' className={classes.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
            <div classname={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
