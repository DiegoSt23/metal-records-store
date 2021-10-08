import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => { 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
 
  const contextValue = {
    user,
    addUserName(value) {
      setUser(value.toUpperCase())
    } 
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  )
};

export default UserProvider
