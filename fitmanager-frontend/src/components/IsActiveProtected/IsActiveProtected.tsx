"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toast } from "../Toast/Toast";
import { useAuth } from "@/context/AuthContext";

const IsActiveProtected = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user === undefined) return;

    if (user?.isActive === false) {
      router.replace("/dashboard/user");
      Toast.fire({ icon: "error", title: "Debes tener tu cuenta al día para ver las rutinas." });
    } else {
      setIsLoading(false);
    }
  }, [router, user]);

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

export default IsActiveProtected;
