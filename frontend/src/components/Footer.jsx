import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>GlowMate</h2>
          <p>Glow up together. Stay consistent.</p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Product</h3>
            <a href="#">Features</a>
            <a href="#">How it works</a>
            <a href="#">Challenges</a>
          </div>

          <div>
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <h3>Social</h3>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 GlowMate</span>
        <span>Made with ♡</span>
      </div>
    </footer>
  );
}
