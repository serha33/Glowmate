import Dither from "../components/Dither.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { FcTodoList } from "react-icons/fc";
import { MdOutlineDelete } from "react-icons/md";
import "./Habits.css";
export default function Habits() {
  return (
    <div className="habits-page">
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
      <div className=" card habits-layout">
        <div className="habits-content">
          <div className="habits-header">
            <h2>
              Habits <FcTodoList />
            </h2>
            <button className="add-habits">+ Add New Habit</button>
          </div>
          <div className="habit-bars ">
            <div className="bar card">
              <div className="habit-left">
                <div className="icon">🍎</div>
                <div className="habit-info">
                  <h2>3L water</h2>
                  <span className="glow-up-type diet">diet</span>
                </div>
              </div>
              <div className="habit-middle">
                <p className="light-text">3 days/week</p>
                <div className="habit-days">
                  <div className="day">
                    <p>Mon</p>
                  </div>
                  <div className="day">
                    <p>Tue</p>
                  </div>
                  <div className="day">
                    <p>Wed</p>
                  </div>
                  <div className="day">
                    <p>Fri</p>
                  </div>
                  <div className="day">
                    <p>Sat</p>
                  </div>
                  <div className="day">
                    <p>Sun</p>
                  </div>
                </div>
              </div>
              <div className="habit-right">
                <input type="checkbox" className="custom-checkbox" />
                <button className="edit">Edit</button>
                <button className="delete">
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
            <div className="bar card">
              <div className="habit-left">
                <div className="icon">🌸</div>
                <div className="habit-info">
                  <h2>Meditation</h2>
                  <span className="glow-up-type wellness">wellness</span>
                </div>
              </div>
              <div className="habit-middle">
                <p className="light-text">3 days/week</p>
                <div className="habit-days">
                  <div className="day">
                    <p>Mon</p>
                  </div>
                  <div className="day">
                    <p>Wed</p>
                  </div>
                  <div className="day">
                    <p>Sat</p>
                  </div>
                </div>
              </div>
              <div className="habit-right">
                <input type="checkbox" className="custom-checkbox" />
                <button className="edit">Edit</button>
                <button className="delete">
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
            <div className="bar card">
              <div className="habit-left">
                <div className="icon">🎯</div>
                <div className="habit-info">
                  <h2>Coding</h2>
                  <span className="glow-up-type career">career</span>
                </div>
              </div>
              <div className="habit-middle">
                <p className="light-text">3 days/week</p>
                <div className="habit-days">
                  <div className="day">
                    <p>Mon</p>
                  </div>
                  <div className="day">
                    <p>Wed</p>
                  </div>
                  <div className="day">
                    <p>Sat</p>
                  </div>
                </div>
              </div>
              <div className="habit-right">
                <input type="checkbox" className="custom-checkbox" />
                <button className="edit">Edit</button>
                <button className="delete">
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
            <div className="bar card">
              <div className="habit-left">
                <div className="icon">💪</div>
                <div className="habit-info">
                  <h2>Gym</h2>
                  <span className="glow-up-type fitness">fitness</span>
                </div>
              </div>
              <div className="habit-middle">
                <p className="light-text">4 days/week</p>
                <div className="habit-days">
                  <div className="day">
                    <p>Mon</p>
                  </div>
                  <div className="day">
                    <p>Wed</p>
                  </div>
                  <div className="day">
                    <p>Sat</p>
                  </div>
                  <div className="day">
                    <p>Sun</p>
                  </div>
                </div>
              </div>
              <div className="habit-right">
                <input type="checkbox" className="custom-checkbox" />
                <button className="edit">Edit</button>
                <button className="delete">
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card todays-overview">
          <div className="overview-header">
            <h2>Today's Overview</h2>
            <span>📊</span>
          </div>

          <div className="overview-progress">
            <div className="overview-progress-info">
              <p>Daily progress</p>
              <h2>60%</h2>
            </div>

            <div className="overview-progress-bar">
              <div className="overview-progress-fill"></div>
            </div>
            <span>You're doing great! Keep going 🌱</span>
          </div>

          <div className="overview-stats">
            <div className="overview-stat completed-stat">
              <div className="stat-icon">✅</div>
              <div className="stat-info">
                <h3>3</h3>
                <p>Completed</p>
              </div>
            </div>

            <div className="overview-stat remaining-stat">
              <div className="stat-icon">⏳</div>
              <div className="stat-info">
                <h3>2</h3>
                <p>Remaining</p>
              </div>
            </div>

            <div className="overview-stat total-stat">
              <div className="stat-icon">🌿</div>
              <div className="stat-info">
                <h3>5</h3>
                <p>Total habits</p>
              </div>
            </div>
          </div>

          <div className="overview-message">
            <span>🌱</span>
            <div className="stat-info">
              <h4>Small steps matter!</h4>
              <p>Every habit you complete brings you closer to your goals.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
