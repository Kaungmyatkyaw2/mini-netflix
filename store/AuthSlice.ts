import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { Movie } from "../typing";


export type initialType = {
    user : User | null,
    myMovie : Movie[] | DocumentData[] | []
}

const initialState:initialType = {
    user : null,
    myMovie : []
}

const AuthSlicer = createSlice({
    name : "AuthSlicer",
    initialState,
    reducers : {
        setUser : (state:initialType,action) => {
            state.user = action.payload
        },
        settingMyMovie : (state:initialType,action) => {
            state.myMovie = action.payload
        }
    }
})

export const {setUser,settingMyMovie} = AuthSlicer.actions
export default AuthSlicer.reducer