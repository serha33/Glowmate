import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h4 className="logo">GlowMate</h4>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="#">Habbits</a>
          </li>
          <li>
            <a href="#">Streaks</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button>Signup</button>
      </div>
    </nav>
  );
}
