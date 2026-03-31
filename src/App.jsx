import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* Navbar */}
      <nav style={styles.nav}>
        <h2 style={{ color: "#fff" }}>MyWebsite</h2>
        <div>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>About</a>
          <a href="#" style={styles.link}>Services</a>
          <a href="#" style={styles.link}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Welcome to My Website</h1>
        <p>Build amazing things with React 🚀</p>
        <button style={styles.btn}>Get Started</button>
      </section>

      {/* Services Section */}
      <section style={styles.services}>
        <h2>Our Services</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Web Development</h3>
            <p>Create fast and modern websites.</p>
          </div>
          <div style={styles.card}>
            <h3>UI/UX Design</h3>
            <p>Design user-friendly interfaces.</p>
          </div>
          <div style={styles.card}>
            <h3>SEO Optimization</h3>
            <p>Improve your website ranking.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 MyWebsite | All Rights Reserved</p>
      </footer>

    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#333",
    alignItems: "center"
  },
  link: {
    color: "#fff",
    marginLeft: "15px",
    textDecoration: "none"
  },
  hero: {
    height: "80vh",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    marginTop: "15px",
    padding: "10px 20px",
    border: "none",
    background: "#fff",
    color: "#333",
    cursor: "pointer",
    borderRadius: "5px"
  },
  services: {
    padding: "50px",
    textAlign: "center"
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  },
  card: {
    padding: "20px",
    width: "200px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "10px"
  },
  footer: {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "15px",
    marginTop: "20px"
  }
};