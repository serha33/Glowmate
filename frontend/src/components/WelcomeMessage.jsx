export default function WelcomeMessage() {
  return (
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
          You're currently on a <span className="streak-highlight">7-day</span>{" "}
          streak! Keep going, you're doing great!
        </p>
      </section>
    </div>
  );
}
