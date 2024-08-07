import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth/Private";
import service from "../../../service/service.config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user"); // Agrega userType al estado
  const { authenticateUser } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await service.post("/auth/login", {
        email,
        password,
        userType,
      });
      localStorage.setItem("authToken", response.data.authToken);
      await authenticateUser();
      if (userType === "business") {
        navigate("/published-offers");
      } else {
        navigate("/all-offers");
      }
    } catch (error) {
      console.error(error); // Maneja errores de inicio de sesión
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />{" "}
      <select
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        required
      >
        {" "}
        <option value="user">User</option>{" "}
        <option value="business">Business</option>{" "}
      </select>{" "}
      <button type="submit">Login</button>{" "}
    </form>
  );
};
export default Login;
