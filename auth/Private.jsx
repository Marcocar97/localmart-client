import React, { createContext, useState, useEffect, useContext } from "react";
import service from "../service/service.config";

const AuthContext = createContext();

const AuthWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);


  const authenticateUser = async () => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      try {
        const response = await service.get("/auth/verify", {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setIsLoggedIn(true);
        setUser(response.data.user);
        setUserType(response.data.userType); 
      } catch (error) {
        setIsLoggedIn(false);
        setUser(null);
        setUserType(null);
      }
    } else {
      setIsLoggedIn(false);
      setUser(null);
      setUserType(null);
    }
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setUser(null);
    setUserType(null);
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, user, userType, authenticateUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);

export { AuthWrapper, useAuth };
