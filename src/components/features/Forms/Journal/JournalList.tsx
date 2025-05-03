import React from 'react';

type JournalListEntry = {
  id: string;
  content: string;
  date: string;
};

type Props = {
  entries: JournalListEntry[];
  onDelete: (id: string) => void;
};

const JournalList: React.FC<Props> = ({ entries, onDelete }) => {
  console.log(entries);
  if (entries.length === 0) {
    return <p>Brak wpisów w dzienniku.</p>;
  }

  return (
    <ul style={{ padding: 0, listStyle: 'none' }}>
      {entries.map(({ id, content, date }) => (
        <li
          key={id}
          style={{
            marginBottom: '1rem',
            borderBottom: '1px solid #ccc',
            paddingBottom: '0.5rem',
          }}
        >
          <p>
            <strong>{new Date(date).toLocaleString()}</strong>
          </p>
          <p>{content}</p>
          <button onClick={() => onDelete(id)}>Usuń</button>
        </li>
      ))}
    </ul>
  );
};

export default JournalList;