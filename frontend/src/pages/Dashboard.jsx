import Dither from "../components/Dither";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { FaFire } from "react-icons/fa6";
import { FcTodoList } from "react-icons/fc";
import { IoMdTrophy } from "react-icons/io";
import { GiMeditation } from "react-icons/gi";
import "./Dashboard.css";
export default function Dashboard() {
  return (
    <div className="dashboard-page">
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
          >
            <stop offset="0%" stopColor="#ad8110" />
            <stop offset="100%" stopColor="#fcdf05" />
          </linearGradient>
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
      <div className="dashboard-layout">
        <div className="dashboard-content">
          {/* streaks card */}
          <div className="dashboard-card streaks">
            <div className="streak-header">
              <h2>
                Streaks{" "}
                <FaFire className="fire-emoji" fill="url(#fire-gradient)" />
              </h2>
              <span className="streaks-qoute">
                Consistency looks good on you!
              </span>
              <div className="streak-number">
                <span>7 Days</span>
              </div>
            </div>
            <div className="streak-main">
              <ul className="streak-days">
                <li className="streak-item">
                  <div className="days-circle completed">
                    <FaFire className="fire-emoji" fill="url(#fire-gradient)" />
                  </div>
                  <span className="day-name">M</span>
                </li>
                <li className="streak-item">
                  <div className="days-circle completed">
                    <FaFire className="fire-emoji" fill="url(#fire-gradient)" />
                  </div>
                  <span className="day-name">T</span>
                </li>
                <li className="streak-item">
                  <div className="days-circle completed">
                    <FaFire className="fire-emoji" fill="url(#fire-gradient)" />
                  </div>
                  <span className="day-name">W</span>
                </li>
                <li className="streak-item">
                  <div className="days-circle completed">
                    <FaFire className="fire-emoji" fill="url(#fire-gradient)" />
                  </div>
                  <span className="day-name">T</span>
                </li>
                <li className="streak-item">
                  <div className="days-circle completed">
                    <FaFire className="fire-emoji" fill="url(#fire-gradient)" />
                  </div>
                  <span className="day-name">F</span>
                </li>
                <li className="streak-item">
                  <div className="days-circle completed">
                    <FaFire className="fire-emoji" fill="url(#fire-gradient)" />
                  </div>
                  <span className="day-name">S</span>
                </li>
                <li className="streak-item">
                  <div className="days-circle completed">
                    <FaFire className="fire-emoji" fill="url(#fire-gradient)" />
                  </div>
                  <span className="day-name">S</span>
                </li>
              </ul>
            </div>
            <button className="scroll-streak">{">"}</button>
          </div>
          <div className="row1-dashboard">
            {/* Habits card */}
            <div className="dashboard-card habits">
              <div className="habits-top">
                <h2>
                  Habits <FcTodoList />
                </h2>
                <span className="habits-completed"> 4/10 Completed</span>
              </div>
              <ul className="habits-list">
                <li className="habit-item">
                  <input type="checkbox" className="custom-checkbox" />
                  <span>Meditation</span>
                </li>
                <li className="habit-item">
                  <input type="checkbox" className="custom-checkbox" />
                  <span>code</span>
                </li>
                <li className="habit-item">
                  <input type="checkbox" className="custom-checkbox" />
                  <span>gym</span>
                </li>
                <li className="habit-item">
                  <input type="checkbox" className="custom-checkbox" />
                  <span>Project</span>
                </li>
              </ul>
              <div className="habitprogress-bar">
                <div className="habitprogress-fill"></div>
              </div>
              <span className="all-habits">See all habits →</span>
            </div>
            {/* Challenge card */}
            <div className="dashboard-card challenges">
              <div className="challenges-top">
                <h2>
                  Challenges{" "}
                  <IoMdTrophy
                    className="Trophy-icon"
                    fill="url(#trophy-gradient)"
                  />
                </h2>
                <span className="challenge-qoute">Join and Earn XP</span>
              </div>
              <div className="challenge-cards">
                <div className="challenge-list">
                  <div className="challenge-card1">
                    <div className="card-details">
                      <div className="icon">
                        <GiMeditation />
                      </div>
                      <div className="texts">
                        <h2>7-Day Meditation</h2>
                        <div className="type">
                          <span className="level">Easy</span>
                          <span className="contestents">
                            ●10 Users Participated
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-progress">
                      <div className="progress-bar">
                        <div className="progress-fill"></div>
                      </div>
                      <span>Day 3 of 7</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="explore-challenges">Explore Challenges→</span>
            </div>
          </div>

          <div className="row2-dashboard">
            {/* Community card */}
            <div className="dashboard-card communities">
              <div className="community-left">
                <h2>Communities</h2>
                <span className="community-qoute-top">
                  Find your Mates, share your Journey and Glow together
                </span>
                <div className="avatar-group">
                  <img
                    src="https://images.unsplash.com/vector-1784837765568-153cc511eb8e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                    alt="User 1"
                    className="avatar"
                  />
                  <img
                    src="https://images.unsplash.com/vector-1784837765540-f6e876deb1c7?q=80&w=732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                    alt="User 2"
                    className="avatar"
                  />
                  <img
                    src="https://images.unsplash.com/vector-1784838057160-8cbeb71bc6b1?q=80&w=892&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                    alt="User 3"
                    className="avatar"
                  />
                  <img
                    src="https://images.unsplash.com/vector-1785230088600-9e0c2a34a441?q=80&w=937&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                    alt="User 4"
                    className="avatar"
                  />
                  <div className="avatar badge">24+</div>
                </div>
                <span className="community-qoute-bottom">
                  Together it's more fun!
                </span>
              </div>
              <div className="community-right">
                <button className="join-community">Join Community</button>
                <div className="community-image-wrapper">
                  <img
                    src="https://images.unsplash.com/vector-1780626754016-30bbc642d247?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                    alt="Community Illustration"
                    className="right-illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Profile card */}
        <div className="dashboard-card profile">
          <h2>Your Profile</h2>
          <p>Update your information and manage your account settings.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
