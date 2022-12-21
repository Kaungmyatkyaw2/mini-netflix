import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../typing";

type initialType = {
    isModalShow : boolean,
    movie : Movie | null
}
const initialState:initialType = {
    isModalShow : false,
    movie : null
}

const ModalSlice = createSlice({
    name : "ModalSlice",
    initialState,
    reducers : {
        showModal: (state:initialType) => {
            state.isModalShow = true
        },
        closeModal: (state:initialType) => {
            state.isModalShow = false
        },
        settingMovie : (state:initialType,action)=> {
            state.movie = action.payload
        }
    }
})

export const {showModal,closeModal,settingMovie} = ModalSlice.actions
export default ModalSlice.reducer