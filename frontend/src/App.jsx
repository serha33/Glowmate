import Landing from "./pages/Landing.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Streaks from "./pages/Streaks.jsx";
import Habits from "./pages/Habits.jsx";
import Challenges from "./pages/Challenges.jsx";
import Community from "./pages/Community.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/streaks" element={<Streaks />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
