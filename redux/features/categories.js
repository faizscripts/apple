import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        setCategoriesList: (state, action) => {
            return action.payload;
        },
    },
});

export const { setCategoriesList } = categoriesSlice.actions;
export default categoriesSlice.reducer;