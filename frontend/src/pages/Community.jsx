import Dither from "../components/Dither";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { FaEllipsisV } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./Community.css";
export default function Community() {
  return (
    <div className="community-page">
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
      <div className="community-layout">
        <div className="community-content">
          <div className="card feed">
            <div className="post-profile">S</div>
            <div className="post-content">
              <div className="post-header">
                <div className="post-texts">
                  <h2>Sara</h2>
                  <span className="light-text">2 hours ago</span>
                </div>
                <FaEllipsisV />
              </div>
              <div className="post-qoutes">
                <p>
                  I need some Glow-up tips from my girlies!!! share in the
                  comment{" "}
                </p>
              </div>
              <div className="post-reacts">
                <span className="likes">
                  <div className="icon">
                    <FcLikePlaceholder />{" "}
                  </div>
                  <p>102 likes</p>
                </span>
                <span className="comments">
                  <div className="icon">
                    <FaRegCommentDots />
                  </div>
                  <p>72 comments</p>
                </span>
              </div>
              <div className="top-comment">
                <p>Use sunscreen everyday!!</p>
                <span className="light-text"> 1hr ago</span>
              </div>
              <span className="all-comments">View all comments v</span>
            </div>
          </div>
          <div className="card feed">
            <div className="post-profile">M</div>
            <div className="post-content">
              <div className="post-header">
                <div className="post-texts">
                  <h2>Mia</h2>
                  <span className="light-text">2 hours ago</span>
                </div>
                <FaEllipsisV />
              </div>
              <div className="post-qoutes">
                <p>
                  I want to share my journey from 90kgs to 76kgs!! Hope yall
                  will enjoy!
                </p>
              </div>
              <div className="post-reacts">
                <span className="likes">
                  <div className="icon">
                    <FcLikePlaceholder />
                  </div>
                  <p>12 Likes</p>
                </span>
                <span className="comments">
                  <div className="icon">
                    <FaRegCommentDots />
                  </div>
                  <p>16 comments</p>
                </span>
              </div>
              <div className="top-comment">
                <p>Congratsss and yea we will love to hear!</p>
                <span className="light-text"> 50 mins ago</span>
              </div>
              <span className="all-comments">View all comments v</span>
            </div>
          </div>
          <div className="card feed">
            <div className="post-profile">M</div>
            <div className="post-content">
              <div className="post-header">
                <div className="post-texts">
                  <h2>Mia</h2>
                  <span className="light-text">2 hours ago</span>
                </div>
                <FaEllipsisV />
              </div>
              <div className="post-qoutes">
                <p>
                  I want to share my journey from 90kgs to 76kgs!! Hope yall
                  will enjoy!
                </p>
              </div>
              <div className="post-reacts">
                <span className="likes">
                  <div className="icon">
                    <FcLikePlaceholder />
                  </div>
                  <p>12 Likes</p>
                </span>
                <span className="comments">
                  <div className="icon">
                    <FaRegCommentDots />
                  </div>
                  <p>10 comments</p>
                </span>
              </div>
              <div className="top-comment">
                <p>Congratsss and yea we will love to hear!</p>
                <span className="light-text"> 50 mins ago</span>
              </div>
              <span className="all-comments">View all comments v</span>
            </div>
          </div>
          <div className="card my-post">
            <div className="post-profile">S</div>
            <span className="light-text">
              Share your progress, thoughts or a little win...
            </span>
            <button className="post-button btn" type="button">
              <FiSend />
              <p>Post</p>
            </button>
          </div>
        </div>

        <div className=" card community-sidebar">
          {/* Your Friends */}
          <div className="friends-card">
            <div className="sidebar-heading">
              <h3>Your Friends</h3>
            </div>

            <div className="friends-list">
              <div className="friend-item">
                <div className="friend-avatar">M</div>
                <p>Mia</p>
              </div>

              <div className="friend-item">
                <div className="friend-avatar">S</div>
                <p>Sana</p>
              </div>

              <div className="friend-item">
                <div className="friend-avatar">R</div>
                <p>Riya</p>
              </div>
            </div>

            <button className="more-friends btn1">+ 2 more friends v</button>
          </div>

          {/* Suggested Mates */}
          <div className="suggested-card">
            <div className="sidebar-heading">
              <h3>✨ Suggested Mates</h3>
            </div>

            <p className="suggested-subtitle">Find people to connect with ♡</p>

            <div className="suggested-list">
              <div className="suggested-item">
                <div className="suggested-avatar">🌷</div>

                <div className="suggested-info">
                  <h4>Aditi</h4>
                </div>

                <button className="connect-btn btn">Connect</button>
              </div>

              <div className="suggested-item">
                <div className="suggested-avatar">🐱</div>

                <div className="suggested-info">
                  <h4>Ananya</h4>
                </div>

                <button className="connect-btn btn">Connect</button>
              </div>

              <div className="suggested-item">
                <div className="suggested-avatar">🎀</div>

                <div className="suggested-info">
                  <h4>Diya</h4>
                </div>

                <button className="connect-btn btn">Connect</button>
              </div>
            </div>

            <div className="explore-mates">
              <a href="#" className="btn1">
                Explore more mates →
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
