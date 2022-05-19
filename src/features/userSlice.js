import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignedIn: false,
    userData: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSignedIn : (state, action) => {
            state.isSignedIn = action.payload
        },
        
        setData : (state, action) => {
            state.userData = action.payload
        }
    }
})

export const {setSignedIn, setData} = userSlice.actions

export default userSlice.reducer

