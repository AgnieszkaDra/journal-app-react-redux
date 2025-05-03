import { Entry } from "../types/Entry";

export const loadEntriesFromStorage = (): Entry[] => {
  const stored = localStorage.getItem('journal_entries');
  return stored ? JSON.parse(stored) : [];
};

export const saveEntriesToStorage = (entries: Entry[]) => {
  localStorage.setItem('journal_entries', JSON.stringify(entries));
};