"use client";
import UserInfo from "@/components/UserInfo/UserInfo";
import { useAuth } from "@/context/AuthContext";
import { getUsers } from "@/helpers/getUsers";
import { usePrivate } from "@/hooks/usePrivate";
import { IUser } from "@/interfaces/IUser";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Administration() {
  const { isLoading } = useAuth();

  usePrivate()
  
  const [usersData, setUsersData] = useState<IUser[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>(usersData);
  
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsersData(data);
      setFilteredUsers(data); 
    };

    fetchUsers();
  }, []);

  const normalizeText = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.toLowerCase();
    setSearchTerm(searchText);
    filterUsers(searchText, statusFilter);
    setCurrentPage(1);
  };

  const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value;
    setStatusFilter(filter);
    filterUsers(searchTerm, filter);
    setCurrentPage(1);
  };

  const filterUsers = (searchText: string, filter: string) => {
    const filtered = usersData.filter((user) => {
      const normalizedUserName = normalizeText(user.name.toLowerCase());
      const matchesSearch = normalizedUserName.includes(searchText);
      const matchesActivity =
        filter === "all" ||
        (filter === "active" && user.isActive) ||
        (filter === "inactive" && !user.isActive);
      return matchesSearch && matchesActivity;
    });
    setFilteredUsers(filtered);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  return isLoading ? (
  <div>

  </div>
  ) : (
    <div className="flex flex-col w-full justify-center items-center mt-20">
      <div className="flex flex-col md:flex-row w-full gap-4 p-4">
        <div className="w-full md:w-4/12">
          <h1 className="text-xl md:text-2xl font-bold">
            Panel Administración
          </h1>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-6/12 gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="border-[1px] border-gray-200 rounded-full focus:outline-none hover:border-gray-300 focus:border-gray-400 p-2 w-full"
            placeholder="Ingresa un nombre"
          />
          <select
            className="border-[1px] border-gray-200 rounded-full focus:outline-none hover:border-gray-300 focus:border-gray-400 p-2 w-full md:w-auto"
            value={statusFilter}
            onChange={handleStatusFilter}
          >
            <option value="all" disabled>
              Filtrar
            </option>
            <option value="all">Todos los usuarios</option>
            <option value="active">Activos</option>
            <option value="inactive">Inactivos</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-4 p-4">
        <div className="w-full md:w-2/12 max-h-fit flex flex-col border-[1px] border-gray-200 rounded-lg">
          <Link href="/administration">
            <div className="flex flex-col w-full gap-4 justify-center items-center border-b-[1px] p-4 bg-gray-100 transition duration-300 ease cursor-pointer">
              <h1 className="text-base md:text-lg">Usuarios</h1>
            </div>
          </Link>
          <Link href="/administration">
            <div className="flex flex-col w-full gap-4 justify-center items-center border-b-[1px] p-4 hover:bg-gray-100 transition duration-300 ease cursor-pointer">
              <h1 className="text-base md:text-lg">Entrenadores</h1>
            </div>
          </Link>
          <Link href="/administration">
            <div className="flex flex-col w-full gap-4 justify-center items-center border-b-[1px] p-4 hover:bg-gray-100 transition duration-300 ease cursor-pointer">
              <h1 className="text-base md:text-lg">Administradores</h1>
            </div>
          </Link>
          <Link href="/administration">
            <div className="flex flex-col w-full gap-4 justify-center items-center border-b-[1px] p-4 hover:bg-gray-100 transition duration-300 ease cursor-pointer">
              <h1 className="text-base md:text-lg">Métricas</h1>
            </div>
          </Link>
        </div>

        <div className="w-full md:w-10/12 flex flex-col items-center border-[1px] border-gray-200 rounded-lg">
          <div className="grid grid-cols-4 w-full text-center bg-gray-100 border-gray-200 border-b-[1px] py-2">
            <div className="font-semibold">Nombre</div>
            <div className="font-semibold">Email</div>
            <div className="font-semibold">Estado de la Cuenta</div>
            <div className="font-semibold"></div>
          </div>
          <div className="w-full flex flex-col items-center border-gray-200">
            {currentUsers.map((user) => (
              <UserInfo
                key={user.id_user}
                id={user.id_user}
                email={user.email}
                name={user.name}
                active={user.isActive}
              />
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4 mb-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-gray-300"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
