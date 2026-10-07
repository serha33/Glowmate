import "./SignUp.css";
import Dither from "../components/Dither";
export default function SignUp() {
  return (
    <div className="signup-page">
      <div className="landing-bg">
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
      <div className="signup-container">
        <form className="signup-form">
          <h2 className="signup-heading">Create an Account</h2>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
