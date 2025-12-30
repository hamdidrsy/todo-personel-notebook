import React, { useState, useEffect } from 'react';

function NoteList({ notes, editingNote, onDelete, onUpdate, onEdit, onCancelEdit }) {
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  // Düzenlenen not değiştiğinde formu doldur
  useEffect(() => {
    if (editingNote) {
      setEditTitle(editingNote.title);
      setEditContent(editingNote.content);
    }
  }, [editingNote]);

  const handleSave = (id) => {
    if (!editTitle.trim()) {
      alert('Başlık boş olamaz!');
      return;
    }
    onUpdate(id, { title: editTitle, content: editContent });
  };

  if (notes.length === 0) {
    return <p>Henüz not yok.</p>;
  }

  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li key={note.id} className="note-item">
          {editingNote && editingNote.id === note.id ? (
            // Düzenleme modu
            <div className="edit-form">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Başlık"
              />
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                placeholder="İçerik"
              />
              <div className="edit-buttons">
                <button className="save-btn" onClick={() => handleSave(note.id)}>
                  Kaydet
                </button>
                <button className="cancel-btn" onClick={onCancelEdit}>
                  İptal
                </button>
              </div>
            </div>
          ) : (
            // Görüntüleme modu
            <>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div className="note-buttons">
                <button className="update-button-click" onClick={() => onEdit(note)}>
                  Düzenle
                </button>
                <button className="update-button-click delete-btn" onClick={() => onDelete(note.id)}>
                  Sil
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
