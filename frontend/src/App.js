import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { getNotes, createNote, deleteNote } from './services/noteService';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  const handleAddNote = async (note) => {
    await createNote(note);
    loadNotes();
  };

  const handleDeleteNote = async (id) => {
    await deleteNote(id);
    loadNotes();
  };

  return (
    <div className="app">
      <h1>Not Defterim</h1>
      <NoteForm onAdd={handleAddNote} />
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
}

export default App;
