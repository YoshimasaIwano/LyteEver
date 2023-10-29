import { createContext, useContext } from "react";

interface AuthContextProps {
  user: string | null; // Define a suitable user type if needed
  setUser: (user: string) => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
export const useAuthContext = () => {
  return useContext(AuthContext);
};