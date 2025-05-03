import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice';
import journalReducer from './slices/journalSlice';

export const store = configureStore({
    reducer: {
		theme: themeReducer,
		journal: journalReducer,
		},
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



