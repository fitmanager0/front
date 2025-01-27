"use client";
import Link from "next/link";
import { BiSolidError, BiEdit } from "react-icons/bi";
import { useAuth } from "@/context/AuthContext";

export default function UserData() {
  const { user } = useAuth();

  let rol = "";
  if (user?.id_rol === 1) {
    rol = "Administrador";
  } else if (user?.id_rol === 2) {
    rol = "Entrenador";
  } else if (user?.id_rol === 3) {
    rol = "Socio";
  }

  return user ? (
    <div className="flex flex-col w-full justify-center items-center mb-2">
      <div className="w-full flex items-center justify-between p-4 bg-gray-50 border-b-[1px] border-gray-200">
        <div className="w-1/3"></div>

        <h1 className="text-xl font-bold text-center w-1/3">{user?.name}</h1>

        <div className="w-1/3 flex justify-end">
          <Link href="/dashboard/user/data/updatedata">
            <BiEdit size={24} className="text-gray-500 hover:text-cyan-400 cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="w-full flex-col rounded-lg mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="flex flex-col">
            {[
              { label: "Nombre", value: user.name },
              {
                label: "Estado",
                value: (
                  <span
                    className={
                      user.isActive
                        ? "text-green-500 font-bold"
                        : "text-red-500 font-bold"
                    }
                  >
                    {user.isActive ? "Activo" : "Inactivo"}
                  </span>
                ),
              },
              { label: "Teléfono", value: user.phone },
              { label: "Nivel", value: "A definir" },
              { label: "Email", value: user.email },
            ].map(({ label, value }, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_2fr] md:grid-cols-2 gap-4"
              >
                <h1 className="font-bold">{label}:</h1>
                <p>{value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {[
              { label: "País", value: user?.country || "No especificado" },
              { label: "Ciudad", value: user?.city || "No especificado" },
              { label: "Dirección", value: user?.address || "No especificado" },
              { label: "Rol", value: rol },
              {
                label: "Fecha de Alta",
                value: user.entry_date,
              },
            ].map(({ label, value }, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_2fr] md:grid-cols-2 gap-4"
              >
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
      <div className="flex w-4/12 flex-col border-[1px] justify-center items-center mx-auto border-gray-200 rounded-lg mb-10 shadow-md mt-4">
        <div className="flex p-4 font-bold">
          <BiSolidError size={20} />
          <h1 className="ml-2">Usuario no encontrado</h1>
        </div>
      </div>
    </div>
  );
}
