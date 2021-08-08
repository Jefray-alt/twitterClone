import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const register = createAsyncThunk('auth/register', async body => {
  const { data } = await axios.post('/auth/register', body);
  return data;
});

export const me = createAsyncThunk('auth/me', async () => {
  const { data } = await axios.get('profile/me');
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
      // Registration
      .addCase(register.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.user = payload.user;
        localStorage.setItem('access_token', payload.access_token);
      })
      .addCase(register.rejected, (state, action) => {
        state.errors = action.payload;
        state.status = 'failed';
      })
      // Me
      .addCase(me.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(me.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.user = payload.user;
      })
      .addCase(me.rejected, (state, action) => {
        state.errors = action.payload;
        state.status = 'failed';
      });
  },
});

export const { postTweet } = authSlice.actions;

export default authSlice.reducer;
