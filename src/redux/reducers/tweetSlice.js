import { createSlice } from '@reduxjs/toolkit';

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState: {
    tweets: [],
  },
  reducers: {
    postTweet: (state, action) => {
      state.tweets.push(action.payload);
    },
  },
});

export const { postTweet } = tweetSlice.actions;

export default tweetSlice.reducer;
