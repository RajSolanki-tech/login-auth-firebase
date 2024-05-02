import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home";
import Profile from "./assets/components/Profile";
import SignIn from "./assets/components/SignIn";
import SignUp from "./assets/components/SignUp";
import ForgotPassword from "./assets/components/ForgotPassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
