import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My React App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/feed">
          Feed
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;