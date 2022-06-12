import { getUsers, usersService} from './service';
import { createAsyncThunk} from '@reduxjs/toolkit/';

export const getUsersAsync = createAsyncThunk(
    // name of your action
    'users/getUsers',
    async () => {
        const response = await usersService.getUsers()
        return response.data;
    }
)