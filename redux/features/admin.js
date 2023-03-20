import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = {
    adminCredentials: []
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {value : initialStateValue} ,
    reducers: {
        setAdmin: (state , action) => {
            state.value = action.payload
        }
    }
})

export const{setAdmin} = adminSlice.actions
export default adminSlice.reducer