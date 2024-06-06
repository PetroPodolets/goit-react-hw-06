import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactState = {
    items:
        [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
};

const tasksSlice = createSlice({
    name: 'items',
    initialState: contactState,
    reducers: {
        addTask: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(newContact) {
                return {
                    payload: newContact,
                };
            },
        },


        deleteTask(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },

    },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
