"use client";

import { Toast } from "@/components/Toast/Toast";
import { ILogin } from "@/interfaces/ILogin";
import { IUser } from "@/interfaces/IUser";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: IUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: ILogin) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser))
        setToken(storedToken)
        setIsAuthenticated(true)
    } else {
        setUser(null)
        setToken(null)
        setIsAuthenticated(false)
    }
    setIsLoading(false);
}, []);

  const login = async (credentials: ILogin) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signin",
        credentials
      );
      const { user, token } = response.data;
      setUser(user);
      setToken(token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      router.push("/home");
      Toast.fire({ icon: "success", title: "Login exitoso." });
    } catch {
      Toast.fire({ icon: "error", title: "Usuario o contraseña incorrecta" });
    }
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsAuthenticated(false)
  };
  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
