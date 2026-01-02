import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useApi } from "../hooks/useApi";

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const api = useApi();

  useEffect(() => {
    (async () => {
      if (api.isAuthenticated()) {
        const response = await api.get("/me");
        setUser(response.ok ? response.body : null);
      } else {
        setUser(null);
      }
    })();
  }, [api]);

  const login = async (username, password) => {
    const result = await api.login(username, password);
    if (result === "ok") {
      const response = await api.get("/me");
      setUser(response.ok ? response.body : null);
      return response.ok;
    }
    return result;
  };
  const logout = async () => {
    await api.logout();
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
