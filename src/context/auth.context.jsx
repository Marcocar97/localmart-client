import service from "../../service/service.config";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(); // Hook personalizado para usar el contexto AuthContext

function AuthWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUserId, setLoggedUserId] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [userType, setUserType] = useState(null);
  const authenticateUser = async () => {
    
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      setIsLoggedIn(false);
      setLoggedUserId(null);
      setIsAuthenticating(false);
      setUserType(null);
      return;
    }
    try {
      const response = await service.get("/auth/verify", {
        headers: { authorization: `Bearer ${authToken}` },
      });
      setIsLoggedIn(true);
      setLoggedUserId(response.data._id);
      setIsAuthenticating(false);
      setUserType(response.data.userType);
    } catch (error) {
      console.log(error);
      setIsLoggedIn(false);
      setLoggedUserId(null);
      setIsAuthenticating(false);
      setUserType(null);
    }
  };
  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setLoggedUserId(null);
    setUserType(null);
  };
  const passedContext = {
    isLoggedIn,
    loggedUserId,
    authenticateUser,
    logout,
    userType,
  };
  useEffect(() => {
    authenticateUser();
  }, []);
  if (isAuthenticating) {
    return <h3>... validando credenciales</h3>;
  }
  return (
    <AuthContext.Provider value={passedContext}>
      {" "}
      {props.children}{" "}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthWrapper };
