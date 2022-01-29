import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../service/http';

export const fetchMessages = createAsyncThunk(
    'listOfMessages/fetchMessages',
    async () => await http.getAllMessages(),
);

export const listOfMessages = createSlice({
    name: 'listOfMessages',
    initialState: {
        messagesData: [],
        messagesIsLoading: true,
    },
    reducers: {},
    extraReducers: {
        [fetchMessages.pending]: (state, action) => {
            state.messagesIsLoading = true;
        },
        [fetchMessages.fulfilled]: (state, action) => {
            state.messagesData = action.payload;
            state.messagesIsLoading = false;
        },
        [fetchMessages.rejected]: (state, action) => {
            state.messagesIsLoading = false;
        },
    },
});

export default listOfMessages.reducer;