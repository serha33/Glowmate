import { Link } from "react-router-dom";
import "./SignUp.css";
import Dither from "../components/Dither";
import { FcGoogle } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import communityImage from "../assets/holding-hands.png";
export default function SignUp() {
  return (
    <div className="signup-page">
      <div className="bg-animation">
        <Dither
          waveColor={[0.65, 0.48, 0.36]}
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
      <div className="signup-layout">
        <div className="image-branding">
          {/* Top branding */}
          <div className="branding-top">
            <h2 className="logo">GlowMate</h2>
            <span className="branding-label">YOUR GROWTH SPACE</span>
          </div>

          {/* Main heading */}
          <div className="branding-intro">
            <h1>
              Big things feel better
              <br />
              when we grow together.
            </h1>

            <p>
              Your goals, your little wins, your people.
              <br />
              Make every step of your journey count.
            </p>
          </div>

          {/* Feature words */}
          <div className="branding-features">
            <span>BUILD</span>
            <span className="feature-star">✦</span>
            <span>CONNECT</span>
            <span className="feature-star">✦</span>
            <span>GROW</span>
          </div>

          {/* Bottom artwork and message */}
          <div className="branding-bottom">
            <div className="branding-art">
              <img
                src={communityImage}
                alt="People growing together"
                className="community-image"
              />
            </div>

            <div className="branding-message">
              <h2>Better together.</h2>
              <p>
                You don't have to grow alone. <span>♥</span>
              </p>
            </div>
          </div>
        </div>
        <div className="signup-container">
          <form className="signup-form">
            <h2 className="signup-heading">Create an Account</h2>
            <div className="input-box">
              <FaRegUser className="input-icon" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-box">
              <MdOutlineEmail className="input-icon" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-box">
              <TbLockPassword className="input-icon" />
              <input type="text" placeholder="Password" />
            </div>
            <div className="input-box">
              <TbLockPassword className="input-icon" />
              <input type="text" placeholder="Confirm Password" />
            </div>
            <Link to="/dashboard" className="signup-button">
              SignUp
            </Link>
            <div className="or-divider">
              <div className="or-line"></div>
              <div className="or-text">or</div>
              <div className="or-line"></div>
            </div>
            <button className="google btn1">
              <FcGoogle />
              Continue with Google
            </button>
            <span className="pink-text">
              Already have an account?{" "}
              <Link to="/dashboard" className="login-link">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
