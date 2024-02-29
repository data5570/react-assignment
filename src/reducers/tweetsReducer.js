// src/reducers/tweetsReducer.js
const initialState = {
    tweets: [
        { id: 1, content: 'Welcome to TweetApp!', timestamp: new Date().toISOString(), profilePhotoUrl: 'default-profile.png', likes: 4 },
        { id: 2, content: 'This is your feed. Start posting some tweets.', timestamp: new Date().toISOString(), profilePhotoUrl: 'default-profile.png', likes: 0 }
    ]
};

const tweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TWEET':
            const newTweet = {
                id: state.tweets.length + 1, // Simple ID assignment, consider a better ID generation strategy for a real app
                content: action.payload.content,
                timestamp: new Date().toISOString(),
                profilePhotoUrl: action.payload.profilePhotoUrl || 'default-profile.png',
                likes: 0
            };
            return {
                ...state,
                tweets: [...state.tweets, newTweet],
            };
        case 'LIKE_TWEET':
            return {
                ...state,
                tweets: state.tweets.map((tweet) =>
                    tweet.id === action.payload ? { ...tweet, likes: tweet.likes + 1 } : tweet
                ),
            };
        default:
            return state;
    }
};

export default tweetsReducer;
