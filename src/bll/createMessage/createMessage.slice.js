import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../service/http';

export const createMessageQuery = createAsyncThunk(
    'createMessage/createMessageQuery',
    async (values) => await http.createMessage(values),
);

export const createMessage = createSlice({
    name: 'createMessage',
    initialState: {
        messagesIsLoading: true
    },
    reducers: {},
    extraReducers: {
        [createMessageQuery.pending]: (state, action) => {
            state.messagesIsLoading = true;
        },
        [createMessageQuery.fulfilled]: (state, action) => {
            state.messagesIsLoading = false;
        },
        [createMessageQuery.rejected]: (state, action) => {
            state.messagesIsLoading = false;
        },
    },
});

export default createMessage.reducer;