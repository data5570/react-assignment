
import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { connect } from 'react-redux';
import { addTweet } from '../actions/tweetActions';

const HomePage = (props) => {
  const [tweet, setTweet] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // props.addTweet(tweet);
    props.addTweet({ content: tweet, profilePhotoUrl: "optional-profile-photo-url.png" });
    setTweet('');
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Post a Tweet
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="What's happening?"
          variant="outlined"
          fullWidth
          margin="normal"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Tweet
        </Button>
      </form>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
    addTweet: (tweet) => dispatch(addTweet(tweet)),
  });
  
export default connect(null, mapDispatchToProps)(HomePage);
