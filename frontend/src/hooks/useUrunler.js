import { useState, useEffect } from 'react';
import { getNotes, createNote, deleteNote, updateNote } from '../services/noteService';

function useUrunler() {
    const [notes, setNotes] = useState([]);
    const [editingNote, setEditingNote] = useState(null);

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

    const handleUpdateNote = async (id, updatedData) => {
        await updateNote(id, updatedData);
        setEditingNote(null);
        loadNotes();
    };

    const handleEditClick = (note) => {
        setEditingNote(note);
    };

    const handleCancelEdit = () => {
        setEditingNote(null);
    };

    return {
        notes,
        editingNote,
        handleAddNote,
        handleDeleteNote,
        handleUpdateNote,
        handleEditClick,
        handleCancelEdit
    };
}

export default useUrunler;
