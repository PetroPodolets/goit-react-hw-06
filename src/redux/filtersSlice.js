import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
    name: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchQuery(state, action) {
            state.name = action.payload;
        },
    },
});

export const { setSearchQuery } = filtersSlice.actions;
export default filtersSlice.reducer;

// Селектор для отримання відфільтрованих контактів
export const selectFilteredContacts = createSelector(
    (state) => state.contacts.items,
    (state) => state.filters.name,
    (items, searchQuery) => items.filter((item) =>
        item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    )
);