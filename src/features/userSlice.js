import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignedIn: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSignedIn : (state, action) => {
            state.isSignedIn = action.payload
        }
    }
})

export const {setSignedIn} = userSlice.actions

export default userSlice.reducer

