import { createSlice } from '@reduxjs/toolkit';
import {getUsersAsync} from './thunks';
import { REQUEST_STATE } from '../utils';
import { addUserAsync, getUsersAsync } from './thunks';

const INITIAL_STATE = {
  // list: [
  //   { id: 1, name: 'Stephanie'},
  //   { id: 2, name: 'Danya' },
  //   { id: 3, name: 'Ian' }
  // ]
  list: [],
  getUsers: REQUEST_STATE.IDLE,
  addUser: REQUEST_STATE.IDLE,
  error: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  // reducers: {
  //   addUser: (state, action) => {
  //     state.list.push(action.payload)
  //   }
  // },
  // extraReducers: (builder) => {
  //   builder.addCase(getUsersAsync.fulfilled, (state, action) => {
  //     state.list = action.payload;
  //   })
  // }
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.getUsers = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.getUsers = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.getUsers = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(addUserAsync.pending, (state) => {
        state.addUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.addUser = REQUEST_STATE.FULFILLED;
        state.list.push(action.payload);
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        state.addUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  }
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
