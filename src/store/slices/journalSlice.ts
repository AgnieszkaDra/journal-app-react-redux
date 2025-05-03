import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createJournalEntry } from '../thunks/createJournalEntry';
import { loadEntriesFromStorage, saveEntriesToStorage } from '../../utils/localStorage';
import { Entry } from '../../types/Entry';

type JournalState = {
  entries: Entry[];
};

const initialState: JournalState = {
  entries: loadEntriesFromStorage(),
};

const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    deleteEntry: (state, action: PayloadAction<string>) => {
      state.entries = state.entries.filter(entry => entry.id !== action.payload);
      saveEntriesToStorage(state.entries);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJournalEntry.fulfilled, (state, { payload }) => {
        state.entries.push(payload);
        saveEntriesToStorage(state.entries);
      })
      .addCase(createJournalEntry.rejected, (action) => {
        console.error('Failed to create entry:', action.payload);
      });
  },
});

export const { deleteEntry } = journalSlice.actions;
export default journalSlice.reducer;