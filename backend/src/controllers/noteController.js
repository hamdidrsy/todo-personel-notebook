const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../data/notes.json');

// Notları oku
const readNotes = () => {
  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(path.dirname(dataPath), { recursive: true });
    fs.writeFileSync(dataPath, JSON.stringify([]));
    return [];
  }
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
};

// Notları kaydet
const saveNotes = (notes) => {
  fs.writeFileSync(dataPath, JSON.stringify(notes, null, 2));
};

// Tüm notları getir
exports.getAllNotes = (req, res) => {
  const notes = readNotes();
  res.json(notes);
};

// Yeni not ekle
exports.createNote = (req, res) => {
  const notes = readNotes();
  const newNote = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content,
    createdAt: new Date().toISOString()
  };
  notes.push(newNote);
  saveNotes(notes);
  res.status(201).json(newNote);
};

// Not sil
exports.deleteNote = (req, res) => {
  let notes = readNotes();
  const id = parseInt(req.params.id);
  notes = notes.filter(note => note.id !== id);
  saveNotes(notes);
  res.json({ message: 'Not silindi' });
};
