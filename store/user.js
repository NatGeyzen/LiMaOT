import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        isReturningUser: null
    },
    reducers: {
        setUserMode: (state, action) => { action.payload === 'returning' ? state.isReturningUser = true : state.isReturningUser = false},
        switchUserMode: (state) => {state.isReturningUser = !state.isReturningUser},
        authUser: (state, action) => state.authData = action.payload,
        authUserSuccess: (state, action) => state.userId = action.payload
    }
});

export const { setUserMode, switchUserMode, authUser, authUserSuccess } = user.actions;
export default user.reducer;