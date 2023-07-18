import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Forgot from "./pages/auth/Forgot";
import Verification from "./pages/auth/Verification";
import Reset from "./pages/auth/Reset";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      {/* <Route exact path="/" element={<Home />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
