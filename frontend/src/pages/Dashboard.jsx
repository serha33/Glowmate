import Dither from "../components/Dither";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Dashboard.css";
export default function Dashboard() {
  return (
    <div className="dashboard-page">
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
          {/* Welcome card */}
          <div className="dashboard-card welcome">
            <span className="welcome-eyebrow">Your Glow Status</span>
            <br></br>
            <section className="welcome-message">
              <h1>Hey Serha, ready to glow today?</h1>
            </section>
            <br></br>
            <section className="welcome-qoute">
              <p>"Small steps every day lead to big changes over time." </p>
              <p>
                You're currently on a{" "}
                <span className="streak-highlight">7-day</span> streak! Keep
                going, you're doing great!
              </p>
            </section>
          </div>
          {/* Habits card */}
          <div className="row1-dashboard">
            <div className="dashboard-card habits">
              <div className="habits-top">
                <h2>Your Habits</h2>
                <span className="habits-completed"> 0/3 Completed</span>
              </div>
              <br></br>
              <ul className="habits-list">
                <li className="habit-item">
                  <input type="checkbox" className="custom-checkbox" />
                  <span>Meditation</span>
                </li>
                <li className="habit-item">
                  <input type="checkbox" className="custom-checkbox" />
                  <span>Exercise</span>
                </li>
                <li className="habit-item">
                  <input type="checkbox" className="custom-checkbox" />
                  <span>Healthy Eating</span>
                </li>
                <li className="habit-item">
                  <input type="checkbox" className="custom-checkbox" />
                  <span>gym</span>
                </li>
                <li className="habit-item">
                  <input type="checkbox" className="custom-checkbox" />
                  <span>coding</span>
                </li>
              </ul>
              <span className="all-habits">See all habits →</span>
            </div>
            {/* Streaks card */}
            <div className="dashboard-card streaks">
              <div className="streak-header">
                <h2>Your Streaks🔥</h2>
                <br></br>
                <span className="streaks-qoute">
                  Consistency looks good on you!
                </span>
              </div>
              <div className="streak-main">
                <span className="fire-emoji">🔥</span>
                <h2> 7 days </h2>
                <p>Current Streak</p>
                <ul className="streak-days">
                  <li className="streak-item">
                    <div className="days-circle completed">✓</div>
                    <span className="day-name">M</span>
                  </li>
                  <li className="streak-item">
                    <div className="days-circle completed">✓</div>
                    <span className="day-name">T</span>
                  </li>
                  <li className="streak-item">
                    <div className="days-circle completed">✓</div>
                    <span className="day-name">W</span>
                  </li>
                  <li className="streak-item">
                    <div className="days-circle completed">✓</div>
                    <span className="day-name">T</span>
                  </li>
                  <li className="streak-item">
                    <div className="days-circle completed">✓</div>
                    <span className="day-name">F</span>
                  </li>
                  <li className="streak-item">
                    <div className="days-circle completed">✓</div>
                    <span className="day-name">S</span>
                  </li>
                  <li className="streak-item">
                    <div className="days-circle completed">✓</div>
                    <span className="day-name">S</span>
                  </li>
                </ul>
                <span className="qoute-bottom">
                  A little Progress Everyday🌸
                </span>
              </div>
            </div>
          </div>
          {/* Community card */}
          <div className="row2-dashboard">
            <div className="dashboard-card communities">
              <div className="community-top">
                <h2>Your Communities</h2>
                <span className="community-qoute">
                  Together we shine brighter
                </span>
              </div>
              <ul className="community-list">
                <li className="members">
                  <div className="avatar">S</div>
                  <div className="member-details">
                    <div className="name">Serha</div>
                    <div className="activity">Complete 75 days Challenge!</div>
                  </div>
                </li>
                <li className="members">
                  <div className="avatar">R</div>
                  <div className="member-details">
                    <div className="name">Risy</div>
                    <p className="activity">Started a new Challenge !</p>
                  </div>
                </li>
                <li className="members">
                  <div className="avatar">S</div>
                  <div className="member-details">
                    <div className="name">Suzy</div>
                    <div className="activity">Complete 75 days Challenge!</div>
                  </div>
                </li>
                <li className="members">
                  <div className="avatar">K</div>
                  <div className="member-details">
                    <div className="name">Kira</div>
                    <p className="activity">
                      Complete healthy eating Challenge!
                    </p>
                  </div>
                </li>
              </ul>
              <span className="all-activities">See all Activities →</span>
            </div>
            {/* Challenge card */}
            <div className="dashboard-card challenge">
              <h2>Your Challenges</h2>
              <p>
                Participate in challenges to stay motivated and achieve your
                goals.
              </p>
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
