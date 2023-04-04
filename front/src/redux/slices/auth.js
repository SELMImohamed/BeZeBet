import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null
    },
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload
        },
    }
})


export const { setAuth, clearState } = authSlice.actions

export default authSlice.reducer