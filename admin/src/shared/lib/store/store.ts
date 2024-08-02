import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { mainApi } from '@store/api';
import { authSlice } from '@features/auth';
import { userSlice } from '@entities/user';
import { eventsSlice } from '@features/events';
import { workerSlice } from '@entities/worker';

const rootReducer = combineReducers({
    [mainApi.reducerPath]: mainApi.reducer,
    auth: authSlice.reducer,
    worker: workerSlice.reducer,
    user: userSlice.reducer,
    events: eventsSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware),
    devTools: true,
});

