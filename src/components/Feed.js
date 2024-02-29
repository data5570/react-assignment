import React from 'react';
import { connect } from 'react-redux';
import { Container, Card, CardContent, CardHeader, Avatar, Typography, IconButton } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'; // Import the like icon
import { likeTweet } from '../actions/tweetActions';

const FeedPage = ({ tweets, likeTweet }) => (
  <Container maxWidth="md"> {/* Adjust maxWidth to "md" or "lg" for wider container */}
    <Typography variant="h4" gutterBottom>Feed</Typography>
    {tweets.map((tweet, index) => (
      <Card key={tweet.id} style={{ marginBottom: '20px' }}> {/* Add spacing between cards */}
        <CardHeader
          avatar={<Avatar src={tweet.profilePhotoUrl} alt="Profile" />}
          title={tweet.content}
          subheader={<>Tweeted on {new Date(tweet.timestamp).toLocaleString()} 
                    <>
          <IconButton onClick={() => likeTweet(tweet.id)}>
            <ThumbUpAltIcon />
          </IconButton>
          {tweet.likes}
          </>
          </>}
        />
        <CardContent>

        </CardContent>
      </Card>
    ))}
  </Container>
);


export default connect(
  (state) => ({ tweets: state.tweets.tweets }),
  { likeTweet }
)(FeedPage);
