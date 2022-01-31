import React, {createContext, useState, useEffect} from 'react'
import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null)
  const { data, isLoading, isError } = useAuthUser("user", auth);

  useEffect(() => {
    setAuthData(data)
  }, [data]);
  

  return (
    <AuthContext.Provider value={[authData, setAuthData]}>
      {children}
    </AuthContext.Provider>
  )
}