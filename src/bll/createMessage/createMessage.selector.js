import { createSelector } from 'reselect';

export const createMessageSelector = createSelector(
    (state) => state,
    (state) => state.createMessage,
);