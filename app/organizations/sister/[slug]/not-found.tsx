export default function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Page Not Found</h2>
        <p style={styles.text}>
          Sorry, the page you are looking for does not exist.
        </p>

        <a href="/" style={styles.button}>
          Go Home
        </a>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a",
    color: "#e5e7eb",
    fontFamily: "sans-serif",
  },
  card: {
    textAlign: "center",
    padding: "40px",
    borderRadius: "12px",
    background: "#020617",
    boxShadow: "0 0 30px rgba(0,0,0,0.5)",
  },
  code: {
    fontSize: "80px",
    margin: 0,
    color: "#38bdf8",
  },
  title: {
    margin: "10px 0",
  },
  text: {
    opacity: 0.7,
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 24px",
    background: "#38bdf8",
    color: "#020617",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
