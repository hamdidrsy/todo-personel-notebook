import React from 'react';

function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return <p>Henüz not yok.</p>;
  }

  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li key={note.id} className="note-item">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => onDelete(note.id)}>Sil</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
