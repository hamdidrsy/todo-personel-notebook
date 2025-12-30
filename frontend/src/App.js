import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import useUrunler from './hooks/useUrunler';
import './App.css';

function App() {
  const {
    notes,
    editingNote,
    handleAddNote,
    handleDeleteNote,
    handleUpdateNote,
    handleEditClick,
    handleCancelEdit
  } = useUrunler();

  return (
    <div className="app">
      <h1>Not Defterim</h1>

      <NoteForm onAdd={handleAddNote} />

      <NoteList
        notes={notes}
        editingNote={editingNote}
        onDelete={handleDeleteNote}
        onUpdate={handleUpdateNote}
        onEdit={handleEditClick}
        onCancelEdit={handleCancelEdit}
      />
    </div>
  );
}

export default App;
