import { useLocation, NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h4 className="logo">GlowMate</h4>
      </div>

      {isLandingPage ? (
        // LANDING PAGE NAVBAR
        <>
          <div className="navbar-center">
            <ul className="links landing-links">
              <li>
                <a href="#features" className="nav-link">
                  Features
                </a>
              </li>

              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-right landing-nav">
            <Link to="/login" className="login-btn">
              Login
            </Link>

            <Link to="/signup" className="signup-btn">
              Sign Up
            </Link>
          </div>
        </>
      ) : (
        // DASHBOARD NAVBAR
        <>
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
                  Habits
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
              />
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
