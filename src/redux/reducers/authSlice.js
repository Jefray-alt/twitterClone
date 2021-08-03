import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const register = createAsyncThunk('auth/register', async body => {
  const { data } = axios.post('/auth/register', body);

  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${data.access_token}`;

  return data;
});

export const authSlice = createSlice({
  name: 'Auth',
  initialState: {
    errors: null,
    status: 'idle',
    user: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.errors = action.payload;
        state.status = 'failed';
      });
  },
});

export const { postTweet } = authSlice.actions;

export default authSlice.reducer;
