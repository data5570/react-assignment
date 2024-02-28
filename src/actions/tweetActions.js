// src/actions/tweetActions.js
export const addTweet = (tweetData) => ({
    type: 'ADD_TWEET',
    payload: tweetData, // tweetData should be an object { content: "...", profilePhotoUrl: "..." }
  });