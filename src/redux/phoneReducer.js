import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataPhoneAsync = createAsyncThunk('getDataPhoneAsync',async (payload,{dispatch }) => {
    return axios.get("https://address-book-exp-api.herokuapp.com/users?page=1")
    .then((res) => {
        return res.data.data
    })
})

export const dataSlice = createSlice({
    name: 'dataPhone',
    initialState: {
        listPhone: [],
        loading: false
    },
    reducers: {

    },
    extraReducers: {
        [getDataPhoneAsync.pending]: (state, action) => {
            state.loading = true
        },
        [getDataPhoneAsync.fulfilled]: (state, action) => {
            state.loading = false;
            state.listPhone = action.payload
        }
    }
})


export default dataSlice.reducer