import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import UserCard from "./components/UserCard";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<UserCard name={user?.name} email={user?.email} />}
        />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
      </Routes>
    </div>
  );
};

export default App;
