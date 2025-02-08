  "use client";
  import { getUserInfo } from "@/helpers/getUserInfo";
  import Link from "next/link";
  import { IoIosArrowBack } from "react-icons/io";
  import { BiSolidError } from "react-icons/bi";
  import { useEffect, useState } from "react";
  import { IUser } from "@/interfaces/IUser";
  import { getHealthsheetById } from "@/helpers/getHealthsheetById";
  import { IHealthsheet } from "@/interfaces/IHealthsheet";
  import { MdHealthAndSafety, MdEdit } from "react-icons/md";
  import { IoMdPaper } from "react-icons/io";
  import axios from "axios";
  import { IRoutinesUser } from "@/interfaces/IRoutinesUser";
import { useAuth } from "@/context/AuthContext";

  export default function User({ params }: { params: { slug: string } }) {
    const [userData, setUserData] = useState<IUser | null>(null);
    const [healthsheet, setHealthsheet] = useState<IHealthsheet | null>(null);
    const [loading, setLoading] = useState(true);
    const [routine, setRoutine] = useState<IRoutinesUser | null>(null);
    const {user} = useAuth();
    useEffect(() => {
      const { slug } = params;
      const userId = slug;
      const token = localStorage.getItem("token");
      setLoading(false);
      const fetchUser = async () => {
        const fetchedUser = await getUserInfo(userId);
        setUserData(fetchedUser);
      };
      const fetchHealthsheet = async () => {
        try {
          const fetchedHealthsheet = await getHealthsheetById(userId);
          setHealthsheet(fetchedHealthsheet);
        } catch {
          setHealthsheet(null);
        }
      };
      const fetchUserRoutine = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/routines/${userId}`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          console.log(response.data);
          setRoutine(response.data);
        } catch {
          setRoutine(null);
        }
      };

      fetchUser();
      fetchHealthsheet();
      fetchUserRoutine();
    }, [params]);

    let rol = "";
    if (userData?.id_rol === 1) {
      rol = "Administrador";
    } else if (userData?.id_rol === 2) {
      rol = "Entrenador";
    } else if (userData?.id_rol === 3) {
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
          <div className="w-full flex items-center justify-between p-4 bg-gray-50 border-b-[1px] border-gray-200">
            <div className="w-1/3"></div>

            <h1 className="text-xl font-bold text-center w-1/3">
              {userData.name}
            </h1>

            <div className="w-3/12 flex justify-between items-center">
              {healthsheet?.urlSheet &&
              typeof healthsheet.urlSheet === "string" ? (
                <Link
                  href={healthsheet.urlSheet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-center text-gray-400 hover:text-blue-500 cursor-pointer"
                >
                <div className="flex flex-col justify-center items-center">
                  Ficha Médica <MdHealthAndSafety
                    size={24}
                    className="text-gray-400 hover:text-blue-500 cursor-pointer"
                  />
                </div>
                </Link>
              ) : (
                <div className="text-xs text-center text-gray-400 italic">
                  Ficha médica <br />no disponible
                </div>
              )}
               {routine?.url_routine && typeof routine.url_routine === "string" ? (
              <Link
                href={typeof routine?.url_routine === "string" ? routine.url_routine : "/default-routine-url"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-center text-gray-400 hover:text-blue-500 cursor-pointer"
              >
                <div className="flex flex-col justify-center items-center">

                Rutina <IoMdPaper size={24} className="text-gray-400 hover:text-blue-500 cursor-pointer" />
                </div>
              </Link>
              ) : (
                <div className="text-xs text-center text-gray-400 italic">
                  Rutina <br />no disponible
                </div>
              )}
              {user?.id_rol === 1 ? (
              <Link href={`/users/edit-user/${userData.id_user}`}
              className="text-xs text-center text-gray-400 hover:text-blue-500 cursor-pointer">
              <div className="flex flex-col justify-center items-center">

                Editar <MdEdit
                  size={22}
                  className="text-gray-400 hover:text-blue-500 cursor-pointer"
                  />
                  </div>
              </Link>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <div className="text-xs text-center text-gray-400 italic">

                Editar <br/>no disponible
                  </div>
                  </div>
              )}
              </div>
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
                        userData.isActive
                          ? "text-green-500 font-bold"
                          : "text-red-500 font-bold"
                      }
                    >
                      {userData.isActive ? "Activo" : "Inactivo"}
                    </span>
                  ),
                },
                { label: "Teléfono", value: userData.phone },
                { label: "Email", value: userData.email },
                { label: "Rol", value: rol },
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
                {
                  label: "Dirección",
                  value: userData?.address || "No especificado",
                },
                {
                  label: "Fecha de Alta",
                  value: userData.entry_date,
                },
              ].map(({ label, value }, index) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                  <h1 className="font-bold">{label}:</h1>
                  <p>
                    {value instanceof Date ? value.toLocaleDateString() : value}
                  </p>
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
