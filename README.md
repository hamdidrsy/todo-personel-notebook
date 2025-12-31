# Personal Notebook

Basit ve kullanışlı bir kişisel not tutma uygulaması. React frontend ve Express.js backend ile geliştirilmiştir.

---

## Proje Hakkında

Bu proje, kullanıcıların kişisel notlarını oluşturabileceği, görüntüleyebileceği, düzenleyebileceği ve silebileceği bir web uygulamasıdır. Proje, öğrenme amaçlı tasarlanmış olup yeni özellikler eklenerek geliştirilmeye açıktır.

### Amaç

- Full-stack web geliştirme pratiği yapmak
- REST API tasarımını öğrenmek
- React ile component-based mimari uygulamak
- Gerçek dünya senaryolarında task-based geliştirme deneyimi kazanmak

---

## Teknolojiler

### Backend
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| Node.js | 18+ | JavaScript runtime |
| Express.js | 4.18.2 | Web framework |
| CORS | 2.8.5 | Cross-origin resource sharing |
| dotenv | 16.3.1 | Ortam değişkenleri yönetimi |
| Nodemon | 3.0.2 | Geliştirme sunucusu (hot reload) |

### Frontend
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| React | 18.2.0 | UI kütüphanesi |
| React DOM | 18.2.0 | DOM rendering |
| React Scripts | 5.0.1 | Build araçları |

### Veri Depolama
- JSON dosyası (backend/data/notes.json)
- İleride MongoDB veya PostgreSQL'e geçiş yapılabilir

---

## Proje Yapısı

```
personal-notebook/
│
├── backend/                    # Sunucu tarafı
│   ├── src/
│   │   ├── routes/
│   │   │   └── noteRoutes.js  # API route tanımları
│   │   ├── controllers/
│   │   │   └── noteController.js  # İş mantığı (CRUD)
│   │   └── index.js           # Express sunucu başlatma
│   ├── data/
│   │   └── notes.json         # Not verileri (otomatik oluşur)
│   ├── .env                   # Ortam değişkenleri
│   └── package.json
│
├── frontend/                   # İstemci tarafı
│   ├── public/
│   │   └── index.html         # Ana HTML dosyası
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteForm.js    # Not ekleme formu
│   │   │   └── NoteList.js    # Not listesi ve düzenleme
│   │   ├── hooks/
│   │   │   └── useUrunler.js  # State yönetimi hook'u
│   │   ├── services/
│   │   │   └── noteService.js # API çağrıları
│   │   ├── App.js             # Ana uygulama bileşeni
│   │   ├── App.css            # Stil dosyası
│   │   └── index.js           # React giriş noktası
│   └── package.json
│
├── gorev.md                   # Geliştirme görevleri
└── README.md                  # Bu dosya
```

---

## Kurulum

### Gereksinimler
- Node.js (v18 veya üzeri)
- npm (v9 veya üzeri)

### Adımlar

**1. Projeyi klonla veya dizine git:**
```bash
cd personal-notebook
```

**2. Backend kurulumu:**
```bash
cd backend
npm install
```

**3. Frontend kurulumu:**
```bash
cd ../frontend
npm install
```

---

## Çalıştırma

### Geliştirme Modu

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend http://localhost:5000 adresinde çalışır.

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
Frontend http://localhost:3000 adresinde açılır.

### Prodüksiyon

```bash
# Backend
cd backend
npm start

# Frontend build
cd frontend
npm run build
```

---

## API Dokümantasyonu

Base URL: `http://localhost:5000/api`

### Endpoints

#### Tüm Notları Getir
```http
GET /notes
```
**Response:**
```json
[
  {
    "id": 1703847123456,
    "title": "Not Başlığı",
    "content": "Not içeriği buraya gelir",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
]
```

#### Yeni Not Oluştur
```http
POST /notes
Content-Type: application/json

{
  "title": "Yeni Not",
  "content": "Not içeriği"
}
```
**Response:** `201 Created`
```json
{
  "id": 1703847123456,
  "title": "Yeni Not",
  "content": "Not içeriği",
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

#### Not Güncelle
```http
PUT /notes/:id
Content-Type: application/json

