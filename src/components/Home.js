
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTweet } from '../actions/tweetActions';
import { Container, TextField, Button, FormHelperText, Typography } from '@mui/material';

const HomePage = ({ addTweet }) => {
  const [tweetContent, setTweetContent] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!tweetContent.trim()) {
      setError(true);
      return;
    }
    addTweet({
      id: Date.now(), // Using timestamp as a mock ID
      content: tweetContent,
      timestamp: new Date().toISOString(),
      profilePhotoUrl: 'default-profile.png', // This should be dynamic in a real app
      likes: 0,
    });
    setTweetContent('');
    setError(false); // Reset error state if submission is successful
  };

  const handleChange = (event) => {
    setError(false); // Remove error when user starts typing
    setTweetContent(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Home</Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="What's happening?"
          value={tweetContent}
          onChange={handleChange}
          error={error}
          helperText={error ? "This field is required" : ""}
        />
        <Button type="submit" variant="contained" color="primary">
          Tweet
        </Button>
        {error && <FormHelperText error>{error ? "You can't send an empty tweet." : ""}</FormHelperText>}
      </form>
    </Container>
  );
};

export default connect(null, { addTweet })(HomePage);
