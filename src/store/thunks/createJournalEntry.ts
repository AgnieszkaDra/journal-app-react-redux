import { createAsyncThunk } from '@reduxjs/toolkit';
import { JournalEntry } from '../../components/features/Forms/Journal/JournalEntry';

export const createJournalEntry = createAsyncThunk(
  'journal/createJournalEntry',
  async (entry: Omit<JournalEntry, 'id'>, { rejectWithValue }) => {
    try {
      const newEntry = {
        ...entry,
        id: Date.now().toString(),
      };
      return newEntry;
    } catch (error) {
      return rejectWithValue('Failed to create journal entry');
    }
  }
);