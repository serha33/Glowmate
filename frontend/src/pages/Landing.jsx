import Dither from "../components/Dither";
import Navbar from "../components/Navbar.jsx";
import "./Landing.css";
export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-bg">
        <Dither
          waveColor={[
            0.9686274509803922, 0.4392156862745098, 0.7058823529411765,
          ]}
          disableAnimation={false}
          enableMouseInteraction
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
          <span className="hero-eyebrow">YOUR GLOW-UP, YOUR WAY</span>
          <h1 className="hero-title">
            Level up together &amp; find your glowmate
          </h1>
          <p className="hero-dsec">
            Build Habits, track your progress, stay accountable, and connect
            with people who are growing alongside you.
          </p>
          <button className="hero-cta">Start Your Glow-Up</button>
        </section>
      </div>
    </div>
  );
}
