import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import wsReducer from './workspaces';

export const store = configureStore({
    reducer: {
        user: userReducer,
        ws: wsReducer,   
    }
})
