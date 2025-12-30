const API_URL = 'http://localhost:5000/api/notes';

export const getNotes = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createNote = async (note) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  });
  return response.json();
};

// Not güncelle
export const updateNote = async (id, note) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  });
  return response.json();
};

export const deleteNote = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
