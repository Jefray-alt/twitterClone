import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const register = createAsyncThunk('auth/register', async () => {
  return {
    payload: [],
  };
});

export const authSlice = createSlice({
  name: 'Auth',
  initialState: {
    errors: null,
    status: 'idle',
    user: null,
    message: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload.user;
        state.user = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.errors = action.payload;
        state.status = 'loading';
      });
  },
});

export const { postTweet } = authSlice.actions;

export default authSlice.reducer;
