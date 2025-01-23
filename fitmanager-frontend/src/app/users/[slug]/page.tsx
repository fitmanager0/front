import { getUserInfo } from "@/helpers/getUserInfo";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { BiSolidError } from "react-icons/bi";

export default async function User({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const { slug } = await params;
  const userId = Number(slug);

  const userData = getUserInfo(userId);

  return userData ? (
    <div className="flex flex-col w-full justify-center items-center mt-24">
      {/* Header */}
      <div className="flex flex-col w-full items-center justify-between">
        <div className="flex w-10/12 justify-start items-start">
          <Link
            className="border-[1px] p-1 border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300 ease"
            href="/administration"
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
          <h1 className="text-xl font-bold text-center">{userData.name}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="flex flex-col">
            {[
              { label: "ID", value: userData.id },
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
              { label: "País", value: userData.country },
              { label: "Ciudad", value: userData.city },
              { label: "Dirección", value: userData.address },
              { label: "Rol", value: userData.rol },
              {
                label: "Fecha de Alta",
                value: userData.entry_date.toLocaleDateString(),
              },
            ].map(({ label, value }, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                <h1 className="font-bold">{label}:</h1>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex w-4/12 flex-col border-[1px] justify-center items-center mx-auto border-gray-200 rounded-lg mb-10 shadow-md mt-20">
      <div className="flex p-4 font-bold">
        <BiSolidError size={20} />
        <h1 className="ml-2">Usuario no encontrado</h1>
      </div>
    </div>
  );
}
