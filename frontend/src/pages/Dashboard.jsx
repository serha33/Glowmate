import { Link } from "react-router-dom";
import Dither from "../components/Dither";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { FaFire } from "react-icons/fa6";
import { FcTodoList } from "react-icons/fc";
import { IoMdTrophy } from "react-icons/io";
import { GiMeditation } from "react-icons/gi";
import { HiMiniUserGroup } from "react-icons/hi2";
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
          <linearGradient
            id="community-gradient"
            x1="0%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#ad107b" />
            <stop offset="100%" stopColor="#ff8db5" />
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
              <span className="light-text">Consistency looks good on you!</span>
              <div className="streak-number">
                <span>7 Days</span>
              </div>
              <Link to="/streaks" className="dashboard-link">
                See Streak History →
              </Link>
            </div>
            <button className="scroll-streak">{"<"}</button>
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
              </ul>
            </div>
            <button className="scroll-streak">{">"}</button>
          </div>
          <div className="habits-challenges-row">
            {/* Habits card */}
            <div className="dashboard-card habits">
              <div className="habits-top">
                <h2>
                  Habits <FcTodoList />
                </h2>
                <span className="light-text"> 4/10 Completed</span>
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
              <Link to="/habits" className="dashboard-link">
                See all habits →
              </Link>
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
                <span className="light-text">Join and Earn XP</span>
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
                          <span className="light-text">
                            ●10 Users Participated
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-progress">
                      <div className="progress-bar">
                        <div className="progress-fill"></div>
                      </div>
                      <span className="light-text">Day 3 of 7</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/Challenges" className="dashboard-link">
                Explore Challenges→
              </Link>
            </div>
          </div>
          {/* Community card */}
          <div className="dashboard-card communities">
            <div className="community-left">
              <h2>
                Communities <HiMiniUserGroup fill="url(#community-gradient)" />
              </h2>
              <span className="light-text">
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
              <span className="light-text">Together it's more fun!</span>
            </div>
            <div className="community-right">
              <Link to="/community" className="join-community">
                Join Community
              </Link>
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
        {/* Profile card */}
        <div className="dashboard-card profile">
          <div className="profile-header">
            <div className="profile-frame"></div>
            <div className="profile-avatar">
              <img
                src="https://images.unsplash.com/vector-1766996683718-48b622d11a2d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="avatar"
              ></img>
            </div>
            <div className="profile-name">
              <h2>Serha</h2>
              <span className="username">@serhaxstar</span>
            </div>
            <p className="bio">In my glow-up era</p>
          </div>
          <div className="profile-xp">
            <h2>
              Level 2 - <span>Seed 🌱</span>
            </h2>

            <div className="profile-xp-info">
              <span>50/1000 XP</span>
              <span>5%</span>
            </div>

            <div className="profile-xp-track">
              <div className="profile-xp-fill"></div>
            </div>
          </div>
          <div className="profile-stats">
            <div className="profile-streaks">
              <span>
                <FaFire className="fire-emoji" fill="url(#fire-gradient)" />
              </span>
              <h2>7 Days</h2>
              <p>Streaks</p>
            </div>
            <div className="profile-level">
              <span>🌱</span>
              <h2>Seed</h2>
              <p>Level 2</p>
            </div>
            <div className="profile-badges">
              <span>
                <IoMdTrophy
                  className="Trophy-icon"
                  fill="url(#trophy-gradient)"
                />
              </span>
              <h2>2</h2>
              <p>Badges</p>
            </div>
          </div>
          <div className="profile-current">
            <h2>Currently Glowing</h2>
            <span>Coding</span>
            <span>fitness</span>
            <span>wellness</span>
          </div>
          <div className="profile-challenges">
            <h2>Challenges</h2>
            <div className="challenge-card-profile">
              <div className="icon">
                <GiMeditation />
              </div>
              <div className="texts">
                <h2>7-Day Meditation</h2>
                <span className="contestents"></span>
                <div className="type">
                  <span className="level">Easy</span>
                </div>
              </div>
            </div>
          </div>
          <button className="edit-profile">Edit Profile</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
