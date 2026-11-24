import Dither from "../components/Dither";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { IoMdTrophy } from "react-icons/io";
import { GiMeditation } from "react-icons/gi";
import "./Challenges.css";

const exploreChallenges = [
  {
    title: "7-Day Reading",
    emoji: "📚",
    duration: 7,
    description: "Build a daily reading habit that sticks.",
  },
  {
    title: "30-Day Fitness",
    emoji: "💪",
    duration: 30,
    description: "Move your body every day for a month.",
  },
  {
    title: "Hydration Challenge",
    emoji: "💧",
    duration: 7,
    description: "Keep your water intake on track all week.",
  },
  {
    title: "Morning Routine",
    emoji: "🌅",
    duration: 21,
    description: "Start every day with a routine you're proud of.",
  },
  {
    title: "Digital Detox",
    emoji: "📵",
    duration: 7,
    description: "Cut back on screen time for one week.",
  },
  {
    title: "21-Day Consistency",
    emoji: "🎯",
    duration: 21,
    description: "Complete at least one habit every day.",
  },
];

export default function Challenges() {
  return (
    <div className="challenges-page">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
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
          waveColor={[0.9, 0.93, 0.85]}
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

      <div className="card challenges-layout">
        <div className="challenges-main">
          {/* Active challenge */}
          <div className="card active-challenge">
            <div className="card-details">
              <div className="action-left">
                <div className="icon">
                  <GiMeditation />
                </div>
                <div className="texts">
                  <h2 className="challenge-title">
                    7 Days Meditation challenge
                  </h2>
                  <p className="light-text">
                    Relax your brain by practicing meditation
                  </p>
                  <div className="type">
                    <div className="level">
                      <p>Level :</p>
                      <span>Easy</span>
                    </div>
                    <span className="light-text">10 Participants</span>
                  </div>
                </div>
              </div>

              <div className="active-right">
                <button className="btn1" type="button">
                  See Rules
                </button>
                <button className="join-community" type="button">
                  Log Today
                </button>
                <button className="btn1" type="button">
                  Leave Challenge
                </button>
              </div>
            </div>

            <div className="card-progress">
              <div className="progress-bar">
                <div className="progress-fill" />
              </div>
              <span className="light-text">Day 4 of 7</span>
            </div>
          </div>

          {/* Explore challenges */}
          <div className="card challenges-explore">
            <div className="section-titles">
              <h2 className="section-heading">
                Explore Challenges <IoMdTrophy fill="url(#trophy-gradient)" />
              </h2>
              <span className="light-text">Join one and earn XP</span>
            </div>
            <div className="explore-carousel-wrapper">
              <button className="scroll-streak">{"<"}</button>
              <div className="explore-row">
                {exploreChallenges.map((c) => (
                  <div key={c.title} className="card explore-card">
                    <div className="card-details">
                      <div className="icon-s">{c.emoji}</div>
                      <div className="texts">
                        <h3 className="explore-title ">{c.title}</h3>
                        <span className="light-text">{c.duration} days</span>
                      </div>
                    </div>
                    <p className="light-text explore-desc">{c.description}</p>
                  </div>
                ))}
              </div>
              <button className="scroll-streak">{">"}</button>
            </div>
          </div>
        </div>

        {/* Mates Participating */}
        <aside className="card mates-panel">
          <div className="mates-top">
            <h2 className="challenge-title">Mates Participating</h2>
            <span className="light-text">
              See who's taking on challenges with you
            </span>
          </div>
          <div className="challenge f">
            <div className="title-top">
              <div className="icon-s">💪🏼</div>
              <h2>30-days Fitness</h2>
              <span className="glow-up-type">3 mates</span>
            </div>
            <span className="light-text">Riya,Pixi,+1 other</span>
          </div>
          <div className="challenge">
            <div className="title-top">
              <div className="icon-s-r">
                <GiMeditation />
              </div>
              <h2>7-day Meditation</h2>
              <span className="glow-up-type">2 mates</span>
            </div>
            <span className="light-text"> kevil and tira</span>
          </div>
          <button className="btn1" type="button">
            See All
          </button>
          <div className="invite-mates">
            <h2>More fun together!</h2>
            <p className="light-text">
              Invite more mates and discover challenges you can take on
              together.
            </p>
            <button className="btn1" type="button">
              Invite Mates
            </button>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
