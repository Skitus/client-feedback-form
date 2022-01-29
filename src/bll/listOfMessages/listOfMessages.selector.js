import { createSelector } from 'reselect';

export const listOfMessagesSelector = createSelector(
    (state) => state,
    (state) => state.listOfMessages,
);