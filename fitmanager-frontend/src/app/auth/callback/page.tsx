"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {

      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      const userData = urlParams.get("user");

      if (userData) {
        const parsedUser = JSON.parse(decodeURIComponent(userData));
        console.log("✅ Datos del usuario:", parsedUser);
        
        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(parsedUser)); 

          console.log("✅ Token guardado:", token);
          console.log("✅ Usuario guardado:", parsedUser); 

          router.push("/home"); 
        } else {
          console.error("❌ No se encontró el token");
          router.push("/login");  
        }
      } else {
        console.error("❌ No se encontró información de usuario");
        router.push("/login"); 
      }
    }
  }, [router]);

  return <h2>Procesando autenticación...</h2>;
}
