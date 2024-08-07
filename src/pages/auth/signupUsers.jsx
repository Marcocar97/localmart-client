import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../../service/service.config";

const SignupUserPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [ errorMessage, setErrorMessage ] = useState(null)
  
  const navigate = useNavigate();
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await service.post("/auth/signup/user", { email, password, name });
      navigate("/login"); // Redirige al login después del registro exitoso
    } catch (error) {
      console.error(error); // Maneja el error
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      } else {
        // aqui deberiamos hacer un navigate a pagina de error si hay fallo del servidor
      }  
    }
  };
  return (
    <div>
      {" "}
      <h1>Signup User</h1>{" "}
      <form onSubmit={handleSignup}>
        {" "}
        <label>
          {" "}
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />{" "}
        </label>{" "}
        <label>
          {" "}
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />{" "}
        </label>{" "}
        <label>
          {" "}
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />{" "}
        </label>{" "}
        <button type="submit">Sign Up</button>{" "}

        {errorMessage && <p>{errorMessage}</p>}


      </form>{" "}
    </div>
  );
};
export default SignupUserPage;
