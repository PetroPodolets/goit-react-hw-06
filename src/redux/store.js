import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { tasksReducer } from './contactsSlice';
import searchReducer from './filtersSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const persistedtasksReducer = persistReducer(
    {
        key: 'items',
        storage,
        // whitelist: ['name', 'number'],
    },
    tasksReducer
);




export const store = configureStore({
    reducer: {
        contacts: persistedtasksReducer,
        filters: searchReducer,

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
