import { createSlice } from "@reduxjs/toolkit";


export type initialType = {
    user : {}
}

const initialState:initialType = {
    user : {}
}

const AuthSlicer = createSlice({
    name : "AuthSlicer",
    initialState,
    reducers : {
        setUser : (state:initialType,action) => {
            state.user = action.payload
        }
    }
})

export const {setUser} = AuthSlicer.actions
export default AuthSlicer.reducer