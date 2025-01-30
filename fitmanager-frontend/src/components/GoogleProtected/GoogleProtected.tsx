"use client";

import { useEffect, useState } from "react";
import { IUser } from "@/interfaces/IUser";
import { useRouter } from "next/navigation";
import { Toast } from "../Toast/Toast";

const GoogleProtected = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const user: IUser | null = storedUser ? JSON.parse(storedUser) : null;

    if (user?.birthdate === null || user?.phone === "" || user?.address === "" || user?.city === "" || user?.country === "") {
      router.replace("/dashboard/user/data/updatedata");
      Toast.fire({ icon: "error", title: "Completa tus datos para continuar" });
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-black border-dashed rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Cargando...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default GoogleProtected;
