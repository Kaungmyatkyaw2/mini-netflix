import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./AuthSlice"
import ModalSlice from "./ModalSlice"


const store = configureStore({
    reducer : {
        modal : ModalSlice,
        user : AuthSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>