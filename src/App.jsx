import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/pages/auth/login";
import SignupBusinessPage from "./pages/auth/signupBusiness";
import SignupUserPage from "./pages/auth/signupUsers";


import Business from "../auth/Business";
import User from "../auth/User";
import Navbar from "./components/Nabvar";
import UserOffers from "./pages/offers";


const App = () => {
  
  return (
    <>
    
    <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/user" element={<SignupUserPage />} />
        <Route path="/signup/business" element={<SignupBusinessPage />} />
        <Route path="/offers" element={<User> <UserOffers /> </User>} />
      </Routes>
    </>
  );
};
export default App;
