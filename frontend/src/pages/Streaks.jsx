import Dither from "../components/Dither";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import StreakCalendar from "../components/StreakCalendar.jsx";
import { FaFire } from "react-icons/fa6";
import "./Streaks.css";
export default function Streaks() {
  return (
    <div className="streaks-page">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="fire-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ffcc00" /> {/* Yellow at bottom */}
            <stop offset="100%" stopColor="#ff4500" /> {/* Orange at top */}
          </linearGradient>
          <linearGradient
            id="trophy-gradient"
            x1="0%"
            y1="100%"
            x2="0%"
            y2="0%"
          ></linearGradient>
        </defs>
      </svg>
      <div className="bg-animation">
        <Dither
          waveColor={[
            0.9686274509803922, 0.4392156862745098, 0.7058823529411765,
          ]}
          disableAnimation={true}
          enableMouseInteraction={true}
          mouseRadius={0.2}
          colorNum={20.3}
          waveAmplitude={0.07}
          waveFrequency={7.7}
          waveSpeed={0.05}
          backgroundColor={[1, 1, 1]}
        />
      </div>
      <Navbar />
      <div className="streaks-layout">
        <div className="streaks-content">
          <div className="card current-streak">
            <div className="current-header">
              <h2>Current Streak</h2>
              <span className="number">
                3 Days{" "}
                <FaFire className="fire-emoji" fill="url(#fire-gradient)" />
              </span>
            </div>
            <div className="current-message">
              <p>
                <FaFire className="fire-emoji" fill="url(#fire-gradient)" />{" "}
                Complete at least{" "}
                <span className="text-highlight">1 habit </span>a day to start
                and maintain your daily streak. Every day you show up, your
                streak grows!
              </p>
            </div>
          </div>
          <div className="statistics">
            <div className="card row longest-streak">
              <div className="icon">🏆</div>
              <div className="details">
                <span>Longest Streak</span>
                <h2>3 Days</h2>
              </div>
            </div>
            <div className="card row total-glowups">
              <div className="icon">🌸</div>
              <div className="details">
                <span>Total Glow-ups</span>
                <h2>6</h2>
              </div>
            </div>
            <div className="card row active-days">
              <div className="icon">📅</div>
              <div className="details">
                <span>Active Days</span>
                <h2>8 Days</h2>
              </div>
            </div>
          </div>
          <StreakCalendar />
        </div>
        <div className="card active-habits">
          <h2>Active habits</h2>
          <div className="habits-streaks 1">
            <div className="details">
              <div className="heading">
                <h2>Gym</h2>
                <span>
                  2<FaFire className="fire-emoji" fill="url(#fire-gradient)" />
                </span>
              </div>
            </div>
            <div className="weekly-info">
              <p>Weekly Progress</p>
              <span>2/7</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
          <div className="habits-streaks 2">
            <div className="details">
              <div className="heading">
                <h2>Meditation</h2>
                <span>
                  2<FaFire className="fire-emoji" fill="url(#fire-gradient)" />
                </span>
              </div>
            </div>
            <div className="weekly-info">
              <p>Weekly Progress</p>
              <span>2/7</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
          <div className="habits-streaks 3">
            <div className="details">
              <div className="heading">
                <h2>Coding</h2>
                <span>
                  0<FaFire className="fire-emoji" fill="url(#fire-gradient)" />
                </span>
              </div>
            </div>
            <div className="weekly-info">
              <p>Weekly Progress</p>
              <span>1/7</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
          <div className="habits-streaks 4">
            <div className="details">
              <div className="heading">
                <h2>Runing</h2>
                <span>
                  1<FaFire className="fire-emoji" fill="url(#fire-gradient)" />
                </span>
              </div>
            </div>
            <div className="weekly-info">
              <p>Weekly Progress</p>
              <span>2/7</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