{
  "title": "Güncellenmiş Başlık",
  "content": "Güncellenmiş içerik"
}
```
**Response:**
```json
{
  "id": 1703847123456,
  "title": "Güncellenmiş Başlık",
  "content": "Güncellenmiş içerik",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T12:00:00.000Z"
}
```

#### Not Sil
```http
DELETE /notes/:id
```
**Response:**
```json
{
  "message": "Not silindi"
}
```

---

## Mevcut Özellikler

| Özellik | Durum | Açıklama |
|---------|-------|----------|
| Not Ekleme | Tamamlandı | Başlık ve içerik ile yeni not oluşturma |
| Not Listeleme | Tamamlandı | Tüm notları görüntüleme |
| Not Güncelleme | Tamamlandı | Inline düzenleme ile not güncelleme |
| Not Silme | Tamamlandı | Tek tıkla not silme |
| Responsive Tasarım | Tamamlandı | Mobil uyumlu arayüz |

---

## Eksik Özellikler (Geliştirme Fırsatları)

Aşağıdaki özellikler henüz eklenmemiştir ve `gorev.md` dosyasında task olarak tanımlanabilir:

| Özellik | Öncelik | Açıklama |
|---------|---------|----------|
| Not Arama | Orta | Başlık veya içerikte arama |
| Kategoriler | Orta | Notları kategorilere ayırma |
| Favoriler | Düşük | Notları favorilere ekleme |
| Tarih Filtreleme | Düşük | Tarihe göre filtreleme |
| Dark Mode | Düşük | Karanlık tema desteği |
| Veritabanı | Orta | MongoDB/PostgreSQL entegrasyonu |
| Kullanıcı Girişi | Yüksek | Authentication sistemi |
| Not Paylaşma | Düşük | Notları paylaşma linki |
| Export | Düşük | PDF/TXT olarak dışa aktarma |

---

## Geliştirme Akışı

Bu proje, task-based geliştirme pratiği için tasarlanmıştır:

1. `gorev.md` dosyasındaki görevi oku
2. Gerekli değişiklikleri yap
3. Test et
4. Commit ve push yap
5. Bir sonraki göreve geç

```bash
# Örnek commit akışı
git add .
git commit -m "feat: not güncelleme özelliği eklendi"
git push origin master
```

---

## Dosya Açıklamaları

### Backend

| Dosya | Açıklama |
|-------|----------|
| `src/index.js` | Express uygulamasını başlatır, middleware'leri ve route'ları tanımlar |
| `src/routes/noteRoutes.js` | API endpoint tanımları (GET, POST, PUT, DELETE) |
| `src/controllers/noteController.js` | CRUD işlemlerinin iş mantığı |
| `.env` | Port ve diğer ortam değişkenleri |

### Frontend

| Dosya | Açıklama |
|-------|----------|
| `src/index.js` | React uygulamasını DOM'a bağlar |
| `src/App.js` | Ana bileşen, hook'tan state alır ve child bileşenlere dağıtır |
| `src/App.css` | Tüm uygulama stilleri |
| `src/components/NoteForm.js` | Kontrollü form bileşeni, not ekleme |
| `src/components/NoteList.js` | Not kartlarını listeler ve inline düzenleme sağlar |
| `src/hooks/useUrunler.js` | Custom hook - state yönetimi ve CRUD işlemleri |
| `src/services/noteService.js` | Backend API ile iletişim fonksiyonları |

---

## Ortam Değişkenleri

### Backend (.env)
```env
PORT=5000
```

İleride eklenebilecek değişkenler:
```env
MONGODB_URI=mongodb://localhost:27017/notebook
JWT_SECRET=your-secret-key
NODE_ENV=development
```

---

## Sorun Giderme

### CORS Hatası
Frontend ve backend farklı portlarda çalıştığı için CORS etkinleştirilmiştir. Eğer hata alırsanız backend'in çalıştığından emin olun.

### Port Kullanımda
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :5000
kill -9 <PID>
```

### notes.json Bulunamadı
İlk not eklendiğinde otomatik oluşturulur. Endişelenmeyin.

---

## Katkıda Bulunma

1. `gorev.md` dosyasından bir görev seç
2. Yeni branch oluştur: `git checkout -b feature/gorev-1`
3. Değişiklikleri yap
4. Test et
5. Commit at: `git commit -m "feat: açıklama"`
6. Push et: `git push origin feature/gorev-1`

---

## Lisans

Bu proje eğitim amaçlı oluşturulmuştur.
