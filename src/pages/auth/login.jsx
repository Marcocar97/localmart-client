import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../../service/service.config";
import { AuthContext } from "../../context/auth.context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user"); // Agrega userType al estado
  const { authenticateUser } = useContext(AuthContext);
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
        navigate("/my-offers");
      } else {
        navigate("/offers");
      }
    } catch (error) {
      console.error(error); // Maneja errores de inicio de sesión
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <select
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        required
      >
        
        <option value="user">User</option>
        <option value="business">Business</option>
      </select>
      <button type="submit">Login</button>
    </form>
  );
};
export default Login;
