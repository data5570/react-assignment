import React, { useState } from 'react';
import { Avatar, Typography, Button, TextField, Container } from '@mui/material';
import { connect } from 'react-redux';
import { setProfile  } from '../actions/profileActions';

const ProfilePage = ({ profile, setProfile }) => {
  // For demonstration purposes, let's just display the current profile information
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Profile</Typography>
      <Typography variant="h6">{profile.username}</Typography>
      <Avatar src={profile.profilePhotoUrl} alt="Profile" />
      {/* Add form or button to edit profile here */}
    </Container>
  );
};

// Connect components to Redux store
const ProfilePageConnected = connect((state) => ({ profile: state.profile }), { setProfile })(ProfilePage);

export default ProfilePageConnected;