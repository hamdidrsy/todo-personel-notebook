# Görev Listesi

## Görev 1: Not Güncelleme Özelliği Ekle

**Talep:** Müşteri, mevcut notları düzenleyebilmek istiyor. Şu anda sadece not ekleme ve silme var, güncelleme özelliği eksik.

**Yapılacaklar:**
- [ ] Backend'e PUT /api/notes/:id endpoint'i ekle
- [ ] Controller'a updateNote fonksiyonu ekle
- [ ] Frontend'e noteService.js'e updateNote fonksiyonu ekle
- [ ] NoteList component'ine "Düzenle" butonu ekle
- [ ] Düzenleme için modal veya inline edit özelliği ekle

**Kabul Kriterleri:**
- Kullanıcı bir nota tıklayarak düzenleyebilmeli
- Değişiklikler kaydedildiğinde liste güncellenmelir
- İptal butonu ile düzenlemeden çıkılabilmeli

---

