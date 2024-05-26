import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Spring Boot React Full Stack Application 
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}