// src/reducers/index.js
import { combineReducers } from 'redux';
import tweetsReducer from './tweetsReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  profile: profileReducer
});

export default rootReducer;
