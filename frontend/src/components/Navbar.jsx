import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h4 className="logo">GlowMate</h4>
      </div>
      <div className="navbar-center">
        <ul className="links">
          <li>
            <NavLink to="/dashboard" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/streaks" className="nav-link">
              Streaks
            </NavLink>
          </li>
          <li>
            <NavLink to="/habits" className="nav-link">
              Habbits
            </NavLink>
          </li>
          <li>
            <NavLink to="/challenges" className="nav-link">
              Challenges
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" className="nav-link">
              Community
            </NavLink>
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
