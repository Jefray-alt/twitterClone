import { configureStore } from '@reduxjs/toolkit';
import tweetReducer from './reducers/tweetSlice';
import authReducer from './reducers/authSlice';

export default configureStore({
  reducer: {
    tweet: tweetReducer,
    auth: authReducer,
  },
});
