export class JournalEntry {
  id: string;
  content: string;
  date: string;

  constructor(content: string, date?: string, id?: string) {
    this.id = id ?? crypto.randomUUID();
    this.content = content;
    this.date = date ?? new Date().toISOString();
  }

  getFormattedDate() {
    return new Date(this.date).toLocaleString();
  }
}