import { useState, useEffect, createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../base'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    app
    getAuth().onAuthStateChanged(setUser);
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}