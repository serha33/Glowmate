import Dither from "../components/Dither";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Stack from "../components/CardStack.jsx";
import "./Landing.css";
const images = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
];
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
          <div style={{ width: 208, height: 208 }}>
            <Stack
              sensitivity={110}
              sendToBackOnClick={true}
              cards={images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`card-${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ))}
              autoplay
              autoplayDelay={3000}
              pauseOnHover
            />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
