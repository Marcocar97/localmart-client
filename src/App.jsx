import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/pages/auth/login";
import SignupBusinessPage from "./pages/auth/signupBusiness";
import SignupUserPage from "./pages/auth/signupUsers";


import Business from "../auth/Business";
import User from "../auth/User";
import Navbar from "./components/Nabvar";
import UserOffers from "./pages/offers";
import CreateOfferPage from "./pages/CreateOffer";
import MyOffersPage from "./pages/MyOffers";
import EditOfferPage from "./pages/EditOfferBusiness";
import BusinessProfilePage from "./pages/BusinessProfile";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfile";
import ReservationsPage from "./pages/Reservation";
import ReservaVerificationPage from "./pages/VerificaRserva";
import FavoritesPage from "./pages/Favoritos";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUs";


const App = () => {
  
  return (
    <>
    
    <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/user" element={<SignupUserPage />} />
        <Route path="/signup/business" element={<SignupBusinessPage />} />
        <Route path="/offers" element={<User> <UserOffers /> </User>} />
        <Route path="/my-profile" element={<User> <UserProfilePage /> </User>} />
        <Route path="/user-reservas" element={<User> <ReservationsPage /> </User>} />
        <Route path="/favorites" element={<User> <FavoritesPage /> </User>} />
        <Route path="/create-offer" element={<Business> <CreateOfferPage /> </Business>} />
        <Route path="/my-offers" element={<Business> <MyOffersPage /> </Business>} />
        <Route path="/edit-offer/:offerId" element={<Business> <EditOfferPage /> </Business>} />
        <Route path="/my-business" element={<Business> <BusinessProfilePage /> </Business>} />
        <Route path="/verificar" element={ <Business> <ReservaVerificationPage /> </Business>} />
      </Routes>

      <Footer />
    </>
  );
};
export default App;
