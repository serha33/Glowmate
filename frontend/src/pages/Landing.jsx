import { Link } from "react-router-dom";

import Dither from "../components/Dither";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Stack from "../components/CardStack.jsx";

import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">
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

      <div className="landing-contents">
        <Navbar />

        <section className="hero">
          <div className="hero-texts">
            <span className="hero-eyebrow">YOUR GLOW-UP, YOUR WAY</span>

            <br />

            <h1 className="hero-title">
              Level up together &amp; find your Glow
            </h1>

            <br />

            <p className="hero-desc">
              Build Habits, track your progress, stay accountable, and connect
              with people who are growing alongside you.
            </p>

            <br />

            <Link to="/signup" className="hero-cta">
              Start Your Glow-Up
            </Link>
          </div>

          <div className="stack" style={{ width: 280, height: 400 }}>
            <Stack
              sensitivity={110}
              sendToBackOnClick={false}
              autoplay
              autoplayDelay={2000}
              pauseOnHover
            />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
