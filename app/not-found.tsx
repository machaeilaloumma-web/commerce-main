// app/not-found.tsx
export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "sans-serif"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
      <p>الصفحة غير موجودة أو تم حذفها.</p>
    </div>
  );
}
