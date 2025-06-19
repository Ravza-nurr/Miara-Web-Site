# EmailJS Kurulum Rehberi

ContactForm bileşeninin e-posta gönderme özelliğini aktif etmek için EmailJS kurulumu yapmanız gerekiyor.

## 1. EmailJS Hesabı Oluşturun

1. [EmailJS](https://www.emailjs.com/) web sitesine gidin
2. Ücretsiz hesap oluşturun
3. E-posta adresinizi doğrulayın

## 2. E-posta Servisi Ekleyin

1. Dashboard'da "Email Services" sekmesine gidin
2. "Add New Service" butonuna tıklayın
3. Gmail, Outlook veya başka bir servis seçin
4. E-posta hesabınızı bağlayın
5. Servis ID'sini not alın (örn: `service_abc123`)

## 3. E-posta Template Oluşturun

1. "Email Templates" sekmesine gidin
2. "Create New Template" butonuna tıklayın
3. Template adını girin (örn: "Contact Form")
4. HTML template'i şu şekilde düzenleyin:

```html
<h2>Yeni İletişim Formu Mesajı</h2>
<p><strong>Gönderen:</strong> {{from_name}}</p>
<p><strong>E-posta:</strong> {{from_email}}</p>
<p><strong>Konu:</strong> {{subject}}</p>
<p><strong>Mesaj:</strong></p>
<p>{{message}}</p>
<hr>
<p><em>Bu mesaj Miara web sitesi üzerinden gönderilmiştir.</em></p>
```

5. Template ID'sini not alın (örn: `template_xyz789`)

## 4. Public Key Alın

1. "Account" sekmesine gidin
2. "API Keys" bölümünden Public Key'i kopyalayın

## 5. Kodda Güncelleme Yapın

`src/components/ContactForm.tsx` dosyasında şu değerleri güncelleyin:

```typescript
// useEffect içinde
emailjs.init("YOUR_PUBLIC_KEY"); // Public key'inizi buraya ekleyin

// handleSubmit fonksiyonunda
const result = await emailjs.send(
  "YOUR_SERVICE_ID", // Service ID'nizi buraya ekleyin
  "YOUR_TEMPLATE_ID", // Template ID'nizi buraya ekleyin
  templateParams
);
```

## 6. Test Edin

1. Uygulamayı çalıştırın
2. Contact sayfasına gidin
3. Formu doldurun ve gönderin
4. ravza019@gmail.com adresine e-posta gelip gelmediğini kontrol edin

## Önemli Notlar

- EmailJS'in ücretsiz planında aylık 200 e-posta gönderebilirsiniz
- E-posta gönderimi için internet bağlantısı gereklidir
- Template'deki değişken isimleri kodda kullanılan isimlerle eşleşmelidir
- Güvenlik için Public Key'i environment variable olarak saklayabilirsiniz

## Environment Variable Kullanımı

`.env.local` dosyası oluşturun:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Sonra kodda şu şekilde kullanın:

```typescript
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

const result = await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  templateParams
);
``` 