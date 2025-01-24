"use client";
import { FaCircleUser } from "react-icons/fa6";
import { TfiPanel } from "react-icons/tfi";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Dashboard() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    return null;
  }
  if (user.id_rol === 3) {
    return (
      <Link href={"/dashboard/user"}>
        <div className="flex justify-center items-center p-1 hover:bg-gray-100  rounded-lg ml-4 mr-4">
          <FaCircleUser size={26} className="transition duration-300 ease" />
        </div>
      </Link>
    );
  }
  if (user.id_rol === 1 || user.id_rol === 2) {
    return (
      <>
        <Link href={"/dasboard/user"}>
          <div className="flex justify-center items-center p-1 hover:bg-gray-100  rounded-lg ml-4 mr-4">
            <FaCircleUser size={26} className="transition duration-300 ease" />
          </div>
        </Link>
        <Link href={"/dashboard/administration"}>
          <div className="flex justify-center items-center p-1 hover:bg-gray-100  rounded-lg mr-4">
            <TfiPanel size={24} className="transition duration-300 ease" />
          </div>
        </Link>
      </>
    );
  }

  return null; // Si el usuario no cumple las condiciones, no renderiza nada.
}
