import { createSlice } from '@reduxjs/toolkit';

const costSlice = createSlice({
    name: 'cost',
    initialState: 0,
    reducers: {
        setCost: (state, action) => {
            return action.payload;
        },
    },
});

export const { setCost } = costSlice.actions;
export default costSlice.reducer;