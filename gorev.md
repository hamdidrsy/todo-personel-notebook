# Görev Listesi

## Görev 1: Not Güncelleme Özelliği Ekle

**Talep:** Müşteri, mevcut notları düzenleyebilmek istiyor. Şu anda sadece not ekleme ve silme var, güncelleme özelliği eksik.

**Yapılacaklar:**
- [x] Backend'e PUT /api/notes/:id endpoint'i ekle
- [x] Controller'a updateNote fonksiyonu ekle
- [x] Frontend'e noteService.js'e updateNote fonksiyonu ekle
- [x] NoteList component'ine "Düzenle" butonu ekle
- [x] Düzenleme için modal veya inline edit özelliği ekle

**Kabul Kriterleri:**
- Kullanıcı bir nota tıklayarak düzenleyebilmeli
- Değişiklikler kaydedildiğinde liste güncellenmelir
- İptal butonu ile düzenlemeden çıkılabilmeli

---

