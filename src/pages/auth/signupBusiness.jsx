import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../../service/service.config";

const SignupBusinessPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [logo, setLogo] = useState("");
  const [ errorMessage, setErrorMessage ] = useState(null)
  
  const navigate = useNavigate();
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await service.post("/auth/signup/business", {
        email,
        password,
        businessName,
        description,
        category,
        location,
        logo,
      });
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
      <h1>Signup Business</h1>{" "}
      <form onSubmit={handleSignup}>
        {" "}
        <label>
          {" "}
          Business Name:{" "}
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
          />{" "}
        </label>{" "}
        <label>
          {" "}
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />{" "}
        </label>{" "}
        <label>
          {" "}
          Category:{" "}
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />{" "}
        </label>{" "}
        <label>
          {" "}
          Location:{" "}
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />{" "}
        </label>{" "}
        <label>
          {" "}
          Logo URL:{" "}
          <input
            type="text"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
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
        <button type="submit">Sign Up</button>

        {errorMessage && <p>{errorMessage}</p>}

      </form>{" "}
    </div>
  );
};
export default SignupBusinessPage;
