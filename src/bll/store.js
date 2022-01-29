import { configureStore } from '@reduxjs/toolkit';
import listOfMessages from '../bll/listOfMessages/listOfMessages.slice';

export const store = configureStore({
    reducer: {
        listOfMessages,
    },
});

export default store;