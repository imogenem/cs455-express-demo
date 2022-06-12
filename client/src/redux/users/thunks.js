import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const getUsersAsync = createAsyncThunk(
  actionTypes.GET_USERS,
  async () => {
    return await UserService.getUsers();
  }
);

export const addUserAsync = createAsyncThunk(
  actionTypes.ADD_USER,
  async (name) => {
    return await UserService.addUser({ name });
  }
);

// import { getUsers, usersService} from './service';
// import { createAsyncThunk} from '@reduxjs/toolkit/';

// export const getUsersAsync = createAsyncThunk(
//     // name of your action
//     'users/getUsers',
//     async () => {
//         const response = await usersService.getUsers()
//         return response.data;
//     }
// )