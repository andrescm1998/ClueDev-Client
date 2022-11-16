import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import wsReducer from './workspaces';
import treeReducer from './treeUrl'

export const store = configureStore({
    reducer: {
        user: userReducer,
        ws: wsReducer,
        treeUrl: treeReducer  
    }
})
