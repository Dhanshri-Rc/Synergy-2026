import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { authAPI } from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore session on refresh using the stored JWT
  useEffect(() => {
    const token = localStorage.getItem("ideaxToken");
    const cachedUser = localStorage.getItem("ideaxUser");

    if (!token) {
      setLoading(false);
      return;
    }

    // Show cached user immediately to avoid a flash of "logged out" UI,
    // then verify/refresh against the server.
    if (cachedUser) {
      try {
        setUser(JSON.parse(cachedUser));
      } catch {
        // ignore malformed cache
      }
    }

    authAPI
      .me()
      .then(({ data }) => {
        setUser(data.user);
        localStorage.setItem("ideaxUser", JSON.stringify(data.user));
      })
      .catch(() => {
        localStorage.removeItem("ideaxToken");
        localStorage.removeItem("ideaxUser");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = useCallback((token, userData) => {
    localStorage.setItem("ideaxToken", token);
    localStorage.setItem("ideaxUser", JSON.stringify(userData));
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("ideaxToken");
    localStorage.removeItem("ideaxUser");
    setUser(null);
  }, []);

  const updateUser = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem("ideaxUser", JSON.stringify(userData));
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, updateUser, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
