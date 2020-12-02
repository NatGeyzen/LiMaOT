import { configureStore } from '@reduxjs/toolkit';
import user from './user';

const store = configureStore({
    userReducer: user.reducer
});

export default store;