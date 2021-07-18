import { configureStore } from '@reduxjs/toolkit';
import tweetReducer from './reducers/tweetSlice';

export default configureStore({
  reducer: {
    tweet: tweetReducer,
  },
});
