import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        isNewUser: false
    },
    reducers: {
        switchUserMode: (state, action) => state.isNewUser = !state.isNewUser
    }
});

const { actions, reducer } = user;
export const { switchUserMode } = actions;
export default reducer;

