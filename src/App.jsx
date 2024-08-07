import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/pages/auth/login";
import SignupBusinessPage from "./pages/auth/signupBusiness";
import SignupUserPage from "./pages/auth/signupUsers";
import { useAuth } from "../auth/Private";
import PublicNavbar from "./components/PublicNavbar";
import UserNavbar from "./components/UserNavbar";
import BusinessNavbar from "./components/BusinessNavbar";

const App = () => {

  const { isLoggedIn, userType, isLoading } = useAuth();

  console.log({userType, isLoggedIn, isLoading})

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const mostrarNavbar = () => {
    if (!isLoggedIn) {
      return <PublicNavbar />;
    }
    if (userType === "business") {
      return <BusinessNavbar />;
    } else {
    return <UserNavbar />;}
  };

  return (
    <>
      {mostrarNavbar()}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/user" element={<SignupUserPage />} />
        <Route path="/signup/business" element={<SignupBusinessPage />} />
      </Routes>
    </>
  );
};
export default App;
