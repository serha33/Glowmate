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
            <a href="#">Streaks</a>
          </li>
          <li>
            <a href="#">Habbits</a>
          </li>
          <li>
            <a href="#">Challenges</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="nav-xp">
          <h2>150 XP 🪙</h2>
        </div>
        <div className="notification">🔔</div>
        <div className="nav-avatar">
          <img
            src="https://images.unsplash.com/vector-1766996683718-48b622d11a2d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="avatar"
          ></img>
        </div>
      </div>
    </nav>
  );
}
