import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../src/context/auth.context";

function User(props) {
  const { userType, isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn && userType === "user") {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
export default User;
