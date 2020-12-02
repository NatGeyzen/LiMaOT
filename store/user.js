import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        isNewUser: false
    },
    reducers: {
        switchUserMode: (state, action) => state.isNewUser = !state.isNewUser
    }
});

const { actions, reducer } = userSlice;
export const { switchUserMode } = actions;
export default reducer;

