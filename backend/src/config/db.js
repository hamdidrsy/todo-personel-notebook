// Veritabanı bağlantı ayarları
// Şimdilik JSON dosyası kullanılıyor
// İleride MongoDB veya PostgreSQL eklenebilir

const path = require('path');

const dbPath = path.join(__dirname, '../../data/notes.json');

module.exports = { dbPath };
