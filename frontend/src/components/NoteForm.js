import React, { useState } from 'react';

function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Not başlığı"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Not içeriği"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="3"
      />
      <button type="submit">Not Ekle</button>
    </form>
  );
}

export default NoteForm;
