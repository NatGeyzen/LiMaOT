import { configureStore } from '@reduxjs/toolkit';
import user from './user';


const store = configureStore({
    reducer: {
        userReducer: user,
    }
});

export default store;