import "./SignUp.css";
export default function SignUp() {
  return (
    <div>
      <form>
        <label className="signup-form">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </label>
      </form>
    </div>
  );
}
