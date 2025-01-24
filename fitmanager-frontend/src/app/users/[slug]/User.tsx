"use client";
import { getUserInfo } from "@/helpers/getUserInfo";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { BiSolidError } from "react-icons/bi";
import { useEffect, useState } from "react";
import { IFindUserById } from "@/interfaces/IFindUserById";

export default function User({
  params,
}: {
  params: { slug: string };
}) {
  const [userData, setUserData] = useState<IFindUserById | null>(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const { slug } = params;
    const userId = slug;

    const fetchUser = async () => {
      const fetchedUser = await getUserInfo(userId);
      setUserData(fetchedUser);
      setLoading(false);
    };

    fetchUser();
  }, [params]);

  let rol = "";
  if (userData?.rol === 1) {
    rol = "Administrador";
  } else if (userData?.rol === 2) {
    rol = "Entrenador";
  } else if (userData?.rol === 3) {
    rol = "Socio";
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full mt-24">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return userData ? (
    <div className="flex flex-col w-full justify-center items-center mt-24">
      <div className="flex flex-col w-full items-center justify-between">
        <div className="flex w-10/12 justify-start items-start">
          <Link
            className="border-[1px] p-1 border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300 ease"
            href="/dashboard/administration"
          >
            <IoIosArrowBack size={25} />
          </Link>
        </div>
        <div className="flex justify-center items-center w-full">
          <h1 className="text-2xl font-bold mb-6">Información del Usuario</h1>
        </div>
      </div>

      <div className="w-10/12 flex-col border-[1px] border-gray-200 rounded-lg mb-10 shadow-md">
        <div className="w-full flex flex-col p-2 border-b-[1px] border-gray-200 bg-gray-50">
          <h1 className="text-xl font-bold text-center">{userData?.name}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="flex flex-col">
            {[
              { label: "Nombre", value: userData.name },
              {
                label: "Estado",
                value: (
                  <span
                    className={
                      userData.active
                        ? "text-green-500 font-bold"
                        : "text-red-500 font-bold"
                    }
                  >
                    {userData.active ? "Activo" : "Inactivo"}
                  </span>
                ),
              },
              { label: "Teléfono", value: userData.phone },
              { label: "Nivel", value: "A definir" },
              { label: "Email", value: userData.email },
            ].map(({ label, value }, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                <h1 className="font-bold">{label}:</h1>
                <p>{value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {[
              { label: "País", value: userData?.country || "No especificado" },
              { label: "Ciudad", value: userData?.city || "No especificado" },
              { label: "Dirección", value: userData?.address || "No especificado" },
              { label: "Rol", value: rol },
              {
                label: "Fecha de Alta",
                value: userData.entry_date,
              },
            ].map(({ label, value }, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                <h1 className="font-bold">{label}:</h1>
                <p>{value instanceof Date ? value.toLocaleDateString() : value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
    <div className="flex flex-col w-full justify-center items-center mt-24"></div>
    <div className="flex w-10/12 justify-start items-start ml-10">
          <Link
            className="border-[1px] p-1 border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300 ease"
            href="/dashboard/administration"
          >
            <IoIosArrowBack size={25} />
          </Link>
        </div>
    <div className="flex w-4/12 flex-col border-[1px] justify-center items-center mx-auto border-gray-200 rounded-lg mb-10 shadow-md mt-4">
      <div className="flex p-4 font-bold">
        <BiSolidError size={20} />
        <h1 className="ml-2">Usuario no encontrado</h1>
      </div>
    </div>
    </div>

  );
}
