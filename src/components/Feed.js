import React from 'react';
import { connect } from 'react-redux';
import { Container, Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';

const FeedPage = ({ tweets }) => (
  <Container maxWidth="md"> {/* Adjust maxWidth to "md" or "lg" for wider container */}
    <Typography variant="h4" gutterBottom>Feed</Typography>
    {tweets.map((tweet, index) => (
      <Card key={index} style={{ marginBottom: '20px' }}> {/* Add spacing between cards */}
        <CardHeader
          avatar={<Avatar src={tweet.profilePhotoUrl} alt="Profile" />}
          title={tweet.content}
          subheader={`Tweeted on ${new Date(tweet.timestamp).toLocaleString()} - Likes: ${tweet.likes}`}
        />
        <CardContent>
          {/* You can add more content here if needed */}
        </CardContent>
      </Card>
    ))}
  </Container>
);

const mapStateToProps = (state) => ({
  tweets: state.tweets.tweets,
});

export default connect(mapStateToProps)(FeedPage);
