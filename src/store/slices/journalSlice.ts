import { createSlice } from '@reduxjs/toolkit';
import { createJournalEntry } from '../thunks/createJournalEntry';

const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    entries: [] as { id: string; content: string; date: string }[],
  },
  reducers: {
    deleteEntry: (state, action) => {
      state.entries = state.entries.filter(entry => entry.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJournalEntry.fulfilled, (state, { payload }) => {
        state.entries.push(payload); 
      })
      .addCase(createJournalEntry.rejected, (state, action) => {
        console.error('Failed to create entry:', action.payload);
      });
  },
});

export const { deleteEntry } = journalSlice.actions;
export default journalSlice.reducer;