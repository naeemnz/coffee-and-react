import { createSlice } from "@reduxjs/toolkit";

//user authentication he ya nai muz bar bar de store sa pushto
const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: { //object of functions
        login: (state,action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        //action ki access he lekin zarorat nahi he isliye ma na di likali
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }

    }
})

export const { login, logout } = authSlice.actions; //exporting actions: authSlice.actions men hume hamesha actions milte he jise hum export karte hen
export default authSlice.reducer;

 