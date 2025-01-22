import { getUserInfo } from "@/helpers/getUserInfo";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

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
        <div className="flex flex-col w-full items-center justify-between">
        <div className="flex w-10/12 justify-start items-start">
            <Link  className="border-[1px] p-1 border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300 ease" href="/administration">
            <IoIosArrowBack size={25} />
            </Link>
        </div>
        <div className="flex justify-center items-center w-full">
            <h1 className="text-2xl font-bold mb-6">Información del Usuario</h1>
        </div>
        </div>

      <div className="w-10/12 flex-col border-[1px] border-gray-200 rounded-lg mb-10 shadow-md">
        <div className="w-full flex flex-col p-2 border-b-[1px] border-gray-200 bg-gray-50">
          <h1 className="text-xl font-bold text-center ">{userData.name}</h1>
          </div >
          <div className="flex w-full justify-center items-center p-4">
          <div className="flex flex-col w-full md:w-6/12">
            <ul>
              <li className="flex">
                <h1 className="font-bold">ID:</h1>
              </li>
              <li className="flex">
                <h1 className="font-bold">Nombre:</h1>
              </li>
              <li className="flex">
                <h1 className="font-bold">Estado:</h1>
              </li>
              <li className="flex">
                <h1 className="font-bold">Teléfono:</h1>
              </li>
              <li className="flex">
                <h1 className="font-bold">Nivel:</h1>
              </li>
              <li className="flex">
                <h1 className="font-bold">Email:</h1>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full md:w-6/12">
            <ul>
              <li className="flex">
                <p>{userData.id}</p>
              </li>
              <li className="flex">
                <p>{userData.name}</p>
              </li>
              <li className="flex">
                <p className={userData.isActive ? "text-green-500 font-bold" 
                : "text-red-500 font-bold"}
                >{userData.isActive ? "Activo" : "Inactivo"}</p>
              </li>
              <li className="flex">
                <p>{userData.phone}</p>
              </li>
              <li className="flex">
                <p>A definir</p>
              </li>
              <li className="flex">
                <p>{userData.email}</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full md:w-6/12">
            <ul>
              <li className="flex">
                <h1 className="font-bold">País:</h1>
              </li>
              <li className="flex">
                <h1 className="font-bold">Ciudad:</h1>
              </li>
              <li className="flex">
                <h1 className="font-bold">Dirección:</h1>
              </li>
              <li className="flex">
                <h1 className="font-bold">Rol:</h1>
              </li>
              <li className="flex">
                <h1 className="font-bold">Fecha de Alta:</h1>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full md:w-6/12">
            <ul>
              <li className="flex">
                <p>{userData.country}</p>
              </li>
              <li className="flex">
                <p>{userData.city}</p>
              </li>
              <li className="flex">
                <p>{userData.address}</p>
              </li>
              <li className="flex">
                <p>{userData.rol}</p>
              </li>
              <li className="flex">
                <p>{userData.entry_date.toLocaleDateString()}</p>
              </li>
            </ul>
        </div>
        </div>

      </div>
    </div>
  ) : (
    <div>Usuario no Encontrado</div>
  );
}
