// app/not-found.tsx

export default function NotFound() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>404 - الصفحة غير موجودة</h1>
      <p>عذرًا، لم نعثر على الصفحة التي تبحث عنها.</p>
      <a href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
        العودة إلى الصفحة الرئيسية
      </a>
    </div>
  );
}
