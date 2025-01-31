"use client";

import { useAuth } from "@/context/AuthContext";
import { getHealthsheet } from "@/helpers/getHealthsheet";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Healthsheet {
  id_sheet: string;
  urlSheet: string;
  isTemporary: boolean;
}

export default function UserHealthsheet() {
  const [healthsheet, setHealthsheet] = useState<Healthsheet | null>(null); 
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const data = await getHealthsheet(user.id_user);
          setHealthsheet(data); 
          setErrorMessage(null);
        } catch {
          setHealthsheet(null);
          setErrorMessage("Ficha Médica inexistente.");
        }
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Hoja de Salud de Usuario</h1>
      {errorMessage ? (
        <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-red-500">{errorMessage}</p>
        <Link href={"/dashboard/user/healthsheet/create"}
        className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition duration-200">
        Nueva Ficha Médica</Link>
        </div>
      ) : healthsheet ? (
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <p className="font-semibold">Ficha médica de <span className="text-blue-500">{user?.name}</span></p>
          <Link href={healthsheet.urlSheet}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition duration-200">
          Acceder a mi Ficha médica</Link>

        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
