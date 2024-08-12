import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../service/service.config";
import { AuthContext } from "../context/auth.context";

function UserProfilePage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const userProfile = async () => {
      try {
        const response = await service.get("/auth/user-profile");
        const user = response.data;
        setName(user.name);
        setEmail(user.email);
      } catch (error) {
        console.error("Error user data", error);
        setError("Failed user data");
      }
    };
    userProfile();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await service.put("/auth/user-profile", {
        name,
        email,
      });
      alert("User profile updated successfully!");
      navigate("/offers");
    } catch (error) {
      console.error("Error updating user profile", error);
      setError("Failed to update user profile");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await service.delete("/auth/user-profile");
        alert("User account deleted successfully!");

        logout(); 

        navigate("/"); 
      } catch (error) {
        console.error("Error deleting user account", error);
        setError("Failed to delete user account");
      }
    }
  };

  return (
    <div className="user-profile-page">
      <h1>Edit User Profile</h1>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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

export default UserProfilePage;