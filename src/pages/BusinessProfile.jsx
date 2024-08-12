import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../service/service.config";
import { AuthContext } from "../context/auth.context";

function BusinessProfilePage() {

  const [businessName, setBusinessName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [logo, setLogo] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");


  const navigate = useNavigate();

  const {logout} = useContext(AuthContext)

  useEffect(() => {
    const businessProfile = async () => {
      try {
        const response = await service.get("/auth/business-profile");
        const business = response.data;
        setBusinessName(business.businessName);
        setDescription(business.description);
        setCategory(business.category);
        setLocation(business.location);
        setLogo(business.logo);
        setEmail(business.email);
      } catch (error) {
        console.error("Error fetching business data", error);
        setError("Failed to fetch business data");
      }
    };
    businessProfile();
  }, []);
  
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await service.put("/auth/business-profile", {
        businessName,
        description,
        category,
        location,
        logo,
        email,
      });
      alert("Business profile updated successfully!");
      navigate("/my-offers")
    } catch (error) {
      console.error("Error updating business profile", error);
      setError("Failed to update business profile");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await service.delete("/auth/business-profile");
        alert("Business account deleted successfully!");

       
        logout();


        navigate("/");
      } catch (error) {
        console.error("Error deleting business account", error);
        setError("Failed to delete business account");
      }
    }
  };
  
  return (
    <div className="business-profile-page">
       
      <h1>Edit Business Profile</h1> 
      <form onSubmit={handleUpdate}>
         
        <label>
           
          Business Name: 
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
          /> 
        </label> 
        <label>
           
          Description: 
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          /> 
        </label> 
        <label>
           
          Category: 
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          /> 
        </label> 
        <label>
           
          Location: 
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          /> 
        </label> 
        <label>
           
          Logo URL: 
          <input
            type="text"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          /> 
        </label> 
        <label>
           
          Email: 
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /> 
        </label> 
        <button type="submit">Update Profile</button> 
      </form> 
      {error && <p className="error-message">{error}</p>} 
      <button onClick={handleDelete} className="delete-button">
         
        Delete Account 
      </button> 
    </div>
  );
};
export default BusinessProfilePage;
