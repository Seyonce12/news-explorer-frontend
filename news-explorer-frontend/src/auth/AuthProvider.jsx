import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const raw = sessionStorage.getItem('newsapp_user');
    if (raw) {
      try { setUser(JSON.parse(raw)); setIsAuthenticated(true); }
      catch(e){ setIsAuthenticated(false); }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const login = useCallback(async (creds) => {
    const mocked = { name: creds.username || 'demo' };
    sessionStorage.setItem('newsapp_user', JSON.stringify(mocked));
    setUser(mocked); setIsAuthenticated(true);
    return mocked;
  }, []);

  const logout = useCallback(async () => {
    sessionStorage.removeItem('newsapp_user');
    setUser(null); setIsAuthenticated(false);
  }, []);

  return <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth(){ return useContext(AuthContext); }
export default AuthProvider;
